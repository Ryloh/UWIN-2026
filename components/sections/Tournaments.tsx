import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";

const tournaments = [
    { id: 1, title: "League of Legends Cup", date: "15 FEV 2026", prize: "5000€" },
    { id: 2, title: "Valorant Masters", date: "22 FEV 2026", prize: "3000€" },
    { id: 3, title: "Rocket League Open", date: "01 MAR 2026", prize: "2000€" },
];

export function Tournaments() {
    return (
        <section id="tournois" className="relative py-24">
            <div className="container mx-auto px-6">
                <div className="mb-16 flex items-end justify-between">
                    <div>
                        <h2 className="mb-2 font-orbitron text-4xl font-bold uppercase italic text-white md:text-5xl">
                            Tournois <span className="text-uwin-pink">Actifs</span>
                        </h2>
                        <div className="h-1 w-24 bg-uwin-pink shadow-[0_0_10px_rgba(244,63,94,0.5)]"></div>
                    </div>
                    <NeonButton variant="secondary" size="sm" className="hidden md:flex">
                        TOUT VOIR
                    </NeonButton>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {tournaments.map((t) => (
                        <GlassCard key={t.id} className="group flex flex-col justify-between hover:bg-white/5">
                            <div>
                                <div className="mb-4 flex items-center justify-between text-sm text-gray-400">
                                    <span>{t.date}</span>
                                    <span className="rounded bg-uwin-pink/20 px-2 py-0.5 text-xs text-uwin-pink">OPEN</span>
                                </div>
                                <h3 className="mb-2 font-orbitron text-xl font-bold italic text-white group-hover:text-uwin-pink transition-colors">
                                    {t.title}
                                </h3>
                                <p className="text-2xl font-bold text-gray-200">{t.prize}</p>
                            </div>
                            <div className="mt-8">
                                <NeonButton size="sm" className="w-full">S'INSCRIRE</NeonButton>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
