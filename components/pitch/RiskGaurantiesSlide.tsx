// Slide 13 : Risques, Garanties & KPI (Plan 90 jours)
"use client";

import { motion } from "framer-motion";
import { SlideLayout } from "./SlideLayout";
import { AlertTriangle, ShieldCheck, ListTodo, BarChart3, Flag } from "lucide-react";

export function RiskGaurantiesSlide() {
    return (
        <SlideLayout number="12" section="PLAN D'ACTION">
            <div className="w-full h-full relative flex flex-col lg:flex-row overflow-hidden bg-white">

                {/* --- LEFT COL: TITLE (35%) --- */}
                <div className="w-full lg:w-[35%] h-full bg-gray-100 p-8 md:p-12 flex flex-col justify-center relative border-r border-gray-200">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="relative z-10"
                    >
                        <h2 className="font-[family-name:var(--font-orbitron)] text-3xl lg:text-4xl font-black text-gray-900 leading-none mb-6">
                            RISQUES <span className="text-gray-400">&</span><br />
                            <span className="text-uwin-pink">GARANTIES</span>
                        </h2>

                        <div className="space-y-6 mt-12">
                            {/* Risk 1 */}
                            <div className="bg-white p-4 rounded shadow-sm border-l-4 border-orange-500">
                                <div className="flex items-center gap-2 mb-1 text-xs font-bold text-orange-600 uppercase">
                                    <AlertTriangle className="w-3 h-3" /> Risque Nuisances
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 uppercase mt-2 border-t border-gray-100 pt-2">
                                    <ShieldCheck className="w-3 h-3" /> Garantie UWIN
                                </div>
                                <p className="text-gray-600 text-xs mt-1">
                                    Règlement anti-bruit "Mode Silence" dès 22h. Staff présent, médiation voisinage. Sanctions : Avertissement → Suspension → Exclusion.
                                </p>
                            </div>

                            {/* Risk 2 */}
                            <div className="bg-white p-4 rounded shadow-sm border-l-4 border-orange-500">
                                <div className="flex items-center gap-2 mb-1 text-xs font-bold text-orange-600 uppercase">
                                    <AlertTriangle className="w-3 h-3" /> Risque Dérives
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 uppercase mt-2 border-t border-gray-100 pt-2">
                                    <ShieldCheck className="w-3 h-3" /> Garantie UWIN
                                </div>
                                <p className="text-gray-600 text-xs mt-1">
                                    Présence adulte, Contrôle d'accès & Inscription. Charte anti-toxicité, Journal d'incidents. Sanctions immédiates.
                                </p>
                            </div>
                        </div>

                    </motion.div>
                </div>

                {/* --- RIGHT COL: 90 DAYS PLAN (65%) --- */}
                <div className="w-full lg:w-[65%] h-full bg-white p-8 md:p-14 flex flex-col justify-center">

                    <div className="mb-8">
                        <h3 className="font-[family-name:var(--font-exo2)] font-black text-2xl text-gray-900 uppercase flex items-center gap-3">
                            <ListTodo className="w-6 h-6 text-uwin-pink" />
                            Le Plan Pilote 90 Jours
                        </h3>
                    </div>

                    {/* Timeline */}
                    <div className="relative border-l-2 border-gray-100 ml-3 space-y-8 pl-8">

                        {/* Month 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="relative"
                        >
                            <div className="absolute -left-[41px] top-0 w-6 h-6 bg-gray-900 rounded-full text-white text-[10px] flex items-center justify-center font-bold">1</div>
                            <h4 className="font-bold text-gray-900 uppercase text-sm mb-1">Mois 1 : Installation & Soft Opening</h4>
                            <p className="text-gray-500 text-sm">Aménagement léger. Recrutement staff. Test technique. Ouverture aux premiers bêta-testeurs locaux.</p>
                        </motion.div>

                        {/* Month 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="relative"
                        >
                            <div className="absolute -left-[41px] top-0 w-6 h-6 bg-gray-500 rounded-full text-white text-[10px] flex items-center justify-center font-bold">2</div>
                            <h4 className="font-bold text-gray-900 uppercase text-sm mb-1">Mois 2 : Activation & Partenariats</h4>
                            <p className="text-gray-500 text-sm">Lancement officiel. Premiers tournois amateurs. Ateliers avec les associations locales et écoles.</p>
                        </motion.div>

                        {/* Month 3 */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="relative"
                        >
                            <div className="absolute -left-[41px] top-0 w-6 h-6 bg-uwin-pink rounded-full text-white text-[10px] flex items-center justify-center font-bold">3</div>
                            <h4 className="font-bold text-gray-900 uppercase text-sm mb-1">Mois 3 : Bilan & Décision</h4>
                            <p className="text-gray-500 text-sm">Analyse des KPI. Rapport d'impact. Décision : Arrêt, Prolongation ou Passage à l'échelle.</p>
                        </motion.div>
                    </div>

                    {/* KPIs Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-10 bg-gray-50 p-6 rounded-lg border border-gray-100"
                    >
                        <h4 className="font-bold text-gray-900 uppercase text-xs tracking-widest mb-4 flex items-center gap-2">
                            <BarChart3 className="w-4 h-4 text-emerald-600" />
                            Indicateurs de Succès (KPI)
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div>
                                <div className="text-2xl font-black text-gray-900">300+</div>
                                <div className="text-[10px] uppercase font-bold text-gray-400">Passages / Semaine</div>
                            </div>
                            <div>
                                <div className="text-2xl font-black text-gray-900">50%</div>
                                <div className="text-[10px] uppercase font-bold text-gray-400">Taux Remplissage</div>
                            </div>
                            <div>
                                <div className="text-2xl font-black text-gray-900">0</div>
                                <div className="text-[10px] uppercase font-bold text-gray-400">Incident Grave</div>
                            </div>
                            <div>
                                <div className="text-2xl font-black text-emerald-600">4.8/5</div>
                                <div className="text-[10px] uppercase font-bold text-gray-400">Satisfaction (NPS)</div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="mt-8 flex items-center gap-3">
                        <Flag className="w-5 h-5 text-gray-900" />
                        <p className="font-[family-name:var(--font-exo2)] font-black text-gray-900 text-lg uppercase">
                            Prêts à démarrer dès signature.
                        </p>
                    </div>

                </div>
            </div>
        </SlideLayout>
    );
}
