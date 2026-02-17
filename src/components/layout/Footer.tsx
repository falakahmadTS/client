import { Link } from "react-router-dom"
import { Github, Twitter, Linkedin, Mail, ArrowRight } from "lucide-react"

export const Footer = () => {
    return (
        <footer className="bg-[#050505] text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#ff5c5c]/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link to="/" className="text-2xl font-bold tracking-tighter hover:text-[#ff5c5c] transition-colors">
                            TYCOONZ<span className="text-[#ff5c5c]">.</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            The most advanced layer-1 blockchain ecosystem for the next generation of decentralized finance and digital ownership.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ff5c5c]/20 hover:text-[#ff5c5c] transition-all border border-white/10 group">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ff5c5c]/20 hover:text-[#ff5c5c] transition-all border border-white/10 group">
                                <Github className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ff5c5c]/20 hover:text-[#ff5c5c] transition-all border border-white/10 group">
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Platform Column */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Platform</h4>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="text-gray-400 hover:text-[#ff5c5c] transition-colors text-sm">Our Technology</Link></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#ff5c5c] transition-colors text-sm">Developer SDK</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#ff5c5c] transition-colors text-sm">Governance</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#ff5c5c] transition-colors text-sm">Ecosystem Portal</a></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="text-gray-400 hover:text-[#ff5c5c] transition-colors text-sm">About Tycoonz</Link></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#ff5c5c] transition-colors text-sm">Global Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#ff5c5c] transition-colors text-sm">Media Kit</a></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-[#ff5c5c] transition-colors text-sm">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Stay Updated</h4>
                        <p className="text-gray-400 text-sm">Get the latest news and updates from the Tycoonz ecosystem.</p>
                        <form className="relative" onSubmit={(e) => e.preventDefault()}>
                            <input 
                                type="email" 
                                placeholder="Email address"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#ff5c5c]/50 transition-colors pr-12"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-[#ff5c5c] rounded-md hover:bg-[#ff7a7a] transition-colors">
                                <ArrowRight className="w-4 h-4 text-white" />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">
                        &copy; {new Date().getFullYear()} Tycoonz Foundations. All rights reserved. Built for the decentralized future.
                    </p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs">Terms of Service</a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs">Status</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}