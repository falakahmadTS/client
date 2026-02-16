
export const Footer = () => {
    return (
        <footer className="bg-[#050505] text-white py-12 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="mb-4 md:mb-0 text-center md:text-left">
                        <h3 className="text-xl font-bold mb-2">Tycoonz</h3>
                        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Tycoonz Blockchain. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-8">
                        <a href="#" className="text-gray-400 hover:text-[#ff5c5c] transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-[#ff5c5c] transition-colors">Terms of Service</a>
                        <a href="#" className="text-gray-400 hover:text-[#ff5c5c] transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}