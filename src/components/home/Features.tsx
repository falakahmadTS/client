import { Zap, Shield, Globe, Cpu } from "lucide-react"

export const Features = () => {
    const features = [
        {
            icon: <Zap className="h-8 w-8 text-[#ff5c5c]" />,
            title: "Lightning Fast",
            description: "Experience localized execution speeds that redefine what's possible on-chain."
        },
        {
            icon: <Shield className="h-8 w-8 text-[#ff5c5c]" />,
            title: "Bank-Grade Security",
            description: "Built on battle-tested cryptography and formal verification methods."
        },
        {
            icon: <Globe className="h-8 w-8 text-[#ff5c5c]" />,
            title: "Global Scale",
            description: "Seamlessly scale your dApps to millions of users without congestion."
        },
        {
            icon: <Cpu className="h-8 w-8 text-[#ff5c5c]" />,
            title: "Advanced Computation",
            description: "Run complex logic off-chain with the security guarantees of on-chain execution."
        }
    ]

    return (
        <section className="py-24 px-4 bg-[#0a0a0a] relative">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Built for <span className="text-[#ff5c5c]">Performance</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        The infrastructure layer for the next generation of high-throughput applications.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors backdrop-blur-sm group">
                            <div className="mb-6 p-4 bg-[#ff5c5c]/10 rounded-xl inline-block group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
