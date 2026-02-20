"use client";

import { motion } from "framer-motion";
import { SlideLayout } from "@/components/pitch/SlideLayout";
import { CheckCircle2 } from "lucide-react";

export function KSAStrategicSlide() {
    return (
        <SlideLayout number="06" section="STRATEGIC VALUE" className="bg-transparent">
            <div className="flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-4">

                <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-12">
                    FOR INTERNATIONAL PARTNERS
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {[
                        { title: "Year-Long Exposure", desc: "Constant brand presence across all seasons." },
                        { title: "Controlled Visibility", desc: "High-quality, curated European broadcast." },
                        { title: "Talent Development", desc: "Structured environment for player growth." },
                        { title: "Competitive Prep", desc: "International platform for team readiness." },
                        { title: "Media Assets", desc: "High-yield content generation for social channels." },
                        { title: "Gap FIller", desc: "No equivalent independent league exists in France." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-all group"
                        >
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 group-hover:text-uwin-pink transition-colors" />
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                                    <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </SlideLayout>
    );
}
