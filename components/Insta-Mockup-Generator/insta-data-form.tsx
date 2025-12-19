"use client";

import React, { useRef } from "react";
import { Instadata } from "@/lib/types";
import { cn } from "@/lib/utils";
import { User, Image as ImageIcon, MessageSquare, Heart, MapPin, Share2, Sun, Moon, Upload, Repeat2 } from "lucide-react";

interface InstaDataFormProps {
    data: Instadata;
    onChange: (data: Instadata) => void;
}

export const InstaDataForm = ({ data, onChange }: InstaDataFormProps) => {
    const avatarInputRef = useRef<HTMLInputElement>(null);
    const postImageInputRef = useRef<HTMLInputElement>(null);
    const likerAvatarInputRef = useRef<HTMLInputElement>(null);

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

    return (
        <div className="p-6 space-y-8">
            {/* Theme Selection */}
            <section>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4 block">
                    Theme
                </label>
                <div className="flex gap-4">
                    <button
                        onClick={() => handleChange("theme", "", "light")}
                        className={cn(
                            "flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border transition-all",
                            data.theme === "light"
                                ? "bg-blue-50 border-blue-200 text-blue-600 dark:bg-blue-900/20 dark:border-blue-800"
                                : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50 dark:bg-[#1c1f23] dark:border-zinc-800"
                        )}
                    >
                        <Sun className="w-4 h-4" />
                        <span className="text-sm font-medium">Light</span>
                    </button>
                    <button
                        onClick={() => handleChange("theme", "", "dark")}
                        className={cn(
                            "flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border transition-all",
                            data.theme === "dark"
                                ? "bg-blue-50 border-blue-200 text-blue-600 dark:bg-blue-900/20 dark:border-blue-800"
                                : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50 dark:bg-[#1c1f23] dark:border-zinc-800"
                        )}
                    >
                        <Moon className="w-4 h-4" />
                        <span className="text-sm font-medium">Dark</span>
                    </button>
                </div>
            </section>

            {/* Profile Section */}
            <section className="space-y-4">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <User className="w-4 h-4" />
                    <h3 className="text-sm font-semibold">Profile</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-xs text-gray-500">Full Name</label>
                        <input
                            type="text"
                            value={data.user.name}
                            onChange={(e) => handleChange("user", "name", e.target.value)}
                            className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/50 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs text-gray-500">Username</label>
                        <input
                            type="text"
                            value={data.user.username}
                            onChange={(e) => handleChange("user", "username", e.target.value)}
                            className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/50 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs text-gray-500">Profile Photo</label>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={data.user.avatar || ""}
                            onChange={(e) => handleChange("user", "avatar", e.target.value)}
                            placeholder="Image URL"
                            className="flex-1 px-4 py-2 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/50 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        />
                        <input
                            type="file"
                            ref={avatarInputRef}
                            onChange={(e) => handleImageUpload(e, "user", "avatar")}
                            accept="image/*"
                            className="hidden"
                        />
                        <button
                            onClick={() => avatarInputRef.current?.click()}
                            className="px-4 py-2 bg-gray-200 dark:bg-zinc-800 rounded-xl hover:opacity-80 transition-opacity"
                            title="Upload Photo"
                        >
                            <Upload className="w-4 h-4" />
                        </button>
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs text-gray-500">Verification</label>
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="isVerified"
                            checked={data.user.isVerified}
                            onChange={(e) => handleChange("user", "isVerified", e.target.checked)}
                            className="w-4 h-4 rounded text-blue-500 focus:ring-blue-500"
                        />
                        <label htmlFor="isVerified" className="text-sm text-gray-600 dark:text-gray-400">
                            Verified Badge
                        </label>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="space-y-4">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <ImageIcon className="w-4 h-4" />
                    <h3 className="text-sm font-semibold">{data.type === 'reel' ? 'Reel Cover' : 'Post Content'}</h3>
                </div>

                {data.type === 'post' && (
                    <div className="space-y-2">
                        <label className="text-xs text-gray-500">Location</label>
                        <div className="relative">
                            <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                value={data.content.location || ""}
                                onChange={(e) => handleChange("content", "location", e.target.value)}
                                placeholder="e.g. Paris, France"
                                className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/50 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            />
                        </div>
                    </div>
                )}

                <div className="space-y-2">
                    <label className="text-xs text-gray-500">Caption</label>
                    <textarea
                        value={data.content.caption}
                        onChange={(e) => handleChange("content", "caption", e.target.value)}
                        rows={4}
                        className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/50 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                    />
                </div>

                {data.type === 'reel' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs text-gray-500">Audio Name</label>
                            <input
                                type="text"
                                value={data.reelInfo?.audioName || ""}
                                onChange={(e) => handleChange("reelInfo" as any, "audioName", e.target.value)}
                                className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/50 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs text-gray-500">Audio Artist</label>
                            <input
                                type="text"
                                value={data.reelInfo?.audioArtist || ""}
                                onChange={(e) => handleChange("reelInfo" as any, "audioArtist", e.target.value)}
                                className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/50 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            />
                        </div>
                    </div>
                )}

                <div className="space-y-2">
                    <label className="text-xs text-gray-500">{data.type === 'reel' ? 'Reel Image' : 'Post Image'}</label>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={data.content.image || ""}
                            onChange={(e) => handleChange("content", "image", e.target.value)}
                            placeholder="Paste Image URL or Upload"
                            className="flex-1 px-4 py-2 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/50 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        />
                        <input
                            type="file"
                            ref={postImageInputRef}
                            onChange={(e) => handleImageUpload(e, "content", "image")}
                            accept="image/*"
                            className="hidden"
                        />
                        <button
                            onClick={() => postImageInputRef.current?.click()}
                            className="px-4 py-2 bg-gray-200 dark:bg-zinc-800 rounded-xl hover:opacity-80 transition-opacity"
                            title="Upload Image"
                        >
                            <Upload className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Engagement Stats */}
            <section className="space-y-4">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <Share2 className="w-4 h-4" />
                    <h3 className="text-sm font-semibold">Engagement</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                        <div className="flex items-center gap-1.5 mb-1">
                            <Heart className="w-3.5 h-3.5 text-pink-500" />
                            <label className="text-xs text-gray-500">Likes</label>
                        </div>
                        <input
                            type="number"
                            value={data.stats.likes}
                            onChange={(e) => handleChange("stats", "likes", parseInt(e.target.value) || 0)}
                            className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/50 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-1.5 mb-1">
                            <MessageSquare className="w-3.5 h-3.5 text-blue-500" />
                            <label className="text-xs text-gray-500">Comments</label>
                        </div>
                        <input
                            type="number"
                            value={data.stats.comments}
                            onChange={(e) => handleChange("stats", "comments", parseInt(e.target.value) || 0)}
                            className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/50 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-1.5 mb-1">
                            <Share2 className="w-3.5 h-3.5 text-green-500" />
                            <label className="text-xs text-gray-500">Shares</label>
                        </div>
                        <input
                            type="number"
                            value={data.stats.shares}
                            onChange={(e) => handleChange("stats", "shares", parseInt(e.target.value) || 0)}
                            className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/50 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-1.5 mb-1">
                            <Repeat2 className="w-3.5 h-3.5 text-indigo-500" />
                            <label className="text-xs text-gray-500">Reposts</label>
                        </div>
                        <input
                            type="number"
                            value={data.stats.reposts || 0}
                            onChange={(e) => handleChange("stats", "reposts", parseInt(e.target.value) || 0)}
                            className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/50 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        />
                    </div>
                </div>
            </section>

            {/* "Liked by" Person */}
            <section className="space-y-4">
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 block">
                    Featured Liker
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-xs text-gray-500">Liker Username</label>
                        <input
                            type="text"
                            value={data.likedBy?.name || ""}
                            onChange={(e) => onChange({
                                ...data,
                                likedBy: e.target.value ? { ...data.likedBy, name: e.target.value, avatar: data.likedBy?.avatar || null } : undefined
                            })}
                            className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/50 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs text-gray-500">Liker Avatar</label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={data.likedBy?.avatar || ""}
                                onChange={(e) => onChange({
                                    ...data,
                                    likedBy: data.likedBy ? { ...data.likedBy, avatar: e.target.value } : { name: "alex_explorer", avatar: e.target.value }
                                })}
                                placeholder="Avatar URL"
                                className="flex-1 px-4 py-2 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/50 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            />
                            <input
                                type="file"
                                ref={likerAvatarInputRef}
                                onChange={(e) => handleImageUpload(e, "likedBy", "avatar")}
                                accept="image/*"
                                className="hidden"
                            />
                            <button
                                onClick={() => likerAvatarInputRef.current?.click()}
                                className="px-4 py-2 bg-gray-200 dark:bg-zinc-800 rounded-xl hover:opacity-80 transition-opacity"
                                title="Upload Avatar"
                            >
                                <Upload className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
