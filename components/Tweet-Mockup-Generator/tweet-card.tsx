import { Tweetdata } from "@/lib/types";
import {
  BadgeCheck,
  Heart,
  MessageCircle,
  Repeat2,
  Bookmark,
  Share,
  Equal,
} from "lucide-react";
import Image from "next/image";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface TweetCardProps {
  data: Tweetdata;
}

export function TweetCard({ data }: TweetCardProps) {
  const { user, content, stats, theme } = data;

  // Theme map
  const themeClasses = {
    light: "bg-white text-black",
    dim: "bg-[#15202b] text-white",
    dark: "bg-black text-[#e7e9ea]",
  };

  const secondaryText = {
    light: "text-[#536471]",
    dim: "text-[#8b98a5]",
    dark: "text-[#71767b]",
  };

  const border = {
    light: "border-[#eff3f4]",
    dim: "border-[#38444d]",
    dark: "border-[#2f3336]",
  };

  return (
    <div
      className={cn(
        "w-full max-w-[600px] p-4 rounded-xl shadow-xl transition-colors duration-200",
        themeClasses[theme]
      )}
      id="tweet-card"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-1">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 shrink-0">
          {user.avatar ? (
            <Image
              src={user.avatar}
              alt={user.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-400 text-white font-bold text-xl">
              {user.name[0]}
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1 font-bold leading-tight">
            {user.name}
            {user.isVerified && (
              <BadgeCheck
                className="w-5 h-5 text-[#1d9bf0] fill-[#1d9bf0] text-white"
                fill="currentColor"
              />
            )}
          </div>
          <div
            className={cn("text-[15px] leading-tight", secondaryText[theme])}
          >
            @{user.username}
          </div>
        </div>
        <div className="ml-auto">
          <div
            className={cn(
              "p-2 rounded-full hover:bg-gray-500/10 cursor-pointer",
              secondaryText[theme]
            )}
          >
            <div className="flex gap-0.5">
              <div className="w-1 h-1 rounded-full bg-current"></div>
              <div className="w-1 h-1 rounded-full bg-current"></div>
              <div className="w-1 h-1 rounded-full bg-current"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mt-3 text-[17px] leading-6 whitespace-pre-wrap">
        {content.text}
      </div>

      {content.image && (
        <div className="mt-3 relative w-full rounded-2xl overflow-hidden border border-opacity-20">
          <Image
            src={content.image}
            alt="Tweet Image"
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      {/* Meta */}
      <div
        className={cn(
          "mt-4 flex items-center gap-1 text-[15px] text-[#ffffff]",
          secondaryText[theme]
        )}
      >
        <span>{format(content.date, "h:mm a")}</span>
        <span>·</span>
        <span>{format(content.date, "MMM d, yyyy")}</span>
        <span>·</span>
        <span className="font-medium text-sky-500">{content.source}</span>
      </div>

      <div className={cn("my-4 h-px", border[theme])}></div>

      {/* Stats */}
      <div
        className={cn(
          "flex items-center justify-between gap-6 text-[15px] pb-4 ",
          border[theme]
        )}
      >
        {stats.retweets > 0 && (
          <div className="flex gap-2">
            <Repeat2 className="w-5 h-5 cursor-pointer hover:text-[#00ba7c]" />

            <span className="font-bold">{stats.retweets.toLocaleString()}</span>
            {/* <span className={secondaryText[theme]}>Retweets</span> */}
          </div>
        )}
        {stats.quotes > 0 && (
          <div className="flex gap-2">
            <MessageCircle className="w-5 h-5 cursor-pointer hover:text-[#1d9bf0]" />
            <span className="font-bold">{stats.quotes.toLocaleString()}</span>
          </div>
        )}
        {stats.likes > 0 && (
          <div className="flex gap-2">
            <Heart className="w-5 h-5 cursor-pointer hover:text-[#f91880]" />
            <span className="font-bold">{stats.likes.toLocaleString()}</span>
            {/* <span className={secondaryText[theme]}>Likes</span> */}
          </div>
        )}
        {stats.bookmarks > 0 && (
          <div className="flex gap-2">
            <Bookmark className="w-5 h-5 cursor-pointer hover:text-[#1d9bf0]" />
            <span className="font-bold">
              {stats.bookmarks.toLocaleString()}
            </span>
          </div>
        )}
        {stats.impressions > 0 && (
          <div className="flex gap-2">
            <Share className="w-5 h-5 cursor-pointer hover:text-[#1d9bf0]" />
            <span className="font-bold">
              {stats.impressions.toLocaleString()}
            </span>
          </div>
        )}
      </div>

      {/* Actions */}
      {/* <div className={cn("flex items-center justify-between mt-1 h-12", secondaryText[theme])}>
                <div className="w-full flex items-center justify-between px-2">
                </div>
            </div> */}
    </div>
  );
}
