"use client";

import { useState } from "react";
import { initialdata, Tweetdata } from "@/lib/types";
import { TweetCard } from "@/components/tweet-card";
import { TweetdataForm } from "@/components/tweet-data-form";
import { Download, RefreshCw } from "lucide-react";
import { toPng } from "html-to-image";

export default function Home() {
  const [data, setdata] = useState<Tweetdata>(initialdata);
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    const node = document.getElementById("tweet-card");
    if (!node) return;

    setIsExporting(true);
    try {
      const dataUrl = await toPng(node, {
        quality: 1.0, pixelRatio: 3,
        backgroundColor: data.theme === 'light' ? '#ffffff' : (data.theme === 'dim' ? '#15202b' : '#000000')
      });
      const link = document.createElement("a");
      link.download = `tweet-mockup-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Failed to export tweet image", err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 font-sans">
      <header className="border-b bg-white dark:bg-[#0a0a0a] border-gray-200 dark:border-zinc-800 p-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
              Tweet Mockup Generator
            </h1>
          </div>
          <button
            onClick={handleExport}
            disabled={isExporting}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold px-4 py-2 transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isExporting ? <RefreshCw className="animate-spin w-4 h-4" /> : <Download className="w-4 h-4" />}
            {isExporting ? "Exporting..." : "Download Image"}
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4 md:p-8 flex flex-col lg:flex-row gap-8">
        {/* Preview Section - Sticky on Desktop */}
        <section className="flex-1 flex flex-col items-center lg:items-start lg:sticky lg:top-24 h-fit">
          <div className="mb-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Preview</div>
          <div className="w-full flex justify-center lg:justify-start">
            {/* Wrapper for shadow/centering */}
            <TweetCard data={data} />
          </div>
          <div className="mt-6 text-sm text-gray-400 text-center lg:text-left max-w-md">
            Adjust the settings on the right to customize your tweet. Changes appear in real-time.
          </div>
        </section>

        {/* datauration Section */}
        <section className="flex-1 bg-white dark:bg-[#16181c] rounded-2xl shadow-sm border border-gray-200 dark:border-zinc-800 h-fit overflow-hidden">
          <div className="p-4 border-b border-gray-200 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/50">
            <h2 className="font-semibold text-lg">datauration</h2>
          </div>
          {/* child  component changin an parent component*/}
          <TweetdataForm data={data} onChange={setdata} />
        </section>
      </main>
    </div>
  );
}
