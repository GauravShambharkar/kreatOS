"use client";

import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { motion } from "motion/react";

export default function Home() {


  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // delay between items
      },
    },
  } as const;

  const item = {

    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut" as const,
        duration: 0.4,
      },
    },
  } as const;
  const tools = [
    {
      name: "Tweet Mock Generator",
      description:
        "Create realistic, high-quality tweet mockups in seconds. Perfect for presentations, portfolios, and social media content.",
      href: "/tool/tweet-mockup-generator",
      icon: FaXTwitter,
      gradient: "from-blue-500 to-sky-400",
      bgGradient: "from-blue-500/10 to-sky-400/10",
      status: "Available",
    },
    {
      name: "Instagram Post Mockup Generator",
      description:
        "Design stunning Instagram post mockups with customizable layouts and filters.",
      href: "/tool/insta-mockup-generator",
      icon: BsInstagram,
      gradient: "from-pink-500 to-purple-500",
      bgGradient: "from-pink-500/10 to-purple-500/10",
      status: "Available",
    },
    {
      name: "LinkedIn Post Mockup Generator",
      description:
        "Generate professional LinkedIn posts with engagement metrics and branding.",
      href: "/tool/linkedin-mockup-generator",
      icon: FaLinkedin,
      gradient: "from-blue-600 to-indigo-600",
      bgGradient: "from-blue-600/10 to-indigo-600/10",
      status: "Available",
    },
    {
      name: "Youtube Mockup Generator",
      description:
        "Generate professional Youtube posts with engagement metrics and branding.",
      href: "/tool/youtube-mockup-generator",
      icon: GrYoutube,
      gradient: "from-blue-600 to-indigo-600",
      bgGradient: "from-blue-600/10 to-indigo-600/10",
      status: "Available",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Text & CTA */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-600 dark:bg-white/20 border border-white dark:border-[#aaaaaa]">
              <Sparkles className="w-3.5 h-3.5 text-blue-200 dark:text-blue-400" />
              <span className="text-[10px] font-medium text-[white]">
                Professional Tools for Content Creators
              </span>
            </div>

            <motion.h2
              variants={item}
              className="leading-tight text-[#ffffff] mix-blend-plus-darker tracking-tighter text-[36px] sm:text-[42px] md:text-[48px] font-extralight"
            >
              Create Stunning <br />
              <span className="font-white">Social Media Mockups</span>
            </motion.h2>

            <motion.p
              variants={item}
              className="text-[16px] md:text-[20px] mix-blend-plus-lighter text-white leading-normal font-extralight tracking-tight dark:text-[#9d9d9db6] max-w-3xl"
            >
              A comprehensive suite of tools designed for content creators,
              marketers, and designers to craft pixel-perfect social media mockups
              effortlessly.
            </motion.p>

            <motion.div variants={item} className="pt-2 flex justify-end md:justify-start">
              <Link
                href="#tools-grid"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors shadow-lg shadow-blue-600/20 text-[10px]"
              >
                <span>Try Now</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Orbits Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex items-center justify-center w-[85%] sm:w-full max-w-[320px] sm:max-w-[380px] md:max-w-[450px] aspect-square mx-auto mt-8 md:mt-0"
          >
            {/* Dashed Orbits */}
            {/* Outer Orbit Line (contracted from inset-0 to inset-[8%] to prevent overflow) */}
            <div className="absolute inset-[8%] border border-dashed border-blue-400/40 rounded-full animate-[spin_100s_linear_infinite]" />
            
            {/* Middle Orbit Line (contracted from inset-[12.5%] to inset-[20%]) */}
            <div className="absolute inset-[20%] border border-dashed border-blue-400/40 rounded-full animate-[spin_70s_linear_infinite_reverse]" />
            
            {/* Inner Orbit Line (inset-[36%]) */}
            <div className="absolute inset-[36%] border border-dashed border-blue-400/40 rounded-full" />

            {/* Social Media Badges revolving slowly */}
            {/* Outer Orbit Badges (revolving clockwise at 45s, coordinates adjusted for 8% inset) */}
            <div className="absolute inset-0 animate-[spin_45s_linear_infinite]">
              {/* X Logo (Outer Orbit, Top-Right) */}
              <div className="absolute left-[79.7%] top-[20.3%] -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="animate-[spin_45s_linear_infinite_reverse]">
                  <motion.div whileHover={{ scale: 1.15 }}>
                    <div className="w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center text-white border border-zinc-800 shadow-2xl">
                      <FaXTwitter className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* YouTube Logo (Outer Orbit, Bottom-Left) */}
              <div className="absolute left-[20.3%] top-[79.7%] -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="animate-[spin_45s_linear_infinite_reverse]">
                  <motion.div whileHover={{ scale: 1.15 }}>
                    <div className="w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#ff0000] rounded-2xl flex items-center justify-center text-white shadow-2xl">
                      <GrYoutube className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Middle Orbit Badges (revolving counter-clockwise at 35s, coordinates adjusted for 20% inset) */}
            <div className="absolute inset-0 animate-[spin_35s_linear_infinite_reverse]">
              {/* Instagram Logo (Middle Orbit, Top-Left) */}
              <div className="absolute left-[28.8%] top-[28.8%] -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="animate-[spin_35s_linear_infinite]">
                  <motion.div whileHover={{ scale: 1.15 }}>
                    <div className="w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-2xl flex items-center justify-center text-white shadow-2xl">
                      <BsInstagram className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* LinkedIn Logo (Middle Orbit, Bottom-Right) */}
              <div className="absolute left-[71.2%] top-[71.2%] -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="animate-[spin_35s_linear_infinite]">
                  <motion.div whileHover={{ scale: 1.15 }}>
                    <div className="w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#0a66c2] rounded-2xl flex items-center justify-center text-white shadow-2xl">
                      <FaLinkedin className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
      <motion.section
        id="tools-grid"
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 scroll-mt-20">
        <div className="mb-12">
          <h3 className="text-3xl mb-3 tracking-tighter font-extralight">
            Available Tools
          </h3>
          <p className="text-gray-600 tracking-tighter font-extralight dark:text-gray-400 text-lg">
            Choose from our growing collection of professional mockup generators
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {tools.map((tool) => {
             const Icon = tool.icon;
             const isAvailable = tool.status === "Available";

             // Map tool names to their corresponding brand classes and shadow glows
             let brandBg = "bg-black border border-zinc-800";
             let brandGlow = "shadow-[0_8px_30px_rgba(0,0,0,0.15)]";
             if (tool.name.toLowerCase().includes("instagram")) {
               brandBg = "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]";
               brandGlow = "shadow-[0_8px_30px_rgba(238,42,123,0.3)]";
             } else if (tool.name.toLowerCase().includes("linkedin")) {
               brandBg = "bg-[#0a66c2]";
               brandGlow = "shadow-[0_8px_30px_rgba(10,102,194,0.3)]";
             } else if (tool.name.toLowerCase().includes("youtube")) {
               brandBg = "bg-[#ff0000]";
               brandGlow = "shadow-[0_8px_30px_rgba(255,0,0,0.35)]";
             }

             return (
               <Link
                 key={tool.name}
                 href={isAvailable ? tool.href : "#"}
                 className={`group relative overflow-hidden rounded-[32px] border border-gray-200/60 dark:border-zinc-800/80 bg-white/95 dark:bg-[#16181c]/90 p-6 sm:p-8 min-h-[220px] sm:min-h-[240px] transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] flex flex-col justify-between ${
                   !isAvailable ? "opacity-75 cursor-not-allowed" : ""
                 }`}
                 onClick={(e) => !isAvailable && e.preventDefault()}
               >
                 {/* Content */}
                 <div className="relative z-10 space-y-1.5 max-w-[75%] text-left">
                   <h4 className="text-xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100 transition-all duration-300">
                     {tool.name}
                   </h4>
                   <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-normal">
                     {tool.description}
                   </p>
                 </div>

                 {/* Arrow or Status */}
                 <div className="absolute top-6 right-6 z-10">
                   {isAvailable ? (
                     <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-zinc-900 dark:group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                   ) : (
                     <span className="px-3 py-1 text-[10px] font-semibold rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400">
                       {tool.status}
                     </span>
                   )}
                 </div>

                 {/* Large Brand Icon at bottom-right (cut-off) */}
                 <div
                   className={`absolute right-[-12px] bottom-[-12px] sm:right-[-16px] sm:bottom-[-16px] w-20 h-20 sm:w-24 sm:h-24 rounded-[22px] sm:rounded-[28px] ${brandBg} ${brandGlow} flex items-end justify-end p-5 sm:p-6 text-white transition-transform duration-500 group-hover:scale-105`}
                 >
                   <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white transform translate-x-1.5 translate-y-1.5 sm:translate-x-2 sm:translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 sm:group-hover:translate-x-1.5 sm:group-hover:translate-y-1.5 transition-transform duration-300" />
                 </div>
               </Link>
             );
           })}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-gray-250 dark:border-zinc-800/80 bg-white/70 dark:bg-[#0a0a0a]/75 backdrop-blur-2xl py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 pb-12 border-b border-gray-200 dark:border-zinc-800/60">
            {/* Column 1: Brand & Info */}
            <div className="space-y-4 col-span-1">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-xl font-medium tracking-tight text-zinc-900 dark:text-white">kreatOS</span>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-light text-left">
                A professional suite of realistic mockup generators designed to elevate your social media content, presentations, and portfolios.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <a href="#" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200" aria-label="X (formerly Twitter)">
                  <FaXTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200" aria-label="Instagram">
                  <BsInstagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200" aria-label="LinkedIn">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200" aria-label="YouTube">
                  <GrYoutube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Column 2: Tools */}
            <div className="space-y-4 text-left">
              <h4 className="text-sm font-semibold tracking-wider text-zinc-900 dark:text-zinc-100 uppercase">Mockups</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/tool/tweet-mockup-generator" className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors duration-200 font-light">
                    Tweet Mock Generator
                  </Link>
                </li>
                <li>
                  <Link href="/tool/insta-mockup-generator" className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors duration-200 font-light">
                    Instagram Mockup
                  </Link>
                </li>
                <li>
                  <Link href="/tool/linkedin-mockup-generator" className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors duration-200 font-light">
                    LinkedIn Mockup
                  </Link>
                </li>
                <li>
                  <Link href="/tool/youtube-mockup-generator" className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors duration-200 font-light">
                    YouTube Mockup
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Platform */}
            <div className="space-y-4 text-left">
              <h4 className="text-sm font-semibold tracking-wider text-zinc-900 dark:text-zinc-100 uppercase">Platform</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/about" className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors duration-200 font-light">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors duration-200 font-light">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors duration-200 font-light">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors duration-200 font-light">
                    Release Notes
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Legal / Support */}
            <div className="space-y-4 text-left">
              <h4 className="text-sm font-semibold tracking-wider text-zinc-900 dark:text-zinc-100 uppercase">Support & Legal</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="#" className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors duration-200 font-light">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors duration-200 font-light">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors duration-200 font-light">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors duration-200 font-light">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Area */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-450 dark:text-zinc-400">
            <p>
              &copy; {new Date().getFullYear()} kreatOS. All rights reserved.
            </p>
            <p className="font-light">
              Built for content creators who demand excellence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
