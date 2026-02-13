"use client";

import { motion } from "framer-motion";

const letters = ["U", "W", "I", "N"];

export function UwinLogo({ className = "" }: { className?: string }) {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.4,
                delayChildren: 0.3
            }
        }
    };

    const letterVariants = {
        hidden: {
            opacity: 0,
            pathLength: 0,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <motion.div
            className={`relative flex items-center gap-1 ${className}`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
        >
            {letters.map((letter, index) => (
                <motion.span
                    key={index}
                    variants={letterVariants}
                    className="font-[family-name:var(--font-orbitron)] text-2xl font-black tracking-wide text-gray-900 relative inline-block"
                    style={{
                        textShadow: "0 0 10px rgba(244, 63, 94, 0.2), 0 0 20px rgba(244, 63, 94, 0.05)"
                    }}
                >
                    {letter}
                </motion.span>
            ))}

            {/* Underline that draws */}
            <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{
                    duration: 1.8,
                    delay: 0.3,
                    ease: [0.22, 1, 0.36, 1]
                }}
                viewport={{ once: false, margin: "-50px" }}
                className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-gray-900 via-uwin-pink to-transparent"
            />
        </motion.div>
    );
}
