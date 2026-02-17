import { useRef, useEffect } from "react"
import gsap from "gsap"
import { Mail, MessageSquare, Twitter, MapPin, Globe, ShieldCheck } from "lucide-react"
import { ContactForm } from "../components/forms/ContactForm"

export const Contact = () => {
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".contact-animate", {
                x: -30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            })
            
            gsap.from(".form-card", {
                scale: 0.95,
                opacity: 0,
                duration: 1,
                delay: 0.4,
                ease: "power2.out"
            })
        })
        return () => ctx.revert()
    }, [])

    return (
        <div className="bg-[#050505] min-h-screen text-white pt-32 pb-20 relative overflow-hidden">
             {/* Background Glows */}
             <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>
             <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
                    
                    {/* Left Side: Contact Info */}
                    <div ref={contentRef} className="lg:w-1/2 flex flex-col justify-center">
                        <div className="contact-animate inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-medium mb-6 w-fit">
                            <ShieldCheck className="w-4 h-4" />
                            <span>24/7 Global Support</span>
                        </div>
                        <h1 className="contact-animate text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
                            Let's Build the <span className="text-[#ff5c5c]">Future</span>
                        </h1>
                        <p className="contact-animate text-xl text-gray-400 mb-12 leading-relaxed">
                            Have questions about the Tycoonz protocol or want to integrate your dApp? Our technical team is ready to assist you.
                        </p>

                        <div className="space-y-8">
                            {[
                                { icon: Mail, label: "General Inquiries", value: "hello@tycoonz.io" },
                                { icon: MessageSquare, label: "Developer Discord", value: "discord.gg/tycoonz" },
                                { icon: Twitter, label: "Official X", value: "@TycoonzNetwork" }
                            ].map((item, i) => (
                                <div key={i} className="contact-animate flex items-start gap-6 group">
                                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-[#ff5c5c]/10 group-hover:border-[#ff5c5c]/30 transition-all">
                                        <item.icon className="w-6 h-6 text-gray-400 group-hover:text-[#ff5c5c] transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-gray-500 font-medium text-sm uppercase tracking-widest mb-1">{item.label}</p>
                                        <p className="text-xl font-bold group-hover:text-white transition-colors">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Contact Form Card */}
                    <div className="lg:w-1/2">
                        <div className="form-card bg-white/5 border border-white/10 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl rounded-full group-hover:bg-red-500/10 transition-colors"></div>
                            
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold mb-2">Send us a Message</h3>
                                <p className="text-gray-400 mb-8">Expect a response within 24 hours.</p>
                                <ContactForm />
                            </div>
                        </div>

                        {/* Additional Help Section */}
                        <div className="mt-8 flex items-center justify-center gap-8 py-6 px-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
                            <div className="flex items-center gap-3">
                                <Globe className="w-5 h-5 text-gray-400" />
                                <span className="text-sm font-medium text-gray-300">Global Hubs</span>
                            </div>
                            <div className="w-px h-6 bg-white/10"></div>
                            <div className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-gray-400" />
                                <span className="text-sm font-medium text-gray-300">Singapore • Dubai • London</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
