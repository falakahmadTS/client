import { ArrowRight } from "lucide-react"

export const CTA = () => {
    return (
        <section className="py-32 px-4 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background Gradient/Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff5c5c]/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                    Ready to scale your <br/>
                    <span className="text-[#ff5c5c]">Web3 Vision?</span>
                </h2>
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                    Join the fastest growing layer-1 ecosystem and build decentralized applications without limits.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group">
                        Start Building
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-8 py-4 bg-transparent border border-gray-700 text-white font-medium rounded-lg hover:bg-white/5 transition-colors">
                        Contact Sales
                    </button>
                </div>
            </div>
        </section>
    )
}
