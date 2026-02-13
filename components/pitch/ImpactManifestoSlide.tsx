// Slide 9 : Impact Manifesto (Refonte Totale - Editorial Mode)
"use client";

import { motion } from "framer-motion";
import { SlideLayout } from "./SlideLayout";
import { Heart, BookOpen, Users, Briefcase, Trophy, Target } from "lucide-react";

export function ImpactManifestoSlide() {
    return (
        <SlideLayout number="09" section="IMPACT">
            <div className="w-full h-auto min-h-full relative flex flex-col lg:flex-row overflow-visible bg-white">

                {/* --- BACKGROUND LAYER --- */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526666923127-b2970f64b422?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center filter grayscale opacity-10 pointer-events-none" />

                {/* --- LEFT COL: MANIFESTO STATEMENT (35%) --- */}
                <div className="w-full lg:w-[35%] h-auto min-h-[40vh] lg:h-full flex flex-col justify-center p-8 md:p-12 relative border-r border-gray-100 bg-white/80 backdrop-blur-sm">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <h2 className="font-[family-name:var(--font-orbitron)] text-4xl lg:text-6xl font-black text-gray-900 leading-[0.9] mb-6 tracking-tighter">
                            IMPACT <br /><span className="text-uwin-pink">RÉEL</span>
                        </h2>
                        <div className="w-20 h-2 bg-gray-900 mb-8" />

                        <p className="text-gray-600 text-lg font-bold leading-tight mb-8">
                            Au-delà du jeu, nous bâtissons un modèle d'utilité publique mesurable dès le premier jour.
                        </p>

                        {/* Pilot KPI Box */}
                        <div className="bg-gray-900 text-white p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-2 opacity-10">
                                <Target className="w-16 h-16" />
                            </div>
                            <h3 className="font-bold text-uwin-pink uppercase text-xs tracking-widest mb-4">Objectifs Pilote (90j)</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-end border-b border-gray-700 pb-2">
                                    <span className="text-sm font-bold text-gray-400">Fréquentation</span>
                                    <span className="text-xl font-black">300+ / sem</span>
                                </div>
                                <div className="flex justify-between items-end border-b border-gray-700 pb-2">
                                    <span className="text-sm font-bold text-gray-400">Ateliers</span>
                                    <span className="text-xl font-black">12 / mois</span>
                                </div>
                                <div className="flex justify-between items-end border-b border-gray-700 pb-2">
                                    <span className="text-sm font-bold text-gray-400">Incidents Graves</span>
                                    <span className="text-xl font-black text-emerald-400">ZERO</span>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>

                {/* --- RIGHT COL: 4 PILLARS (65%) --- */}
                <div className="w-full lg:w-[65%] h-auto min-h-[60vh] lg:h-full flex flex-col justify-center p-8 md:p-16 bg-white/50 backdrop-blur-sm">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Pillar 1: Education */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="flex gap-6 items-start border-b border-transparent pb-6"
                        >
                            <div className="text-gray-300 font-black text-4xl leading-none">01</div>
                            <div className="flex-1">
                                <h3 className="font-black text-2xl text-gray-900 uppercase mb-2 flex items-center gap-3">
                                    <BookOpen className="w-6 h-6 text-uwin-pink" /> Éducation
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                    Programme "Gaming & Réussite". Aide aux devoirs obligatoire pour accéder aux créneaux de jeu premium. Valorisation des compétences cognitives.
                                </p>
                                <div className="inline-flex items-center gap-2 text-xs font-bold bg-gray-100 px-3 py-1 rounded text-gray-700">
                                    <Trophy className="w-3 h-3 text-uwin-pink" />
                                    KPI : 1h Devoirs = 1h Jeu
                                </div>
                            </div>
                        </motion.div>

                        {/* Pillar 2: Inclusion */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex gap-6 items-start border-b border-transparent pb-6"
                        >
                            <div className="text-gray-300 font-black text-4xl leading-none">02</div>
                            <div className="flex-1">
                                <h3 className="font-black text-2xl text-gray-900 uppercase mb-2 flex items-center gap-3">
                                    <Heart className="w-6 h-6 text-uwin-pink" /> Inclusion
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                    Lieu 100% accessible PMR. Tarifs sociaux adaptés au quotient familial. Créneaux et tournois dédiés à la mixité (objectif 30%+ féminin).
                                </p>
                                <div className="inline-flex items-center gap-2 text-xs font-bold bg-gray-100 px-3 py-1 rounded text-gray-700">
                                    <Users className="w-3 h-3 text-uwin-pink" />
                                    KPI : Mixité active
                                </div>
                            </div>
                        </motion.div>

                        {/* Pillar 3: Lien Social */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex gap-6 items-start border-b border-transparent pb-6"
                        >
                            <div className="text-gray-300 font-black text-4xl leading-none">03</div>
                            <div className="flex-1">
                                <h3 className="font-black text-2xl text-gray-900 uppercase mb-2 flex items-center gap-3">
                                    <Users className="w-6 h-6 text-uwin-pink" /> Lien Social
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                    L'anti-discord. Un lieu physique pour sortir de l'isolement. Organisation de tournois locaux inter-quartiers pour fédérer la jeunesse.
                                </p>
                                <div className="inline-flex items-center gap-2 text-xs font-bold bg-gray-100 px-3 py-1 rounded text-gray-700">
                                    <Target className="w-3 h-3 text-uwin-pink" />
                                    KPI : Taux de retour
                                </div>
                            </div>
                        </motion.div>

                        {/* Pillar 4: Insertion */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex gap-6 items-start"
                        >
                            <div className="text-gray-300 font-black text-4xl leading-none">04</div>
                            <div className="flex-1">
                                <h3 className="font-black text-2xl text-gray-900 uppercase mb-2 flex items-center gap-3">
                                    <Briefcase className="w-6 h-6 text-uwin-pink" /> Insertion
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                    Découverte des métiers du numérique. Stages de 3ème. Bénévolat encadré (arbitrage, gestion) pour une première expérience CV.
                                </p>
                                <div className="inline-flex items-center gap-2 text-xs font-bold bg-gray-100 px-3 py-1 rounded text-gray-700">
                                    <Trophy className="w-3 h-3 text-uwin-pink" />
                                    KPI : Jeunes accompagnés
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>

            </div>
        </SlideLayout >
    );
}
