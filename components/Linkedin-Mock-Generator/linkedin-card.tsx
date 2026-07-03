"use client";

import { Linkedindata } from "@/lib/types";
import { ThumbsUp, MessageSquare, Repeat2, Send, MoreHorizontal, Globe, BadgeCheck } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LinkedinCardProps {
  data: Linkedindata;
}

export function LinkedinCard({ data }: LinkedinCardProps) {
  const { user, content, stats, theme, reactionTypes } = data;

  const themeClasses = {
    light: "bg-white text-zinc-900 border-gray-200",
    dark: "bg-[#1b1f23] text-[#f3f6f8] border-zinc-800",
  };

  const secondaryText = {
    light: "text-zinc-500",
    dark: "text-zinc-400",
  };

  const border = {
    light: "border-zinc-200/80",
    dark: "border-zinc-800/80",
  };

  const buttonHover = {
    light: "hover:bg-zinc-100",
    dark: "hover:bg-zinc-800/60",
  };

  return (
    <div
      className={cn(
        "w-full max-w-[550px] rounded-xl border shadow-sm transition-colors duration-200 flex flex-col font-sans",
        themeClasses[theme]
      )}
      id="linkedin-card"
    >
      {/* Top Section / User Details */}
      <div className="p-4 flex items-start gap-3">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-zinc-200 dark:bg-zinc-800 shrink-0">
          {user.avatar ? (
            <Image
              src={user.avatar}
              alt={user.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-zinc-400 dark:bg-zinc-700 text-white font-bold text-lg">
              {user.name[0]}
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0 text-left">
          <div className="flex items-center gap-1 flex-wrap">
            <span className="font-semibold text-[15px] leading-snug hover:underline hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer truncate">
              {user.name}
            </span>
            {user.isVerified && (
              <BadgeCheck className="w-4 h-4 text-blue-600 fill-blue-600 dark:text-blue-400 dark:fill-blue-400 text-white shrink-0" />
            )}
            <span className={cn("text-[13px]", secondaryText[theme])}>
              • {user.connectionDegree}
            </span>
          </div>
          <p className={cn("text-xs leading-normal truncate pr-4 mt-0.5", secondaryText[theme])}>
            {user.headline}
          </p>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className={cn("text-[11px]", secondaryText[theme])}>
              {content.timeSincePost}
            </span>
            <span className={cn("text-[11px]", secondaryText[theme])}>•</span>
            <Globe className={cn("w-3.5 h-3.5", secondaryText[theme])} />
          </div>
        </div>
        <button className={cn("p-1.5 rounded-full hover:bg-zinc-500/10 shrink-0", secondaryText[theme])}>
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Post content */}
      <div className="px-4 pb-3 text-sm leading-relaxed whitespace-pre-wrap break-words text-left">
        {content.text}
      </div>

      {/* Optional Post Image */}
      {content.image && (
        <div className="relative w-full overflow-hidden border-t border-b border-opacity-10 min-h-[250px] max-h-[400px] bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center">
          <img
            src={content.image}
            alt="LinkedIn Post Image"
            className="w-full h-auto max-h-[400px] object-contain"
          />
        </div>
      )}

      {/* Stats Section */}
      <div className={cn("px-4 py-2.5 flex items-center justify-between text-xs border-b", border[theme], secondaryText[theme])}>
        {/* Reactions icons and count */}
        <div className="flex items-center gap-1">
          <div className="flex -space-x-1 items-center mr-1">
            {reactionTypes.like && (
              <div className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center text-white ring-1 ring-white dark:ring-[#1b1f23]">
                <ThumbsUp className="w-2.5 h-2.5 fill-white" />
              </div>
            )}
            {reactionTypes.celebrate && (
              <div className="w-4 h-4 rounded-full bg-green-600 flex items-center justify-center text-white ring-1 ring-white dark:ring-[#1b1f23] text-[8px] font-bold">
                👏
              </div>
            )}
            {reactionTypes.love && (
              <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-white ring-1 ring-white dark:ring-[#1b1f23] text-[8px] font-bold">
                ❤️
              </div>
            )}
            {reactionTypes.insightful && (
              <div className="w-4 h-4 rounded-full bg-amber-500 flex items-center justify-center text-white ring-1 ring-white dark:ring-[#1b1f23] text-[8px] font-bold">
                💡
              </div>
            )}
            {reactionTypes.curious && (
              <div className="w-4 h-4 rounded-full bg-teal-500 flex items-center justify-center text-white ring-1 ring-white dark:ring-[#1b1f23] text-[8px] font-bold">
                🤔
              </div>
            )}
          </div>
          <span>{stats.reactions.toLocaleString()}</span>
        </div>

        {/* Comment and Repost Metrics */}
        <div className="flex items-center gap-2">
          {stats.comments > 0 && (
            <span className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
              {stats.comments} {stats.comments === 1 ? "comment" : "comments"}
            </span>
          )}
          {stats.comments > 0 && stats.reposts > 0 && <span>•</span>}
          {stats.reposts > 0 && (
            <span className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
              {stats.reposts} {stats.reposts === 1 ? "repost" : "reposts"}
            </span>
          )}
        </div>
      </div>

      {/* Interaction buttons */}
      <div className="px-2 py-1 flex items-center justify-between">
        <button className={cn("flex-1 py-3 flex items-center justify-center gap-2 rounded-lg text-xs font-semibold transition-colors", buttonHover[theme], secondaryText[theme])}>
          <ThumbsUp className="w-4.5 h-4.5" />
          <span>Like</span>
        </button>
        <button className={cn("flex-1 py-3 flex items-center justify-center gap-2 rounded-lg text-xs font-semibold transition-colors", buttonHover[theme], secondaryText[theme])}>
          <MessageSquare className="w-4.5 h-4.5" />
          <span>Comment</span>
        </button>
        <button className={cn("flex-1 py-3 flex items-center justify-center gap-2 rounded-lg text-xs font-semibold transition-colors", buttonHover[theme], secondaryText[theme])}>
          <Repeat2 className="w-4.5 h-4.5" />
          <span>Repost</span>
        </button>
        <button className={cn("flex-1 py-3 flex items-center justify-center gap-2 rounded-lg text-xs font-semibold transition-colors", buttonHover[theme], secondaryText[theme])}>
          <Send className="w-4.5 h-4.5" />
          <span>Send</span>
        </button>
      </div>
    </div>
  );
}
