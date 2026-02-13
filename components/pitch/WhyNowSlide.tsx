// Slide 4 : L'Impasse Économique (Article Mode)
"use client";

import { motion } from "framer-motion";
import { SlideLayout } from "./SlideLayout";
import { AlertTriangle } from "lucide-react";

export function WhyNowSlide() {
    return (
        <SlideLayout number="04" section="L'IMPASSE">
            <div className="w-full h-full relative flex flex-col lg:flex-row overflow-hidden bg-white">

                {/* --- LEFT COL: IMAGE & CONCEPT (45%) --- */}
                <div className="w-full lg:w-[45%] h-[40vh] lg:h-full relative font-['Exo_2']">
                    {/* Background Image - Empty Shop / Closed Shutter */}
                    <div className="absolute inset-0 bg-[url('/assets/pitch/Slide4.png')] bg-cover bg-center">
                        <div className="absolute inset-0 bg-red-950/50 mix-blend-multiply" />
                    </div>

                    {/* Blueprint Overlay Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                    {/* Badge */}
                    <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm px-4 py-2 border-l-4 border-red-600 shadow-lg">
                        <span className="text-xs font-mono font-bold text-gray-900 tracking-widest uppercase">
                            DIAGNOSTIC • LOCAL
                        </span>
                    </div>

                    {/* Bottom Caption */}
                    <div className="absolute bottom-8 left-8 right-8">
                        <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight uppercase drop-shadow-lg mb-2">
                            DES M² INEXPLOITÉS <span className="text-red-500">ET VIDES</span>
                        </h3>
                        <p className="text-white/90 text-sm font-medium drop-shadow-md">
                            Des locaux vacants qui coûtent.<br />Une jeunesse qui cherche un lieu.
                        </p>
                    </div>
                </div>

                {/* --- RIGHT COL: EDITORIAL CONTENT (55%) --- */}
                <div className="w-full lg:w-[55%] h-auto min-h-[60vh] lg:h-full flex flex-col justify-center p-8 md:p-12 bg-white relative">

                    {/* Header */}
                    <div className="mb-8 lg:mb-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="font-[family-name:var(--font-exo2)] text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-2 uppercase"
                        >
                            La Double <span className="text-red-600">Impasse</span> Territoriale
                        </motion.h2>
                        <p className="text-gray-500 font-bold text-sm uppercase tracking-widest">
                            Des locaux vides d'un côté, des jeunes sans lieu de l'autre.
                        </p>
                    </div>

                    {/* Article Body */}
                    <div className="space-y-6 text-sm lg:text-base text-gray-600 leading-relaxed text-balance">

                        {/* Para 1: La Vacance Commerciale */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h4 className="font-bold text-gray-900 mb-1 uppercase text-xs tracking-wider">01. La Vacance Commerciale</h4>
                            <p>
                                De nombreux pieds d'immeubles ou locaux commerciaux restent vacants, dégradant l'image des quartiers. Ces espaces, souvent en attente de reconversion longue, sont des opportunités manquées pour l'animation locale.
                            </p>
                        </motion.div>

                        {/* Para 2: L'Isolement des Jeunes */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h4 className="font-bold text-gray-900 mb-1 uppercase text-xs tracking-wider">02. L'Isolement Numérique</h4>
                            <p>
                                Sans lieu dédié, la pratique du jeu vidéo enferme les jeunes chez eux. Il manque des <strong>tiers-lieux de proximité</strong> capables de transformer cette pratique solitaire en lien social réel, encadré et positif.
                            </p>
                        </motion.div>

                        {/* Para 3: L'Opportunité du Temporaire */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h4 className="font-bold text-gray-900 mb-1 uppercase text-xs tracking-wider">03. L'Urbanisme Transitoire</h4>
                            <p>
                                Plutôt que de laisser un local vide, <strong>l'occupation temporaire</strong> (ou bail dérogatoire) permet de tester un usage, de sécuriser les lieux et de créer du flux immédiatement. C'est un laboratoire à ciel ouvert pour la collectivité, sans engagement lourd.
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
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                        <span>Risque : Dégradation & Perte de Lien</span>
                    </motion.div>

                </div>

            </div>
        </SlideLayout>
    );
}
