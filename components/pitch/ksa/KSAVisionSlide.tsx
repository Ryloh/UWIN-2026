"use client";

import { motion } from "framer-motion";
import { SlideLayout } from "@/components/pitch/SlideLayout";
import { ArrowRight } from "lucide-react";

export function KSAVisionSlide() {
    return (
        <SlideLayout number="07" section="LONG-TERM VISION" className="bg-transparent">
            <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-uwin-pink to-blue-900 -z-10 -translate-y-1/2 opacity-30" />

                    {[
                        {
                            phase: "PHASE 1",
                            title: "NATIONAL STABILIZATION",
                            desc: "Solidify the ecosystem foundation.",
                            color: "border-blue-500",
                            iconColor: "text-blue-500"
                        },
                        {
                            phase: "PHASE 2",
                            title: "EUROPEAN INTEGRATION",
                            desc: "Connect French circuit with EU tier-1.",
                            color: "border-uwin-pink",
                            iconColor: "text-uwin-pink"
                        },
                        {
                            phase: "PHASE 3",
                            title: "PERMANENT TECH CENTER",
                            desc: "Training, Bootcamps, International Hosting.",
                            color: "border-purple-500",
                            iconColor: "text-purple-500"
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className={`bg-black/80 backdrop-blur-md border ${item.color}/30 p-8 rounded-2xl relative overflow-hidden group`}
                        >
                            <div className={`absolute top-0 left-0 w-full h-1 bg-${item.color.replace('border-', '')}`} />

                            <div className="text-xs font-mono text-gray-400 mb-2 tracking-widest">{item.phase}</div>
                            <h3 className="text-2xl font-black text-white mb-4 leading-tight">{item.title}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>

                            <div className={`absolute bottom-4 right-4 opacity-10 group-hover:opacity-100 transition-opacity duration-500 ${item.iconColor}`}>
                                <ArrowRight className="w-8 h-8" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-16 text-center"
                >
                    <p className="text-xl font-bold text-slate-800 tracking-widest border-b-2 border-slate-200 pb-2 inline-block">
                        THE LEAGUE IS THE FIRST BUILDING BLOCK.
                    </p>
                </motion.div>

            </div>
        </SlideLayout>
    );
}
