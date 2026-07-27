"use client";

import Link from "next/link";
import { ArrowRight, Zap, Shield, Sliders, Image as ImageIcon, CheckCircle2, Terminal } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { motion } from "motion/react";
import { useState } from "react";

export default function Home() {
  const [activePreviewTool, setActivePreviewTool] = useState<"tweet" | "insta" | "linkedin" | "youtube">("tweet");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as const;

  const item = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.16, 1, 0.3, 1] as const,
        duration: 0.45,
      },
    },
  } as const;

  const tools = [
    {
      id: "tweet-mockup-generator",
      name: "Tweet Studio",
      subtitle: "X / Twitter",
      description: "Build crisp X/Tweet mockups with verified badges, real-time metrics, attached media, and light/dim/dark themes.",
      href: "/tool/tweet-mockup-generator",
      icon: FaXTwitter,
      category: "Microblogging",
      logoColor: "text-sky-400",
      logoBg: "bg-sky-500/10 border-sky-500/20",
    },
    {
      id: "insta-mockup-generator",
      name: "Instagram Studio",
      subtitle: "Feed & Reels",
      description: "Generate pixel-perfect Instagram Feed Posts and Reels with verified checkmarks, location tags, and audio metadata.",
      href: "/tool/insta-mockup-generator",
      icon: BsInstagram,
      category: "Visual Feed",
      logoColor: "text-pink-400",
      logoBg: "bg-pink-500/10 border-pink-500/20",
    },
    {
      id: "linkedin-mockup-generator",
      name: "LinkedIn Studio",
      subtitle: "Professional Posts",
      description: "Design high-converting LinkedIn post mockups complete with reaction pickers, professional headlines, and connection degrees.",
      href: "/tool/linkedin-mockup-generator",
      icon: FaLinkedin,
      category: "Professional Network",
      logoColor: "text-blue-400",
      logoBg: "bg-blue-500/10 border-blue-500/20",
    },
    {
      id: "youtube-mockup-generator",
      name: "YouTube Studio",
      subtitle: "Watch Page",
      description: "Simulate YouTube watch page interface complete with video thumbnails, channel subscriber counts, and view counters.",
      href: "/tool/youtube-mockup-generator",
      icon: GrYoutube,
      category: "Video Platform",
      logoColor: "text-red-500",
      logoBg: "bg-red-500/10 border-red-500/20",
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Real-Time Canvas Engine",
      description: "Keystrokes, image uploads, and stat changes update live on a high-fidelity render viewport without delay.",
    },
    {
      icon: ImageIcon,
      title: "3x High-Res PNG Export",
      description: "Export razor-sharp graphics formatted at 3x pixel density for presentation slides, pitch decks, and portfolio sites.",
    },
    {
      icon: Sliders,
      title: "Granular Control Deck",
      description: "Configure profile avatars, verified badges, timestamp sources, dark/light themes, and custom metrics.",
    },
    {
      icon: Shield,
      title: "100% Browser Local Privacy",
      description: "Zero backend tracking or mandatory signup. Image rendering runs locally inside your browser runtime.",
    },
  ];

  return (
    <div className="min-h-screen relative text-zinc-300 selection:bg-zinc-800 selection:text-zinc-200">
      {/* Subtle top grid background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & CTAs */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-6 space-y-6 text-left"
          >
            <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
              <span>Studio Console for Content Creators & Agencies</span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-200 leading-[1.15]"
            >
              Precision Social Media <br />
              <span className="text-zinc-400 font-medium">
                Mockup Studio Engine
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-base sm:text-lg text-zinc-400 font-medium leading-relaxed max-w-xl"
            >
              Design publication-ready mockups for Twitter/X, Instagram, LinkedIn, and YouTube. Instant 3x high-res PNG renders, zero user tracking, and 100% browser-local execution.
            </motion.p>

            <motion.div variants={item} className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/tool/tweet-mockup-generator"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-200 hover:bg-zinc-300 text-zinc-950 font-semibold text-xs sm:text-sm transition-all shadow-md active:scale-95"
              >
                <span>Launch Studio Console</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#tools-grid"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 font-medium text-xs sm:text-sm transition-all border border-zinc-800 active:scale-95"
              >
                <span>Browse All Workspaces</span>
              </Link>
            </motion.div>

            {/* Quick Tech Specs */}
            <motion.div variants={item} className="pt-4 flex items-center gap-6 text-xs text-zinc-400 font-medium border-t border-zinc-900">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400" />
                <span>3x PNG Export</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400" />
                <span>Zero Account Needed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400" />
                <span>Client-Side Renders</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Live Studio Workstation Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="rounded-2xl bg-zinc-950/80 border border-zinc-800 shadow-2xl p-4 space-y-4">
              {/* Studio Header bar */}
              <div className="flex items-center justify-between pb-3 border-b border-zinc-850">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-zinc-400" />
                  <span className="text-xs font-semibold text-zinc-300">Preview Workstation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  {(["tweet", "insta", "linkedin", "youtube"] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setActivePreviewTool(t)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                        activePreviewTool === t
                          ? "bg-zinc-800 text-zinc-200 border border-zinc-700"
                          : "text-zinc-500 hover:text-zinc-300"
                      }`}
                    >
                      {t === "tweet" ? "X" : t === "insta" ? "Insta" : t === "linkedin" ? "LinkedIn" : "YouTube"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Live Mockup Card Preview */}
              <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800/80 min-h-[260px] flex items-center justify-center">
                {activePreviewTool === "tweet" && (
                  <div className="w-full max-w-md p-4 rounded-2xl bg-black border border-zinc-800 text-left space-y-3 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center font-medium text-xs text-zinc-300">
                          KS
                        </div>
                        <div>
                          <div className="flex items-center gap-1">
                            <span className="text-xs font-semibold text-zinc-200">KreatOS Studio</span>
                            <span className="text-xs text-zinc-400">✓</span>
                          </div>
                          <span className="text-[11px] text-zinc-500 font-medium">@kreatos_app</span>
                        </div>
                      </div>
                      <FaXTwitter className="w-4 h-4 text-zinc-400" />
                    </div>
                    <p className="text-xs text-zinc-300 font-medium leading-relaxed">
                      Build publication-ready social media mockups instantly with zero login required. Designed for creators, marketers, and design teams.
                    </p>
                    <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-2 border-t border-zinc-900 font-medium">
                      <span>12:40 PM · Jul 27, 2026</span>
                      <span>1.4M Views</span>
                    </div>
                  </div>
                )}

                {activePreviewTool === "insta" && (
                  <div className="w-full max-w-sm p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-left space-y-3 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[10px] font-medium text-zinc-300">
                          IG
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-zinc-200 block">kreatos.studio</span>
                          <span className="text-[10px] text-zinc-500 font-medium">Tokyo, Japan</span>
                        </div>
                      </div>
                      <BsInstagram className="w-4 h-4 text-zinc-400" />
                    </div>
                    <div className="h-32 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs text-zinc-500 font-medium">
                      Attached Feed Photo / Visual Asset
                    </div>
                    <p className="text-xs text-zinc-300 font-medium leading-relaxed">
                      <span className="font-semibold text-zinc-200">kreatos.studio</span> Elevating social media proposal slides and design prototypes ✨
                    </p>
                  </div>
                )}

                {activePreviewTool === "linkedin" && (
                  <div className="w-full max-w-md p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-left space-y-3 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-medium text-zinc-300">
                          LK
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-zinc-200 block">Alex Johnson · 1st</span>
                          <span className="text-[10px] text-zinc-500 font-medium">Principal Product Designer</span>
                        </div>
                      </div>
                      <FaLinkedin className="w-4 h-4 text-zinc-400" />
                    </div>
                    <p className="text-xs text-zinc-300 font-medium leading-relaxed">
                      Excited to announce our new studio workflow release. High-res mockup generation built for professional presentation decks!
                    </p>
                    <div className="flex items-center gap-4 text-[11px] text-zinc-500 pt-2 border-t border-zinc-900 font-medium">
                      <span>👍 4,820 Reactions</span>
                      <span>💬 312 Comments</span>
                    </div>
                  </div>
                )}

                {activePreviewTool === "youtube" && (
                  <div className="w-full max-w-md p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-left space-y-3 shadow-lg">
                    <div className="h-32 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs text-zinc-500 font-medium relative overflow-hidden">
                      <span>Video Thumbnail Preview</span>
                      <span className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/80 text-[10px] text-zinc-300 font-mono">14:20</span>
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="text-xs font-semibold text-zinc-200">How We Redesigned KreatOS Studio Console</h4>
                        <span className="text-[11px] text-zinc-500 font-medium block pt-1">Code Academy · 850K views · 2 days ago</span>
                      </div>
                      <GrYoutube className="w-4 h-4 text-zinc-400 shrink-0" />
                    </div>
                  </div>
                )}
              </div>

              {/* Console Action Bar */}
              <div className="flex items-center justify-between text-xs text-zinc-400 pt-1 font-medium">
                <span>Selected Canvas: {activePreviewTool.toUpperCase()} WORKSPACE</span>
                <Link href={`/tool/${tools.find(t => t.id.startsWith(activePreviewTool))?.id}`} className="text-zinc-300 hover:text-zinc-100 flex items-center gap-1 font-medium">
                  <span>Open Full Editor</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools Grid Section */}
      <section id="tools-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-zinc-900">
        <div className="text-left space-y-3 mb-12">
          <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider block">
            Studio Modules
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-200">
            Available Workspace Generators
          </h2>
          <p className="text-sm text-zinc-400 font-medium max-w-xl">
            Choose a social media workspace below to launch the live rendering environment and customize your mockups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {tools.map((t) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl bg-zinc-950/70 border border-zinc-850 p-5 flex flex-col justify-between text-left space-y-4 hover:border-zinc-700 transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl ${t.logoBg} flex items-center justify-center transition-colors`}>
                      <Icon className={`w-5 h-5 ${t.logoColor}`} />
                    </div>
                    <span className="text-[10px] uppercase font-medium px-2 py-0.5 rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800">
                      {t.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-zinc-200 group-hover:text-zinc-100 transition-colors">
                      {t.name}
                    </h3>
                    <span className="text-xs font-medium text-zinc-400 block pt-0.5">
                      {t.subtitle}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 font-medium leading-relaxed">
                    {t.description}
                  </p>
                </div>

                <Link
                  href={t.href}
                  className="inline-flex items-center justify-between w-full pt-3 border-t border-zinc-900 text-xs font-medium text-zinc-300 group-hover:text-zinc-100 transition-colors"
                >
                  <span>Launch Workspace</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Craft Capabilities Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-zinc-900">
        <div className="text-left space-y-3 mb-12">
          <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider block">
            Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-200">
            Engineered for High-Craft Workflows
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="p-5 rounded-2xl bg-zinc-950/50 border border-zinc-850 text-left space-y-3">
                <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-zinc-200">
                  {f.title}
                </h3>
                <p className="text-xs text-zinc-400 font-medium leading-relaxed">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-zinc-900 text-left flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
          <span>KreatOS Studio Console · All client-side renders.</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/about" className="hover:text-zinc-200 transition-colors">
            About
          </Link>
          <Link href="/tool/tweet-mockup-generator" className="hover:text-zinc-200 transition-colors">
            Tweet Generator
          </Link>
          <Link href="/tool/insta-mockup-generator" className="hover:text-zinc-200 transition-colors">
            Insta Generator
          </Link>
        </div>
      </footer>
    </div>
  );
}
