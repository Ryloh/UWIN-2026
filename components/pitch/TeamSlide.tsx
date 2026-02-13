// Slide 2 : La Genèse (L'Équipe & La Vision - Dense Mode)
"use client";

import { motion } from "framer-motion";
import { SlideLayout } from "./SlideLayout";
import { Quote } from "lucide-react";

export function TeamSlide() {
    return (
        <SlideLayout number="02" section="LA GENÈSE">
            <div className="w-full h-full relative flex flex-col lg:flex-row overflow-hidden bg-white">

                {/* --- LEFT COL: THE FOUNDERS (40%) --- */}
                <div className="w-full lg:w-[42%] h-full p-8 md:p-12 flex flex-col justify-center border-r border-gray-100 relative">
                    {/* Background Texture - UWIN Identity */}
                    <div className="absolute -top-10 -left-10 text-[15rem] font-black font-[family-name:var(--font-orbitron)] text-uwin-pink/10 -z-10 select-none overflow-hidden opacity-100 pointer-events-none leading-none tracking-tighter">
                        UWIN
                    </div>

                    {/* Branding Header */}
                    <div className="absolute top-8 left-8 md:top-12 md:left-12 flex flex-col">
                        <h1 className="font-[family-name:var(--font-orbitron)] font-black text-4xl text-gray-900 tracking-tighter leading-none mb-1">
                            UWIN
                        </h1>
                        <span className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500">
                            Infrastructure & Performance
                        </span>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-10 mt-20"
                    >
                        <h2 className="font-[family-name:var(--font-exo2)] text-3xl md:text-5xl font-black text-gray-900 leading-none mb-4">
                            L'ESPORT A BESOIN D'<span className="text-uwin-pink">ARCHITECTES.</span>
                        </h2>
                        <p className="text-gray-600 text-base font-medium leading-relaxed">
                            <span className="text-gray-900 font-bold">La France a les talents, mais elle n'a pas les murs.</span><br />
                            Nous sommes les bâtisseurs de cette infrastructure.
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        {/* Mélissa */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <span className="w-8 h-px bg-uwin-pink"></span>
                                <h3 className="font-[family-name:var(--font-exo2)] text-xl font-bold text-gray-900 uppercase tracking-widest">Mélissa</h3>
                                <span className="text-xs text-gray-400 font-mono">L'HUMAIN</span>
                            </div>
                            <p className="text-sm text-gray-600 pl-11 border-l border-gray-100 ml-4 py-1 leading-relaxed text-balance">
                                <strong className="text-gray-900">Présidente.</strong> Après des années d'expérience en tant que coach Rocket League, j'ai vu des centaines de jeunes talentueux abandonner faute d'encadrement. Je porte la <strong className="text-uwin-pink">vision sociale</strong> : faire de UWIN un outil d'inclusion qui rassure les parents et structure les parcours de vie.
                            </p>
                        </motion.div>

                        {/* Jason */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <span className="w-8 h-px bg-blue-500"></span>
                                <h3 className="font-[family-name:var(--font-exo2)] text-xl font-bold text-gray-900 uppercase tracking-widest">Jason</h3>
                                <span className="text-xs text-gray-400 font-mono">LA STRUCTURE</span>
                            </div>
                            <p className="text-sm text-gray-600 pl-11 border-l border-gray-100 ml-4 py-1 leading-relaxed text-balance">
                                <strong className="text-gray-900">Trésorier & CTO. Développeur Fullstack.</strong> J'ai organisé des compétitions avec des moyens précaires et vu les limites du bénévolat. Je porte la <strong className="text-blue-600">vision industrielle</strong> : construire la machine technologique et le modèle économique qui rendront l'esport rentable et pérenne.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* --- RIGHT COL: THE MANIFESTO (58%) --- */}
                <div className="w-full lg:w-[58%] h-full bg-gray-50 flex flex-col justify-center p-8 md:p-12 relative overflow-hidden">

                    <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xs font-mono font-bold text-gray-400 uppercase tracking-[0.25em] mb-8 relative z-10 flex items-center gap-2"
                    >
                        <Quote className="w-4 h-4 text-gray-400" />
                        Notre Mission
                    </motion.h3>

                    <div className="relative z-10 max-w-2xl space-y-8">

                        {/* 1. Ce que nous cherchons */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h4 className="font-bold text-gray-900 mb-2 uppercase text-xs tracking-wider">01. Notre Demande Actuelle</h4>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium text-balance">
                                Nous cherchons <strong className="text-gray-900 bg-white px-1 shadow-sm">1 local pilote</strong> (convention d'occupation ou bail dérogatoire) pour déployer notre modèle en conditions réelles. Nous avons besoin d'un partenaire institutionnel pour transformer cette vision en tiers-lieu opérationnel.
                            </p>
                        </motion.div>

                        {/* 2. Partenaires & Sérieux */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <h4 className="font-bold text-gray-900 mb-2 uppercase text-xs tracking-wider">02. Nos Garanties</h4>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium text-balance">
                                Structure opérée par une équipe expérimentée. <strong className="text-gray-900 bg-white px-1 shadow-sm">Association Loi 1901</strong> déclarée. Rendez-vous institutionnels en cours (SQY, Région). Capacité technique et logistique éprouvée.
                            </p>
                        </motion.div>

                        {/* 3. L'Objectif du Pilote */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="bg-gray-100 p-4 border-l-4 border-gray-900"
                        >
                            <h4 className="font-bold text-gray-900 mb-2 uppercase text-xs tracking-wider">03. Objectif immédiat</h4>
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium text-balance">
                                Lancer un <strong className="text-gray-900">pilote de 90 jours</strong> mesurable (KPIs de fréquentation, encadrement, mixité) pour valider l'impact avant tout engagement long terme.
                            </p>
                        </motion.div>

                    </div>

                </div>

            </div>
        </SlideLayout>
    );
}
