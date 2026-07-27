"use client";

import { Youtubedata } from "@/lib/types";
import { Upload, Video, Tv, BarChart3, Palette, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface YoutubeDataFormProps {
  data: Youtubedata;
  onChange: (data: Youtubedata) => void;
}

export function YoutubeDataForm({ data, onChange }: YoutubeDataFormProps) {
  const [activeTab, setActiveTab] = useState<"video" | "channel" | "stats" | "theme">("video");

  const handleChange = (
    section: "video" | "channel",
    key: string,
    value: any
  ) => {
    onChange({
      ...data,
      [section]: {
        ...data[section],
        [key]: value,
      },
    });
  };

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "avatar" | "thumbnail"
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (field === "avatar") {
          handleChange("channel", "avatar", reader.result as string);
        } else {
          handleChange("video", "thumbnail", reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const tabs = [
    { id: "video", label: "Video", icon: Video },
    { id: "channel", label: "Channel", icon: Tv },
    { id: "stats", label: "Stats", icon: BarChart3 },
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
                  ? "bg-red-500/20 text-red-300 border border-red-400/30 shadow-sm"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab 1: Video Details */}
      {activeTab === "video" && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-300">Video Title</label>
            <textarea
              rows={3}
              value={data.video.title}
              onChange={(e) => handleChange("video", "title", e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:border-red-500 outline-none leading-relaxed"
              placeholder="How to Build a Modern SaaS Application"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300">Duration</label>
              <input
                type="text"
                value={data.video.duration}
                onChange={(e) => handleChange("video", "duration", e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:border-red-500 outline-none"
                placeholder="18:42"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300">Upload Date Text</label>
              <input
                type="text"
                value={data.video.uploadDate}
                onChange={(e) => handleChange("video", "uploadDate", e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:border-red-500 outline-none"
                placeholder="3 days ago"
              />
            </div>
          </div>

          {/* Video Thumbnail Upload */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-300 block">Video Thumbnail</label>
            {data.video.thumbnail && (
              <div className="relative rounded-xl overflow-hidden border border-white/20 max-h-36">
                <img src={data.video.thumbnail} alt="Thumbnail" className="w-full h-36 object-cover" />
                <button
                  onClick={() => handleChange("video", "thumbnail", null)}
                  className="absolute top-2 right-2 px-2 py-1 bg-red-600/80 text-white text-[10px] rounded-lg backdrop-blur-md"
                >
                  Remove
                </button>
              </div>
            )}
            <label className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-dashed border-white/20 text-gray-300 text-xs font-medium rounded-xl cursor-pointer transition-all">
              <Upload className="w-4 h-4 text-red-400" />
              <span>{data.video.thumbnail ? "Replace Thumbnail" : "Upload Video Thumbnail"}</span>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, "thumbnail")}
                className="hidden"
              />
            </label>
          </div>
        </div>
      )}

      {/* Tab 2: Channel Profile */}
      {activeTab === "channel" && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300">Channel Name</label>
              <input
                type="text"
                value={data.channel.name}
                onChange={(e) => handleChange("channel", "name", e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:border-red-500 outline-none"
                placeholder="Code Academy"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300">Subscribers</label>
              <input
                type="text"
                value={data.channel.subscribers}
                onChange={(e) => handleChange("channel", "subscribers", e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:border-red-500 outline-none"
                placeholder="1.2M"
              />
            </div>
          </div>

          {/* Verified Channel Badge */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-red-400" />
              <span className="text-xs font-medium text-gray-200">Verified Channel Checkmark</span>
            </div>
            <input
              type="checkbox"
              checked={data.channel.isVerified}
              onChange={(e) => handleChange("channel", "isVerified", e.target.checked)}
              className="w-4 h-4 rounded border-white/20 bg-black text-red-500 cursor-pointer"
            />
          </div>

          {/* Channel Avatar */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-300 block">Channel Avatar</label>
            <div className="flex items-center gap-3">
              {data.channel.avatar && (
                <img
                  src={data.channel.avatar}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full object-cover border border-white/20"
                />
              )}
              <label className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/15 text-gray-200 text-xs font-medium rounded-xl cursor-pointer transition-all">
                <Upload className="w-4 h-4 text-red-400" />
                <span>{data.channel.avatar ? "Change Avatar" : "Upload Channel Avatar"}</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, "avatar")}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Stats */}
      {activeTab === "stats" && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Views", key: "views", value: data.video.views },
              { label: "Likes", key: "likes", value: data.video.likes },
              { label: "Comments", key: "comments", value: data.video.comments },
            ].map((stat) => (
              <div key={stat.key} className="space-y-1 p-2.5 rounded-xl bg-white/5 border border-white/10">
                <label className="text-[11px] font-medium text-gray-400 uppercase tracking-wider block">
                  {stat.label}
                </label>
                <input
                  type="number"
                  value={stat.value}
                  onChange={(e) => handleChange("video", stat.key, parseInt(e.target.value) || 0)}
                  className="w-full px-2 py-1 rounded-lg bg-black/50 border border-white/10 text-white text-xs font-mono focus:border-red-500 outline-none"
                />
              </div>
            ))}
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
              { id: "dark", label: "Dark Mode", bg: "bg-[#0f0f0f] text-white border-white/30" },
            ].map((th) => (
              <button
                key={th.id}
                onClick={() => onChange({ ...data, theme: th.id as any })}
                className={`p-4 rounded-xl border text-center transition-all flex flex-col items-center justify-between gap-2 ${th.bg} ${
                  data.theme === th.id ? "ring-2 ring-red-500 scale-[1.02]" : "opacity-70 hover:opacity-100"
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
}
