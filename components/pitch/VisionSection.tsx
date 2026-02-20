// Slide 1 : Cover
"use client";

import { motion } from "framer-motion";
import { SlideLayout } from "./SlideLayout";

export function VisionSection() {
    return (
        <SlideLayout section="VISION" className="bg-white">
            <div className="w-full flex-grow flex flex-col items-center justify-center relative z-10 min-h-[80vh] lg:min-h-0">
                {/* Main Content - Centered */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-center relative"
                >
                    {/* Dynamic Accent: Minimalist pink signal */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1, type: "spring" }}
                        className="absolute -top-12 left-1/2 -translate-x-1/2 w-1 h-8 bg-uwin-pink"
                    />

                    {/* UWIN - Alone, massive */}
                    <h1 className="font-[family-name:var(--font-orbitron)] font-black text-8xl md:text-[12rem] text-gray-900 tracking-tight leading-none relative z-10 mix-blend-multiply">
                        UWIN
                    </h1>

                    {/* Subtitle - French typographic apostrophes */}
                    <p className="mt-8 font-[family-name:var(--font-exo2)] text-xl md:text-2xl text-gray-500 tracking-widest uppercase">
                        Pilote Territorial & Jeunesse
                    </p>

                    {/* NEW: Explanatory phrase */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="mt-6 text-gray-400 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed px-4"
                    >
                        UWIN lance un pilote de <strong className="text-uwin-pink font-bold">cybercafé encadré</strong> à Saint-Quentin-en-Yvelines pour prouver la demande, créer un tiers-lieu jeunesse et bâtir un modèle réplicable.
                    </motion.p>
                </motion.div>

                {/* Scroll Indicator (Desktop) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-12 left-0 right-0 hidden md:flex flex-col items-center gap-2"
                >
                    <div className="w-[1px] h-8 bg-gray-300 relative overflow-hidden">
                        <motion.div
                            animate={{ top: ["0%", "100%"] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                            className="absolute top-0 left-0 w-full h-1/2 bg-uwin-pink"
                        />
                    </div>
                    <span className="text-gray-400 text-[10px] tracking-[0.2em] font-mono uppercase">
                        Scroll / Swipe
                    </span>
                </motion.div>

                {/* Swipe Indicator (Mobile) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex md:hidden items-center gap-3 text-slate-400 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-100"
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

                {/* Bottom - Confidential (discreet) */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-4 left-0 right-0 text-center text-gray-200 text-[10px] uppercase tracking-[0.2em]"
                >
                    Version Collectivités
                </motion.p>
            </div>
        </SlideLayout>
    );
}
