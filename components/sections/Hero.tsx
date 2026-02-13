"use client";

import { NeonButton } from "@/components/ui/NeonButton";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-uwin-dark pt-20">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-blue-900/20 blur-[100px]" />
                <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-uwin-pink/10 blur-[100px]" />
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            </div>

            <div className="relative z-10 flex flex-col items-center px-6 text-center">
                {/* Massive Logo Representation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative mb-8 select-none"
                >
                    {/* Main Text */}
                    <h1 className="font-orbitron text-[15vw] leading-none font-black italic tracking-tighter text-white mix-blend-overlay md:text-[12rem]">
                        UWIN
                    </h1>

                    {/* Swoosh Effect */}
                    <motion.div
                        animate={{
                            x: ["-100%", "200%"],
                            opacity: [0, 0.5, 0]
                        }}
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatDelay: 2
                        }}
                        className="absolute left-0 top-1/2 h-2 w-full -skew-x-12 bg-uwin-pink blur-sm md:h-4"
                    />

                    {/* Glitch/Depth Layers */}
                    <span className="absolute inset-0 -z-10 translate-x-1 translate-y-1 font-orbitron text-[15vw] leading-none font-black italic tracking-tighter text-uwin-pink/20 blur-sm md:text-[12rem]">
                        UWIN
                    </span>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mb-12 max-w-2xl text-lg font-light tracking-widest text-gray-400 md:text-2xl"
                >
                    LA VICTOIRE EST VOTRE SEULE OPTION
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex gap-6"
                >
                    <NeonButton size="lg" variant="primary">
                        REJOINDRE L'ÉLITE
                    </NeonButton>
                    <NeonButton size="lg" variant="secondary">
                        VOIR LES TOURNOIS
                    </NeonButton>
                </motion.div>
            </div>

            {/* Floating particles/noise could be added here */}
        </section>
    );
}
