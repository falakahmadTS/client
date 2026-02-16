import { ContactForm } from "../components/forms/ContactForm"

export const Contact = () => {
    return (
        <div className="bg-[#050505] min-h-screen text-white pt-32 pb-20 relative overflow-hidden">
             {/* Background Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff5c5c]/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 max-w-2xl relative z-10">
                <div className="text-center mb-12">
                     <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in <span className="text-[#ff5c5c]">Touch</span></h1>
                     <p className="text-gray-400">Have questions about building on Tycoonz? We're here to help.</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}
