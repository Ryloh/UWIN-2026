"use client";

import { motion } from "framer-motion";
import { SlideLayout } from "@/components/pitch/SlideLayout";

export function KSAHeroSlide() {
    return (
        <SlideLayout number="01" section="HOMEPAGE" className="bg-white">
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Clean White Background (No Grid) */}
                <div className="absolute inset-0 bg-white" />

                {/* Dynamic Pink/Red Flow Lines (SVG) */}
                <svg className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-60" viewBox="0 0 1920 1080" preserveAspectRatio="none">
                    <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        d="M0,0 C600,200 1200,0 1920,300"
                        fill="none"
                        stroke="#ec4899" // Pink-500
                        strokeWidth="2"
                    />
                    <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2.5, delay: 0.2, ease: "easeInOut" }}
                        d="M1920,1080 C1400,800 500,1000 0,600"
                        fill="none"
                        stroke="#f43f5e" // Rose-500
                        strokeWidth="3"
                    />
                </svg>
            </div>

            {/* Main Content Container - Full Screen Immersion */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] lg:min-h-0 pt-20 lg:pt-0 h-full w-full max-w-7xl mx-auto px-4">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center relative w-full pt-8 md:pt-0"
                >
                    <div className="relative z-10 space-y-6 md:space-y-8 flex flex-col items-center">
                        <h1 className="text-5xl sm:text-6xl md:text-9xl font-black tracking-tighter text-slate-900 leading-[0.9] text-center w-full">
                            UWIN
                            <span className="block text-xl sm:text-2xl md:text-7xl mt-1 md:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-900 to-uwin-pink tracking-[1px] text-center">
                                FRENCH ROCKET LEAGUE
                            </span>
                        </h1>

                        <p className="max-w-xl mx-auto text-slate-600 font-medium text-sm sm:text-base md:text-xl leading-relaxed text-center px-4">
                            France’s first structured Rocket League league offering guaranteed competition, media exposure, and long-term ecosystem development.
                        </p>

                        <div className="pt-6 md:pt-12 flex justify-center gap-6 md:gap-12 w-full">
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-2xl md:text-4xl font-bold text-slate-900">MARCH</span>
                                <span className="text-[10px] md:text-xs tracking-[0.2em] text-slate-400 font-bold uppercase">LAUNCH</span>
                            </div>
                            <div className="w-[1px] h-10 md:h-16 bg-slate-200" />
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-2xl md:text-4xl font-bold text-slate-900">2027</span>
                                <span className="text-[10px] md:text-xs tracking-[0.2em] text-slate-400 font-bold uppercase">YEAR</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Scroll Indicator (Desktop) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
                >
                    <span className="text-[10px] tracking-[0.3em] font-bold text-slate-400 uppercase">Scroll to Explore</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-slate-400 to-transparent" />
                </motion.div>

                {/* Swipe Indicator (Mobile) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 flex md:hidden items-center gap-3 text-slate-400 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-100"
                >
                    <span className="text-[10px] tracking-[0.2em] font-bold uppercase whitespace-nowrap">Swipe</span>
                    <motion.div
                        animate={{ x: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-uwin-pink">
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </motion.div>
                </motion.div>

            </div>
        </SlideLayout>
    );
}
