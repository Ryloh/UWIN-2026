// Slide 8 : Hub Économique (Esport & Entrepreneuriat) - Pilier 3
"use client";

import { motion } from "framer-motion";
import { SlideLayout } from "./SlideLayout";
import { TrendingUp, ShoppingBag, Briefcase, Zap, Store } from "lucide-react";

export function EconomicHubSlide() {
    return (
        <SlideLayout number="08" section="PILIER 03">
            <div className="w-full h-full relative flex flex-col lg:flex-row overflow-hidden bg-white">

                {/* --- LEFT COL: IMAGE & CONCEPT (45%) --- */}
                <div className="w-full lg:w-[45%] h-[40vh] lg:h-full relative font-['Exo_2']">
                    {/* Background Image - Busy Street / Local Commerce */}
                    <div className="absolute inset-0 bg-[url('https://www.destination-yvelines.fr/app/uploads/2023/12/stq-petm-1-71-1.1500x0-1024x683.jpg')] bg-cover bg-center">
                        <div className="absolute inset-0 bg-emerald-900/35 mix-blend-multiply" />
                    </div>

                    {/* Blueprint Overlay Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                    {/* BEHIND TITLE: GIANT "BIZ" */}
                    <div className="absolute top-1/2 -translate-y-1/2 -right-16 rotate-90 font-[family-name:var(--font-orbitron)] font-black text-[8rem] lg:text-[12rem] text-white/10 uppercase tracking-widest select-none pointer-events-none z-10 hidden lg:block">
                        BIZ
                    </div>

                    {/* MASSIVE BADGE */}
                    <div className="absolute top-12 left-8 z-20">
                        <div className="mb-2 flex items-center gap-3">
                            <span className="bg-emerald-600 text-white px-3 py-1 text-xs font-bold tracking-widest uppercase shadow-lg">
                                PILIER 03 • ÉCONOMIE
                            </span>
                            <div className="h-[1px] w-12 bg-white/50" />
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-[family-name:var(--font-orbitron)] font-black text-white uppercase tracking-tighter leading-none drop-shadow-xl">
                            MOTEUR <br />LOCAL
                        </h2>
                    </div>

                    {/* Bottom Caption */}
                    <div className="absolute bottom-8 left-8 right-8">
                        <p className="text-white/90 text-sm font-medium drop-shadow-md border-l-2 border-emerald-500 pl-4">
                            "Un lieu vivant qui irrigue le quartier et soutient le commerce local."
                        </p>
                    </div>
                </div>

                {/* --- RIGHT COL: EDITORIAL CONTENT (55%) --- */}
                <div className="w-full lg:w-[55%] h-auto min-h-[60vh] lg:h-full flex flex-col justify-center p-8 md:p-14 bg-white relative overflow-hidden">

                    {/* Header */}
                    <div className="mb-8 lg:mb-10 relative z-10">
                        {/* Decorative Line */}
                        <div className="w-16 h-1 bg-emerald-600 mb-6" />

                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="font-[family-name:var(--font-exo2)] text-3xl md:text-4xl font-black text-gray-900 leading-[1.1] mb-2 uppercase"
                        >
                            Un Moteur Pour <br /><span className="text-emerald-600">Le Territoire</span>
                        </motion.h2>
                        <p className="text-gray-500 font-bold text-xs uppercase tracking-widest">
                            Commerces • Associations • Insertion
                        </p>
                    </div>

                    {/* Article Body */}
                    <div className="space-y-6 text-sm lg:text-[15px] text-gray-600 leading-relaxed text-balance">

                        {/* Para 1: Animation Commerciale */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h4 className="font-bold text-gray-900 mb-1 uppercase text-xs tracking-wider flex items-center gap-2">
                                <ShoppingBag className="w-4 h-4 text-emerald-600" /> 01. Animation Commerciale & Flux
                            </h4>
                            <p>
                                UWIN génère un flux continu de 15-25 ans, redynamisant les zones commerciales ou cœurs de ville. Organisation d'événements réguliers (tournois amateurs, soirées thématiques) qui profitent aux commerces voisins (snacking, services).
                            </p>
                        </motion.div>

                        {/* Para 2: Support Associations */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h4 className="font-bold text-gray-900 mb-1 uppercase text-xs tracking-wider flex items-center gap-2">
                                <Zap className="w-4 h-4 text-emerald-600" /> 02. QG des Associations Locales
                            </h4>
                            <p>
                                Nous mettons nos locaux à disposition des associations esportives locales (souvent SDF - Sans Domicile Fixe). Elles y trouvent un lieu sécurisé pour s'entraîner, se réunir et encadrer leurs adhérents, structurant ainsi le tissu associatif du territoire.
                            </p>
                        </motion.div>

                        {/* Para 3: Compétences & Insertion */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h4 className="font-bold text-gray-900 mb-1 uppercase text-xs tracking-wider flex items-center gap-2">
                                <Briefcase className="w-4 h-4 text-emerald-600" /> 03. Compétences & Insertion
                            </h4>
                            <p>
                                Le lieu devient un outil d'insertion : accueil de missions locales, bénévolat responsabilisant (gestion du lieu, arbitrage). Nous valorisons les 'soft skills' des joueurs (leadership, communication) pour faciliter leur accès à l'emploi.
                            </p>
                        </motion.div>

                    </div>
                </div>

            </div>
        </SlideLayout>
    );
}
