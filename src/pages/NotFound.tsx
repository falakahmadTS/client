import { Link } from "react-router-dom"
import Lottie from "lottie-react"
import animationData from "../assets/404.json"
import { ArrowLeft } from "lucide-react"

export const NotFound = () => {
    return (
        <div className="bg-[#050505] min-h-screen text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
             {/* Background Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff5c5c]/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="w-full max-w-lg relative z-10 text-center">
                <div className="mb-8">
                    <Lottie animationData={animationData} loop={true} className="w-full h-auto max-h-[400px]" />
                </div>
                
                <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
                <p className="text-gray-400 mb-8">
                    The page you are looking for doesn't exist or has been moved.
                </p>

                <Link 
                    to="/" 
                    className="inline-flex items-center px-6 py-3 bg-[#3a1515] text-[#ff5c5c] font-bold rounded-lg hover:bg-[#4a1a1a] transition-all border border-[#5c2222] shadow-[0_0_15px_rgba(255,92,92,0.1)] hover:shadow-[0_0_25px_rgba(255,92,92,0.2)]"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Home
                </Link>
            </div>
        </div>
    )
}
