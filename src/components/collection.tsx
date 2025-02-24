"use client";

import { JSX } from "react";
import Image from "next/image";
import Type_Image from "@/types/typeimage";
import { motion } from "motion/react";

export default function Collection(): JSX.Element {

    const variants = {
        hidden: {
            opacity: 0,
            x: 45
        },

        visible: {
            opacity: 1,
            x: 0
        }
    }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1.2, ease: "easeInOut", staggerChildren: 0.3 }}
      className="min-h-[78vh] relative md:flex items-center overflow-x-hidden"
      id="collection"
    >
      <h1 className="my-12 font-light font-sans text-xl md:text-3xl text-center">
        SIGNATURE COLLECTIONS
      </h1>
      <div className="mx-auto h-full w-11/12 flex items-center overflow-x-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center h-full w-full relative overflow-x-hidden p-2">
          {images.map((image, index) => (
            <motion.div className="overflow-x-hidden" variants={variants} key={index}><Card key={index} name={image.name} src={image.src} p={image.p} /></motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const images: Type_Image[] = [
  {
    name: "Midnight Orchid",
    p: "SandalWood and Amber",
    src: "/img/item-1.webp",
  },
  {
    name: "Golden Dusk",
    p: "Vanilla and Oud",
    src: "/img/item-2.webp",
  },
  {
    name: "Noir Essence",
    p: "Musk and Jasmine",
    src: "/img/item-3.webp",
  },
  {
    name: "Royal Velvet",
    p: "Rose and Patchouli",
    src: "/img/item-4.webp",
  },
];

const Card = (props: { name: string; src: string; p: string }) => {
  return (
    <div className="p-6 flex flex-col gap-2 bg-zinc-900 rounded-xl hover:-translate-y-4 hover:border hover:border-sky-400 transition duration-300 cursor-pointer">
      <Image
        src={props.src}
        alt="Perfume Collection"
        height={250}
        width={250}
      />
      <h1 className="text-xl font-thin mt-4">{props.name}</h1>
      <p className="text-sm opacity-75">{props.p}</p>
    </div>
  );
};
