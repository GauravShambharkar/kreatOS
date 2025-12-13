import { Tweetdata } from "@/lib/types";
import { Upload } from "lucide-react";

interface TweetdataFormProps {
    data: Tweetdata;
    onChange: (data: Tweetdata) => void;
}

export function TweetdataForm({ data, onChange }: TweetdataFormProps) {
    const handleChange = (section: Exclude<keyof Tweetdata, "theme">, key: string, value: any) => {
        onChange({
            ...data,
            [section]: {
                ...data[section],
                [key]: value,
            },
        });
    };

    const handleStatChange = (key: string, value: number) => {
        handleChange('stats', key, value);
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, field: 'avatar' | 'image' = 'image') => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (field === 'avatar') {
                    handleChange('user', 'avatar', reader.result as string);
                } else {
                    handleChange('content', 'image', reader.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="space-y-6 p-4">
            {/* User Info */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">User Info</h3>

                <div className="flex gap-4">
                    <div className="flex-1 space-y-2">
                        <label className="text-sm font-medium">Name</label>
                        <input
                            type="text"
                            value={data.user.name}
                            onChange={(e) => handleChange('user', 'name', e.target.value)}
                            className="w-full p-2 rounded-lg border bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700"
                        />
                    </div>
                    <div className="flex-1 space-y-2">
                        <label className="text-sm font-medium">Username</label>
                        <div className="relative">
                            <span className="absolute left-3 top-2 text-gray-400">@</span>
                            <input
                                type="text"
                                value={data.user.username}
                                onChange={(e) => handleChange('user', 'username', e.target.value)}
                                className="w-full p-2 pl-7 rounded-lg border bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="verified"
                        checked={data.user.isVerified}
                        onChange={(e) => handleChange('user', 'isVerified', e.target.checked)}
                        className="w-4 h-4 rounded border-gray-300"
                    />
                    <label htmlFor="verified" className="text-sm">Verified Account</label>
                </div>

                <div>
                    <label className="text-sm font-medium block mb-2">Profile Picture</label>
                    <div className="flex items-center gap-4">
                        <label className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
                            <Upload size={16} />
                            <span>Upload Avatar</span>
                            <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'avatar')} className="hidden" />
                        </label>
                        {data.user.avatar && (
                            <button
                                onClick={() => handleChange('user', 'avatar', null)}
                                className="text-sm text-red-500 hover:underline"
                            >
                                Remove
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <hr className="border-gray-200 dark:border-zinc-700" />

            {/* Content */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Content</h3>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Tweet Text</label>
                    <textarea
                        value={data.content.text}
                        onChange={(e) => handleChange('content', 'text', e.target.value)}
                        className="w-full p-3 rounded-lg border bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 min-h-[100px]"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium block mb-2">Tweet Image</label>
                    <div className="flex items-center gap-4">
                        <label className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
                            <Upload size={16} />
                            <span>Upload Image</span>
                            <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'image')} className="hidden" />
                        </label>
                        {data.content.image && (
                            <button
                                onClick={() => handleChange('content', 'image', null)}
                                className="text-sm text-red-500 hover:underline"
                            >
                                Remove
                            </button>
                        )}
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="flex-1 space-y-2">
                        <label className="text-sm font-medium">Time</label>
                        <input
                            type="datetime-local"
                            onChange={(e) => {
                                const date = new Date(e.target.value);
                                if (!isNaN(date.getTime())) {
                                    handleChange('content', 'date', date)
                                }
                            }}
                            className="w-full p-2 rounded-lg border bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700"
                        />
                    </div>
                    <div className="flex-1 space-y-2">
                        <label className="text-sm font-medium">Source</label>
                        <input
                            type="text"
                            value={data.content.source}
                            onChange={(e) => handleChange('content', 'source', e.target.value)}
                            className="w-full p-2 rounded-lg border bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700"
                        />
                    </div>
                </div>
            </div>

            <hr className="border-gray-200 dark:border-zinc-700" />

            {/* Stats */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Likes</label>
                        <input
                            type="number"
                            value={data.stats.likes}
                            onChange={(e) => handleStatChange('likes', parseInt(e.target.value) || 0)}
                            className="w-full p-2 rounded-lg border bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Retweets</label>
                        <input
                            type="number"
                            value={data.stats.retweets}
                            onChange={(e) => handleStatChange('retweets', parseInt(e.target.value) || 0)}
                            className="w-full p-2 rounded-lg border bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Quotes</label>
                        <input
                            type="number"
                            value={data.stats.quotes}
                            onChange={(e) => handleStatChange('quotes', parseInt(e.target.value) || 0)}
                            className="w-full p-2 rounded-lg border bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Bookmarks</label>
                        <input
                            type="number"
                            value={data.stats.bookmarks}
                            onChange={(e) => handleStatChange('bookmarks', parseInt(e.target.value) || 0)}
                            className="w-full p-2 rounded-lg border bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Impressions</label>
                        <input
                            type="number"
                            value={data.stats.impressions}
                            onChange={(e) => handleStatChange('impressions', parseInt(e.target.value) || 0)}
                            className="w-full p-2 rounded-lg border bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700"
                        />
                    </div>
                </div>
            </div>

            <hr className="border-gray-200 dark:border-zinc-700" />

            {/* Theme */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Theme</h3>
                <div className="flex gap-4">
                    {(['light', 'dim', 'dark'] as const).map((t) => (
                        <button
                            key={t}
                            onClick={() => onChange({ ...data, theme: t })}
                            className={`
                            px-4 py-2 rounded-lg capitalize
                            ${data.theme === t
                                    ? 'bg-blue-500 text-white ring-2 ring-blue-300'
                                    : 'bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700'}
                        `}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>

        </div>
    );
}
