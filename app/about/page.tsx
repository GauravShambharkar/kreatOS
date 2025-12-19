"use client";

import React from "react";
import {
  Sparkles,
  Target,
  Zap,
  Users,
  Heart,
  Rocket,
  TrendingUp,
} from "lucide-react";

const AboutPage = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Generate professional mockups in seconds, not hours. Our optimized tools ensure instant results.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description:
        "Every tool is crafted with attention to detail and a passion for helping creators succeed.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Users,
      title: "Creator-Focused",
      description:
        "Built by creators, for creators. We understand your workflow and design needs.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Rocket,
      title: "Always Evolving",
      description:
        "Regular updates and new tools added based on community feedback and trends.",
      gradient: "from-purple-500 to-indigo-500",
    },
  ];

  const stats = [
    { value: "10K+", label: "Mockups Created" },
    { value: "5K+", label: "Happy Creators" },
    { value: "4", label: "Platforms Supported" },
    { value: "99.9%", label: "Uptime" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 dark:bg-white/10 border border-blue-400 dark:border-[#aaaaaa] backdrop-blur-xl">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-300">
              About kreatOS
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter">
            Empowering{" "}
            <span className="bg-linear-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              Content Creators
            </span>
          </h1>

          <p className="text-md md:text-md leading-tight txttight text-gray-600 dark:text-gray-400 mix-blend-screen font-light tracking-tight max-w-3xl mx-auto">
            kreatOS is your ultimate toolkit for creating stunning social media
            mockups. We believe every creator deserves access to
            professional-grade tools without the complexity or cost.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-zinc-800 bg-white/30 dark:bg-[#16181c]/50 backdrop-blur-2xl p-8 md:p-12">
          <div className="absolute inset-0 bg-linear-to-br from-blue-400/10 to-blue-500/10" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-blue-400 to-blue-600 mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-3xl md:text-4xl font-extralight tracking-tighter">
              Our Mission
            </h2>

            <p className="text-md  text-gray-700 leading-tight txttight dark:text-gray-300 font-light">
              To democratize content creation by providing intuitive, powerful
              tools that help creators, marketers, and designers bring their
              visions to life. We're building a platform where creativity meets
              efficiency, enabling you to focus on what matters most your content.
            </p>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white/20 dark:bg-[#16181c]/70 backdrop-blur-2xl p-6 md:p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-linear-to-br from-blue-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="text-3xl md:text-4xl font-light tracking-tighter bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-light">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extralight tracking-tighter mb-4">
            Why Choose kreatOS?
          </h2>
          <p className="text-gray-600 mix-blend-screen dark:text-gray-400 text-lg font-light">
            We're more than just tools, we're complete
            <span className="bg-linear-to-r mix-blend-plus-lighter from-blue-400 to-blue-600 bg-clip-text text-transparent">
              {" "}Tool-Ecosystem for content{" "}
            </span>
            creators.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white/20 dark:bg-[#16181c]/70 backdrop-blur-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                <div className="relative z-10 space-y-4">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-linear-to-br ${feature.gradient} transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-light tracking-tighter">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Vision Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-zinc-800 bg-linear-to-br from-blue-400/10 to-blue-500/10 backdrop-blur-2xl p-8 md:p-12">
          <div className="absolute inset-0 bg-white/20 dark:bg-[#16181c]/30" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-blue-400 to-blue-600 mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-3xl md:text-4xl font-extralight tracking-tighter">
              Looking Ahead
            </h2>

            <p className="text-md text-gray-700 leading-tight txttight dark:text-gray-300  font-light">
              We're constantly innovating and expanding our toolkit. From
              AI-powered design suggestions to collaborative features, we're
              building the future of content creation. Join us on this journey
              and be part of a community that's shaping how creators work.
            </p>

            <div className="pt-4">
              <a
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-blue-400 to-blue-600 text-white font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5" />
                Start Creating
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
