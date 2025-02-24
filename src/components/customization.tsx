"use client";

import React, { JSX, useState } from "react";
import Image from "next/image";
import { SparklesCore } from "./ui/sparkles";
import { useRef } from 'react';

export default function Customization(): JSX.Element {
  const [imgType, setImgType] = useState<string>("black");
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [scent, setScent] = useState<string>("Sanderwood");

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isChanging = useRef(false);
  
  function actionColorSelected(event: React.MouseEvent<HTMLDivElement>) {
    const id = (event.target as HTMLDivElement).id?.toLowerCase();
    if (!id || isChanging.current) return;
  
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      }
      
    isChanging.current = true;
    setIsVisible(false);
    setImgType(id as 'black' | 'cyan' | 'amber');
  
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
      isChanging.current = false;
    }, 2500);
  }

  return (
      <div id="customization" className="my-4 h-[60vh] md:h-screen bg-zinc-900">
          <span className="mt-4 opacity-0">.</span>
      <h1 className="my-6 font-thin font-sans text-2xl md:text-4xl text-center">
        CUSTOMIZATION
      </h1>
      <div className="h-11/12 w-11/12 mx-auto grid grid-cols-3">
        <div className="col-span-2">
          <div className="mt-4 flex flex-col gap-10">
            <h3 className="text-lg md:text-2xl font-thin font-sans mx-4">
              COLOR
            </h3>
            <div className="flex flex-row gap-4">
              <div
                onClick={actionColorSelected}
                id="black"
                className="w-6 h-6 md:w-12 md:h-12 bg-zinc-700 rounded-full cursor-pointer"
              ></div>
              <div
                onClick={actionColorSelected}
                id="cyan"
                className="w-6 h-6 md:w-12 md:h-12 bg-sky-500 rounded-full cursor-pointer"
              ></div>
              <div
                onClick={actionColorSelected}
                id="amber"
                className="w-6 h-6 md:w-12 md:h-12 bg-amber-600 rounded-full cursor-pointer"
              ></div>
            </div>
            <h3 className="text-lg md:text-2xl font-thin font-sans mx-4">
              SCENT
            </h3>
            <div className="flex flex-row gap-2 md:gap-3">
              <button onClick={() => setScent("Sanderwood")} className="p-1 md:p-2 border border-amber-600 rounded-md font-semibold">
                Sanderwood
              </button>
              <button onClick={() => setScent("Jasmine")} className="p-1 md:p-2 border border-sky-500 rounded-md font-semibold">
                Jasmine
              </button>
              <button onClick={() => setScent("Velvet")} className="p-1 md:p-2 border border-rose-700 rounded-md font-semibold">
                Velvet
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col">
          {isVisible && (
            <Image
              src={`/img/custom/${imgType}.webp`}
              alt="Black Perfume"
              height={300}
              width={300}
              className={`self-end rounded-md border border-${scent === "Sanderwood" ? "amber-600" : scent === "Jasmine" ? "sky-500" : "rose-600"}`}
            />
          )}
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={1}
            maxSize={2.4}
            particleDensity={350}
            className={`w-[120px] h-[120px] md:w-[300px] md:h-[300px] self-center ${
              isVisible === false ? "block" : "hidden"
            }`}
            particleColor={`${
              imgType === "black"
                ? "#A0A0A0"
                : imgType === "cyan"
                ? "#00FFFF"
                : "#FFB266"
            }`}
          />
          <div className="mt-4 self-center">
            <p className="text-white font-thin text-md opacity-75">
              COLOR: {imgType.toUpperCase()}
            </p>
            <p className="mt-4 text-white font-thin text-md opacity-75">
              SCENT: {scent.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
