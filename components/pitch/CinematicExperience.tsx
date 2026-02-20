"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
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
    const { scrollXProgress } = useScroll({ container: containerRef });
    const scaleX = useSpring(scrollXProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    // Navigation Logic: Wheel, Keyboard, and Mouse Drag
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let isDown = false;
        let startX = 0;
        let scrollLeftPos = 0;

        const snapToSlide = (direction: 'next' | 'prev') => {
            const slideWidth = window.innerWidth;
            const currentScroll = container.scrollLeft;
            const currentSlide = Math.round(currentScroll / slideWidth);

            let targetSlide = currentSlide;
            if (direction === 'next') {
                targetSlide = Math.min(currentSlide + 1, TOTAL_SLIDES - 1);
            } else {
                targetSlide = Math.max(currentSlide - 1, 0);
            }

            container.scrollTo({
                left: targetSlide * slideWidth,
                behavior: 'smooth'
            });
        };

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            const scrollAmount = e.deltaY !== 0 ? e.deltaY : e.deltaX;
            snapToSlide(scrollAmount > 0 ? 'next' : 'prev');
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                snapToSlide('next');
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                snapToSlide('prev');
            }
        };

        // Mouse Drag Logic
        const handleMouseDown = (e: MouseEvent) => {
            isDown = true;
            container.style.cursor = 'grabbing';
            container.style.scrollSnapType = 'none'; // Temporarily disable snap to allow free drag
            startX = e.pageX - container.offsetLeft;
            scrollLeftPos = container.scrollLeft;
        };

        const handleMouseLeave = () => {
            if (!isDown) return;
            isDown = false;
            container.style.cursor = 'grab';
            container.style.scrollSnapType = 'x mandatory'; // Re-enable snap to let browser settle it
        };

        const handleMouseUp = () => {
            if (!isDown) return;
            isDown = false;
            container.style.cursor = 'grab';
            container.style.scrollSnapType = 'x mandatory'; // Re-enable CSS snap to smoothly snap to nearest
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 1.5; // Drag speed multiplier
            container.scrollLeft = scrollLeftPos - walk;
        };

        container.style.cursor = 'grab';
        container.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('keydown', handleKeyDown);
        container.addEventListener('mousedown', handleMouseDown);
        container.addEventListener('mouseleave', handleMouseLeave);
        container.addEventListener('mouseup', handleMouseUp);
        container.addEventListener('mousemove', handleMouseMove);

        return () => {
            container.removeEventListener('wheel', handleWheel);
            window.removeEventListener('keydown', handleKeyDown);
            container.removeEventListener('mousedown', handleMouseDown);
            container.removeEventListener('mouseleave', handleMouseLeave);
            container.removeEventListener('mouseup', handleMouseUp);
            container.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="h-screen w-screen overflow-x-auto snap-x snap-mandatory lg:overflow-hidden bg-white flex [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] relative"
        >
            {/* GLOBAL PROGRESS BAR */}
            <div className="fixed bottom-0 left-0 right-0 h-1 bg-gray-100 z-50">
                <motion.div
                    className="h-full bg-uwin-pink origin-left"
                    style={{ scaleX }}
                />
            </div>

            {/* SLIDE 1: COVER (Vision) */}
            <section className="h-screen min-w-full w-screen snap-center flex-shrink-0 flex items-center justify-center relative bg-black">
                <VisionSection />
            </section>

            {/* SLIDE 2: GENESE / EQUIPE */}
            <section className="h-screen min-w-full w-screen snap-center flex-shrink-0 flex items-center justify-center relative">
                <TeamSlide />
            </section>

            {/* SLIDE 3: LE CONSTAT (Problem) */}
            <section className="h-screen min-w-full w-screen snap-center flex-shrink-0 flex items-center justify-center relative">
                <ProblemSolution />
            </section>

            {/* SLIDE 4: L'IMPASSE (WhyNow) */}
            <section className="h-screen min-w-full w-screen snap-center flex-shrink-0 flex items-center justify-center relative">
                <WhyNowSlide />
            </section>

            {/* SLIDE 5: L'URGENCE (ExecSum) */}
            <section className="h-screen min-w-full w-screen snap-center flex-shrink-0 flex items-center justify-center relative">
                <ExecutiveSummary />
            </section>

            {/* SLIDE 6: LE LIEU (Cybercafé) */}
            <section className="h-screen min-w-full w-screen snap-center flex-shrink-0 flex items-center justify-center relative">
                <CybercafeSlide />
            </section>

            {/* SLIDE 7: SERVICES (Culture / Creative) - NEW */}
            <section className="h-screen min-w-full w-screen snap-center flex-shrink-0 flex items-center justify-center relative">
                <ServicesHubSlide />
            </section>

            {/* SLIDE 8: ÉCONOMIE (Clubs / Retail) */}
            <section className="h-screen min-w-full w-screen snap-center flex-shrink-0 flex items-center justify-center relative">
                <EconomicHubSlide />
            </section>

            {/* SLIDE 9: IMPACT MANIFESTO (Education / Inclusion / Social) - NEW */}
            <section className="h-screen min-w-full w-screen snap-center flex-shrink-0 flex items-center justify-center relative">
                <ImpactManifestoSlide />
            </section>

            {/* SLIDE 10: PLATEFORME (Digital) */}
            <section className="h-screen min-w-full w-screen snap-center flex-shrink-0 flex items-center justify-center relative">
                <PlatformSlide />
            </section>

            {/* SLIDE 11: CE QUE NOUS DEMANDONS */}
            <section className="h-screen min-w-full w-screen snap-center flex-shrink-0 flex items-center justify-center relative">
                <WhatWeAskSlide />
            </section>

            {/* SLIDE 12: CE QUE LA COLLECTIVITÉ Y GAGNE */}
            <section className="h-screen min-w-full w-screen snap-center flex-shrink-0 flex items-center justify-center relative">
                <WhatTheyGainSlide />
            </section>

            {/* SLIDE 13: RISQUES & GARANTIES */}
            <section className="h-screen min-w-full w-screen snap-center flex-shrink-0 flex items-center justify-center relative">
                <RiskGaurantiesSlide />
            </section>

        </div>
    );
}
