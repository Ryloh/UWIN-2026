"use client";

import { motion } from "framer-motion";
import { SlideLayout } from "@/components/pitch/SlideLayout";
import { Youtube, Twitch } from "lucide-react";

export function KSAProductionSlide() {
    return (
        <SlideLayout number="04" section="OFFICIAL PRODUCTION PARTNER" className="bg-transparent">
            <div className="flex flex-col items-center justify-center h-full w-full max-w-5xl mx-auto px-4 text-center">

                {/* ZQSD Logo Placeholder */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 relative flex flex-col items-center"
                >
                    <div className="relative z-10 w-64 h-auto"> {/* Adjust size as needed */}
                        <img
                            src="/assets/pitch/ZQSD.png"
                            alt="ZQSD Productions"
                            className="w-full h-auto drop-shadow-lg"
                        />
                    </div>
                    <p className="text-slate-500 text-sm tracking-widest mt-4 uppercase font-bold">French Esports Broadcast Reference</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full text-left">
                    {/* Left: Broadcast System */}
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h3 className="text-xl font-bold text-black border-b border-gray-200 pb-2">FULL LIVE BROADCAST SYSTEM</h3>
                        <ul className="grid grid-cols-1 gap-4">
                            {[
                                "Professional Stage Setup",
                                "Commentary Desk",
                                "Sponsor Integration",
                                "Digital Content Distribution",
                                "Highlight Packages",
                                "Social Media Clips"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-600">
                                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right: Distribution */}
                    <motion.div
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-6"
                    >
                        <h3 className="text-xl font-bold text-black border-b border-gray-200 pb-2">TARGET DISTRIBUTION</h3>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 bg-[#6441a5]/5 border border-[#6441a5]/20 p-4 rounded-lg">
                                <Twitch className="text-[#6441a5] w-8 h-8" />
                                <div>
                                    <div className="font-bold text-black">Twitch</div>
                                    <div className="text-xs text-gray-500">Live Broadcast • French Market Focus</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 bg-[#FF0000]/5 border border-[#FF0000]/20 p-4 rounded-lg">
                                <Youtube className="text-[#FF0000] w-8 h-8" />
                                <div>
                                    <div className="font-bold text-black">YouTube</div>
                                    <div className="text-xs text-gray-500">Replays • VODs • Highlights</div>
                                </div>
                            </div>

                            <div className="p-4 bg-gray-50 border border-gray-100 rounded-lg text-center">
                                <span className="text-sm text-gray-500 uppercase tracking-widest">International Clips Distribution</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </SlideLayout>
    );
}
