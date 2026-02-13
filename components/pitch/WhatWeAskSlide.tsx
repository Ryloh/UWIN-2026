// Slide 11 : Ce que nous demandons (The Ask) - Redesign V2 (No Cards / Spec Sheet)
"use client";

import { motion } from "framer-motion";
import { SlideLayout } from "./SlideLayout";
import { ShieldCheck, Check } from "lucide-react";

export function WhatWeAskSlide() {
    return (
        <SlideLayout number="10" section="BESOINS">
            <div className="w-full h-full relative flex flex-col lg:flex-row bg-white font-['Exo_2'] overflow-hidden">

                {/* --- LEFT COL: TITLE & MANIFESTO (35%) --- */}
                <div className="w-full lg:w-[35%] h-full bg-gray-900 text-white p-8 md:p-12 flex flex-col justify-between relative border-r border-gray-800">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-uwin-pink" />
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-uwin-pink/10 rounded-full blur-3xl" />

                    <div className="mt-12">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="font-[family-name:var(--font-orbitron)] text-5xl lg:text-6xl font-black leading-[0.9] mb-8"
                        >
                            CE QUE<br />
                            <span className="text-uwin-pink">NOUS</span><br />
                            DEMANDONS
                        </motion.h2>

                        <div className="w-12 h-1 bg-gray-700 mb-8" />

                        <p className="text-xl md:text-2xl font-light text-gray-300 leading-snug">
                            "Nous ne demandons pas de subvention de fonctionnement.
                            <br /><br />
                            <strong className="text-white font-bold">Nous cherchons un partenariat immobilier.</strong>"
                        </p>
                    </div>

                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-8">
                        Fiche Technique V1.0
                    </div>
                </div>

                {/* --- RIGHT COL: SPEC SHEET (65%) --- */}
                <div className="w-full lg:w-[65%] h-full bg-white p-8 md:p-16 flex flex-col relative">

                    {/* Spec List */}
                    <div className="flex-1 flex flex-col justify-center gap-8 md:gap-10">

                        {/* 1. Surface */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="flex flex-col md:flex-row md:items-baseline border-b border-gray-100 pb-4"
                        >
                            <div className="w-32 text-xs font-bold text-gray-400 uppercase tracking-widest shrink-0 mb-1 md:mb-0">Surface Cible</div>
                            <div className="flex-1">
                                <div className="text-3xl md:text-4xl font-black text-gray-900 font-[family-name:var(--font-orbitron)]">
                                    75 à 150 <span className="text-lg text-gray-400 font-normal">m²</span>
                                </div>
                                <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                                    <span>Idéalement RDC avec accès PMR</span>
                                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                                    <span className="text-uwin-pink font-bold">Fibre optique indispensable</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* 2. Durée */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col md:flex-row md:items-baseline border-b border-gray-100 pb-4"
                        >
                            <div className="w-32 text-xs font-bold text-gray-400 uppercase tracking-widest shrink-0 mb-1 md:mb-0">Durée Pilote</div>
                            <div className="flex-1">
                                <div className="text-3xl md:text-4xl font-black text-gray-900 font-[family-name:var(--font-orbitron)]">
                                    12 à 24 <span className="text-lg text-gray-400 font-normal">mois</span>
                                </div>
                                <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                                    <span>Clause de revoyure à 90 jours</span>
                                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                                    <span>Engagement souple</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* 3. Juridique */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col md:flex-row md:items-baseline border-b border-gray-100 pb-4"
                        >
                            <div className="w-32 text-xs font-bold text-gray-400 uppercase tracking-widest shrink-0 mb-1 md:mb-0">Juridique</div>
                            <div className="flex-1">
                                <div className="text-2xl md:text-3xl font-bold text-gray-900">
                                    COT ou Bail Dérogatoire
                                </div>
                                <div className="mt-1 text-sm text-gray-600">
                                    Convention d'Occupation Temporaire ou Loyer Progressif.
                                </div>
                            </div>
                        </motion.div>

                        {/* 4. Aménagement */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col md:flex-row md:items-baseline pb-4"
                        >
                            <div className="w-32 text-xs font-bold text-gray-400 uppercase tracking-widest shrink-0 mb-1 md:mb-0">Travaux</div>
                            <div className="flex-1">
                                <div className="text-2xl md:text-3xl font-bold text-gray-900">
                                    Légers & Réversibles
                                </div>
                                <div className="mt-1 text-sm text-gray-600">
                                    À notre charge (peinture, mobilier, réseau). <span className="text-gray-900 font-medium">Pas de gros œuvre structurel.</span>
                                </div>
                            </div>
                        </motion.div>

                    </div>

                    {/* Footer Band - Engagements */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-8 pt-6 border-t-2 border-gray-100 flex flex-col md:flex-row items-center gap-6"
                    >
                        <div className="flex items-center gap-3">
                            <div className="bg-emerald-100 p-2 rounded-full text-emerald-600">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <span className="text-xs font-bold text-gray-900 uppercase tracking-widest">Nos Engagements</span>
                        </div>

                        <div className="flex-1 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
                            <span className="flex items-center gap-2"><Check className="w-3 h-3 text-emerald-500" /> Assurance RC Pro</span>
                            <span className="flex items-center gap-2"><Check className="w-3 h-3 text-emerald-500" /> Sécurité Incendie</span>
                            <span className="flex items-center gap-2"><Check className="w-3 h-3 text-emerald-500" /> Reporting Mensuel</span>
                        </div>
                    </motion.div>

                </div>

            </div>
        </SlideLayout>
    );
}
