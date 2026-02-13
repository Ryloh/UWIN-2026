import { GlassCard } from "@/components/ui/GlassCard";

export function Footer() {
    return (
        <footer className="relative z-10 bg-black py-12 text-center text-gray-400">
            <div className="container mx-auto px-6">
                <div className="mb-8 flex justify-center gap-6">
                    <a href="#" className="hover:text-uwin-pink transition-colors">Twitter</a>
                    <a href="#" className="hover:text-uwin-pink transition-colors">Discord</a>
                    <a href="#" className="hover:text-uwin-pink transition-colors">Instagram</a>
                </div>
                <p className="font-orbitron text-sm">
                    &copy; 2026 UWIN ESPORT. ALL RIGHTS RESERVED.
                </p>
            </div>
        </footer>
    );
}
