import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
    {
        question: "What makes Tycoonz different from Ethereum?",
        answer: "Tycoonz uses a unique proof-of-node consensus and optimized WASM engine that allows for 100k+ TPS with near-zero gas fees, while maintaining full decentralization."
    },
    {
        question: "How can I start building on the platform?",
        answer: "New developers can start by visiting our Resources page to download the SDK and access documentation. We also offer grants for innovative dApps."
    },
    {
        question: "Is there a limit to staking rewards?",
        answer: "Rewards vary based on network volume and node participation. Currently, early adopters can earn up to 14.5% APY by staking native TYC tokens."
    },
    {
        question: "How secure is the Tycoonz network?",
        answer: "Security is our top priority. The network is audited by top-tier firms like CertiK and utilizes multi-layered cryptographic validation for every block."
    }
]

export const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <section className="py-32 px-4 bg-[#050505]">
            <div className="container mx-auto max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Common Questions</h2>
                    <p className="text-gray-400">Everything you need to know about the Tycoonz ecosystem.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div 
                            key={i} 
                            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
                        >
                            <button 
                                onClick={() => toggleAccordion(i)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left group"
                            >
                                <span className="font-bold text-gray-200 group-hover:text-white transition-colors">
                                    {faq.question}
                                </span>
                                {activeIndex === i ? (
                                    <Minus className="w-5 h-5 text-[#ff5c5c]" />
                                ) : (
                                    <Plus className="w-5 h-5 text-gray-500 group-hover:text-white" />
                                )}
                            </button>
                            
                            <div className={`px-8 transition-all duration-300 ease-in-out ${
                                activeIndex === i ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                            }`}>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
