// Slide 3 : Le Paradoxe (Problem)
"use client";

import { motion } from "framer-motion";
import { SlideLayout } from "./SlideLayout";
import { Gamepad2, Trophy, MapPin, Building2, AlertTriangle, Users } from "lucide-react";

export function ProblemSolution() {
    return (
        <SlideLayout number="03" section="CONSTAT">
            <div className="w-full h-full relative flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden bg-white">

                {/* --- LEFT COL: THE PARADOX (Visual) --- */}
                <div className="w-full lg:w-[45%] h-auto min-h-[50vh] lg:h-full bg-gray-50 flex flex-col justify-center p-8 md:p-12 relative border-r border-gray-100">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-10 text-center lg:text-left"
                    >
                        <h2 className="font-[family-name:var(--font-exo2)] text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-2">
                            LE PARADOXE<br />FRANÇAIS
                        </h2>
                        <p className="text-sm text-gray-500 font-medium">Pourquoi la France rate le virage</p>
                    </motion.div>

                    <div className="space-y-12">

                        {/* Football Comparison */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="relative"
                        >
                            <div className="flex justify-between items-end mb-2">
                                <div className="flex items-center gap-3">
                                    <Trophy className="w-6 h-6 text-emerald-600" />
                                    <span className="font-bold text-gray-900">FOOTBALL</span>
                                </div>
                                <div className="flex flex-col items-end">
                                    <div className="text-3xl lg:text-5xl font-black text-gray-900 mb-1">2M</div>
                                    <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Licenciés</div>
                                    <a href="https://www.fff.fr/article/12662-pres-de-2-4-millions-de-licences-en-2023-2024.html" target="_blank" rel="noopener noreferrer" className="text-[10px] text-gray-300 hover:text-uwin-pink transition-colors flex items-center gap-1">
                                        (Source : FFF 2024)
                                    </a>
                                </div>
                            </div>

                            {/* Bar & Data */}
                            <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden mb-2">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="h-full bg-emerald-500"
                                />
                            </div>
                            <div className="flex justify-between text-xs font-mono text-gray-500">
                                <span>Infrastructure</span>
                                <span className="text-emerald-600 font-bold">30 000 STADES</span>
                            </div>
                        </motion.div>


                        {/* Gaming Comparison */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="relative"
                        >
                            <div className="flex justify-between items-end mb-2">
                                <div className="flex items-center gap-3">
                                    <Gamepad2 className="w-6 h-6 text-uwin-pink" />
                                    <span className="font-bold text-gray-900">GAMING</span>
                                </div>
                                <div className="flex flex-col items-end">
                                    <div className="text-3xl lg:text-5xl font-black text-uwin-pink mb-1">10M+</div>
                                    <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Pratiquants</div>
                                    <a href="https://www.france-esports.org/barometre-france-esports-resultats-de-ledition-2023/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-gray-300 hover:text-uwin-pink transition-colors flex items-center gap-1">
                                        (Source : France Esports 2023)
                                    </a>
                                </div>
                            </div>

                            {/* Bar & Data */}
                            <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden mb-4 relative">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "3%" }}
                                    transition={{ duration: 1, delay: 0.6 }}
                                    className="h-full bg-uwin-pink absolute left-0 top-0"
                                />
                            </div>
                            <div className="flex justify-between text-xs font-mono text-gray-500">
                                <span>Infrastructure</span>
                                <span className="text-uwin-pink font-bold">TRÈS PEU DE LIEUX</span>
                            </div>
                        </motion.div>

                    </div>
                </div>

                {/* --- RIGHT COL: NARRATIVE (55%) --- */}
                <div className="w-full lg:w-[55%] h-auto min-h-[50vh] lg:h-full bg-white flex flex-col justify-center p-8 md:p-12">

                    <div className="max-w-xl space-y-8">

                        {/* 1. L'Absurdité */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-2 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4 text-orange-500" />
                                Une Anomalie
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-balance">
                                C'est une anomalie française. Le football est le sport national avec des terrains dans chaque village. <strong className="text-gray-900">Le jeu vidéo compte 5x plus de pratiquants</strong>, mais aucun lieu de proximité. En grande couronne, l'offre est quasi inexistante, créant une fuite des jeunes vers Paris.
                            </p>
                        </motion.div>

                        {/* 2. Le Besoin Non Comblé */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-2 flex items-center gap-2">
                                <Building2 className="w-4 h-4 text-gray-400" />
                                Un Manque d'Espaces Adaptés
                                <a href="https://www.team-aaa.com/fr/actualite/lesport-doit-il-devenir-payant-pour-sa-survie-et-celles-des-equipes-sur-le-long-terme_132728" target="_blank" rel="noopener noreferrer" className="ml-2 text-[10px] lowercase font-normal text-gray-400 hover:text-uwin-pink border-b border-gray-200 hover:border-uwin-pink transition-colors">
                                    (Analyse Team aAa)
                                </a>
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-balance">
                                Les équipements publics actuels (médiathèques, MJC) ne sont pas toujours adaptés à la pratique compétitive ou "sociale" du jeu vidéo (bruit, horaires, matériel). Résultat : la pratique se fait <strong className="text-uwin-pink">seule, à la maison</strong>, sans encadrement.
                            </p>
                        </motion.div>

                        {/* 3. La Solution */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="bg-uwin-pink/5 border-l-4 border-uwin-pink pl-6 py-2 rounded-r-lg"
                        >
                            <h3 className="text-sm font-bold text-uwin-pink uppercase tracking-widest mb-2 flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                La Réponse UWIN
                            </h3>
                            <p className="text-gray-700 font-medium leading-relaxed text-balance">
                                Le Cybercafé UWIN n'est pas une salle d'arcade. C'est le <strong className="text-gray-900">Tiers-Lieu du XXIe siècle</strong>. Le seul endroit capable de faire sortir les jeunes, de les sociabiliser et de les encadrer, comme le fait un club de sport.
                            </p>
                        </motion.div>

                    </div>

                </div>

            </div>
        </SlideLayout>
    );
}
