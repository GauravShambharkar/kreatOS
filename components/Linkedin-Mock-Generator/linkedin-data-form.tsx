"use client";

import { Linkedindata } from "@/lib/types";
import { Upload } from "lucide-react";

interface LinkedinDataFormProps {
  data: Linkedindata;
  onChange: (data: Linkedindata) => void;
}

export function LinkedinDataForm({ data, onChange }: LinkedinDataFormProps) {
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

  return (
    <div className="space-y-6 p-6 text-left">
      {/* User Info */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-550 dark:text-zinc-400">
          Author Details
        </h3>

        <div className="flex gap-4 flex-col sm:flex-row">
          <div className="flex-1 space-y-2">
            <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Name</label>
            <input
              type="text"
              value={data.user.name}
              onChange={(e) => handleChange("user", "name", e.target.value)}
              className="w-full p-2.5 rounded-lg border bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
          <div className="flex-1 space-y-2">
            <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Connection Degree</label>
            <select
              value={data.user.connectionDegree}
              onChange={(e) => handleChange("user", "connectionDegree", e.target.value)}
              className="w-full p-2.5 rounded-lg border bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              <option value="1st" className="text-zinc-900 dark:text-white dark:bg-zinc-900">1st</option>
              <option value="2nd" className="text-zinc-900 dark:text-white dark:bg-zinc-900">2nd</option>
              <option value="3rd+" className="text-zinc-900 dark:text-white dark:bg-zinc-900">3rd+</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Headline</label>
          <input
            type="text"
            value={data.user.headline}
            onChange={(e) => handleChange("user", "headline", e.target.value)}
            className="w-full p-2.5 rounded-lg border bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="verified"
            checked={data.user.isVerified}
            onChange={(e) => handleChange("user", "isVerified", e.target.checked)}
            className="w-4 h-4 rounded border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800"
          />
          <label htmlFor="verified" className="text-sm font-medium text-zinc-850 dark:text-zinc-200">
            Verified/Official Account
          </label>
        </div>

        <div>
          <label className="text-sm font-medium block mb-2 text-zinc-800 dark:text-zinc-200">Profile Avatar</label>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors text-sm">
              <Upload size={16} />
              <span>Upload Avatar</span>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, "avatar")}
                className="hidden"
              />
            </label>
            {data.user.avatar && (
              <button
                type="button"
                onClick={() => handleChange("user", "avatar", null)}
                className="text-sm text-red-500 hover:underline"
              >
                Remove
              </button>
            )}
          </div>
        </div>
      </div>

      <hr className="border-gray-200 dark:border-zinc-850" />

      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-550 dark:text-zinc-400">
          Post Content
        </h3>

        <div className="space-y-2">
          <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Post Text</label>
          <textarea
            value={data.content.text}
            onChange={(e) => handleChange("content", "text", e.target.value)}
            className="w-full p-3 rounded-lg border bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 min-h-[120px] text-zinc-900 dark:text-zinc-100 outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div className="flex gap-4 flex-col sm:flex-row">
          <div className="flex-1 space-y-2">
            <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Time Since Post</label>
            <input
              type="text"
              value={data.content.timeSincePost}
              onChange={(e) => handleChange("content", "timeSincePost", e.target.value)}
              placeholder="e.g. 2h, 1d"
              className="w-full p-2.5 rounded-lg border bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
          <div className="flex-1 space-y-2">
            <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Post Image Attachment</label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors text-sm w-full justify-center">
                <Upload size={16} />
                <span>Upload Image</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, "image")}
                  className="hidden"
                />
              </label>
              {data.content.image && (
                <button
                  type="button"
                  onClick={() => handleChange("content", "image", null)}
                  className="text-sm text-red-500 hover:underline flex-shrink-0"
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-200 dark:border-zinc-850" />

      {/* Engagement metrics */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-550 dark:text-zinc-400">
          Engagement Stats
        </h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-medium text-zinc-850 dark:text-zinc-350">Reactions</label>
            <input
              type="number"
              value={data.stats.reactions}
              onChange={(e) => handleStatChange("reactions", parseInt(e.target.value) || 0)}
              className="w-full p-2.5 rounded-lg border bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-medium text-zinc-855 dark:text-zinc-355">Comments</label>
            <input
              type="number"
              value={data.stats.comments}
              onChange={(e) => handleStatChange("comments", parseInt(e.target.value) || 0)}
              className="w-full p-2.5 rounded-lg border bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-medium text-zinc-855 dark:text-zinc-355">Reposts</label>
            <input
              type="number"
              value={data.stats.reposts}
              onChange={(e) => handleStatChange("reposts", parseInt(e.target.value) || 0)}
              className="w-full p-2.5 rounded-lg border bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
        </div>

        {/* Reaction badge toggles */}
        <div className="space-y-2.5">
          <label className="text-xs font-semibold block text-zinc-550 dark:text-zinc-400">Active Reaction Icons</label>
          <div className="flex flex-wrap gap-2.5">
            {[
              { key: "like", label: "Like 👍" },
              { key: "celebrate", label: "Celebrate 👏" },
              { key: "love", label: "Love ❤️" },
              { key: "insightful", label: "Insightful 💡" },
              { key: "curious", label: "Curious 🤔" },
            ].map((reaction) => (
              <button
                type="button"
                key={reaction.key}
                onClick={() => handleReactionTypeToggle(reaction.key as keyof Linkedindata["reactionTypes"])}
                className={`px-3 py-1.5 rounded-full border text-xs font-medium transition-all ${
                  data.reactionTypes[reaction.key as keyof Linkedindata["reactionTypes"]]
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-gray-100 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700"
                }`}
              >
                {reaction.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-gray-200 dark:border-zinc-850" />

      {/* Theme Choice */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-550 dark:text-zinc-400">
          Color Scheme
        </h3>
        <div className="flex gap-4">
          {(["light", "dark"] as const).map((t) => (
            <button
              type="button"
              key={t}
              onClick={() => onChange({ ...data, theme: t })}
              className={`
                px-5 py-2.5 rounded-xl capitalize font-medium text-sm transition-all
                ${
                  data.theme === t
                    ? "bg-blue-600 text-white ring-4 ring-blue-500/25"
                    : "bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700"
                }
              `}
            >
              {t} Mode
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
