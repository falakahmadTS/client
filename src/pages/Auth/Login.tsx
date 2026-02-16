import { Link } from "react-router-dom"
import { Input } from "../../components/ui/Input"
import { Button } from "../../components/ui/Button"

export const Login = () => {
    return (
        <div className="bg-[#050505] min-h-screen text-white flex items-center justify-center p-4 relative overflow-hidden">
             {/* Background Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff5c5c]/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="w-full max-w-md bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 relative z-10">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
                    <p className="text-gray-400">Sign in to your Tycoonz account</p>
                </div>

                <form className="space-y-6">
                    <Input 
                        id="email"
                        label="Email Address"
                        type="email"
                        placeholder="you@example.com"
                    />
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
                            <a href="#" className="text-sm text-[#ff5c5c] hover:text-[#ff8f8f] transition-colors">Forgot password?</a>
                        </div>
                        <Input 
                            id="password"
                            type="password"
                            placeholder="••••••••"
                        />
                    </div>
                    <Button type="submit" className="w-full">
                        Sign In
                    </Button>
                </form>

                <div className="mt-8 text-center text-sm text-gray-400">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-[#ff5c5c] hover:text-[#ff8f8f] font-semibold transition-colors">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    )
}