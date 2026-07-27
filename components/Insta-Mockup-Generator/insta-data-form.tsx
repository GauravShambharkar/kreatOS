"use client";

import React, { useRef, useState } from "react";
import { Instadata } from "@/lib/types";
import { User, FileText, BarChart3, Palette, Upload, CheckCircle2, Music } from "lucide-react";

interface InstaDataFormProps {
    data: Instadata;
    onChange: (data: Instadata) => void;
}

export const InstaDataForm = ({ data, onChange }: InstaDataFormProps) => {
    const [activeTab, setActiveTab] = useState<"user" | "content" | "stats" | "theme">("user");
    const avatarInputRef = useRef<HTMLInputElement>(null);
    const postImageInputRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = (
        e: React.ChangeEvent<HTMLInputElement>,
        section: "user" | "content" | "likedBy",
        field: string
    ) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64 = reader.result as string;
                if (section === "likedBy") {
                    onChange({
                        ...data,
                        likedBy: data.likedBy ? {
                            ...data.likedBy,
                            [field]: base64,
                        } : { name: "alex_explorer", [field]: base64 },
                    });
                } else {
                    const sectionData = data[section] as any;
                    onChange({
                        ...data,
                        [section]: {
                            ...sectionData,
                            [field]: base64,
                        },
                    });
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleChange = (
        section: keyof Instadata,
        field: string,
        value: any
    ) => {
        if (section === "theme") {
            onChange({ ...data, theme: value });
            return;
        }

        const sectionData = data[section] as any;
        onChange({
            ...data,
            [section]: {
                ...sectionData,
                [field]: value,
            },
        });
    };

    const tabs = [
        { id: "user", label: "User", icon: User },
        { id: "content", label: "Content", icon: FileText },
        { id: "stats", label: "Metrics", icon: BarChart3 },
        { id: "theme", label: "Theme", icon: Palette },
    ] as const;

    return (
        <div className="space-y-6 text-left">
            {/* Studio Control Tabs */}
            <div className="flex items-center gap-1 p-1 bg-white/5 border border-white/10 rounded-xl">
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium transition-all ${
                                isActive
                                    ? "bg-pink-500/20 text-pink-300 border border-pink-400/30 shadow-sm"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                            }`}
                        >
                            <Icon className="w-3.5 h-3.5" />
                            <span>{tab.label}</span>
                        </button>
                    );
                })}
            </div>

            {/* Tab 1: User Profile */}
            {activeTab === "user" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-gray-300">Name</label>
                            <input
                                type="text"
                                value={data.user.name}
                                onChange={(e) => handleChange("user", "name", e.target.value)}
                                className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:border-pink-500 outline-none"
                                placeholder="Instagram User"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-gray-300">Username</label>
                            <input
                                type="text"
                                value={data.user.username}
                                onChange={(e) => handleChange("user", "username", e.target.value)}
                                className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:border-pink-500 outline-none"
                                placeholder="insta_user"
                            />
                        </div>
                    </div>

                    {/* Verified Checkmark */}
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-pink-400" />
                            <span className="text-xs font-medium text-gray-200">Verified Badge</span>
                        </div>
                        <input
                            type="checkbox"
                            checked={data.user.isVerified}
                            onChange={(e) => handleChange("user", "isVerified", e.target.checked)}
                            className="w-4 h-4 rounded border-white/20 bg-black text-pink-500 cursor-pointer"
                        />
                    </div>

                    {/* Avatar Upload */}
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-300 block">User Avatar</label>
                        <div className="flex items-center gap-3">
                            {data.user.avatar && (
                                <img
                                    src={data.user.avatar}
                                    alt="Avatar"
                                    className="w-10 h-10 rounded-full object-cover border border-white/20"
                                />
                            )}
                            <label className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/15 text-gray-200 text-xs font-medium rounded-xl cursor-pointer transition-all">
                                <Upload className="w-4 h-4 text-pink-400" />
                                <span>{data.user.avatar ? "Change Avatar" : "Upload Avatar"}</span>
                                <input
                                    ref={avatarInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageUpload(e, "user", "avatar")}
                                    className="hidden"
                                />
                            </label>
                        </div>
                    </div>
                </div>
            )}

            {/* Tab 2: Content (Post or Reel) */}
            {activeTab === "content" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-gray-300">Caption Text</label>
                        <textarea
                            rows={3}
                            value={data.content.caption}
                            onChange={(e) => handleChange("content", "caption", e.target.value)}
                            className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:border-pink-500 outline-none leading-relaxed"
                            placeholder="Living my best life! 🌟 #vibe"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-gray-300">Location Check-in</label>
                        <input
                            type="text"
                            value={data.content.location || ""}
                            onChange={(e) => handleChange("content", "location", e.target.value)}
                            className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:border-pink-500 outline-none"
                            placeholder="Paris, France"
                        />
                    </div>

                    {data.type === "reel" && (
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-3">
                            <div className="flex items-center gap-2 text-pink-400 text-xs font-semibold">
                                <Music className="w-4 h-4" />
                                <span>Reel Audio Track Settings</span>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-1">
                                    <label className="text-[11px] text-gray-400">Track Name</label>
                                    <input
                                        type="text"
                                        value={data.reelInfo?.audioName || "Original Audio"}
                                        onChange={(e) =>
                                            onChange({
                                                ...data,
                                                reelInfo: {
                                                    audioName: e.target.value,
                                                    audioArtist: data.reelInfo?.audioArtist || data.user.username,
                                                },
                                            })
                                        }
                                        className="w-full px-2.5 py-1.5 rounded-lg bg-black/40 border border-white/10 text-white text-xs"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[11px] text-gray-400">Audio Artist</label>
                                    <input
                                        type="text"
                                        value={data.reelInfo?.audioArtist || data.user.username}
                                        onChange={(e) =>
                                            onChange({
                                                ...data,
                                                reelInfo: {
                                                    audioName: data.reelInfo?.audioName || "Original Audio",
                                                    audioArtist: e.target.value,
                                                },
                                            })
                                        }
                                        className="w-full px-2.5 py-1.5 rounded-lg bg-black/40 border border-white/10 text-white text-xs"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Post Image Attachment */}
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-300 block">
                            {data.type === "post" ? "Post Image" : "Reel Cover / Background"}
                        </label>
                        {data.content.image && (
                            <div className="relative rounded-xl overflow-hidden border border-white/20 max-h-36">
                                <img src={data.content.image} alt="Media" className="w-full h-36 object-cover" />
                                <button
                                    onClick={() => handleChange("content", "image", null)}
                                    className="absolute top-2 right-2 px-2 py-1 bg-red-600/80 text-white text-[10px] rounded-lg backdrop-blur-md"
                                >
                                    Remove
                                </button>
                            </div>
                        )}
                        <label className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-dashed border-white/20 text-gray-300 text-xs font-medium rounded-xl cursor-pointer transition-all">
                            <Upload className="w-4 h-4 text-pink-400" />
                            <span>{data.content.image ? "Replace Image" : "Upload Image File"}</span>
                            <input
                                ref={postImageInputRef}
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleImageUpload(e, "content", "image")}
                                className="hidden"
                            />
                        </label>
                    </div>
                </div>
            )}

            {/* Tab 3: Metrics */}
            {activeTab === "stats" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {[
                            { label: "Likes", key: "likes", value: data.stats.likes },
                            { label: "Comments", key: "comments", value: data.stats.comments },
                            { label: "Shares", key: "shares", value: data.stats.shares },
                        ].map((stat) => (
                            <div key={stat.key} className="space-y-1 p-2.5 rounded-xl bg-white/5 border border-white/10">
                                <label className="text-[11px] font-medium text-gray-400 uppercase tracking-wider block">
                                    {stat.label}
                                </label>
                                <input
                                    type="number"
                                    value={stat.value}
                                    onChange={(e) => handleChange("stats", stat.key, parseInt(e.target.value) || 0)}
                                    className="w-full px-2 py-1 rounded-lg bg-black/50 border border-white/10 text-white text-xs font-mono focus:border-pink-500 outline-none"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="space-y-1.5 pt-2">
                        <label className="text-xs font-semibold text-gray-300 block">"Liked by" Feature User</label>
                        <input
                            type="text"
                            value={data.likedBy?.name || ""}
                            onChange={(e) =>
                                onChange({
                                    ...data,
                                    likedBy: {
                                        name: e.target.value,
                                        avatar: data.likedBy?.avatar || null,
                                    },
                                })
                            }
                            className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:border-pink-500 outline-none"
                            placeholder="alex_explorer"
                        />
                    </div>
                </div>
            )}

            {/* Tab 4: Theme */}
            {activeTab === "theme" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                    <label className="text-xs font-semibold text-gray-300 block">Card Theme Appearance</label>
                    <div className="grid grid-cols-2 gap-3">
                        {[
                            { id: "light", label: "Light Mode", bg: "bg-white text-black border-gray-300" },
                            { id: "dark", label: "Dark Mode", bg: "bg-black text-white border-white/30" },
                        ].map((th) => (
                            <button
                                key={th.id}
                                onClick={() => onChange({ ...data, theme: th.id as any })}
                                className={`p-4 rounded-xl border text-center transition-all flex flex-col items-center justify-between gap-2 ${th.bg} ${
                                    data.theme === th.id ? "ring-2 ring-pink-500 scale-[1.02]" : "opacity-70 hover:opacity-100"
                                }`}
                            >
                                <span className="text-xs font-bold">{th.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
