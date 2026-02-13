// Slide 7 : Services Hub (Maison du Numérique & Culture)
"use client";

import { motion } from "framer-motion";
import { SlideLayout } from "./SlideLayout";
import { Palette, Library, MonitorPlay, Wifi, Layers } from "lucide-react";

export function ServicesHubSlide() {
    return (
        <SlideLayout number="07" section="SERVICES">
            <div className="w-full h-full relative flex flex-col lg:flex-row overflow-hidden bg-white">

                {/* --- LEFT COL: IMAGE & CONCEPT (45%) --- */}
                <div className="w-full lg:w-[45%] h-1/2 lg:h-full relative font-['Exo_2']">
                    {/* Background Image - Modern Coworking / Bright */}
                    <div className="absolute inset-0 bg-[url('/assets/pitch/Slide7.png')] bg-cover bg-center">
                        <div className="absolute inset-0 bg-indigo-900/35 mix-blend-multiply" />
                    </div>

                    {/* Blueprint Overlay Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                    {/* BEHIND TITLE: GIANT "CREATE" */}
                    <div className="absolute top-1/2 -translate-y-1/2 -right-16 rotate-90 font-[family-name:var(--font-orbitron)] font-black text-[8rem] lg:text-[12rem] text-white/10 uppercase tracking-widest select-none pointer-events-none z-10 hidden xl:block">
                        CREATE
                    </div>

                    {/* MASSIVE CHAPTER ID */}
                    <div className="absolute top-12 left-8 z-20">
                        <div className="mb-2 flex items-center gap-3">
                            <span className="bg-indigo-600 text-white px-3 py-1 text-xs font-bold tracking-widest uppercase shadow-lg">
                                PARTIE 2 : OUTILS
                            </span>
                            <div className="h-[1px] w-12 bg-white/50" />
                        </div>
                        <h2 className="text-5xl lg:text-6xl font-[family-name:var(--font-orbitron)] font-black text-white uppercase tracking-tighter leading-none drop-shadow-xl">
                            SERVICES
                        </h2>
                    </div>

                    {/* JUMBO VERTICAL LABEL */}
                    <div className="absolute top-1/2 -translate-y-1/2 -right-12 rotate-180 [writing-mode:vertical-lr] font-[family-name:var(--font-orbitron)] font-black text-[6rem] lg:text-[8rem] text-white/10 uppercase tracking-widest select-none pointer-events-none z-10 hidden xl:block">
                        SERVICES
                    </div>

                    {/* Bottom Caption */}
                    <div className="absolute bottom-8 left-8 right-8">
                        <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight uppercase drop-shadow-lg mb-2">
                            LA MÉDIATHÈQUE <span className="text-indigo-400">2.0</span>
                        </h3>
                        <p className="text-white/90 text-sm font-medium drop-shadow-md border-l-2 border-indigo-500 pl-4">
                            Créer • Travailler • Se Cultiver. <br />Plus qu'un simple espace de jeu.
                        </p>
                    </div>
                </div>

                {/* --- RIGHT COL: EDITORIAL CONTENT (55%) --- */}
                <div className="w-full lg:w-[55%] h-full flex flex-col justify-center p-8 md:p-14 bg-white relative overflow-hidden">

                    {/* Header */}
                    <div className="mb-8 lg:mb-10 relative z-10">
                        {/* Decorative Line */}
                        <div className="w-16 h-1 bg-indigo-600 mb-6" />

                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="font-[family-name:var(--font-exo2)] text-3xl md:text-4xl font-black text-gray-900 leading-[1.1] mb-2 uppercase"
                        >
                            Bien Plus Que <br /><span className="text-indigo-600">Du Jeu Vidéo</span>
                        </motion.h2>
                        <p className="text-gray-500 font-bold text-xs uppercase tracking-widest">
                            Maison du Numérique & de la Culture
                        </p>
                    </div>

                    {/* Article Body */}
                    <div className="space-y-6 text-sm lg:text-[15px] text-gray-600 leading-relaxed text-balance">

                        {/* Para 1: Studio Créatif */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h4 className="font-bold text-gray-900 mb-1 uppercase text-xs tracking-wider flex items-center gap-2">
                                <Palette className="w-4 h-4 text-indigo-600" /> 01. Le Studio Créatif
                            </h4>
                            <p>
                                Réduire la fracture numérique, c'est donner accès aux outils professionnels. Nos machines intègrent les <strong className="text-gray-900">suites logicielles de référence</strong> (Montage, 3D, Dev). Nous offrons la puissance de calcul nécessaire pour transformer les consommateurs en <strong className="text-indigo-600">créateurs</strong>.
                            </p>
                        </motion.div>

                        {/* Para 2: Espace Étude & Calme */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h4 className="font-bold text-gray-900 mb-1 uppercase text-xs tracking-wider flex items-center gap-2">
                                <Library className="w-4 h-4 text-indigo-600" /> 02. Espace Étude & Télétravail
                            </h4>
                            <p>
                                Un espace calme, séparé du bruit, équipé de Wi-Fi haut débit et d'imprimantes. Idéal pour les étudiants cherchant une alternative à la BU ou les télétravailleurs du quartier. L'accès aux plateformes de contenus (films/mangas) se fait via les comptes personnels des usagers.
                            </p>
                        </motion.div>

                        {/* Para 3: Coworking & Ateliers */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h4 className="font-bold text-gray-900 mb-1 uppercase text-xs tracking-wider flex items-center gap-2">
                                <Wifi className="w-4 h-4 text-indigo-600" /> 03. Coworking & Ateliers
                            </h4>
                            <p>
                                Un véritable Tiers-Lieu de vie. Wi-Fi 6, impressions, espaces de travail calmes. Nous organisons des ateliers d'initiation (Code, Montage, Cybersécurité) pour transformer les <strong className="text-indigo-600">'Soft Skills' des gamers</strong> (anglais, gestion, logique) en compétences professionnelles concrètes.
                            </p>
                        </motion.div>

                    </div>
                </div>

            </div>
        </SlideLayout>
    );
}
