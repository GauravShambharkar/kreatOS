"use client";

import { useState } from "react";
import { initialInstadata, Instadata } from "@/lib/types";
import { InstaReelCard } from "@/components/Insta-Mockup-Generator/insta-reel-card";
import { InstaPostCard } from "./insta-post-card";
import { ArrowLeft, Download, Link, RefreshCw } from "lucide-react";
import { toPng } from "html-to-image";
import { InstaDataForm } from "./insta-data-form";

export default function InstaMockGenerator() {
  const [data, setdata] = useState<Instadata>(initialInstadata);
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    const isReel = data.type === "reel";
    const node = document.getElementById(isReel ? "insta-reel-card" : "insta-post-card");
    if (!node) return;

    setIsExporting(true);
    try {
      const dataUrl = await toPng(node, {
        quality: 1.0,
        pixelRatio: 3,
        backgroundColor: data.theme === "light" ? "#ffffff" : "#000000",
      });
      const link = document.createElement("a");
      link.download = `instagram-${data.type}-mockup-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error(`Failed to export instagram ${data.type} image`, err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 font-sans">
      <header className="border-b bg-white dark:bg-[#0a0a0a] border-gray-200 dark:border-zinc-800 p-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"

            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-xl font-light bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Instagram Mockup Generator
            </h1>
          </div>
          <button
            onClick={handleExport}
            disabled={isExporting}
            className="flex items-center gap-2 px-4 font-light py-2 bg-linear-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isExporting ? (
              <RefreshCw className="animate-spin w-4 h-4" />
            ) : (
              <Download className="w-4 h-4" />
            )}
            {isExporting ? "Exporting..." : "Download Image"}
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4 md:p-8 flex flex-col lg:flex-row gap-8">

        {/* Preview Section */}
        <section className="flex-1 flex flex-col items-center lg:items-start lg:sticky lg:top-24 h-fit">
          <div className="mb-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
            Preview
          </div>
          <div className="w-full flex justify-center lg:justify-start">
            {data.type === 'post' ? (
              <InstaPostCard data={data} />
            ) : (
              <InstaReelCard data={data} />
            )}
          </div>
          <div className="mt-6 text-sm text-gray-400 text-center lg:text-left max-w-md">
            Customize your Instagram {data.type} using the form. All changes are reflected instantly in high-quality preview.
          </div>
        </section>

        {/* Configuration Section */}
        <section className="flex-1 bg-white dark:bg-[#16181c] rounded-2xl shadow-sm border border-gray-200 dark:border-zinc-800 h-fit overflow-hidden">
          <div className="p-4 border-b flex justify-between items-center border-gray-200 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/50">
            <h2 className="font-semibold text-lg">Configuration</h2>
            <select
              name="postType"
              value={data.type}
              onChange={(e) => setdata({ ...data, type: e.target.value as 'post' | 'reel' })}
              className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="post">Post</option>
              <option value="reel">Reel</option>
            </select>
          </div>
          <InstaDataForm data={data} onChange={setdata} />
        </section>
      </main>
    </div>
  );
}
