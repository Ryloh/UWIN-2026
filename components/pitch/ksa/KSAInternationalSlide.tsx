"use client";

import { motion } from "framer-motion";
import { SlideLayout } from "@/components/pitch/SlideLayout";

export function KSAInternationalSlide() {
    return (
        <SlideLayout number="05" section="INTERNATIONAL DIMENSION" className="bg-transparent">
            <div className="flex flex-col md:flex-row gap-12 w-full max-w-6xl mx-auto px-4 items-center">

                {/* Left: Why This Matters */}
                <div className="flex-1 space-y-8">
                    <h3 className="text-3xl font-black text-slate-900 mb-6">WHY THIS MATTERS<br /><span className="text-blue-600">INTERNATIONALLY</span></h3>

                    <ul className="space-y-6">
                        {[
                            { title: "Full-Season Practice", desc: "Consistent competitive quality throughout the year." },
                            { title: "European Presence", desc: "Structured visibility in the EU region." },
                            { title: "12-Month Visibility", desc: "Continuous brand exposure." },
                            { title: "Zero Publisher Cost", desc: "No direct financial involvement required." },
                            { title: "Guest Team Slots", desc: "Opportunity for international inclusion." },
                        ].map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="border-l-2 border-blue-500/30 pl-4 hover:border-blue-600 transition-colors"
                            >
                                <div className="font-bold text-slate-900 text-lg">{item.title}</div>
                                <div className="text-slate-600 text-sm">{item.desc}</div>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                {/* Right: Saudi Teams Showcase */}
                <div className="flex-1 relative">
                    <div className="absolute inset-0 border border-slate-100 rounded-2xl" />

                    <div className="relative p-8 text-center space-y-8">
                        <div className="inline-block px-4 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest rounded-full border border-green-200">
                            Saudi Teams Example
                        </div>

                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white p-6 rounded-xl border border-green-100 shadow-sm flex items-center gap-8 overflow-hidden"
                            >
                                <div className="w-32 h-32 flex items-center justify-center shrink-0">
                                    <img
                                        src="/assets/pitch/team_falcons.png"
                                        alt="Team Falcons"
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-3xl font-black text-slate-900 tracking-tight uppercase leading-none">TEAM FALCONS</h4>
                                    <p className="text-green-600 text-sm mt-1 uppercase tracking-widest font-bold">Global Powerhouse</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                                className="bg-white p-6 rounded-xl border border-green-100 shadow-sm flex items-center gap-8 overflow-hidden"
                            >
                                <div className="w-32 h-32 flex items-center justify-center shrink-0">
                                    <img
                                        src="/assets/pitch/twisted_minds.png"
                                        alt="Twisted Minds"
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-3xl font-black text-slate-900 tracking-tight uppercase leading-none">TWISTED MINDS</h4>
                                    <p className="text-green-600 text-sm mt-1 uppercase tracking-widest font-bold">Elite Contender</p>
                                </div>
                            </motion.div>
                        </div>

                        <div className="pt-8 border-t border-green-200">
                            <h5 className="text-slate-500 text-xs uppercase tracking-widest mb-2">Potential Status</h5>
                            <div className="text-xl font-bold text-slate-900">
                                HONORARY <span className="text-green-600">INTERNATIONAL</span><br />DIVISION 1 MEMBERS
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </SlideLayout>
    );
}
