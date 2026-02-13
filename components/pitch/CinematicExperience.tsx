"use client";

import { useRef, useEffect } from "react";
import { VisionSection } from "@/components/pitch/VisionSection";
import { TeamSlide } from "@/components/pitch/TeamSlide";
import { ProblemSolution } from "@/components/pitch/ProblemSolution";
import { WhyNowSlide } from "@/components/pitch/WhyNowSlide";
import { ExecutiveSummary } from "@/components/pitch/ExecutiveSummary";
import { CybercafeSlide } from "@/components/pitch/CybercafeSlide";
import { ServicesHubSlide } from "@/components/pitch/ServicesHubSlide"; // NEW: Digtal House / Culture
import { EconomicHubSlide } from "@/components/pitch/EconomicHubSlide"; // Existing: Business / Retail
import { ImpactManifestoSlide } from "@/components/pitch/ImpactManifestoSlide"; // NEW: Impact 2mm
import { WhatWeAskSlide } from "@/components/pitch/WhatWeAskSlide";
import { WhatTheyGainSlide } from "@/components/pitch/WhatTheyGainSlide";
import { RiskGaurantiesSlide } from "@/components/pitch/RiskGaurantiesSlide";
import { PlatformSlide } from "@/components/pitch/PlatformSlide";

const TOTAL_SLIDES = 13;

export function CinematicExperience() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Convert vertical wheel scroll to horizontal scroll
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();

            // Determine scroll direction and amount
            const scrollAmount = e.deltaY !== 0 ? e.deltaY : e.deltaX;

            // Get current slide index
            const slideWidth = window.innerWidth;
            const currentScroll = container.scrollLeft;
            const currentSlide = Math.round(currentScroll / slideWidth);

            // Determine target slide
            let targetSlide = currentSlide;
            if (scrollAmount > 0) {
                targetSlide = Math.min(currentSlide + 1, TOTAL_SLIDES - 1);
            } else if (scrollAmount < 0) {
                targetSlide = Math.max(currentSlide - 1, 0);
            }

            // Snap to target slide
            container.scrollTo({
                left: targetSlide * slideWidth,
                behavior: 'smooth'
            });
        };

        container.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            container.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="h-screen w-screen overflow-hidden bg-white flex"
        >
            {/* SLIDE 1: COVER (Vision) */}
            <section className="h-screen w-screen flex-shrink-0 flex items-center justify-center relative bg-black">
                <VisionSection />
            </section>

            {/* SLIDE 2: GENESE / EQUIPE */}
            <section className="h-screen w-screen flex-shrink-0 flex items-center justify-center relative">
                <TeamSlide />
            </section>

            {/* SLIDE 3: LE CONSTAT (Problem) */}
            <section className="h-screen w-screen flex-shrink-0 flex items-center justify-center relative">
                <ProblemSolution />
            </section>

            {/* SLIDE 4: L'IMPASSE (WhyNow) */}
            <section className="h-screen w-screen flex-shrink-0 flex items-center justify-center relative">
                <WhyNowSlide />
            </section>

            {/* SLIDE 5: L'URGENCE (ExecSum) */}
            <section className="h-screen w-screen flex-shrink-0 flex items-center justify-center relative">
                <ExecutiveSummary />
            </section>

            {/* SLIDE 6: LE LIEU (Cybercafé) */}
            <section className="h-screen w-screen flex-shrink-0 flex items-center justify-center relative">
                <CybercafeSlide />
            </section>

            {/* SLIDE 7: SERVICES (Culture / Creative) - NEW */}
            <section className="h-screen w-screen flex-shrink-0 flex items-center justify-center relative">
                <ServicesHubSlide />
            </section>

            {/* SLIDE 8: ÉCONOMIE (Clubs / Retail) */}
            <section className="h-screen w-screen flex-shrink-0 flex items-center justify-center relative">
                <EconomicHubSlide />
            </section>

            {/* SLIDE 9: IMPACT MANIFESTO (Education / Inclusion / Social) - NEW */}
            <section className="h-screen w-screen flex-shrink-0 flex items-center justify-center relative">
                <ImpactManifestoSlide />
            </section>

            {/* SLIDE 10: PLATEFORME (Digital) */}
            <section className="h-screen w-screen flex-shrink-0 flex items-center justify-center relative">
                <PlatformSlide />
            </section>

            {/* SLIDE 11: CE QUE NOUS DEMANDONS */}
            <section className="h-screen w-screen flex-shrink-0 flex items-center justify-center relative">
                <WhatWeAskSlide />
            </section>

            {/* SLIDE 12: CE QUE LA COLLECTIVITÉ Y GAGNE */}
            <section className="h-screen w-screen flex-shrink-0 flex items-center justify-center relative">
                <WhatTheyGainSlide />
            </section>

            {/* SLIDE 13: RISQUES & GARANTIES */}
            <section className="h-screen w-screen flex-shrink-0 flex items-center justify-center relative">
                <RiskGaurantiesSlide />
            </section>

        </div>
    );
}
