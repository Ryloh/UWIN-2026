// Slide 8 (New) : Brique 3 – La Plateforme
"use client";

import { motion } from "framer-motion";
import { SlideLayout } from "./SlideLayout";
import { Users, Gamepad2, Database, Search, Award, TrendingUp, Shield, Star } from "lucide-react";

export function PlatformSlide() {
    return (
        <SlideLayout number="09" section="PLATEFORME">
            <div className="w-full h-full relative flex flex-col lg:flex-row py-[clamp(32px,4vh,80px)] px-6 md:px-10 gap-8 overflow-hidden">

                {/* LEFT: Dashboard Visual (App Screen) */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 w-full lg:max-w-[45%] relative"
                >
                    <div className="relative w-full h-full min-h-[300px] bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden flex flex-col">
                        {/* Fake Browser Header */}
                        <div className="h-8 bg-gray-50 border-b border-gray-200 flex items-center px-4 gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                            <div className="ml-4 h-4 w-32 bg-gray-200 rounded-md" />
                        </div>

                        {/* App Content */}
                        <div className="p-6 flex-1 flex flex-col gap-6">
                            {/* User Profile Header */}
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-uwin-pink to-purple-600 p-[2px]">
                                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                                        <Users className="text-gray-700 w-6 h-6" />
                                    </div>
                                </div>
                                <div>
                                    <div className="h-4 w-32 bg-gray-200 rounded mb-2" />
                                    <div className="flex items-center gap-2">
                                        <Award className="w-3 h-3 text-uwin-pink" />
                                        <div className="h-3 w-16 bg-gray-100 rounded" />
                                    </div>
                                </div>
                            </div>

                            {/* XP Bar */}
                            <div className="space-y-2">
                                <div className="flex justify-between text-xs text-gray-500">
                                    <span>Niveau 42</span>
                                    <span>XP: 8450 / 10000</span>
                                </div>
                                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "84%" }}
                                        transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                                        className="h-full bg-gradient-to-r from-uwin-pink to-purple-500"
                                    />
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-3 mt-2">
                                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                                    <div className="text-xs text-gray-500 mb-1">Matchs joués</div>
                                    <div className="text-xl font-bold text-gray-900">128</div>
                                </div>
                                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                                    <div className="text-xs text-gray-500 mb-1">Winrate</div>
                                    <div className="text-xl font-bold text-emerald-600">58%</div>
                                </div>
                            </div>

                            {/* LFT List (Simulated) */}
                            <div className="mt-auto space-y-2 opacity-50">
                                <div className="h-10 w-full bg-gray-50 rounded border border-gray-200 flex items-center px-3">
                                    <div className="w-6 h-6 bg-gray-200 rounded-full mr-3" />
                                    <div className="h-2 w-24 bg-gray-200 rounded" />
                                </div>
                                <div className="h-10 w-full bg-gray-50 rounded border border-gray-200 flex items-center px-3">
                                    <div className="w-6 h-6 bg-gray-200 rounded-full mr-3" />
                                    <div className="h-2 w-24 bg-gray-200 rounded" />
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute top-1/2 -right-4 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl font-bold text-xs transform rotate-3 flex items-center gap-2">
                            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                            Profil Certifié
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT: Content */}
                <div className="flex-1 flex flex-col justify-center">

                    {/* Header */}
                    <div className="mb-8">
                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            whileInView={{ opacity: 1, scaleX: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center gap-3 mb-3 origin-left"
                        >
                            <span className="text-uwin-pink font-mono text-xs font-bold uppercase tracking-[0.4em]">
                                Brique 3
                            </span>
                            <div className="h-px w-12 bg-uwin-pink" />
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="font-[family-name:var(--font-exo2)] text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-2"
                        >
                            L'OUTIL <span className="text-uwin-pink">OPÉRATIONNEL</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-gray-500 text-lg font-light"
                        >
                            Gestion du lieu, Sécurité & Reporting.
                        </motion.p>
                    </div>

                    {/* Points Grid */}
                    <div className="space-y-6">
                        {/* Point 1: Gestion Adhérent */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex gap-4 group"
                        >
                            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                                <Users strokeWidth={1.5} className="w-5 h-5 text-blue-500" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg mb-1">Compte Adhérent Unifié</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Gestion des <strong>droits d'accès</strong>, contrôle des âges, portefeuille crédits, historique de jeu. Une identité numérique unique pour accéder au lieu.
                                </p>
                            </div>
                        </motion.div>

                        {/* Point 2: Réservation & Temps */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex gap-4 group"
                        >
                            <div className="w-10 h-10 rounded-lg bg-uwin-pink/10 flex items-center justify-center shrink-0 group-hover:bg-uwin-pink/20 transition-colors">
                                <Database strokeWidth={1.5} className="w-5 h-5 text-uwin-pink" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg mb-1">Réservation & Pilotage</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Booking de PC à l'avance, gestion fluide des rotations, paiement sécurisé. Un outil pour optimiser le taux d'occupation et simplifier l'exploitation.
                                </p>
                            </div>
                        </motion.div>

                        {/* Point 3: Reporting */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex gap-4 group"
                        >
                            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                                <TrendingUp strokeWidth={1.5} className="w-5 h-5 text-emerald-500" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg mb-1">Reporting d'Impact</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Tableau de bord pour la collectivité : fréquentation, profils (anonymisés), heures éducatives vs heures de jeu. <strong>Transparence totale</strong> des résultats.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </SlideLayout>
    );
}
