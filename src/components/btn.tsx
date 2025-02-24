"use client";

import { motion } from "motion/react";
import React, { JSX, useState } from "react";
import Type_Button from "@/types/typebutton";

export default function Button({
  color,
  weight,
  rounded,
  padding,
}: Type_Button): JSX.Element {

  const [isVisible, setVisible] = useState(false);

  return (
    <motion.button
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className={`relative overflow-hidden border hover:border-black border-${color} p-${padding ? padding : "2"} font-${weight} text-${color} ${rounded ? "rounded-md" : ""}`}
    >
      <motion.div
        className="absolute inset-0 z-0 bg-black bg-opacity-70"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ originX: 0 }}
      />

      <span className="relative z-10 font-bold">Explore</span>
    </motion.button>
  );
}
