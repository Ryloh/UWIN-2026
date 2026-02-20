"use client";

import { motion } from "framer-motion";
import { SlideLayout } from "@/components/pitch/SlideLayout";

export function KSACompetitionSlide() {
    return (
        <SlideLayout number="02" section="COMPETITION STRUCTURE" className="bg-transparent">
            <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl mx-auto px-4">

                {/* Left Column: Format Overview */}
                <div className="flex-1 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm"
                    >
                        <h3 className="text-2xl font-black text-blue-600 mb-4 flex items-center gap-3">
                            <span className="text-4xl text-gray-900">01</span> DIVISION 1
                        </h3>
                        <ul className="space-y-3 font-mono text-sm text-gray-600">
                            <li className="flex items-start gap-2">
                                <span className="text-uwin-pink">►</span> 8 Fixed Teams
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-uwin-pink">►</span> 2 International Guest Teams (Invited)
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-uwin-pink">►</span> Full Season Participation
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-uwin-pink">►</span> Guaranteed Financial Distribution
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="bg-gray-50 border border-gray-200 p-6 rounded-lg"
                    >
                        <h3 className="text-2xl font-black text-gray-400 mb-4 flex items-center gap-3">
                            <span className="text-4xl text-gray-300">02</span> DIVISION 2
                        </h3>
                        <ul className="space-y-3 font-mono text-sm text-gray-500">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500">►</span> 8 Selected Teams (Application)
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500">►</span> Promotion Opportunity
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500">►</span> Financial Compensation
                            </li>
                        </ul>
                    </motion.div>

                    {/* LFR Logo */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex justify-center pt-6"
                    >
                        <img
                            src="/assets/pitch/Logo_LFR.png"
                            alt="La French Rocket League"
                            className="h-32 w-auto opacity-90 hover:opacity-100 transition-opacity drop-shadow-sm"
                        />
                    </motion.div>
                </div>

                {/* Right Column: Season Calendar */}
                <div className="flex-1 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent -z-10 rounded-xl" />

                    <h3 className="text-xl font-bold tracking-widest text-black mb-6 border-b border-gray-200 pb-2">
                        SEASON CALENDAR 2027
                    </h3>

                    <div className="relative border-l-2 border-gray-200 pl-8 ml-4 space-y-12 py-4">
                        {/* Split 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="relative"
                        >
                            <div className="absolute -left-[41px] top-0 w-5 h-5 bg-blue-600 rounded-full border-4 border-white" />
                            <div className="text-uwin-pink font-bold text-lg">MARCH – MAY 2027</div>
                            <div className="text-2xl font-black text-black">SPLIT 1</div>
                            <div className="text-gray-500 font-mono text-sm mt-1">Regular Season + Playoffs (LAN)</div>
                        </motion.div>

                        {/* Break */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="relative"
                        >
                            <div className="absolute -left-[39px] top-1 w-3 h-3 bg-gray-400 rounded-full" />
                            <div className="text-gray-500 font-bold">JUNE – AUGUST</div>
                            <div className="text-xl font-bold text-gray-400">SUMMER BREAK</div>
                        </motion.div>

                        {/* Split 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="relative"
                        >
                            <div className="absolute -left-[41px] top-0 w-5 h-5 bg-blue-600 rounded-full border-4 border-white" />
                            <div className="text-uwin-pink font-bold text-lg">SEPT – NOV 2027</div>
                            <div className="text-2xl font-black text-black">SPLIT 2</div>
                            <div className="text-gray-500 font-mono text-sm mt-1">Regular Season + Playoffs (LAN)</div>
                        </motion.div>

                        {/* French Cup */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="relative bg-gradient-to-r from-uwin-pink/5 to-transparent p-4 -ml-4 rounded-r-lg border-l-4 border-uwin-pink"
                        >
                            <div className="absolute -left-[9px] top-0" /> {/* Hide default dot override */}
                            <div className="text-black font-bold text-lg">DECEMBER 2027</div>
                            <div className="text-3xl font-black text-black tracking-tight">FRENCH CUP FINALS</div>
                            <div className="text-gray-500 font-mono text-sm mt-1">10-Day Event • Live Audience • Intl Exposure</div>
                        </motion.div>
                    </div>

                    <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded text-center">
                        <span className="block text-xs uppercase tracking-widest text-blue-400 mb-1">Broadcast Days</span>
                        <span className="font-bold text-black">TUESDAY & THURSDAY</span>
                        <span className="block text-xs text-gray-500 mt-1">(No overlap with RLCS)</span>
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}
