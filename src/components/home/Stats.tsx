
export const Stats = () => {
    const stats = [
        { label: "Transactions per Second", value: "100k+" },
        { label: "Average Block Time", value: "400ms" },
        { label: "Total Value Locked", value: "$2.4B+" },
        { label: "Active Validators", value: "1,200+" }
    ]

    return (
        <section className="py-24 px-4 bg-[#050505] relative border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-2 group-hover:from-[#ff5c5c] group-hover:to-[#ff8f8f] transition-all duration-300">
                                {stat.value}
                            </div>
                            <div className="text-sm md:text-base text-gray-500 font-medium uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
