"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

interface NeonButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

// Removed css skew classes and transition-all to avoid conflict with Framer Motion
export const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        return (
            <motion.button
                ref={ref}
                initial={{ skewX: -20 }}
                whileHover={{ scale: 1.05, skewX: -20 }}
                whileTap={{ scale: 0.95, skewX: -20 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={cn(
                    "relative inline-flex items-center justify-center font-bold tracking-wider uppercase cursor-pointer",
                    "border", // Removed transform -skew-x-20 and transition-all
                    // Base styles
                    {
                        "bg-uwin-pink text-white border-uwin-pink hover:bg-transparent hover:text-uwin-pink hover:shadow-[0_0_20px_rgba(244,63,94,0.6)]":
                            variant === "primary",
                        "bg-transparent text-white border-white/20 hover:border-uwin-pink hover:text-uwin-pink hover:shadow-[0_0_15px_rgba(244,63,94,0.3)]":
                            variant === "secondary",
                    },
                    // Sizes
                    {
                        "px-6 py-2 text-sm": size === "sm",
                        "px-8 py-3 text-base": size === "md",
                        "px-10 py-4 text-lg": size === "lg",
                    },
                    className
                )}
                {...props}
            >
                {/* Use inline style for child skew to ensure it cancels out parent exactly */}
                <span className="inline-block" style={{ transform: "skewX(20deg)" }}>{children}</span>
            </motion.button>
        );
    }
);

NeonButton.displayName = "NeonButton";
