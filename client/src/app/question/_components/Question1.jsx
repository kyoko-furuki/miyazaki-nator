"use client";

import Image from "next/image";
import React from "react";

export const Question1 = ({ changeState, setPage }) => {
  console.log("q1");

  const handleClick = (num) => {
    changeState("q1", num);
    setPage(2);
  };

  const containerStyle = {
    backgroundImage: `url('/aishou/outdoor.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={containerStyle}>
      <div className="flex justify-end items-center h-screen">
        <div className="p-4 space-y-4 absolute bottom-40 right-20 ">
          <button onClick={() => handleClick(1)} className="block">
            <Image
              src="/aishou/aishou-yes.jpg"
              alt="はい"
              width={400}
              height={400}
              className="rounded-md"
            ></Image>
          </button>

          <button onClick={() => handleClick(2)} className="block">
            <Image
              src="/aishou/aishou-maybe.jpg"
              alt="どちらでもない"
              width={400}
              height={400}
              className="rounded-md"
            ></Image>
          </button>

          <button onClick={() => handleClick(3)} className="block">
            <Image
              src="/aishou/aishou-no.jpg"
              alt="いいえ"
              width={400}
              height={400}
              className="rounded-md"
            ></Image>
          </button>
        </div>
      </div>
    </div>
  );
};
