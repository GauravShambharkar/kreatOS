"use client";

import { useState } from "react";
import { initialLinkedindata, Linkedindata } from "@/lib/types";
import { LinkedinCard } from "./linkedin-card";
import { LinkedinDataForm } from "./linkedin-data-form";
import { Download, RefreshCw, Eye, Settings2 } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { toPng } from "html-to-image";

export default function LinkedinMockGenerator() {
  const [data, setdata] = useState<Linkedindata>(initialLinkedindata);
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    const node = document.getElementById("linkedin-card");
    if (!node) return;

    setIsExporting(true);
    try {
      const dataUrl = await toPng(node, {
        quality: 1.0,
        pixelRatio: 3,
        backgroundColor: data.theme === "light" ? "#ffffff" : "#1b1f23",
      });
      const link = document.createElement("a");
      link.download = `linkedin-mockup-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Failed to export LinkedIn mockup image", err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Studio Action Sub-Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl glass-panel border border-white/10 shadow-xl">
        <div className="flex items-center gap-3 text-left">
          <div className="p-2.5 rounded-xl bg-[#0a66c2] text-white shadow-md">
            <FaLinkedin className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span>LinkedIn Mockup Studio</span>
              <span className="text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                Live
              </span>
            </h1>
            <p className="text-xs text-gray-400">
              Customize professional headline, reaction icons (Like, Celebrate, Love), comments, and connection level.
            </p>
          </div>
        </div>

        <button
          onClick={handleExport}
          disabled={isExporting}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium rounded-full text-xs transition-all shadow-lg shadow-blue-500/20 border border-blue-400/30 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isExporting ? (
            <RefreshCw className="animate-spin w-4 h-4" />
          ) : (
            <Download className="w-4 h-4" />
          )}
          <span>{isExporting ? "Rendering 3x PNG..." : "Export High-Res PNG"}</span>
        </button>
      </div>

      {/* Main Studio Grid */}
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Preview Canvas (Left / Top) */}
        <section className="lg:col-span-7 flex flex-col items-center lg:sticky lg:top-24 space-y-4">
          <div className="w-full flex items-center justify-between px-2 text-xs text-gray-400 font-medium uppercase tracking-wider">
            <span className="flex items-center gap-1.5 text-blue-400">
              <Eye className="w-4 h-4" />
              <span>Canvas Preview</span>
            </span>
            <span className="capitalize px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300">
              Theme: {data.theme}
            </span>
          </div>

          {/* Canvas Wrapper */}
          <div className="w-full p-6 sm:p-10 rounded-3xl glass-card border border-white/10 flex justify-center items-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 pointer-events-none" />
            <LinkedinCard data={data} />
          </div>

          <p className="text-xs text-gray-400 text-center max-w-md">
            Changes update instantly on the canvas. Click export above for publication-ready PNG.
          </p>
        </section>

        {/* Configuration Panel (Right) */}
        <section className="lg:col-span-5 rounded-3xl glass-panel border border-white/10 overflow-hidden shadow-2xl">
          <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
            <h2 className="font-semibold text-sm text-white flex items-center gap-2">
              <Settings2 className="w-4 h-4 text-blue-400" />
              <span>Configuration Panel</span>
            </h2>
          </div>
          <div className="p-4 sm:p-6">
            <LinkedinDataForm data={data} onChange={setdata} />
          </div>
        </section>
      </main>
    </div>
  );
}

