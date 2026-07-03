"use client";

import { useState } from "react";
import { initialLinkedindata, Linkedindata } from "@/lib/types";
import { LinkedinCard } from "./linkedin-card";
import { LinkedinDataForm } from "./linkedin-data-form";
import { Download, RefreshCw, ArrowLeft } from "lucide-react";
import { toPng } from "html-to-image";
import Link from "next/link";

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
    <div className="min-h-screen bg-gray-100 dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-150 font-sans">
      {/* Top Header Bar */}
      <header className="border-b bg-white dark:bg-[#0a0a0a] border-gray-200 dark:border-zinc-800 p-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
              title="Back to Home"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-xl font-light bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              LinkedIn Mockup Generator
            </h1>
          </div>
          <button
            onClick={handleExport}
            disabled={isExporting}
            className="flex items-center gap-2 px-4 font-light py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed text-sm shadow-md"
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

      {/* Main Split Layout Grid */}
      <main className="max-w-6xl mx-auto p-4 md:p-8 flex flex-col lg:flex-row gap-8">
        {/* Preview Column (Left) */}
        <section className="flex-1 flex flex-col items-center lg:items-start lg:sticky lg:top-24 h-fit">
          <div className="mb-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
            Preview
          </div>
          <div className="w-full flex justify-center lg:justify-start">
            <LinkedinCard data={data} />
          </div>
          <div className="mt-6 text-sm text-gray-400 text-center lg:text-left max-w-md">
            Adjust the settings on the right to customize your LinkedIn post. All changes appear in real-time in high-fidelity.
          </div>
        </section>

        {/* Configuration Panel Column (Right) */}
        <section className="flex-1 bg-white dark:bg-[#16181c] rounded-2xl shadow-sm border border-gray-200 dark:border-zinc-800 h-fit overflow-hidden">
          <div className="p-4 border-b border-gray-200 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/50 text-left">
            <h2 className="font-semibold text-lg">Configuration</h2>
          </div>
          <LinkedinDataForm data={data} onChange={setdata} />
        </section>
      </main>
    </div>
  );
}
