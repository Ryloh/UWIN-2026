"use client";

import Link from "next/link";
import { NeonButton } from "@/components/ui/NeonButton";
import { motion } from "framer-motion";

export function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12"
        >
            {/* Logo Area */}
            <div className="flex items-center gap-2">
                <Link href="/" className="group relative">
                    <span className="font-orbitron text-2xl font-black italic tracking-tighter text-white transition-colors group-hover:text-uwin-pink">
                        UWIN
                    </span>
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-uwin-pink transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </div>

            {/* Desktop Links (Glass Effect) */}
            <div className="hidden md:flex items-center gap-8 rounded-full border border-white/10 bg-uwin-dark/50 px-8 py-3 backdrop-blur-md shadow-lg">
                {["Home", "Tournois", "Recrutement", "Contact"].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-sm font-medium uppercase tracking-wide text-gray-300 transition-colors hover:text-white hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                    >
                        {item}
                    </Link>
                ))}
            </div>

            {/* CTA */}
            <div className="hidden md:block">
                <NeonButton size="sm" variant="primary">
                    Se Connecter
                </NeonButton>
            </div>

            {/* Mobile Menu Toggle (Simplified for now) */}
            <div className="md:hidden">
                <button className="text-white">MENU</button>
            </div>
        </motion.nav>
    );
}
