"use client";

import { motion } from "framer-motion";
import { SlideLayout } from "@/components/pitch/SlideLayout";
import { Mail, Linkedin, Phone } from "lucide-react";

export function KSAOrganizationSlide() {
    return (
        <SlideLayout number="08" section="ORGANIZATION" className="bg-transparent">
            <div className="flex flex-col md:flex-row gap-12 w-full max-w-5xl mx-auto px-4 items-center h-full">

                {/* Left: UWIN Info */}
                <div className="flex-1 space-y-8 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-6xl font-black text-slate-900 mb-4">UWIN</h2>
                        <p className="text-xl text-slate-500 font-light">Independent Non-Profit Structure</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="border-l-4 border-uwin-pink pl-6 py-2"
                    >
                        <h3 className="text-sm uppercase tracking-widest text-uwin-pink mb-1">Mission</h3>
                        <p className="text-2xl font-bold text-slate-800 leading-tight">
                            Develop a structured<br />esports ecosystem.
                        </p>
                    </motion.div>
                </div>

                <div className="flex-1 flex flex-col gap-6 w-full">
                    {/* Mélissa */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="group relative overflow-hidden bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100"
                    >
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-uwin-pink to-purple-500" />
                        <div className="absolute -right-6 -top-6 w-24 h-24 bg-uwin-pink/5 rounded-full blur-2xl group-hover:bg-uwin-pink/10 transition-colors" />

                        <div className="relative pl-4">
                            <h3 className="text-3xl font-black text-slate-900 mb-1 tracking-tight">MÉLISSA</h3>
                            <p className="text-sm font-bold text-uwin-pink uppercase tracking-widest mb-4">EXECUTIVE DIRECTOR</p>

                            <div className="space-y-3">
                                <a href="mailto:melissa@uwinesport.fr" className="flex items-center gap-3 text-slate-600 hover:text-uwin-pink transition-colors group/link">
                                    <div className="p-2 bg-gray-50 rounded-lg group-hover/link:bg-pink-50 transition-colors">
                                        <Mail className="w-4 h-4 text-slate-400 group-hover/link:text-uwin-pink" />
                                    </div>
                                    <span className="font-mono text-sm font-medium">melissa@uwinesport.fr</span>
                                </a>
                                <div className="flex items-center gap-3 text-slate-600 group/link">
                                    <div className="p-2 bg-gray-50 rounded-lg group-hover/link:bg-pink-50 transition-colors">
                                        <Phone className="w-4 h-4 text-slate-400 group-hover/link:text-uwin-pink" />
                                    </div>
                                    <span className="font-mono text-sm font-medium">06 76 94 33 96</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </SlideLayout>
    );
}
