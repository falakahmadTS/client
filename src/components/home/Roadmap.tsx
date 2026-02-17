import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const milestones = [
    {
        date: "Q1 2024",
        title: "Testnet Launch",
        desc: "Deployment of initial layer-1 protocol with 100 validation nodes.",
        status: "completed"
    },
    {
        date: "Q2 2024",
        title: "Ecosystem Fund",
        desc: "$50M allocation for developers building on Tycoonz Blockchain.",
        status: "completed"
    },
    {
        date: "Q3 2024",
        title: "Mainnet Beta",
        desc: "Opening the network for institutional partners and public staking.",
        status: "in-progress"
    },
    {
        date: "Q4 2024",
        title: "Smart Contract 2.0",
        desc: "Introduction of ultra-optimized WASM-based smart contract engine.",
        status: "planned"
    },
    {
        date: "2025",
        title: "Global Scalability",
        desc: "Expansion to 10k nodes and cross-chain bridge implementation.",
        status: "planned"
    }
]

export const Roadmap = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const items = containerRef.current?.querySelectorAll(".milestone-item")
        items?.forEach((item) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                y: 20,
                duration: 0.8,
                ease: "power2.out"
            })
        })
    }, { scope: containerRef })

    return (
        <section id="roadmap" className="py-32 px-4 bg-[#0a0a0a]" ref={containerRef}>
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-24">
                    <span className="text-[#ff5c5c] font-bold tracking-widest uppercase text-sm mb-4 block">Our Path Forward</span>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Project Roadmap</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        A transparent look at our development milestones as we build the backbone of the decentralized future.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line - Hidden on small, centered on large */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#ff5c5c]/50 via-white/10 to-transparent md:-translate-x-1/2"></div>

                    <div className="space-y-12">
                        {milestones.map((ms, i) => (
                            <div key={i} className={`milestone-item relative flex items-center md:justify-between w-full ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                {/* Content Card */}
                                <div className="ml-12 md:ml-0 md:w-[45%]">
                                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:border-[#ff5c5c]/30 transition-all group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full ${
                                                ms.status === 'completed' ? 'bg-green-500/10 text-green-500' : 
                                                ms.status === 'in-progress' ? 'bg-[#ff5c5c]/10 text-[#ff5c5c]' : 'bg-white/5 text-gray-400'
                                            }`}>
                                                {ms.date}
                                            </span>
                                            {ms.status === 'completed' && <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>}
                                            {ms.status === 'in-progress' && <div className="w-2 h-2 rounded-full bg-[#ff5c5c] animate-pulse"></div>}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-[#ff5c5c] transition-colors">{ms.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{ms.desc}</p>
                                    </div>
                                </div>

                                {/* Center Dot */}
                                <div className="absolute left-[20px] md:left-1/2 w-3 h-3 rounded-full bg-[#050505] border-2 border-[#ff5c5c] z-10 md:-translate-x-1/2 shadow-[0_0_15px_rgba(255,92,92,0.5)]"></div>
                                
                                {/* Spacer for other side on desktop */}
                                <div className="hidden md:block w-[45%]"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
