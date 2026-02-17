import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Target, Shield, Users, Rocket, Cpu } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export const About = () => {
    const container = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        // Hero animation - immediate
        gsap.from(".hero-animate", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        })

        // Value cards animation - triggers on scroll
        gsap.from(".value-card", {
            scrollTrigger: {
                trigger: ".value-card-container",
                start: "top 90%",
                toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            clearProps: "all"
        })

        // Stats animation - triggers on scroll
        gsap.from(".stat-animate", {
            scrollTrigger: {
                trigger: ".stats-container",
                start: "top 85%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 20,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            clearProps: "all"
        })

        // Journey items animation
        gsap.from(".journey-animate", {
            scrollTrigger: {
                trigger: ".journey-container",
                start: "top 85%",
                toggleActions: "play none none none"
            },
            x: -30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            clearProps: "all"
        })
    }, { scope: container })

    return (
        <div ref={container} className="bg-[#050505] min-h-screen text-white pt-32 pb-20 relative overflow-hidden">
             {/* Background Effects */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>
             <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Hero section */}
                <div className="max-w-4xl mx-auto text-center mb-32">
                    <div className="hero-animate inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-medium mb-6">
                        <Rocket className="w-4 h-4" />
                        <span>The Future of Blockchain</span>
                    </div>
                    <h1 className="hero-animate text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-tight">
                        Powering the <span className="text-[#ff5c5c]">Ecosystem</span>
                    </h1>
                    <p className="hero-animate text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                        Tycoonz is more than a network; it's the bedrock for the next generation of decentralized innovation, 
                        making high-performance blockchain accessible to everyone.
                    </p>
                </div>

                {/* Core Values */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Core Principles</h2>
                        <div className="w-20 h-1 bg-[#ff5c5c] mx-auto rounded-full"></div>
                    </div>
                    <div className="value-card-container grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Target, title: "Precision", desc: "Optimizing every nanosecond of state transitions for maximum throughput." },
                            { icon: Shield, title: "Security", desc: "Rigorous formal verification and nested security layers protect all assets." },
                            { icon: Cpu, title: "Scalability", desc: "Dynamic sharding that grows with demand without compromising decentralization." },
                            { icon: Users, title: "Community", desc: "Governance shaped by those who build, use, and secure the network." }
                        ].map((item, i) => (
                            <div key={i} className="value-card p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md group hover:bg-[#ff5c5c]/5 hover:border-[#ff5c5c]/30 transition-all duration-300">
                                <div className="w-12 h-12 bg-[#ff5c5c]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6 text-[#ff5c5c]" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="stats-container bg-gradient-to-r from-red-900/20 to-transparent border border-white/10 rounded-[3rem] p-12 md:p-20 mb-32 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 blur-[80px] rounded-full group-hover:bg-red-500/20 transition-colors"></div>
                    <div className="grid md:grid-cols-3 gap-12 relative z-10">
                        <div className="stat-animate text-center md:text-left">
                            <h4 className="text-5xl md:text-7xl font-bold text-white mb-2">2M+</h4>
                            <p className="text-red-500 font-medium tracking-widest uppercase text-sm">Transactions / Sec</p>
                        </div>
                        <div className="stat-animate text-center md:text-left">
                            <h4 className="text-5xl md:text-7xl font-bold text-white mb-2">500k</h4>
                            <p className="text-green-400 font-medium tracking-widest uppercase text-sm">Nodes Deployed</p>
                        </div>
                        <div className="stat-animate text-center md:text-left">
                            <h4 className="text-5xl md:text-7xl font-bold text-white mb-2">$1.2B</h4>
                            <p className="text-blue-400 font-medium tracking-widest uppercase text-sm">Staked Value</p>
                        </div>
                    </div>
                </div>

                {/* Journey Section */}
                <div className="journey-container max-w-4xl mx-auto">
                    <div className="flex items-center gap-6 mb-16">
                        <div className="w-12 h-px bg-white/20"></div>
                        <h2 className="text-3xl font-bold whitespace-nowrap">Our Journey</h2>
                        <div className="w-full h-px bg-gradient-to-r from-white/20 to-transparent"></div>
                    </div>
                    <div className="space-y-12">
                        {[
                            { year: "2023", title: "Genesis", desc: "Whitepaper release and initial architecture design of the Tycoonz protocol." },
                            { year: "2024", title: "Testnet Alpha", desc: "First 10,000 nodes launched, demonstrating 1M TPS in a controlled environment." },
                            { year: "2025", title: "Global Expansion", desc: "Expanding ecosystem partnerships and preparing for full mainnet rollout." }
                        ].map((event, i) => (
                            <div key={i} className="journey-animate flex gap-8 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-4 h-4 rounded-full bg-[#ff5c5c] ring-4 ring-red-500/20 group-hover:scale-125 transition-transform"></div>
                                    <div className="w-px h-full bg-gradient-to-b from-red-500/30 to-transparent mt-2"></div>
                                </div>
                                <div className="pb-8">
                                    <span className="text-[#ff5c5c] font-bold text-xl block mb-1">{event.year}</span>
                                    <h4 className="text-2xl font-bold mb-3">{event.title}</h4>
                                    <p className="text-gray-400 leading-relaxed text-lg">{event.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
