export const Testimonials = () => {
    const testimonials = [
        {
            quote: "Altius has completely transformed how we think about on-chain scaling. The speed is simply unmatched.",
            author: "Sarah Chen",
            role: "CTO, DeFi Protocol"
        },
        {
            quote: "Finally, a blockchain that doesn't force us to choose between security and performance. It's the best of both worlds.",
            author: "Marcus Johnson",
            role: "Lead Tycoon, NFT Marketplace"
        },
        {
            quote: "The developer experience is world-class. We ported our entire dApp in less than a week.",
            author: "Elena Rodriguez",
            role: "Founder, GameFi Studio"
        }
    ]

    return (
        <section className="py-24 px-4 bg-[#050505] border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
                    Trusted by <span className="text-[#ff5c5c]">Innovators</span>
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 relative">
                            <span className="text-6xl text-[#ff5c5c]/20 font-serif absolute top-4 left-4">"</span>
                            <p className="text-gray-300 mb-6 relative z-10 text-lg leading-relaxed">
                                {t.quote}
                            </p>
                            <div className="border-t border-white/5 pt-4">
                                <p className="font-bold text-white">{t.author}</p>
                                <p className="text-sm text-[#ff5c5c]">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
