import { Cpu, Globe, Shield } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

export const LiveNodes = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const logsRef = useRef<HTMLDivElement>(null)
    const [logs, setLogs] = useState<string[]>([
        "Initializing global node network...",
        "Node #0821 connected (Frankfurt, DE)",
        "Validation complete for Block #892,102"
    ])

    useEffect(() => {
        const interval = setInterval(() => {
            const nodeIds = ["482", "910", "127", "844", "209", "115", "633"]
            const regions = ["Tokyo", "London", "New York", "Singapore", "Mumbai", "Berlin", "Sydney"]
            const randomLog = `Node #${nodeIds[Math.floor(Math.random() * nodeIds.length)]} validated txn in ${regions[Math.floor(Math.random() * regions.length)]}`
            
            setLogs(prev => [randomLog, ...prev].slice(0, 10))
        }, 2500)

        // GSAP: Animate "Packets" flowing from center to edge nodes
        const packets = containerRef.current?.querySelectorAll(".data-packet")
        packets?.forEach((packet, i) => {
            const angle = (i * (360 / packets.length)) * (Math.PI / 180)
            const radius = 180 // Max distance

            gsap.to(packet, {
                x: Math.cos(angle) * radius,
                y: Math.sin(angle) * radius,
                opacity: 0,
                duration: 2 + Math.random() * 2,
                repeat: -1,
                ease: "power2.in",
                delay: Math.random() * 2,
                onRepeat: () => {
                    gsap.set(packet, { x: 0, y: 0, opacity: 1 })
                }
            })
        })

        // Subtle floating for the stationary edge nodes
        const nodes = containerRef.current?.querySelectorAll(".edge-node")
        nodes?.forEach(node => {
            gsap.to(node, {
                y: "+=10",
                x: "+=5",
                duration: 2 + Math.random() * 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            })
        })

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="py-32 px-4 bg-[#050505] relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#ff5c5c]/5 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px]"></div>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    
                    {/* Left Side: Visual Simulation */}
                    <div ref={containerRef} className="relative aspect-square max-w-xl mx-auto w-full bg-[#0a0a0a] rounded-[40px] border border-white/5 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]">
                        {/* Grid Pattern */}
                        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                        {/* Static Radial Lines */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            {[...Array(8)].map((_, i) => (
                                <div 
                                    key={i} 
                                    className="absolute w-[400px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                    style={{ transform: `rotate(${i * 45}deg)` }}
                                ></div>
                            ))}
                        </div>

                        {/* Traveling Data Packets */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="data-packet absolute w-2 h-2 bg-[#ff5c5c] rounded-full blur-[2px] shadow-[0_0_10px_#ff5c5c] z-20"></div>
                            ))}
                        </div>

                        {/* Stationary Edge Nodes */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            {[...Array(8)].map((_, i) => {
                                const angle = (i * 45) * (Math.PI / 180);
                                const radius = 180;
                                return (
                                    <div 
                                        key={i}
                                        className="edge-node absolute w-10 h-10 bg-black border border-white/10 rounded-xl flex items-center justify-center backdrop-blur-md z-30"
                                        style={{
                                            transform: `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`
                                        }}
                                    >
                                        {i % 2 === 0 ? <Shield className="w-4 h-4 text-[#ff5c5c]" /> : <Cpu className="w-4 h-4 text-blue-400" />}
                                    </div>
                                )
                            })}
                        </div>
                        
                        {/* Center Core (CPU) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-[#ff5c5c] rounded-3xl blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <div className="w-24 h-24 bg-gradient-to-br from-[#111] to-black rounded-3xl flex items-center justify-center relative border border-white/10 shadow-2xl">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff5c5c] to-transparent opacity-10 rounded-3xl"></div>
                                    <Globe className="w-10 h-10 text-[#ff5c5c] animate-[pulse_3s_linear_infinite]" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Terminal & Info */}
                    <div className="space-y-10">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></span>
                                <span className="text-[#ff5c5c] font-black uppercase tracking-[0.4em] text-[10px]">Infrastructure Live</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-[0.9] italic uppercase">
                                Decentralized <br/> <span className="text-white/20 outline-text">Network Flow</span>
                            </h2>
                            <p className="text-gray-400 leading-relaxed text-lg max-w-lg">
                                Real-time visualization of the Tycoonz layer-1 validation environment. Monitor data packets being distributed and verified across our global validator nodes.
                            </p>
                        </div>

                        {/* Terminal Log */}
                        <div className="bg-[#080808] rounded-[32px] border border-white/5 p-8 font-mono text-[13px] h-72 overflow-hidden relative shadow-2xl">
                            <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-6">
                                <div className="flex gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-white/5"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-white/5"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-white/5"></div>
                                </div>
                                <span className="text-[10px] text-gray-700 uppercase tracking-[0.2em] font-black">Mainnet-Node-Status</span>
                            </div>
                            <div ref={logsRef} className="space-y-4">
                                {logs.map((log, i) => (
                                    <div key={i} className={`transition-all duration-700 flex items-start gap-4 ${i === 0 ? "text-[#ff5c5c]" : "text-gray-600"}`}>
                                        <span className="text-gray-800 shrink-0 font-bold">[{new Date().toLocaleTimeString([], { hour12: false })}]</span>
                                        <span className="leading-tight">{log}</span>
                                    </div>
                                ))}
                            </div>
                            {/* Gradient Overlay */}
                            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none"></div>
                        </div>

                        <div className="grid grid-cols-2 gap-12 pt-4">
                            <div>
                                <p className="text-4xl font-black text-white italic tracking-tighter">0.8<span className="text-sm not-italic font-bold text-gray-600 ml-1 uppercase">ms</span></p>
                                <p className="text-[#ff5c5c] text-[10px] font-black uppercase tracking-[0.3em] mt-2">Latency</p>
                            </div>
                            <div>
                                <p className="text-4xl font-black text-white italic tracking-tighter">50<span className="text-sm not-italic font-bold text-gray-600 ml-1 uppercase">Regions</span></p>
                                <p className="text-[#ff5c5c] text-[10px] font-black uppercase tracking-[0.3em] mt-2">Distribution</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
            <style dangerouslySetInnerHTML={{ __html: `
                .outline-text {
                    -webkit-text-stroke: 1px rgba(255,255,255,0.1);
                    color: transparent;
                }
            `}} />
        </section>
    )
}
