import { Link } from "react-router-dom"
import { Menu, X, User as UserIcon, LogOut } from "lucide-react"
import { useState, useEffect } from "react"
import { useAuth } from "../../context/AuthContext"

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { user, logout } = useAuth()
    
    const toggleMenu = () => setIsOpen(!isOpen)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navClasses = `fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#050505]/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
    }`

    const linkClasses = `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        "text-gray-300 hover:text-white"
    }`

    const brandClasses = `text-xl font-bold text-white`

    return (
        <nav className={navClasses}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                         <Link to="/" className={brandClasses}>
                            Tycoonz
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-6">
                            <Link to="/about" className={linkClasses}>About Us</Link>
                            <Link to="/contact" className={linkClasses}>Contact Us</Link>
                            
                            {user ? (
                                <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-white/10">
                                    <Link to="/dashboard" className="flex items-center space-x-2 group">
                                        <div className="w-8 h-8 rounded-full bg-[#ff5c5c]/20 flex items-center justify-center border border-[#ff5c5c]/30 group-hover:bg-[#ff5c5c]/30 transition-all">
                                            <UserIcon className="w-4 h-4 text-[#ff5c5c]" />
                                        </div>
                                        <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">{user.name}</span>
                                    </Link>
                                    <button 
                                        onClick={logout}
                                        className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1"
                                        title="Logout"
                                    >
                                        <LogOut className="w-4 h-4" />
                                        <span className="text-xs">Logout</span>
                                    </button>
                                </div>
                            ) : (
                                <div className="flex items-center space-x-4">
                                    <Link to="/login" className="px-4 py-2 text-sm font-medium text-white hover:text-[#ff5c5c] transition-colors">Login</Link>
                                    <Link to="/register" className="px-4 py-2 text-sm font-medium bg-white text-black rounded hover:bg-gray-200 transition-colors">Register</Link>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none text-white hover:bg-white/10"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-[#0a0a0a] border-b border-white/5" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white" onClick={toggleMenu}>Home</Link>
                        <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white" onClick={toggleMenu}>About Us</Link>
                        <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white" onClick={toggleMenu}>Contact Us</Link>
                        
                        {user ? (
                            <div className="pt-4 pb-3 border-t border-white/10">
                                <div className="flex items-center px-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-[#ff5c5c]/20 flex items-center justify-center border border-[#ff5c5c]/30">
                                            <UserIcon className="w-6 h-6 text-[#ff5c5c]" />
                                        </div>
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-base font-medium text-white">{user.name}</div>
                                        <div className="text-sm font-medium text-gray-400">{user.email}</div>
                                    </div>
                                </div>
                                <div className="mt-3 px-2">
                                    <button
                                        onClick={() => { logout(); toggleMenu(); }}
                                        className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5"
                                    >
                                        Sign out
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="pt-4 pb-3 border-t border-white/10 space-y-2">
                                <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white" onClick={toggleMenu}>Login</Link>
                                <Link to="/register" className="block px-3 py-2 rounded-md text-base font-medium text-[#ff5c5c] font-bold" onClick={toggleMenu}>Create Account</Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    )
}