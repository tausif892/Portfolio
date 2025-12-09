"use client";

import {motion} from "framer-motion";

type AchievementBoxProps = {
  year: string;
  title: string;
  description?: string;
};

export function AchievementBox({
  year,
  title,
  description,
}: AchievementBoxProps) {
  return (
    <motion.div
    className="achievement-box"
    initial={{opacity:0.48,y:40}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true,amount:0.5}}
    transition={{duration:0.6,ease:"easeOut"}}
    >
        <h2 className="achievement-year">{year}</h2>
        <span className="achievement-title">{title}</span>
    </motion.div>
  );
}
