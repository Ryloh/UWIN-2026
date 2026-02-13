"use client";

import { useState, useEffect } from "react";
import { MotionValue, motion, useTransform } from "framer-motion";

interface CinematicTransitionsProps {
    scrollYProgress: MotionValue<number>;
}

interface BarData {
    id: number;
    top: string;
    width: string;
    height: string;
    speedFactor: number;
}

// Pre-generated bars to avoid hydration issues (deterministic)
const BARS: BarData[] = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    top: `${(i * 3.5) % 100}%`,
    width: `${2 + (i * 3) % 15}vw`, // Slightly Random: 2vw to 17vw
    height: `${1 + (i % 2)}px`,
    speedFactor: 1.2 + (i % 5) * 0.5 // Faster parallax
}));

export function CinematicTransitions({ scrollYProgress }: CinematicTransitionsProps) {
    // --- TRANSITION 1: VISION -> NARRATIVE (0.05 - 0.20) ---
    // Finishes RIGHT when Narrative arrives (at 0.20)
    // Starts VERY early (0.05) to catch the user leaving Vision
    const t1Opacity = useTransform(scrollYProgress, [0.05, 0.10, 0.15, 0.20], [0, 1, 1, 0]);
    const t1X = useTransform(scrollYProgress, [0.05, 0.20], ["100vw", "-100vw"]);

    // --- TRANSITION 2: NARRATIVE -> ROADMAP (0.40 - 0.55) ---
    // Starts as Narrative leaves (0.40)
    // Finishes as Roadmap arrives (0.55)
    const t2Opacity = useTransform(scrollYProgress, [0.40, 0.45, 0.50, 0.55], [0, 1, 1, 0]);
    const t2X = useTransform(scrollYProgress, [0.40, 0.55], ["-100vw", "100vw"]);

    return (
        <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">

            {/* TRANSITION 1: Vision -> Narrative (Right to Left) */}
            <motion.div
                style={{ opacity: t1Opacity, x: t1X }}
                className="absolute inset-0"
            >
                {BARS.map((bar) => (
                    <div
                        key={`t1-${bar.id}`}
                        style={{
                            position: "absolute",
                            top: bar.top,
                            width: bar.width,
                            height: bar.height,
                            right: 0,
                            transform: `translateX(${bar.speedFactor * 50}%)`,
                        }}
                        className="bg-white shadow-[0_0_15px_rgba(255,255,255,0.9)] rounded-full"
                    />
                ))}
            </motion.div>

            {/* TRANSITION 2: Narrative -> Roadmap (Left to Right) */}
            <motion.div
                style={{ opacity: t2Opacity, x: t2X }}
                className="absolute inset-0"
            >
                {BARS.map((bar) => (
                    <div
                        key={`t2-${bar.id}`}
                        style={{
                            position: "absolute",
                            top: bar.top,
                            width: bar.width,
                            height: bar.height,
                            left: 0,
                            transform: `translateX(-${bar.speedFactor * 50}%)`,
                        }}
                        className="bg-white shadow-[0_0_15px_rgba(255,255,255,0.9)] rounded-full"
                    />
                ))}
            </motion.div>
        </div>
    );
}
