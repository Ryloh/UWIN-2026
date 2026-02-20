"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideLayoutProps {
    number?: string; // e.g. "01"
    section: string; // e.g. "SYNTHÈSE"
    children: ReactNode;
    className?: string; // For background colors
}

export function SlideLayout({ number, section, children, className = "bg-white" }: SlideLayoutProps) {
    return (
        <section className={`h-full w-full relative overflow-y-auto lg:overflow-hidden ${className}`}>
            {/* Background Grid/Noise - Standardized */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            {/* A. Navigation Rail - Fixed sticky for mobile or just hidden */}
            <div className="absolute left-6 md:left-12 top-0 bottom-0 w-8 md:w-12 flex flex-col items-center z-20 pointer-events-none hidden md:flex">
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "100px" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="w-[1px] bg-gray-200"
                />

                <div className="py-8 flex flex-col items-center gap-6">
                    {number && (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="text-uwin-pink font-mono text-xs font-bold tracking-widest"
                        >
                            {number}
                        </motion.span>
                    )}

                    {/* Rotated Text */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="writing-mode-vertical"
                    >
                        <span className="text-gray-300 font-[family-name:var(--font-exo2)] text-[10px] uppercase tracking-[0.3em] [writing-mode:vertical-rl] rotate-180 whitespace-nowrap">
                            {section}
                        </span>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                    className="flex-grow w-[1px] bg-gray-100"
                />
            </div>

            {/* B. Giant Watermark - Sticky or Fixed */}


            {/* Content Container - Padded for rail */}
            <div className="relative z-10 w-full h-auto min-h-full lg:h-full px-4 py-6 md:p-0 md:max-w-[85%] ml-auto mr-auto md:ml-24 md:mr-8 flex flex-col justify-start lg:justify-center">
                {children}
            </div>
        </section>
    );
}
