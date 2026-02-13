// Slide 1 : Cover
"use client";

import { motion } from "framer-motion";
import { SlideLayout } from "./SlideLayout";

export function VisionSection() {
    return (
        <SlideLayout section="VISION" className="bg-white">
            <div className="flex flex-col items-center justify-center relative z-10">
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
                        UWIN lance un pilote de <strong className="text-gray-200 font-medium">cybercafé encadré</strong> à Saint-Quentin-en-Yvelines pour prouver la demande, créer un tiers-lieu jeunesse et bâtir un modèle réplicable dans le 78/91/92/95.
                    </motion.p>
                </motion.div>

                {/* Bottom - Confidential (discreet) */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute -bottom-32 left-0 right-0 text-center text-gray-300 text-xs uppercase tracking-[0.3em]"
                >
                    Version Collectivités
                </motion.p>
            </div>
        </SlideLayout>
    );
}
