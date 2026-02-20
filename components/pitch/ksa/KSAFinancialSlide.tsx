"use client";

import { motion } from "framer-motion";
import { SlideLayout } from "@/components/pitch/SlideLayout";

export function KSAFinancialSlide() {
    return (
        <SlideLayout number="03" section="FINANCIAL STRUCTURE" className="bg-transparent">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl mx-auto px-4 items-center h-full">

                {/* Left: Overall Budget */}
                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white border border-gray-200 p-8 rounded-2xl relative overflow-hidden shadow-lg"
                    >
                        <h3 className="text-gray-500 uppercase tracking-widest text-sm mb-2">Total Annual Investment Required</h3>
                        <div className="text-5xl md:text-6xl font-black text-black tabular-nums tracking-tight">
                            1,000,000 <span className="text-uwin-pink">€</span>
                        </div>

                        <div className="mt-8 space-y-4">
                            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                                <span className="text-gray-600">Production (Full Year)</span>
                                <span className="font-mono text-black">400,000 €</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                                <span className="text-gray-600">Division 1 (Teams Support)</span>
                                <span className="font-mono text-uwin-pink font-bold">414,000 €</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                                <span className="text-gray-600">Division 2 (Teams Support)</span>
                                <span className="font-mono text-black">66,000 €</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                                <span className="text-gray-600">Operational Structure</span>
                                <span className="font-mono text-black">120,000 €</span>
                            </div>
                        </div>

                        {/* Quick reading */}
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                                <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">D1 Participation</div>
                                <div className="text-lg font-black text-gray-900 tabular-nums">
                                    20,000€ <span className="text-sm font-semibold text-gray-500">/ team / split</span>
                                </div>
                                <div className="text-xs text-gray-500 mt-1">= 160,000€ guaranteed per split</div>
                            </div>
                            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                                <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">D1 Bonus Pool</div>
                                <div className="text-lg font-black text-gray-900 tabular-nums">
                                    32,000€ <span className="text-sm font-semibold text-gray-500">/ split</span>
                                </div>
                                <div className="text-xs text-gray-500 mt-1">+ 30,000€ Coupe de France</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Funding Strategy */}
                    <div className="space-y-4 mt-8 bg-gray-50 border border-gray-200 p-6 rounded-xl">
                        <h4 className="font-black text-black text-lg uppercase tracking-widest border-b border-gray-200 pb-2">Funding Strategy</h4>

                        <div className="space-y-4 pt-2">
                            <div className="flex flex-col gap-1">
                                <div className="flex justify-between items-end">
                                    <span className="font-bold text-slate-900">Strategic Partner (KSA)</span>
                                    <span className="font-mono text-uwin-pink font-bold text-lg">800,000 €</span>
                                </div>
                                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-uwin-pink w-[80%]" />
                                </div>
                                <p className="text-xs text-gray-500 mt-1">Main funding to secure the ecosystem & build the KSA-France bridge.</p>
                            </div>

                            <div className="flex flex-col gap-1 mt-4">
                                <div className="flex justify-between items-end">
                                    <span className="font-bold text-slate-900">Local Ecosystem (France)</span>
                                    <span className="font-mono text-slate-700 font-bold text-lg">200,000 €</span>
                                </div>
                                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-slate-700 w-[20%]" />
                                </div>
                                <p className="text-xs text-gray-500 mt-1">French institutional & sponsor contribution to ensure local anchoring.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Bonus Pool Breakdown */}
                <div className="relative">
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-xl font-bold text-black mb-2 text-center md:text-left"
                    >
                        DIVISION 1 — BONUS POOL PER SPLIT{" "}
                        <span className="text-gray-400 text-sm font-normal">(32,000€)</span>
                    </motion.h3>

                    <div className="text-sm text-gray-500 mb-6">
                        Guaranteed participation is separate:{" "}
                        <span className="font-semibold text-gray-900">20,000€ per team</span> (160,000€ per split).
                    </div>

                    <div className="space-y-2">
                        {[
                            { rank: "1st", amount: "8,000 €", width: "100%", color: "bg-uwin-pink" },
                            { rank: "2nd", amount: "6,000 €", width: "75%", color: "bg-slate-900" },
                            { rank: "3rd", amount: "5,000 €", width: "62%", color: "bg-slate-700" },
                            { rank: "4th", amount: "4,000 €", width: "50%", color: "bg-slate-500" },
                            { rank: "5th-6th", amount: "3,000 € each", width: "37%", color: "bg-slate-300" },
                            { rank: "7th-8th", amount: "1,500 € each", width: "20%", color: "bg-slate-200" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ width: 0, opacity: 0 }}
                                whileInView={{ width: "100%", opacity: 1 }}
                                transition={{ delay: index * 0.08, duration: 0.7 }}
                                className="flex items-center gap-4"
                            >
                                <div className="w-20 text-sm font-bold text-slate-500 text-right">{item.rank}</div>
                                <div className="flex-1 h-10 rounded overflow-hidden bg-gray-100">
                                    <div
                                        className={`h-full ${item.color} opacity-90`}
                                        style={{ width: item.width }}
                                    />
                                </div>
                                <div className="w-32 font-mono font-bold text-slate-900 text-right">
                                    {item.amount}
                                </div>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="mt-8 text-center md:text-left flex flex-col gap-3"
                        >
                            <div className="inline-flex items-center gap-2">
                                <span className="inline-block px-4 py-2 border border-uwin-pink text-uwin-pink font-bold rounded-full text-sm uppercase tracking-widest">
                                    Every team earns money
                                </span>
                            </div>

                            <div className="text-xs text-gray-500 leading-relaxed">
                                Coupe de France (LAN, 10 days) is budgeted separately in D1:{" "}
                                <span className="font-semibold text-gray-900">30,000€</span>.
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}
