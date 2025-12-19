"use client";
import InstaMockGenerator from "@/components/Insta-Mockup-Generator/InstaMockGenerator";
import LinkedinMockGenerator from "@/components/Linkedin-Mock-Generator/LinkedinMockGenerato";
import TweetMockGenerator from "@/components/Tweet-Mockup-Generator/tweetMockup";
import YoutubeMockGenerator from "@/components/Youtube-Mockup-Generator/YoutubeMockGenerator";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const _404page = () => {
  const [data, setdata] = useState<string | undefined>(undefined);
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    const id = params.toolName;
    setdata(Array.isArray(id) ? id[0] : id);
  }, []);

  if (params.toolName === "tweet-mockup-generator") {
    return <TweetMockGenerator />;
  }

  if (params.toolName === "insta-mockup-generator") {
    return <InstaMockGenerator />;
  }

  if (params.toolName === "linkedin-mockup-generator") {
    return <LinkedinMockGenerator />;
  }

  if (params.toolName === "youtube-mockup-generator") {
    return <YoutubeMockGenerator />;
  }

  return (
    <>
      <div className="flex items-center justify-center ">

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[300px] txttight h-[330px] mix-blend-soft-light">404</h1>
          <p className="text-xl txttight mt-2">Page Not Found</p>
          <p className="text-shadow-md txttight">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <button
            onClick={() => {
              router.push("/");
            }}
            className="px-3 hover:scale-105 transition-all duration-300 backdrop-blur-2xl mix-blend-screen txttight text-sm mt-8 cursor-pointer py-1.5 rounded-full bg-blue-600 dark:bg-white/20 border border-white dark:border-[#aaaaaa]"
          >
            Go Back to Home
          </button>
        </div>
      </div>
    </>
  );
};

export default _404page;
