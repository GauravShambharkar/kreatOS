import { Tweetdata } from "@/lib/types";
import { Upload, User, FileText, BarChart3, Palette, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface TweetdataFormProps {
  data: Tweetdata;
  onChange: (data: Tweetdata) => void;
}

export function TweetdataForm({ data, onChange }: TweetdataFormProps) {
  const [activeTab, setActiveTab] = useState<"user" | "content" | "stats" | "theme">("user");

  const handleChange = (
    section: Exclude<keyof Tweetdata, "theme">,
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
                  ? "bg-sky-500/20 text-sky-300 border border-sky-400/30 shadow-sm"
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
              <label className="text-xs font-semibold text-gray-300">Display Name</label>
              <input
                type="text"
                value={data.user.name}
                onChange={(e) => handleChange("user", "name", e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all"
                placeholder="e.g. Elon Musk"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300">Username</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-500 text-xs">@</span>
                <input
                  type="text"
                  value={data.user.username}
                  onChange={(e) => handleChange("user", "username", e.target.value)}
                  className="w-full pl-7 pr-3 py-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all"
                  placeholder="elonmusk"
                />
              </div>
            </div>
          </div>

          {/* Verified Toggle */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-400" />
              <span className="text-xs font-medium text-gray-200">Verified Blue Badge</span>
            </div>
            <input
              type="checkbox"
              id="verified"
              checked={data.user.isVerified}
              onChange={(e) => handleChange("user", "isVerified", e.target.checked)}
              className="w-4 h-4 rounded border-white/20 bg-black text-sky-500 focus:ring-0 accent-sky-500 cursor-pointer"
            />
          </div>

          {/* Profile Picture Upload */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-300 block">Profile Avatar</label>
            <div className="flex items-center gap-3">
              {data.user.avatar && (
                <img
                  src={data.user.avatar}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full object-cover border border-white/20"
                />
              )}
              <label className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/15 text-gray-200 text-xs font-medium rounded-xl cursor-pointer transition-all">
                <Upload className="w-4 h-4 text-sky-400" />
                <span>{data.user.avatar ? "Change Profile Picture" : "Upload Profile Picture"}</span>
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

      {/* Tab 2: Tweet Content */}
      {activeTab === "content" && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-300">Tweet Text</label>
            <textarea
              rows={4}
              value={data.content.text}
              onChange={(e) => handleChange("content", "text", e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all leading-relaxed"
              placeholder="What's happening?"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300">Timestamp Source</label>
              <input
                type="text"
                value={data.content.source}
                onChange={(e) => handleChange("content", "source", e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:border-sky-500 outline-none"
                placeholder="Twitter for iPhone"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300">Post Date</label>
              <input
                type="datetime-local"
                value={new Date(data.content.date).toISOString().slice(0, 16)}
                onChange={(e) => handleChange("content", "date", new Date(e.target.value))}
                className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:border-sky-500 outline-none"
              />
            </div>
          </div>

          {/* Media Attachment Upload */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-300 block">Tweet Media Attachment</label>
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
              <Upload className="w-4 h-4 text-sky-400" />
              <span>{data.content.image ? "Replace Attached Image" : "Upload Attached Image / Photo"}</span>
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

      {/* Tab 3: Metrics */}
      {activeTab === "stats" && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: "Likes", key: "likes", value: data.stats.likes },
              { label: "Retweets", key: "retweets", value: data.stats.retweets },
              { label: "Quotes", key: "quotes", value: data.stats.quotes },
              { label: "Bookmarks", key: "bookmarks", value: data.stats.bookmarks },
              { label: "Impressions", key: "impressions", value: data.stats.impressions },
            ].map((stat) => (
              <div key={stat.key} className="space-y-1 p-2.5 rounded-xl bg-white/5 border border-white/10">
                <label className="text-[11px] font-medium text-gray-400 uppercase tracking-wider block">
                  {stat.label}
                </label>
                <input
                  type="number"
                  value={stat.value}
                  onChange={(e) => handleStatChange(stat.key, parseInt(e.target.value) || 0)}
                  className="w-full px-2 py-1 rounded-lg bg-black/50 border border-white/10 text-white text-xs font-mono focus:border-sky-500 outline-none"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Theme Styling */}
      {activeTab === "theme" && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <label className="text-xs font-semibold text-gray-300 block">Card Theme Appearance</label>
          <div className="grid grid-cols-3 gap-3">
            {[
              { id: "light", label: "Light Mode", bg: "bg-white text-black border-gray-300" },
              { id: "dim", label: "Dim Blue", bg: "bg-[#15202b] text-white border-sky-500/40" },
              { id: "dark", label: "Lights Out", bg: "bg-black text-white border-white/30" },
            ].map((th) => (
              <button
                key={th.id}
                onClick={() => onChange({ ...data, theme: th.id as any })}
                className={`p-4 rounded-xl border text-center transition-all flex flex-col items-center justify-between gap-2 ${th.bg} ${
                  data.theme === th.id ? "ring-2 ring-sky-500 scale-[1.02]" : "opacity-70 hover:opacity-100"
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
