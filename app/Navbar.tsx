"use client";

import { ChevronDown, Github, Menu, X, ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { motion } from "motion/react";

const tools = [
  {
    id: "tweet",
    name: "Tweet Mockup",
    shortName: "Tweet",
    href: "/tool/tweet-mockup-generator",
    icon: FaXTwitter,
    color: "text-sky-400",
    gradient: "from-sky-500/20 to-blue-500/20",
    activeBorder: "border-sky-500/50",
    description: "Create realistic tweet mockups"
  },
  {
    id: "insta",
    name: "Instagram Mockup",
    shortName: "Instagram",
    href: "/tool/insta-mockup-generator",
    icon: BsInstagram,
    color: "text-pink-500",
    gradient: "from-pink-500/20 to-purple-500/20",
    activeBorder: "border-pink-500/50",
    description: "Design stunning Insta posts"
  },
  {
    id: "linkedin",
    name: "LinkedIn Mockup",
    shortName: "LinkedIn",
    href: "/tool/linkedin-mockup-generator",
    icon: FaLinkedin,
    color: "text-blue-400",
    gradient: "from-blue-600/20 to-indigo-600/20",
    activeBorder: "border-blue-500/50",
    description: "Professional LinkedIn posts"
  },
  {
    id: "youtube",
    name: "YouTube Mockup",
    shortName: "YouTube",
    href: "/tool/youtube-mockup-generator",
    icon: GrYoutube,
    color: "text-red-500",
    gradient: "from-red-500/20 to-rose-600/20",
    activeBorder: "border-red-500/50",
    description: "High-quality YT mockups"
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const isStudioPage = pathname?.startsWith("/tool");
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Mode Indicator */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2.5 hover:opacity-90 transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-zinc-800/90 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform border border-zinc-700/80">
                <img className="size-5 filter invert opacity-80" src="/KreatOSLogo.svg" alt="kreatOS" />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-semibold tracking-tight text-zinc-200">
                  kreatOS
                </span>
                {isStudioPage && (
                  <span className="text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                    Studio
                  </span>
                )}
              </div>
            </Link>
          </div>

          {/* Desktop Studio Switcher or Standard Navigation */}
          {isStudioPage ? (
            /* Studio Mode Navigation: Tool Switcher Pills */
            <nav className="hidden md:flex items-center gap-1.5 p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
              {tools.map((tool) => {
                const isActive = pathname === tool.href;
                const Icon = tool.icon;
                return (
                  <Link
                    key={tool.id}
                    href={tool.href}
                    className={`relative flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      isActive
                        ? "text-zinc-100 bg-white/15 shadow-sm border border-white/20"
                        : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5 border border-transparent"
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${tool.color}`} />
                    <span>{tool.shortName}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeToolIndicator"
                        className="absolute inset-0 rounded-full bg-zinc-800/80 border border-zinc-600/50 -z-10"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
          ) : (
            /* Marketing Mode Navigation */
            <nav className="hidden md:flex items-center gap-1">
              <Link
                href="/"
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  pathname === "/"
                    ? "text-zinc-200 bg-white/10"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
                }`}
              >
                Home
              </Link>

              {/* Tools Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsToolsOpen(true)}
                onMouseLeave={() => setIsToolsOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all rounded-lg ${
                    isToolsOpen
                      ? "text-zinc-200 bg-white/10"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
                  }`}
                >
                  Tools
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isToolsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isToolsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-80 pt-2 z-50"
                  >
                    <div className="bg-zinc-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-2">
                      <div className="grid grid-cols-1 gap-1">
                        {tools.map((tool) => (
                          <Link
                            key={tool.name}
                            href={tool.href}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-all group/item border border-transparent hover:border-white/10"
                          >
                            <div className="p-2 rounded-lg bg-white/5 group-hover/item:bg-white/10 shadow-sm transition-colors">
                              <tool.icon className={`w-5 h-5 ${tool.color}`} />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-zinc-200">
                                {tool.name}
                              </div>
                              <div className="text-xs text-zinc-400 line-clamp-1">
                                {tool.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-2 p-2 bg-white/5 rounded-xl border border-white/5 text-center">
                        <Link
                          href="/#tools-grid"
                          className="inline-flex items-center gap-1 text-xs font-medium text-zinc-300 hover:text-zinc-100 transition-colors"
                        >
                          <Sparkles className="w-3 h-3 text-zinc-400" /> Explore All Studio Generators
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              <Link
                href="/about"
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  pathname === "/about"
                    ? "text-white bg-white/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                About
              </Link>
            </nav>
          )}

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
              title="GitHub Repository"
            >
              <Github className="w-5 h-5" />
            </Link>

            {isStudioPage ? (
              <Link
                href="/"
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-white/10 hover:bg-white/20 text-gray-200 text-xs font-medium rounded-full border border-white/15 transition-all active:scale-95"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Landing Page</span>
              </Link>
            ) : (
              <Link
                href="/tool/tweet-mockup-generator"
                className="hidden sm:flex items-center gap-2 font-medium px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs rounded-full transition-all shadow-lg shadow-blue-500/20 border border-blue-400/30 active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Launch Studio</span>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-300 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 bottom-0 top-16 h-[calc(100vh-64px)] overflow-y-auto bg-zinc-950/98 backdrop-blur-2xl border-t border-white/10 px-4 py-6 space-y-6 z-40 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center justify-around border-b border-white/10 pb-4">
              <Link
                href="/"
                className={`text-base font-medium transition-colors ${
                  pathname === "/" ? "text-blue-400" : "text-gray-300 hover:text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`text-base font-medium transition-colors ${
                  pathname === "/about" ? "text-blue-400" : "text-gray-300 hover:text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </div>

            <div className="space-y-3">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-1 block">
                Studio Generators
              </span>
              <div className="grid grid-cols-1 gap-2">
                {tools.map((tool) => (
                  <Link
                    key={tool.name}
                    href={tool.href}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
                      pathname === tool.href
                        ? "bg-blue-500/10 border-blue-500/40 text-white"
                        : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className={`p-2 rounded-lg bg-white/10 ${tool.color}`}>
                      <tool.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">{tool.name}</div>
                      <div className="text-xs text-gray-400">{tool.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 pt-6 border-t border-white/10">
            <Link
              href="/tool/tweet-mockup-generator"
              className="w-full text-center py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-xl shadow-lg shadow-blue-500/20"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Open Studio Workspace
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

