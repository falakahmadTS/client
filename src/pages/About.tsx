export const About = () => {
    return (
        <div className="bg-[#050505] min-h-screen text-white pt-32 pb-20 relative overflow-hidden">
             {/* Background Glow */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#ff5c5c]/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                        About <span className="text-[#ff5c5c]">Tycoonz</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        We are building the infrastructure for the next generation of decentralized applications.
                        Our mission is to make blockchain technology accessible, scalable, and secure for everyone.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                     <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                        <h3 className="text-2xl font-bold mb-4 text-[#ff5c5c]">Innovation</h3>
                        <p className="text-gray-400">Pushing the boundaries of what's possible with sharding and state channels.</p>
                     </div>
                     <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                        <h3 className="text-2xl font-bold mb-4 text-[#ff5c5c]">Community</h3>
                        <p className="text-gray-400">Governance driven by the people who build and use the network.</p>
                     </div>
                     <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                        <h3 className="text-2xl font-bold mb-4 text-[#ff5c5c]">Security</h3>
                        <p className="text-gray-400">Formal verification and rigorous auditing are at the core of our protocol.</p>
                     </div>
                </div>
            </div>
        </div>
    )
}
