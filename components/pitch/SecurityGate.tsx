"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface SecurityGateProps {
    onUnlock: () => void;
}

export function SecurityGate({ onUnlock }: SecurityGateProps) {
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [isUnlocked, setIsUnlocked] = useState(false);

    const [sessionId, setSessionId] = useState("");

    useEffect(() => {
        setSessionId(Math.random().toString(36).substring(7).toUpperCase());
        const interval = setInterval(() => {
            setLoadingProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsUnlocked(true), 500);
                    setTimeout(onUnlock, 1500); // Wait for unlock animation
                    return 100;
                }
                return prev + Math.random() * 10;
            });
        }, 150);
        return () => clearInterval(interval);
    }, [onUnlock]);

    return (
        <AnimatePresence>
            {!isUnlocked && (
                <motion.div
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
                    transition={{ duration: 0.8 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white"
                >
                    <div className="flex flex-col items-center gap-6">
                        {/* Logo Glitch Effect */}
                        <div className="relative">
                            <h1 className="font-[family-name:var(--font-orbitron)] text-6xl font-black tracking-tighter text-white opacity-20">
                                UWIN
                            </h1>
                            <motion.h1
                                initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
                                animate={{ clipPath: `polygon(0 0, 100% 0, 100% ${loadingProgress}%, 0 ${loadingProgress}%)` }}
                                className="absolute inset-0 font-[family-name:var(--font-orbitron)] text-6xl font-black tracking-tighter text-white"
                            >
                                UWIN
                            </motion.h1>
                        </div>

                        {/* Status Text with Typewriter effect simulation */}
                        <div className="font-mono text-xs uppercase tracking-[0.2em] text-gray-500">
                            {loadingProgress < 100 ? "Establishing Secure Connection..." : "Access Granted"}
                        </div>

                        {/* Progress Bar */}
                        <div className="h-0.5 w-64 bg-white/10 overflow-hidden rounded-full">
                            <motion.div
                                className="h-full bg-white shadow-[0_0_10px_white]"
                                style={{ width: `${loadingProgress}%` }}
                            />
                        </div>

                        {/* Security Details */}
                        <div className="absolute bottom-8 left-8 font-mono text-[10px] text-gray-600">
                            <p>ENCRYPTION: AES-256-GCM</p>
                            <p>NODE: PARIS-01</p>
                            <p>SESSION ID: {sessionId}</p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
