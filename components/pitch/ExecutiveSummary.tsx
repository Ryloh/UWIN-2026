// Slide 5 : L'Urgence Industrielle (Article Mode)
"use client";

import { motion } from "framer-motion";
import { SlideLayout } from "./SlideLayout";
import { Zap } from "lucide-react";

export function ExecutiveSummary() {
    return (
        <SlideLayout number="05" section="L'OPPORTUNITÉ">
            <div className="w-full h-full relative flex flex-col lg:flex-row overflow-hidden bg-white">

                {/* --- LEFT COL: IMAGE & CONCEPT (45%) --- */}
                <div className="w-full lg:w-[45%] h-1/2 lg:h-full relative font-['Exo_2']">
                    {/* Background Image - Youth Workshop / Collaboration */}
                    <div className="absolute inset-0 bg-[url('/assets/pitch/Slide5.png')] bg-cover bg-center">
                        <div className="absolute inset-0 bg-blue-900/30 mix-blend-multiply" />
                    </div>

                    {/* Blueprint Overlay Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                    {/* Badge */}
                    <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm px-4 py-2 border-l-4 border-yellow-500 shadow-lg">
                        <span className="text-xs font-mono font-bold text-gray-900 tracking-widest uppercase">
                            ACTION • LOCALE
                        </span>
                    </div>

                    {/* Bottom Caption */}
                    <div className="absolute bottom-8 left-8 right-8">
                        <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight uppercase drop-shadow-lg mb-2">
                            UN PILOTE POUR <span className="text-yellow-400">DÉCIDER</span>
                        </h3>
                        <p className="text-white/90 text-sm font-medium drop-shadow-md">
                            Tester l'usage réel sur 90 jours.<br />Sans risque, avec des résultats.
                        </p>
                    </div>
                </div>

                {/* --- RIGHT COL: EDITORIAL CONTENT (55%) --- */}
                <div className="w-full lg:w-[55%] h-full flex flex-col justify-center p-8 md:p-12 bg-white relative">

                    {/* Header */}
                    <div className="mb-8 lg:mb-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="font-[family-name:var(--font-exo2)] text-2xl md:text-4xl font-black text-gray-900 leading-tight mb-2 uppercase"
                        >
                            UNE OPPORTUNITÉ <span className="text-uwin-pink">TERRITORIALE</span>
                        </motion.h2>
                        <p className="text-gray-500 font-bold text-sm uppercase tracking-widest">
                            Occuper, animer, servir et mesurer.
                        </p>
                    </div>

                    {/* Article Body */}
                    <div className="space-y-6 text-sm lg:text-base text-gray-600 leading-relaxed text-balance">

                        {/* Para 1: L'Occupation Positive */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h4 className="font-bold text-gray-900 mb-1 uppercase text-xs tracking-wider">01. Occuper & Sécuriser</h4>
                            <p>
                                Réinvestir un local vacant, c'est ramener de la vie et de la sécurité dans le quartier. Nous proposons d'installer rapidement un espace de vie digital, lumineux et encadré, qui devient un repère positif pour les jeunes.
                            </p>
                        </motion.div>

                        {/* Para 2: Le Service Public Augmenté */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h4 className="font-bold text-gray-900 mb-1 uppercase text-xs tracking-wider">02. Un Service Jeunesse Innovant</h4>
                            <p>
                                Au-delà du jeu, nous apportons un service : accès au matériel performant, lien social, stages et ateliers. Nous complétons l'offre des médiathèques et MJC en touchant un public qui ne fréquente plus les structures classiques.
                            </p>
                        </motion.div>

                        {/* Para 3: Le Pilote Clé en Main */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r-lg"
                        >
                            <h4 className="font-bold text-blue-900 mb-1 uppercase text-xs tracking-wider">03. Le Pilote 90 Jours</h4>
                            <p className="text-blue-800">
                                UWIN propose un <strong className="text-blue-900">pilote clé en main sur 3 mois</strong>.
                                Objectif : tester l'appétence, valider le modèle d'exploitation et mesurer l'impact social avec des indicateurs précis, avant toute décision pérenne.
                            </p>
                        </motion.div>

                    </div>

                    {/* Alert Badge */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-8 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest"
                    >
                        <Zap className="w-4 h-4 text-yellow-500" />
                        <span>Action Rapide & Mesurable</span>
                    </motion.div>

                </div>

            </div>
        </SlideLayout>
    );
}
