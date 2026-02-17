
export const Partners = () => {
    const partners = [
        { name: "Binance", slug: "binance", color: "hover:text-[#F3BA2F]" },
        { name: "Coinbase", slug: "coinbase", color: "hover:text-[#0052FF]" },
        { name: "Polygon", slug: "polygon", color: "hover:text-[#8247E5]" },
        { name: "Chainlink", slug: "chainlink", color: "hover:text-[#2A5ADA]" },
        { name: "Solana", slug: "solana", color: "hover:text-[#14F195]" },
        { name: "Aave", slug: "aave", color: "hover:text-[#B6509E]" }
    ]

    return (
        <section className="py-24 bg-[#050505] border-y border-white/5 overflow-hidden relative">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#ff5c5c]/5 blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 mb-14 text-center relative z-10">
                <span className="text-[#ff5c5c] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Institutional Backing</span>
                <h2 className="text-xl md:text-2xl font-bold text-gray-300 italic">Trusted by Industry Leaders</h2>
            </div>
            
            <div className="flex animate-marquee whitespace-nowrap gap-20 relative z-10">
                {[...partners, ...partners, ...partners].map((partner, i) => (
                    <div key={i} className="flex items-center space-x-6 opacity-20 hover:opacity-100 transition-all duration-500 group">
                        <div className="relative group-hover:scale-110 transition-transform">
                            <img 
                                src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${partner.slug}.svg`}
                                alt={partner.name}
                                className={`w-10 h-10 invert transition-all duration-300 group-hover:invert-0 brightness-200 group-hover:filter-none`}
                                style={{
                                    // Fallback for some browsers if they don't support compound filters well
                                    filter: 'brightness(0) invert(1)'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.filter = 'none'}
                                onMouseLeave={(e) => e.currentTarget.style.filter = 'brightness(0) invert(1)'}
                            />
                        </div>
                        <span className={`text-3xl font-black tracking-tighter text-white uppercase italic group-hover:text-white transition-colors`}>{partner.name}</span>
                    </div>
                ))}
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                .animate-marquee {
                    display: flex;
                    width: max-content;
                    animation: marquee 50s linear infinite;
                }
            `}} />
        </section>
    )
}
