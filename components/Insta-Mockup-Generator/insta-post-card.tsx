"use client";

import React from "react";
import { Instadata } from "@/lib/types";
import { cn } from "@/lib/utils";
import {
    Heart,
    MessageCircle,
    Send,
    Bookmark,
    MoreHorizontal,
    BadgeCheck,
    Repeat2,
} from "lucide-react";
import { format } from "date-fns";

interface InstaPostCardProps {
    data: Instadata;
}

export const InstaPostCard = ({ data }: InstaPostCardProps) => {
    const isDark = data.theme === "dark";

    const formatter = new Intl.NumberFormat('en-US', {
        notation: 'compact',
        maximumFractionDigits: 1
    });

    return (
        <div
            id="insta-post-card"
            className={cn(
                "w-full max-w-[470px] rounded-xl overflow-hidden border transition-colors duration-300 shadow-xl",
                isDark
                    ? "bg-black border-zinc-800 text-white"
                    : "bg-white border-gray-200 text-black"
            )}
        >
            {/* Header */}
            <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="w-8 h-8 rounded-full bg-linear-to-tr from-yellow-400 via-red-500 to-purple-600 p-[1.5px]">
                            <div className={cn(
                                "w-full h-full rounded-full border-2 overflow-hidden bg-zinc-200",
                                isDark ? "border-black" : "border-white"
                            )}>
                                {data.user.avatar ? (
                                    <img
                                        src={data.user.avatar}
                                        alt={data.user.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gray-400 text-white text-[10px]">
                                        {data.user.name.charAt(0)}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center gap-1">
                            <span className="text-sm font-semibold leading-tight">
                                {data.user.username}
                            </span>
                            {data.user.isVerified && (
                                <BadgeCheck className="w-4 h-4 text-blue-500 fill-current" />
                            )}
                        </div>
                        {data.content.location && (
                            <span className="text-[11px] leading-tight text-gray-500">
                                {data.content.location}
                            </span>
                        )}
                    </div>
                </div>
                <button className="p-1 hover:opacity-60">
                    <MoreHorizontal className="w-5 h-5" />
                </button>
            </div>

            {/* Post Image */}
            <div className={cn(
                "aspect-square w-full relative flex items-center justify-center overflow-hidden",
                isDark ? "bg-zinc-900" : "bg-gray-100"
            )}>
                {data.content.image ? (
                    <img
                        src={data.content.image}
                        alt="Instagram post content"
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="flex flex-col items-center gap-2 text-gray-400">
                        <div className="w-12 h-12 rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center">
                            +
                        </div>
                        <span className="text-xs">Post Image</span>
                    </div>
                )}
            </div>

            {/* Action Buttons */}
            <div className="p-3 pb-2">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-4">
                        <button className="hover:opacity-60 transition-opacity">
                            <Heart className="w-[22px] h-[22px]" />
                        </button>
                        <button className="hover:opacity-60 transition-opacity">
                            <MessageCircle className="w-[22px] h-[22px]" />
                        </button>
                        <button className="hover:opacity-60 transition-opacity">
                            <Repeat2 className="w-[22px] h-[22px]" />
                        </button>
                        <button className="hover:opacity-60 transition-opacity">
                            <Send className="w-[22px] h-[22px]" />
                        </button>
                    </div>
                    <button className="hover:opacity-60 transition-opacity">
                        <Bookmark className="w-[22px] h-[22px]" />
                    </button>
                </div>

                {/* Likes */}
                <div className="flex flex-col gap-1">
                    {data.likedBy && (
                        <div className="flex items-center gap-1.5">
                            <div className="w-5 h-5 rounded-full bg-zinc-200 border border-white overflow-hidden">
                                {data.likedBy.avatar ? (
                                    <img src={data.likedBy.avatar} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gray-400 text-white text-[8px]">
                                        {data.likedBy.name.charAt(0)}
                                    </div>
                                )}
                            </div>
                            <p className="text-xs">
                                Liked by <span className="font-semibold">{data.likedBy.name}</span> and{" "}
                                <span className="font-semibold">{formatter.format(data.stats.likes)} others</span>
                            </p>
                        </div>
                    )}
                    {!data.likedBy && data.stats.likes > 0 && (
                        <p className="text-sm font-semibold">
                            {data.stats.likes.toLocaleString()} likes
                        </p>
                    )}
                    {data.stats.reposts ? data.stats.reposts > 0 && (
                        <p className="text-[11px] text-gray-500 font-medium">
                            {data.stats.reposts.toLocaleString()} reposts
                        </p>
                    ) : null}
                </div>

                {/* Caption */}
                <div className="mt-1.5 text-sm">
                    <span className="font-semibold mr-2">{data.user.username}</span>
                    <span className="whitespace-pre-wrap">{data.content.caption}</span>
                </div>

                {/* Comments Count */}
                {data.stats.comments > 0 && (
                    <button className="mt-1.5 text-sm text-gray-500 hover:opacity-60 transition-opacity">
                        View all {data.stats.comments} comments
                    </button>
                )}

                {/* Date */}
                <div className="mt-1 pb-1">
                    <span className="text-[10px] uppercase text-gray-500">
                        {format(data.content.date, "MMMM d, yyyy")}
                    </span>
                </div>
            </div>
        </div>
    );
};
