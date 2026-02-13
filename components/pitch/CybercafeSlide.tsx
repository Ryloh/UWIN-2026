// Slide 6 : Le Lieu (Cybercafé Pédagogique - Article Mode Enrichi)
"use client";

import { motion } from "framer-motion";
import { SlideLayout } from "./SlideLayout";
import { CheckCircle2 } from "lucide-react";

export function CybercafeSlide() {
    return (
        <SlideLayout number="06" section="LE LIEU">
            <div className="w-full h-full relative flex flex-col lg:flex-row overflow-hidden bg-white">

                {/* --- LEFT COL: IMAGE & CONCEPT (45%) --- */}
                <div className="w-full lg:w-[45%] h-[40vh] lg:h-full relative font-['Exo_2']">
                    {/* Background Image - Original Project View */}
                    <div className="absolute inset-0 bg-[url('/assets/pitch/cybercafe2.png')] bg-cover bg-center">
                        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
                    </div>

                    {/* Blueprint Overlay Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                    {/* MASSIVE CHAPTER ID */}
                    <div className="absolute top-12 left-8 z-20">
                        <div className="mb-2 flex items-center gap-3">
                            <span className="bg-uwin-pink text-white px-3 py-1 text-xs font-bold tracking-widest uppercase">
                                SOLUTION • PARTIE 1/2
                            </span>
                            <div className="h-[1px] w-12 bg-white/50" />
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-[family-name:var(--font-orbitron)] font-black text-white uppercase tracking-tighter leading-none drop-shadow-xl">
                            CYBER<br />CAFÉ
                        </h2>
                    </div>

                    {/* JUMBO VERTICAL LABEL */}
                    <div className="absolute top-1/2 -translate-y-1/2 -right-12 rotate-180 [writing-mode:vertical-lr] font-[family-name:var(--font-orbitron)] font-black text-[6rem] lg:text-[8rem] text-white/30 uppercase tracking-widest select-none pointer-events-none z-10 hidden lg:block">
                        CYBER
                    </div>

                    {/* Bottom Caption */}
                    <div className="absolute bottom-8 left-8 right-8">
                        <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight uppercase drop-shadow-lg mb-2">
                            LE STADE DU <span className="text-uwin-pink">XXIe SIÈCLE</span>
                        </h3>
                        <p className="text-white/90 text-sm font-medium drop-shadow-md">
                            Ni une salle d'arcade, ni un bureau. <br />Un espace de vie, d'apprentissage et de performance.
                        </p>
                    </div>
                </div>

                {/* --- RIGHT COL: EDITORIAL CONTENT (55%) --- */}
                <div className="w-full lg:w-[55%] h-auto min-h-[60vh] lg:h-full flex flex-col justify-center p-8 md:p-12 bg-white relative overflow-hidden">
                    {/* GIANT CHAPTER NUMBER */}
                    <div className="absolute -top-10 -right-10 font-[family-name:var(--font-orbitron)] font-black text-[15rem] text-gray-50 leading-none select-none pointer-events-none -z-0 hidden lg:block">
                        01
                    </div>

                    {/* Header */}
                    <div className="mb-8 lg:mb-10 relative z-10">
                        {/* Decorative Line */}
                        <div className="w-16 h-1 bg-uwin-pink mb-6" />

                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="font-[family-name:var(--font-exo2)] text-4xl md:text-5xl font-black text-gray-900 leading-[0.9] mb-4 uppercase"
                        >
                            Le Tiers-Lieu du <span className="text-uwin-pink">21ème Siècle</span>
                        </motion.h2>
                        <p className="text-gray-500 font-bold text-sm uppercase tracking-widest">
                            <span className="text-uwin-pink mr-2">[FACE A : INCLUSION]</span> Un outil de politique publique.
                        </p>
                    </div>

                    {/* Article Body */}
                    <div className="space-y-6 text-sm lg:text-base text-gray-600 leading-relaxed text-balance">

                        {/* Para 1: Le Rôle Social */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mb-4"
                        >
                            <h4 className="font-bold text-gray-900 mb-1 uppercase text-xs tracking-wider">01. Ancrage Social & Mixité</h4>
                            <p>
                                Face à l’isolement numérique, nous créons un point d'ancrage. UWIN est un espace de <strong className="text-gray-900">mixité sociale et générationnelle</strong> où l'on réduit la <strong className="text-uwin-pink">fracture numérique</strong> en offrant l'accès à un matériel haut de gamme à tous.
                            </p>
                        </motion.div>

                        {/* Para 2: Le Levier Éducatif */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mb-4"
                        >
                            <h4 className="font-bold text-gray-900 mb-1 uppercase text-xs tracking-wider">02. Levier Éducatif</h4>
                            <p>
                                Programme <strong className="text-gray-900">'Gaming & Réussite'</strong> : <strong className="text-gray-900">1h d'aide aux devoirs = 1h de gaming</strong>. Nous utilisons la passion comme levier pour accompagner les jeunes et rassurer les parents.
                            </p>
                        </motion.div>

                        {/* Para 3: Le Tremplin Professionnel */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mb-4"
                        >
                            <h4 className="font-bold text-gray-900 mb-1 uppercase text-xs tracking-wider">03. Insertion & Stages</h4>
                            <p>
                                Accueil de stages de 3ème, missions locales, bénévolat encadré. Découverte des métiers du numérique (code, vidéo, événementiel) pour transformer le loisir en compétences.
                            </p>
                        </motion.div>

                        {/* NEW Para 4: Cadre & Sécurité */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="bg-gray-100 p-3 rounded border-l-4 border-gray-900"
                        >
                            <h4 className="font-bold text-gray-900 mb-1 uppercase text-xs tracking-wider">04. Cadre & Sécurité</h4>
                            <p className="text-xs lg:text-sm">
                                <strong className="text-gray-900">Garanties Opérationnelles :</strong> Présence staff permanente, Contrôle d'accès, Charte anti-toxicité, Journal d'incidents & Médiation voisinage. Assurance RC Pro & Conformité ERP (si applicable). Ouverture tardive (option 24/7) selon cadre municipal.
                                <br /><span className="text-xs mt-1 block text-gray-500">Règlement anti-bruit : "Mode Silence" dès 22h. Sanctions : Avertissement → Suspension → Exclusion.</span>
                            </p>
                        </motion.div>
                    </div>

                    {/* Certified Badge + Next Link */}
                    <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs uppercase tracking-widest">
                        <div className="flex items-center gap-2 font-bold text-gray-400">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            <span>Modèle certifié : Inclusion • Éducation</span>
                        </div>
                    </div>

                </div>

            </div>
        </SlideLayout>
    );
}
