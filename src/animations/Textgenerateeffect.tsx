"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";;

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  delay = 0,
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, margin: "-100px" });
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (!isInView || !scope.current) return;
    const timer = setTimeout(() => {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration || 1,
          delay: stagger(0.05),
        }
      );
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [isInView, scope.current, animate, delay, duration, filter]);

  const renderWords = () => (
    <motion.div ref={scope}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="dark:text-white text-black opacity-0"
          style={{ filter: filter ? "blur(10px)" : "none" }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div className={cn(className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};