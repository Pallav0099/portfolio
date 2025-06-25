"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface StaggeredListProps {
  List: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  delay?: number;
  staggerdelay?: number;
  bulleted?: boolean;
}

export const StaggeredList: React.FC<StaggeredListProps> = ({
  List,
  className,
  filter = true,
  duration = 0.5,
  delay = 0,
  staggerdelay = 1,
  bulleted = false,
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, margin: "-100px" });
  const Lists = List.split("|");

  useEffect(() => {
    if (!isInView || !scope.current) return;
    const timer = setTimeout(() => {
      animate(
        "li",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration || 1,
          delay: stagger(staggerdelay),
        }
      );
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [isInView, animate, delay, duration, filter, scope]);

  return (
    <div className={cn(className)}>
      <div className="mt-4">
        <div className="text-white leading-snug tracking-wide">
          <motion.ul
            ref={scope}
            className={bulleted ? "list-disc" : undefined}
          >
            {Lists.map((line, idx) => (
              <motion.li
                key={idx}
                className={cn(
                  "dark:text-white text-black opacity-0 pb-1",
                  bulleted ? undefined : "list-none"
                )}
                style={{ filter: filter ? "blur(10px)" : "none" }}
              >
                {line.trim()}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default StaggeredList;