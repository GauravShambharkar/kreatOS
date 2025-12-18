import { Sparkles } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="border-b bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-lg border-gray-200 dark:border-zinc-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between">
            <div className="flex items-end gap-1.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center">
                {/* <Sparkles className="w-6 h-6 text-white" /> */}
                <img className="size-8" src="KreatOSLogo.svg" alt="" />
              </div>
              <h1 className="text-2xl font-light tracking-tighter bg-gradient-to-t from-blue to-[#8bb5ff] dark:from-[#2f7bff] dark:to-[#87b3ff] bg-clip-text text-transparent">
                kreatOS
              </h1>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
