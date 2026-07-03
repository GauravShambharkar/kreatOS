"use client";

import { Youtubedata } from "@/lib/types";
import { ThumbsUp, Share2, Download as DownloadIcon, MoreHorizontal, BadgeCheck, Play, MessageSquare } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface YoutubeCardProps {
  data: Youtubedata;
}

export function YoutubeCard({ data }: YoutubeCardProps) {
  const { video, channel, theme } = data;

  const themeClasses = {
    light: "bg-white text-[#0f0f0f] border-gray-200",
    dark: "bg-[#0f0f0f] text-[#f1f1f1] border-zinc-800",
  };

  const secondaryText = {
    light: "text-[#606060]",
    dark: "text-[#aaa]",
  };

  const border = {
    light: "border-zinc-200",
    dark: "border-zinc-800",
  };

  const actionBg = {
    light: "bg-[#f2f2f2] hover:bg-[#e5e5e5] text-[#0f0f0f]",
    dark: "bg-[#272727] hover:bg-[#3f3f3f] text-[#f1f1f1]",
  };

  return (
    <div
      className={cn(
        "w-full max-w-[650px] rounded-2xl border shadow-lg overflow-hidden transition-colors duration-200 flex flex-col font-sans",
        themeClasses[theme]
      )}
      id="youtube-card"
    >
      {/* 1. Video Player Placeholder */}
      <div className="relative w-full aspect-video bg-black flex items-center justify-center group cursor-pointer overflow-hidden">
        {video.thumbnail ? (
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-zinc-900/90 flex flex-col items-center justify-center text-zinc-500 gap-2">
            <div className="w-16 h-16 rounded-full bg-[#ff0000] flex items-center justify-center text-white shadow-xl transform group-hover:scale-110 transition-transform duration-300">
              <Play className="w-7 h-7 fill-white translate-x-0.5" />
            </div>
            <span className="text-xs font-light text-zinc-400">Click to upload thumbnail</span>
          </div>
        )}

        {/* Video Duration Badge */}
        <div className="absolute bottom-3 right-3 px-1.5 py-0.5 bg-black/85 rounded text-white text-[11px] font-medium tracking-tight">
          {video.duration || "0:00"}
        </div>
      </div>

      {/* 2. Video Metadata Details */}
      <div className="p-4 flex flex-col gap-3 text-left">
        <h3 className="text-[17px] font-semibold leading-tight tracking-tight line-clamp-2">
          {video.title}
        </h3>

        {/* Views & Date Metadata */}
        <div className={cn("text-xs font-light flex items-center gap-1.5", secondaryText[theme])}>
          <span>{video.views.toLocaleString()} views</span>
          <span>•</span>
          <span>{video.uploadDate}</span>
        </div>

        {/* 3. Channel Info & Interaction Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-1 pb-2">
          {/* Channel Info Left */}
          <div className="flex items-center gap-3">
            <div className="relative w-10.5 h-10.5 rounded-full overflow-hidden bg-zinc-200 dark:bg-zinc-800 shrink-0">
              {channel.avatar ? (
                <Image
                  src={channel.avatar}
                  alt={channel.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#ff0000] text-white font-bold text-base">
                  {channel.name[0]}
                </div>
              )}
            </div>
            <div className="flex flex-col min-w-0 text-left">
              <div className="flex items-center gap-1">
                <span className="font-semibold text-sm hover:underline cursor-pointer truncate">
                  {channel.name}
                </span>
                {channel.isVerified && (
                  <BadgeCheck className="w-4 h-4 text-zinc-500 fill-zinc-500 dark:text-zinc-400 dark:fill-zinc-400 text-white shrink-0" />
                )}
              </div>
              <span className={cn("text-[11px]", secondaryText[theme])}>
                {channel.subscribers} subscribers
              </span>
            </div>

            {/* Subscribe Button */}
            <button className={cn(
              "ml-2.5 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer",
              theme === "light"
                ? "bg-[#0f0f0f] text-white hover:bg-[#272727]"
                : "bg-[#f1f1f1] text-[#0f0f0f] hover:bg-[#d9d9d9]"
            )}>
              Subscribe
            </button>
          </div>

          {/* Action Buttons Right */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Like Counter Button */}
            <div className={cn("flex items-center rounded-full overflow-hidden text-xs", actionBg[theme])}>
              <button className="flex items-center gap-1.5 py-2 px-3 border-r border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                <ThumbsUp className="w-3.5 h-3.5" />
                <span className="font-semibold">{video.likes.toLocaleString()}</span>
              </button>
            </div>

            {/* Share button */}
            <button className={cn("flex items-center gap-1.5 py-2 px-3.5 rounded-full text-xs font-semibold transition-colors", actionBg[theme])}>
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>

            {/* Download button */}
            <button className={cn("flex items-center gap-1.5 py-2 px-3.5 rounded-full text-xs font-semibold transition-colors", actionBg[theme])}>
              <DownloadIcon className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>
          </div>
        </div>

        {/* 4. Comments Block Preview */}
        <div className={cn("mt-2 border-t pt-3 flex flex-col gap-2.5", border[theme])}>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">Comments</span>
            <span className={cn("text-xs font-light", secondaryText[theme])}>
              {video.comments.toLocaleString()}
            </span>
          </div>

          {/* Sample Top Comment Grid */}
          <div className="flex items-start gap-2.5 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
            <div className="w-7 h-7 rounded-full bg-zinc-300 dark:bg-zinc-700 text-xs flex items-center justify-center font-bold text-white uppercase flex-shrink-0">
              U
            </div>
            <div className="flex flex-col text-xs leading-normal">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold">UserTest</span>
                <span className={cn("text-[10px] font-light", secondaryText[theme])}>2 hours ago</span>
              </div>
              <p className="mt-1 font-light tracking-tight text-left">
                This course is absolutely fantastic! The explanations are so clear and easy to follow. Thanks for making this!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
