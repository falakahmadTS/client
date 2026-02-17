import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Navigate } from "react-router-dom"

gsap.registerPlugin(ScrollTrigger)

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const barsRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (!barsRef.current) return

        const bars = barsRef.current.children
        
        // Initial entrance animation
        gsap.fromTo(bars, 
            { scaleY: 0.1, opacity: 0 },
            { 
                scaleY: 1, 
                opacity: 1, 
                duration: 1.5, 
                stagger: 0.1, 
                ease: "elastic.out(1, 0.5)" 
            }
        )

        // Scroll-triggered wave effect
        Array.from(bars).forEach((bar, i) => {
            gsap.to(bar, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
                height: `${Math.sin(i * 0.5 + 3) * 30 + 60}%`, // Shift phase on scroll
                ease: "none"
            })
        })

    }, { scope: containerRef })

    return (
        <div ref={containerRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
             {/* Background Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/20 rounded-full blur-[120px] pointer-events-none -z-0"></div>

            {/* Hero Section */}
            <section className="relative z-10 px-4 text-center">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-tight text-white">
                        Futureproof Your<br />Blockchain
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                         Altius makes any blockchain's performance limitless, empowering both enterprises and web3 ecosystems to scale without complexity.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                        <button className="px-8 py-3 bg-[#3a1515] text-[#ff5c5c] font-medium rounded hover:bg-[#4a1a1a] transition-all border border-[#5c2222]">
                            Stay up to Speed
                        </button>
                        <button className="px-8 py-3 bg-transparent border border-gray-600 text-white font-medium rounded hover:bg-white/10 transition-colors">
                            Read Documentation
                        </button>
                    </div>
                </div>
            </section>

            {/* Gradient Bar Visuals */}
            <div ref={barsRef} className="absolute bottom-0 left-0 right-0 h-80 md:h-[600px] flex items-end justify-center gap-0.5 md:gap-1 px-4 pointer-events-none opacity-100">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div 
                        key={i}
                        className="w-full max-w-[80px] md:max-w-[120px] bg-gradient-to-b from-[#ffcfcf] via-[#ff4d4d] to-[#1a0505] opacity-100 origin-bottom"
                        style={{
                            height: `${Math.sin(i * 0.5 + 2) * 30 + 60}%`,
                            boxShadow: "0 -20px 60px rgba(255, 50, 50, 0.5)",
                            borderTopLeftRadius: '4px',
                            borderTopRightRadius: '4px',
                            maskImage: 'linear-gradient(to top, black 80%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to top, black 80%, transparent 100%)',
                        }}
                    ></div>
                ))}
            </div>
        </div>
    )
}
