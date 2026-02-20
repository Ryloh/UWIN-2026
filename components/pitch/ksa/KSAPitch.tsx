"use client";

import { useScroll, useSpring, motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { UwinLogo } from "@/components/ui/UwinLogo";
import { KSAHeroSlide } from "./KSAHeroSlide";
import { KSACompetitionSlide } from "./KSACompetitionSlide";
import { KSAFinancialSlide } from "./KSAFinancialSlide";
import { KSAProductionSlide } from "./KSAProductionSlide";
import { KSAInternationalSlide } from "./KSAInternationalSlide";
import { KSAStrategicSlide } from "./KSAStrategicSlide";
import { KSAVisionSlide } from "./KSAVisionSlide";
import { KSAOrganizationSlide } from "./KSAOrganizationSlide";

const TOTAL_SLIDES = 8;

export function KSAPitch() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollXProgress } = useScroll({ container: containerRef });
    const scaleX = useSpring(scrollXProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

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
            className="h-screen w-screen overflow-x-auto snap-x snap-mandatory lg:overflow-hidden bg-white text-black flex [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] relative"
        >
            {/* Background - Minimalist Light Mode */}
            <div className="fixed inset-0 z-0 bg-white pointer-events-none" />

            {/* Progress Bar */}
            <div className="fixed bottom-0 left-0 right-0 h-1 bg-gray-100 z-50">
                <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-uwin-pink"
                    style={{ scaleX, transformOrigin: '0%' }}
                />
            </div>

            {/* Navigation Overlay */}
            <div className="fixed top-6 left-6 z-50 pointer-events-none hidden md:block">
                <UwinLogo className="scale-75 origin-top-left text-black" />
                <div className="text-xs font-mono text-gray-500 mt-1 tracking-widest pl-1">
                    KSA • ROCKET LEAGUE • 2027
                </div>
            </div>

            {/* Scroll Container */}
            {/* Slides Container - Direct Children */}
            {/* Slide 1: Hero */}
            <section className="snap-start shrink-0 h-full w-full relative">
                <KSAHeroSlide />
            </section>

            {/* Slide 2: Competition */}
            <section className="snap-start shrink-0 h-full w-full relative">
                <KSACompetitionSlide />
            </section>

            {/* Slide 3: Financial */}
            <section className="snap-start shrink-0 h-full w-full relative">
                <KSAFinancialSlide />
            </section>

            {/* Slide 4: Production */}
            <section className="snap-start shrink-0 h-full w-full relative">
                <KSAProductionSlide />
            </section>

            {/* Slide 5: International */}
            <section className="snap-start shrink-0 h-full w-full relative">
                <KSAInternationalSlide />
            </section>

            {/* Slide 6: Strategic */}
            <section className="snap-start shrink-0 h-full w-full relative">
                <KSAStrategicSlide />
            </section>

            {/* Slide 7: Vision */}
            <section className="snap-start shrink-0 h-full w-full relative">
                <KSAVisionSlide />
            </section>

            {/* Slide 8: Organization */}
            <section className="snap-start shrink-0 h-full w-full relative">
                <KSAOrganizationSlide />
            </section>
        </div>

    );
}
