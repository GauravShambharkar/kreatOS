"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setdata] = useState<string | undefined>(undefined);
  const params = useParams();
  useEffect(() => {
    const id = params.id;
    setdata(Array.isArray(id) ? id[0] : id);
  }, []);
  return (
    <>
      <div className="">
        <div>insta mockup generator</div>
      </div>
    </>
  );
};

export default page;
