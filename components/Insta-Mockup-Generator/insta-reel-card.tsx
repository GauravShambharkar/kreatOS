"use client";

import React from "react";
import { Instadata } from "@/lib/types";
import { cn } from "@/lib/utils";
import {
    Heart,
    MessageCircle,
    Send,
    MoreVertical,
    BadgeCheck,
    Music,
    Bookmark,
    Repeat2,
    Camera,
    Save,
    SaveIcon,
} from "lucide-react";
import { BiRepost } from "react-icons/bi";

interface InstaReelCardProps {
    data: Instadata;
}

export const InstaReelCard = ({ data }: InstaReelCardProps) => {
    // Reels are typically full-screen vertical
    const formatter = new Intl.NumberFormat('en-US', {
        notation: 'compact',
        maximumFractionDigits: 1
    });
    return (
        <div
            id="insta-reel-card"
            className={cn(
                "relative w-full max-w-[340px] aspect-9/16 rounded-[32px] overflow-hidden shadow-2xl bg-black border border-zinc-800"
            )}
        >
            {/* Background Image (The Reel Content) */}
            <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
                {data.content.image ? (
                    <img
                        src={data.content.image}
                        alt="Reel content"
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="text-zinc-700 font-light flex flex-col items-center gap-2">
                        <div className="w-16 h-16 rounded-full border-2 border-dashed border-zinc-700 flex items-center justify-center text-2xl font-thin">+</div>
                        <span className="text-xs">Reel Background</span>
                    </div>
                )}
                {/* Gradient Overlay for bottom text readability */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
            </div>

            {/* Top Bar */}
            <div className="absolute  top-0 left-0 right-0 p-6 flex justify-between items-center z-10">
                <h3 className="text-white  font-semibold text-md drop-shadow-md">Reels</h3>
                <button className="text-white drop-shadow-md">
                    <Camera className="w-5 h-5" />
                </button>
            </div>

            {/* Right Side Action Buttons */}
            <div className="absolute right-4 bottom-24 flex flex-col items-center gap-4 z-10">
                <div className="flex flex-col items-center gap-1">
                    <button className="text-white drop-shadow-md hover:scale-110 transition-transform">
                        <Heart className="w-6 h-6" />
                    </button>
                    <span className="text-xs text-white font-medium drop-shadow-md">
                        {formatter.format(data.stats.likes)}
                    </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <button className="text-white drop-shadow-md hover:scale-110 transition-transform">
                        <MessageCircle className="w-6 h-6" />
                    </button>
                    <span className="text-xs text-white font-medium drop-shadow-md">
                        {formatter.format(data.stats.comments)}
                    </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <button className="text-white drop-shadow-md hover:scale-110 transition-transform">
                        <Repeat2 className="w-6 h-6" />
                    </button>
                    <span className="text-xs text-white font-medium drop-shadow-md">
                        {formatter.format(data.stats.reposts!)}
                    </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <button className="text-white drop-shadow-md hover:scale-110 transition-transform">
                        <Send className="w-5 h-5" />
                    </button>
                    <span className="text-xs text-white font-medium drop-shadow-md">
                        {formatter.format(data.stats.shares)}
                    </span>
                </div>
                <button className="text-white drop-shadow-md hover:scale-110 transition-transform">
                    <Bookmark className="w-5 h-5" />
                </button>
                <button className="text-white drop-shadow-md hover:scale-110 transition-transform">
                    <MoreVertical className="w-5 h-5" />
                </button>

            </div>

            {/* Bottom Info Section */}
            <div className="absolute bottom-12 left-4 right-16 z-10 flex flex-col gap-3">
                {/* User Info */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full border border-white/50 overflow-hidden bg-zinc-800">
                        {data.user.avatar ? (
                            <img src={data.user.avatar} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-white text-[10px]">{data.user.name.charAt(0)}</div>
                        )}
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-white text-sm font-semibold drop-shadow-md">{data.user.username}</span>
                        {data.user.isVerified && (
                            <BadgeCheck className="w-3.5 h-3.5 text-blue-400 fill-current drop-shadow-md" />
                        )}
                    </div>
                    <button className="px-2 py-0.5 border border-white/50 rounded-md text-[10px] text-white font-semibold hover:bg-white/10 transition-colors drop-shadow-md">
                        Follow
                    </button>
                </div>

                {/* Caption */}
                <div className="text-white text-xs drop-shadow-md line-clamp-2 pr-4">
                    <span className="font-light">{data.content.caption}</span>
                </div>
            </div>
            {/* Audio Info */}
            <div className="absolute  bottom-2 left-0 right-0 z-10 flex items-center justify-between  w-full gap-2  px-3 py-1.5  border-white/10 overflow-hidden max-w-full">
                <div className="flex items-center gap-2">
                    <Music className="w-3 h-3 text-white shrink-0" />
                    <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap marquee">
                        <span className="text-[10px] text-white font-medium drop-shadow-md">
                            {data.reelInfo?.audioName} • {data.reelInfo?.audioArtist}
                        </span>
                    </div>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden drop-shadow-md">
                    {data.user.avatar ? (
                        <img src={data.user.avatar} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full bg-indigo-500" />
                    )}
                </div>
            </div>

        </div>
    );
};
