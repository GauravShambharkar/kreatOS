"use client";

import { Linkedindata } from "@/lib/types";
import { Upload, User, FileText, ThumbsUp, Palette, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface LinkedinDataFormProps {
  data: Linkedindata;
  onChange: (data: Linkedindata) => void;
}

export function LinkedinDataForm({ data, onChange }: LinkedinDataFormProps) {
  const [activeTab, setActiveTab] = useState<"author" | "content" | "stats" | "theme">("author");

  const handleChange = (
    section: Exclude<keyof Linkedindata, "theme" | "reactionTypes">,
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

  const handleStatChange = (key: string, value: number) => {
    handleChange("stats", key, value);
  };

  const handleReactionTypeToggle = (key: keyof Linkedindata["reactionTypes"]) => {
    onChange({
      ...data,
      reactionTypes: {
        ...data.reactionTypes,
        [key]: !data.reactionTypes[key],
      },
    });
  };

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "avatar" | "image" = "image"
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (field === "avatar") {
          handleChange("user", "avatar", reader.result as string);
        } else {
          handleChange("content", "image", reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const tabs = [
    { id: "author", label: "Author", icon: User },
    { id: "content", label: "Content", icon: FileText },
    { id: "stats", label: "Reactions", icon: ThumbsUp },
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
                  ? "bg-blue-500/20 text-blue-300 border border-blue-400/30 shadow-sm"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab 1: Author Info */}
      {activeTab === "author" && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300">Author Name</label>
              <input
                type="text"
                value={data.user.name}
                onChange={(e) => handleChange("user", "name", e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:border-blue-500 outline-none"
                placeholder="Alex Johnson"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300">Connection Level</label>
              <select
                value={data.user.connectionDegree}
                onChange={(e) => handleChange("user", "connectionDegree", e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:border-blue-500 outline-none"
              >
                <option value="1st">1st degree</option>
                <option value="2nd">2nd degree</option>
                <option value="3rd+">3rd+ degree</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-300">Professional Headline</label>
            <input
              type="text"
              value={data.user.headline}
              onChange={(e) => handleChange("user", "headline", e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:border-blue-500 outline-none"
              placeholder="Principal Software Engineer at Tech Innovators"
            />
          </div>

          {/* Verified Checkmark */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-medium text-gray-200">Verified Badge</span>
            </div>
            <input
              type="checkbox"
              checked={data.user.isVerified}
              onChange={(e) => handleChange("user", "isVerified", e.target.checked)}
              className="w-4 h-4 rounded border-white/20 bg-black text-blue-500 cursor-pointer"
            />
          </div>

          {/* Profile Picture */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-300 block">Profile Picture</label>
            <div className="flex items-center gap-3">
              {data.user.avatar && (
                <img
                  src={data.user.avatar}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full object-cover border border-white/20"
                />
              )}
              <label className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/15 text-gray-200 text-xs font-medium rounded-xl cursor-pointer transition-all">
                <Upload className="w-4 h-4 text-blue-400" />
                <span>{data.user.avatar ? "Change Avatar" : "Upload Avatar"}</span>
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

      {/* Tab 2: Post Content */}
      {activeTab === "content" && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-300">Post Copy</label>
            <textarea
              rows={4}
              value={data.content.text}
              onChange={(e) => handleChange("content", "text", e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:border-blue-500 outline-none leading-relaxed"
              placeholder="Write your LinkedIn update..."
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-300">Time Since Post</label>
            <input
              type="text"
              value={data.content.timeSincePost}
              onChange={(e) => handleChange("content", "timeSincePost", e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:border-blue-500 outline-none"
              placeholder="e.g. 2h"
            />
          </div>

          {/* Media Image */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-300 block">Post Attachment Image</label>
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
              <Upload className="w-4 h-4 text-blue-400" />
              <span>{data.content.image ? "Replace Post Image" : "Upload Post Image"}</span>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, "image")}
                className="hidden"
              />
            </label>
          </div>
        </div>
      )}

      {/* Tab 3: Reactions & Stats */}
      {activeTab === "stats" && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Reactions", key: "reactions", value: data.stats.reactions },
              { label: "Comments", key: "comments", value: data.stats.comments },
              { label: "Reposts", key: "reposts", value: data.stats.reposts },
            ].map((stat) => (
              <div key={stat.key} className="space-y-1 p-2.5 rounded-xl bg-white/5 border border-white/10">
                <label className="text-[11px] font-medium text-gray-400 uppercase tracking-wider block">
                  {stat.label}
                </label>
                <input
                  type="number"
                  value={stat.value}
                  onChange={(e) => handleStatChange(stat.key, parseInt(e.target.value) || 0)}
                  className="w-full px-2 py-1 rounded-lg bg-black/50 border border-white/10 text-white text-xs font-mono focus:border-blue-500 outline-none"
                />
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-300 block">Active Reaction Types Shown</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { key: "like", label: "Like 👍" },
                { key: "celebrate", label: "Celebrate 👏" },
                { key: "love", label: "Love ❤️" },
                { key: "insightful", label: "Insightful 💡" },
                { key: "curious", label: "Curious 🤔" },
              ].map((r) => (
                <button
                  key={r.key}
                  type="button"
                  onClick={() => handleReactionTypeToggle(r.key as any)}
                  className={`p-2 rounded-xl text-xs font-medium border transition-all ${
                    data.reactionTypes[r.key as keyof typeof data.reactionTypes]
                      ? "bg-blue-500/20 text-blue-300 border-blue-400/40"
                      : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10"
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
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
              { id: "dark", label: "Dark Mode", bg: "bg-[#1b1f23] text-white border-white/30" },
            ].map((th) => (
              <button
                key={th.id}
                onClick={() => onChange({ ...data, theme: th.id as any })}
                className={`p-4 rounded-xl border text-center transition-all flex flex-col items-center justify-between gap-2 ${th.bg} ${
                  data.theme === th.id ? "ring-2 ring-blue-500 scale-[1.02]" : "opacity-70 hover:opacity-100"
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
