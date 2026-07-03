"use client";

import { ChevronDown, Github, Instagram, Linkedin, Menu, Twitter, X, Youtube } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { motion } from "motion/react";

const tools = [
  {
    name: "Tweet Mockup",
    href: "/tool/tweet-mockup-generator",
    icon: FaXTwitter,
    color: "text-gray-300",
    description: "Create realistic tweet mockups"
  },
  {
    name: "Instagram Mockup",
    href: "/tool/insta-mockup-generator",
    icon: BsInstagram,
    color: "text-pink-500",
    description: "Design stunning Insta posts"
  },
  {
    name: "LinkedIn Mockup",
    href: "/tool/linkedin-mockup-generator",
    icon: FaLinkedin,
    color: "text-blue-400",
    description: "Professional LinkedIn posts"
  },
  {
    name: "YouTube Mockup",
    href: "/tool/youtube-mockup-generator",
    icon: GrYoutube,
    color: "text-red-500",
    description: "High-quality YT mockups"
  },
];

const Navbar = () => {


  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);



  return (
    <>
      <header className="bg-[#ffffff00] backdrop-blur-lg border-gray-200 dark:border-zinc-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 hover:opacity-90 transition-all group"
            >
              <div className="w-9 h-9 rounded-lg bg-linear-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <img className="size-6" src="/KreatOSLogo.svg" alt="kreatOS" />
              </div>
              <h1 className="text-xl font-bold tracking-tighter bg-linear-to-t from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                kreatOS
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              <Link
                href="/"
                className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-900 transition-all"
              >
                Home
              </Link>

              {/* Tools Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsToolsOpen(true)}
                onMouseLeave={() => setIsToolsOpen(false)}
              >
                <button className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all rounded-lg ${isToolsOpen ? 'text-blue-600 dark:text-blue-400 bg-gray-50 dark:bg-zinc-900' : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-zinc-900'}`}>
                  Tools
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isToolsOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {/* animate-in fade-in zoom-in-95 duration-75 */}
                {isToolsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-80 pt-2 ">
                    <div className="bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden p-2">
                      <div className="grid grid-cols-1 gap-1">
                        {tools.map((tool) => (
                          <Link
                            key={tool.name}
                            href={tool.href}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-900 transition-all group/item"
                          >
                            <div className={`p-2 rounded-lg bg-gray-100 dark:bg-zinc-900 group-hover/item:bg-white dark:group-hover/item:bg-zinc-800 shadow-sm transition-colors ${tool.color}`}>
                              <tool.icon className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                                {tool.name}
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
                                {tool.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-2 p-2 bg-gray-50 dark:bg-zinc-900/50 rounded-xl border border-gray-100 dark:border-zinc-800/50">
                        <Link href="/#tools" className="flex items-center justify-center py-2 text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline">
                          View All Tools
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              <Link
                href="/about"
                className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-900 transition-all"
              >
                About
              </Link>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-3">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-zinc-900"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>

              <Link
                href="/#tools"
                className="hidden sm:flex font-light px-5 py-2.5 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20 active:scale-95 whitespace-nowrap"
              >
                Get Started
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-900 rounded-lg transition-colors"
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
          <div className="md:hidden fixed inset-x-0 bottom-0 top-16 h-[calc(100vh-64px)] overflow-y-auto bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border-t border-gray-200 dark:border-zinc-800 px-4 py-6 space-y-6 z-40 flex flex-col justify-between animate-in slide-in-from-top-4 duration-300">
            <div className="space-y-6">
              {/* Primary Pages Links */}
              <div className="flex items-center gap-6 border-b border-gray-100 dark:border-zinc-900 pb-4">
                <Link
                  href="/"
                  className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
              </div>

              {/* Available Tools Grid */}
              <div className="space-y-3.5">
                <span className="text-[10px] font-bold text-gray-405 dark:text-zinc-500 uppercase tracking-widest px-1 block">
                  Available Tools
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {tools.map((tool) => (
                    <Link
                      key={tool.name}
                      href={tool.href}
                      className="flex items-center gap-2 p-2.5 rounded-2xl bg-gray-50/50 dark:bg-zinc-900/50 hover:bg-gray-100 dark:hover:bg-zinc-900 border border-gray-100 dark:border-zinc-800/80 transition-all"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className={`p-1.5 rounded-lg bg-white dark:bg-zinc-800 shadow-sm ${tool.color} flex-shrink-0`}>
                        <tool.icon className="w-4 h-4" />
                      </div>
                      <span className="font-medium text-xs text-gray-800 dark:text-gray-200 truncate">
                        {tool.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions Area */}
            <div className="flex flex-col gap-2.5 pt-6 border-t border-gray-100 dark:border-zinc-900">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl border border-gray-200 dark:border-zinc-800 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-50 dark:hover:bg-zinc-900 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </Link>
              <Link
                href="/#tools"
                className="w-full text-center py-3 bg-blue-600 text-white text-sm font-medium rounded-xl shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started Free
              </Link>
            </div>
          </div>
        )}
      </header>
    </>

  );
};

export default Navbar;
