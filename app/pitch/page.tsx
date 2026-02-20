export default function PitchLanding() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white font-mono p-8">
            <h1 className="text-2xl mb-8 tracking-widest uppercase border-b border-gray-800 pb-4">
                UWIN Decks Repository
            </h1>

            <div className="grid gap-4 w-full max-w-md">
                <a
                    href="/pitch/SQY"
                    className="block p-4 border border-gray-800 hover:border-uwin-pink hover:bg-gray-900 transition-colors group"
                >
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-bold">SQY</span>
                        <span className="text-xs text-gray-500 group-hover:text-uwin-pink transition-colors">v2.0 • 2026</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-2">
                        Pitch Collectivités Territoriales (Saint-Quentin-en-Yvelines)
                    </p>
                </a>

                <a
                    href="/pitch/KSA"
                    className="block p-4 border border-gray-800 hover:border-blue-500 hover:bg-gray-900 transition-colors group"
                >
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-bold">KSA</span>
                        <span className="text-xs text-gray-500 group-hover:text-blue-500 transition-colors">v1.0 • 2027</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-2">
                        Pitch Rocket League (Saudi Arabia)
                    </p>
                </a>
            </div>

            <footer className="mt-16 text-xs text-gray-700 uppercase tracking-[0.2em]">
                Restricted Access
            </footer>
        </div>
    )
}
