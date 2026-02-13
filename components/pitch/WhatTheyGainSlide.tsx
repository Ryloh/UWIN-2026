// Slide 12 : Ce que la collectivité y gagne (Benefits) - Redesign V2 (No Cards / Impact List)
"use client";

import { motion } from "framer-motion";
import { SlideLayout } from "./SlideLayout";
import { MoveUpRight, Heart, Store, Activity, Eye, CheckCircle2 } from "lucide-react";

export function WhatTheyGainSlide() {
    return (
        <SlideLayout number="11" section="GAINS">
            <div className="w-full h-full relative flex flex-col bg-white overflow-hidden font-['Exo_2']">

                {/* --- HEADER --- */}
                <div className="pt-16 pb-8 px-12 md:px-24">
                    <motion.h2
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="font-[family-name:var(--font-orbitron)] text-5xl lg:text-7xl font-black text-gray-900 leading-[0.9] uppercase tracking-tighter mb-2"
                    >
                        POURQUOI<br />
                        <span className="text-emerald-500">NOUS ?</span>
                    </motion.h2>
                    <div className="w-24 h-2 bg-emerald-500 mt-6" />
                </div>

                {/* --- MAIN CONTENT COLUMNS --- */}
                <div className="flex-1 px-12 md:px-24 pb-12 flex flex-col lg:flex-row gap-16 overflow-y-auto">

                    {/* Benefits List */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 items-start pt-8">

                        {/* Benefit 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="group"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <Store className="w-6 h-6 text-emerald-600" />
                                <h3 className="font-[family-name:var(--font-orbitron)] font-bold text-gray-900 text-xl uppercase tracking-wide">
                                    Occupation
                                </h3>
                            </div>
                            <p className="text-gray-600 text-base leading-relaxed border-l-2 border-gray-100 pl-4 group-hover:border-emerald-200 transition-colors">
                                Fin de la vacance commerciale. Création de flux piéton. <strong className="text-gray-900">Sécurisation passive</strong> des lieux soirs et weekends.
                            </p>
                            <div className="mt-2 pl-4 text-xs font-bold text-gray-400 uppercase tracking-widest">#Dynamisation</div>
                        </motion.div>

                        {/* Benefit 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="group"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <Heart className="w-6 h-6 text-uwin-pink" />
                                <h3 className="font-[family-name:var(--font-orbitron)] font-bold text-gray-900 text-xl uppercase tracking-wide">
                                    Lien Social
                                </h3>
                            </div>
                            <p className="text-gray-600 text-base leading-relaxed border-l-2 border-gray-100 pl-4 group-hover:border-uwin-pink/20 transition-colors">
                                Réponse concrète au "traînage". Un lieu encadré et attractif pour les <strong className="text-gray-900">15-25 ans</strong>, complémentaire aux structures publiques.
                            </p>
                            <div className="mt-2 pl-4 text-xs font-bold text-gray-400 uppercase tracking-widest">#Jeunesse</div>
                        </motion.div>

                        {/* Benefit 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="group"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <Activity className="w-6 h-6 text-blue-600" />
                                <h3 className="font-[family-name:var(--font-orbitron)] font-bold text-gray-900 text-xl uppercase tracking-wide">
                                    Innovation
                                </h3>
                            </div>
                            <p className="text-gray-600 text-base leading-relaxed border-l-2 border-gray-100 pl-4 group-hover:border-blue-200 transition-colors">
                                Positionnement "Jeu Vidéo Responsable" et innovation territoriale. <strong className="text-gray-900">Communication positive</strong> vers les familles.
                            </p>
                            <div className="mt-2 pl-4 text-xs font-bold text-gray-400 uppercase tracking-widest">#Image</div>
                        </motion.div>

                        {/* Benefit 4 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="group"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <Eye className="w-6 h-6 text-gray-900" />
                                <h3 className="font-[family-name:var(--font-orbitron)] font-bold text-gray-900 text-xl uppercase tracking-wide">
                                    Transparence
                                </h3>
                            </div>
                            <p className="text-gray-600 text-base leading-relaxed border-l-2 border-gray-100 pl-4 group-hover:border-gray-300 transition-colors">
                                Reporting d'activité trimestriel. Transparence totale sur la fréquentation et l'impact. <strong className="text-gray-900">Pas de boîte noire.</strong>
                            </p>
                            <div className="mt-2 pl-4 text-xs font-bold text-gray-400 uppercase tracking-widest">#Data</div>
                        </motion.div>

                    </div>

                    {/* Right / Conclusion Block */}
                    <div className="w-full lg:w-[25%] flex flex-col justify-end pb-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="bg-gray-50 border-l-4 border-emerald-500 p-8"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                <span className="font-bold text-gray-400 text-xs uppercase tracking-widest">Conclusion</span>
                            </div>

                            <p className="font-[family-name:var(--font-exo2)] font-black text-2xl text-gray-900 leading-tight">
                                Un pilote<br />
                                <span className="text-emerald-600">mesurable</span><br />
                                à faible risque.
                            </p>
                        </motion.div>
                    </div>

                </div>

            </div>
        </SlideLayout>
    );
}
