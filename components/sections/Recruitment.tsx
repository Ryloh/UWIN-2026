import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";

export function Recruitment() {
    return (
        <section id="recrutement" className="relative py-24">
            <div className="container mx-auto px-6">
                <GlassCard className="relative overflow-hidden border-uwin-pink/20 bg-gradient-to-r from-uwin-dark to-uwin-dark/50 p-12 md:p-20">
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                        <div className="max-w-2xl">
                            <h2 className="mb-6 font-orbitron text-4xl font-bold uppercase italic text-white md:text-6xl">
                                REJOIGNEZ <span className="text-uwin-pink">L'ÉQUIPE</span>
                            </h2>
                            <p className="text-lg text-gray-300">
                                Nous recherchons des talents pour dominer la scène e-sport. Joueurs, coachs, managers... Si vous avez la passion et le talent, nous avons la structure.
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <NeonButton size="lg">POSTULER MAINTENANT</NeonButton>
                        </div>
                    </div>

                    {/* Decorative background accent */}
                    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-uwin-pink/10 blur-[80px]" />
                </GlassCard>
            </div>
        </section>
    );
}
