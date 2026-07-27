"use client";

import { useState } from "react";
import { initialInstadata, Instadata } from "@/lib/types";
import { InstaReelCard } from "@/components/Insta-Mockup-Generator/insta-reel-card";
import { InstaPostCard } from "./insta-post-card";
import { Download, RefreshCw, Eye, Settings2 } from "lucide-react";
import { BsInstagram } from "react-icons/bs";
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Studio Action Sub-Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl glass-panel border border-white/10 shadow-xl">
        <div className="flex items-center gap-3 text-left">
          <div className="p-2.5 rounded-xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-md">
            <BsInstagram className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span>Instagram Mockup Studio</span>
              <span className="text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 border border-pink-400/30">
                {data.type === "post" ? "Feed Post" : "Reels Mode"}
              </span>
            </h1>
            <p className="text-xs text-gray-400">
              Customize caption, tagged locations, reel audio info, user profiles, and engagement numbers.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Post/Reel Selector Pills */}
          <div className="flex items-center p-1 rounded-full bg-white/5 border border-white/10 text-xs">
            <button
              onClick={() => setdata({ ...data, type: "post" })}
              className={`px-3 py-1.5 rounded-full font-medium transition-all ${
                data.type === "post"
                  ? "bg-pink-500 text-white shadow-sm"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Feed Post
            </button>
            <button
              onClick={() => setdata({ ...data, type: "reel" })}
              className={`px-3 py-1.5 rounded-full font-medium transition-all ${
                data.type === "reel"
                  ? "bg-purple-600 text-white shadow-sm"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Reel Video
            </button>
          </div>

          <button
            onClick={handleExport}
            disabled={isExporting}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-medium rounded-full text-xs transition-all shadow-lg shadow-pink-500/20 border border-pink-400/30 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isExporting ? (
              <RefreshCw className="animate-spin w-4 h-4" />
            ) : (
              <Download className="w-4 h-4" />
            )}
            <span>{isExporting ? "Rendering 3x PNG..." : "Export High-Res PNG"}</span>
          </button>
        </div>
      </div>

      {/* Main Studio Grid */}
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Preview Canvas (Left / Top) */}
        <section className="lg:col-span-7 flex flex-col items-center lg:sticky lg:top-24 space-y-4">
          <div className="w-full flex items-center justify-between px-2 text-xs text-gray-400 font-medium uppercase tracking-wider">
            <span className="flex items-center gap-1.5 text-pink-400">
              <Eye className="w-4 h-4" />
              <span>Canvas Preview ({data.type})</span>
            </span>
            <span className="capitalize px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300">
              Theme: {data.theme}
            </span>
          </div>

          {/* Canvas Wrapper */}
          <div className="w-full p-6 sm:p-10 rounded-3xl glass-card border border-white/10 flex justify-center items-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-purple-500/5 pointer-events-none" />
            {data.type === "post" ? (
              <InstaPostCard data={data} />
            ) : (
              <InstaReelCard data={data} />
            )}
          </div>

          <p className="text-xs text-gray-400 text-center max-w-md">
            Changes update instantly on the canvas. Click export above for publication-ready PNG.
          </p>
        </section>

        {/* Configuration Panel (Right) */}
        <section className="lg:col-span-5 rounded-3xl glass-panel border border-white/10 overflow-hidden shadow-2xl">
          <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
            <h2 className="font-semibold text-sm text-white flex items-center gap-2">
              <Settings2 className="w-4 h-4 text-pink-400" />
              <span>Configuration Panel</span>
            </h2>
          </div>
          <div className="p-4 sm:p-6">
            <InstaDataForm data={data} onChange={setdata} />
          </div>
        </section>
      </main>
    </div>
  );
}

