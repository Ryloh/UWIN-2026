import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "UWIN | INVESTOR RELATION",
    description: "Confidential - Pitch Deck 2.0",
};

export default function PitchLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-black text-white selection:bg-white selection:text-black">
            {/* Subtle ambient background specific to Pitch Deck */}
            <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[120px] rounded-full" />
            </div>

            <main className="relative z-10">
                {children}
            </main>
        </div>
    );
}
