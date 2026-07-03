"use client";

import { Youtubedata } from "@/lib/types";
import { Upload } from "lucide-react";

interface YoutubeDataFormProps {
  data: Youtubedata;
  onChange: (data: Youtubedata) => void;
}

export function YoutubeDataForm({ data, onChange }: YoutubeDataFormProps) {
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

  return (
    <div className="space-y-6 p-6 text-left">
      {/* Video details section */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-550 dark:text-zinc-400">
          Video Details
        </h3>

        <div className="space-y-2">
          <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Video Title</label>
          <textarea
            value={data.video.title}
            onChange={(e) => handleChange("video", "title", e.target.value)}
            className="w-full p-2.5 rounded-lg border bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 min-h-[60px] text-zinc-900 dark:text-zinc-100 outline-none focus:ring-2 focus:ring-red-500/20"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Duration</label>
            <input
              type="text"
              value={data.video.duration}
              onChange={(e) => handleChange("video", "duration", e.target.value)}
              placeholder="e.g. 10:15"
              className="w-full p-2.5 rounded-lg border bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 outline-none focus:ring-2 focus:ring-red-500/20"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Upload Date Label</label>
            <input
              type="text"
              value={data.video.uploadDate}
              onChange={(e) => handleChange("video", "uploadDate", e.target.value)}
              placeholder="e.g. 3 days ago"
              className="w-full p-2.5 rounded-lg border bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 outline-none focus:ring-2 focus:ring-red-500/20"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-medium text-zinc-850 dark:text-zinc-350">Views</label>
            <input
              type="number"
              value={data.video.views}
              onChange={(e) => handleChange("video", "views", parseInt(e.target.value) || 0)}
              className="w-full p-2.5 rounded-lg border bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 outline-none focus:ring-2 focus:ring-red-500/20"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-medium text-zinc-855 dark:text-zinc-355">Likes</label>
            <input
              type="number"
              value={data.video.likes}
              onChange={(e) => handleChange("video", "likes", parseInt(e.target.value) || 0)}
              className="w-full p-2.5 rounded-lg border bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 outline-none focus:ring-2 focus:ring-red-500/20"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-medium text-zinc-855 dark:text-zinc-355">Comments</label>
            <input
              type="number"
              value={data.video.comments}
              onChange={(e) => handleChange("video", "comments", parseInt(e.target.value) || 0)}
              className="w-full p-2.5 rounded-lg border bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 outline-none focus:ring-2 focus:ring-red-500/20"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium block mb-2 text-zinc-800 dark:text-zinc-200">Video Thumbnail</label>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors text-sm">
              <Upload size={16} />
              <span>Upload Thumbnail</span>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, "thumbnail")}
                className="hidden"
              />
            </label>
            {data.video.thumbnail && (
              <button
                type="button"
                onClick={() => handleChange("video", "thumbnail", null)}
                className="text-sm text-red-500 hover:underline"
              >
                Remove
              </button>
            )}
          </div>
        </div>
      </div>

      <hr className="border-gray-200 dark:border-zinc-850" />

      {/* Channel details section */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-550 dark:text-zinc-400">
          Channel Info
        </h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Channel Name</label>
            <input
              type="text"
              value={data.channel.name}
              onChange={(e) => handleChange("channel", "name", e.target.value)}
              className="w-full p-2.5 rounded-lg border bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 outline-none focus:ring-2 focus:ring-red-500/20"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Subscribers Label</label>
            <input
              type="text"
              value={data.channel.subscribers}
              onChange={(e) => handleChange("channel", "subscribers", e.target.value)}
              placeholder="e.g. 1.2M, 500K"
              className="w-full p-2.5 rounded-lg border bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 outline-none focus:ring-2 focus:ring-red-500/20"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="channelVerified"
            checked={data.channel.isVerified}
            onChange={(e) => handleChange("channel", "isVerified", e.target.checked)}
            className="w-4 h-4 rounded border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800"
          />
          <label htmlFor="channelVerified" className="text-sm font-medium text-zinc-850 dark:text-zinc-200">
            Verified Partner Badge
          </label>
        </div>

        <div>
          <label className="text-sm font-medium block mb-2 text-zinc-800 dark:text-zinc-200">Channel Avatar</label>
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
            {data.channel.avatar && (
              <button
                type="button"
                onClick={() => handleChange("channel", "avatar", null)}
                className="text-sm text-red-500 hover:underline"
              >
                Remove
              </button>
            )}
          </div>
        </div>
      </div>

      <hr className="border-gray-200 dark:border-zinc-850" />

      {/* Theme Options */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-550 dark:text-zinc-400">
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
                    ? "bg-[#ff0000] text-white ring-4 ring-[#ff0000]/25"
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
