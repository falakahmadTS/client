import Lottie from "lottie-react"
import animationData from "../../assets/loader.json"

export const Loader = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505] overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff5c5c]/10 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>

            <div className="w-64 h-64 relative z-10">
                <Lottie animationData={animationData} loop={true} className="w-full h-full" />
            </div>
            
             <div className="absolute bottom-12 left-0 right-0 text-center text-gray-500 animate-pulse text-sm tracking-[0.2em] uppercase">
                Loading System...
            </div>
        </div>
    )
}
