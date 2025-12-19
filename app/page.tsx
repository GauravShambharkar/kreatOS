"use client";

import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";

export default function Home() {
  const tools = [
    {
      name: "Tweet Mock Generator",
      description:
        "Create realistic, high-quality tweet mockups in seconds. Perfect for presentations, portfolios, and social media content.",
      href: "tool/tweet-mockup-generator",
      icon: FaXTwitter,
      gradient: "from-blue-500 to-sky-400",
      bgGradient: "from-blue-500/10 to-sky-400/10",
      status: "Available",
    },
    {
      name: "Instagram Post Mockup Generator",
      description:
        "Design stunning Instagram post mockups with customizable layouts and filters.",
      href: "tool/insta-mockup-generator",
      icon: BsInstagram,
      gradient: "from-pink-500 to-purple-500",
      bgGradient: "from-pink-500/10 to-purple-500/10",
      status: "Available",
    },
    {
      name: "LinkedIn Post Mockup Generator",
      description:
        "Generate professional LinkedIn posts with engagement metrics and branding.",
      href: "tool/linkedin-mockup-generator",
      icon: FaLinkedin,
      gradient: "from-blue-600 to-indigo-600",
      bgGradient: "from-blue-600/10 to-indigo-600/10",
      status: "Available",
    },
    {
      name: "Youtube Mockup Generator",
      description:
        "Generate professional Youtube posts with engagement metrics and branding.",
      href: "tool/youtube-mockup-generator",
      icon: GrYoutube,
      gradient: "from-blue-600 to-indigo-600",
      bgGradient: "from-blue-600/10 to-indigo-600/10",
      status: "Available",
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Header */}

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24  ">
        <div className="text-center space-y-6 max-w-4xl mx-auto bg-linear-to-tr from-[#000000] via-[#4ea0ff] to-[#000000] p-4 rounded-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 dark:bg-white/20 border border-white dark:border-[#aaaaaa]">
            <Sparkles className="w-4 h-4 text-blue-200 dark:text-blue-400" />
            <span className=" text-sm font-medium text-[white] ">
              Professional Tools for Content Creators
            </span>
          </div>

          <h2 className="leading-20 text-[#ffffff] mix-blend-plus-darker tracking-tighter text-5xl md:text-6xl lg:text-7xl font-extralight">
            Create Stunning <br />
            <span className="font-white">Social Media Mockups</span>
          </h2>

          <p className="text-sm md:text-lg mix-blend-plus-lighter text-white leading-tight font-extralight tracking-tight  dark:text-[#9d9d9db6] max-w-3xl mx-auto ">
            A comprehensive suite of tools designed for content creators,
            marketers, and designers to craft pixel-perfect social media mockups
            effortlessly.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
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

            return (
              <Link
                key={tool.name}
                href={isAvailable ? tool.href : "#"}
                className={`group relative overflow-hidden rounded-2xl border  border-gray-200 dark:border-zinc-800 bg-white/20 backdrop-blur-2xl dark:bg-[#16181c]/70 p-8 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${!isAvailable ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                onClick={(e) => !isAvailable && e.preventDefault()}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <div className="flex items-start justify-between">
                    <div
                      className={`w-14 h-14 rounded-xl  flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {isAvailable ? (
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" />
                    ) : (
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400">
                        {tool.status}
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="text-xl font-extralight tracking-tighter mb-2  transition-all duration-300">
                      {tool.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-tight font-extralight tracking-tighter">
                      {tool.description}
                    </p>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}
                />
              </Link>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-[#0a0a0a]/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p className="text-sm">
              Built for content creators who demand excellence
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
