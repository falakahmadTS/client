import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Input } from "../../components/ui/Input"
import { Button } from "../../components/ui/Button"
import { useAuth } from "../../context/AuthContext"
import { toast } from "react-hot-toast"

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const { login, user } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            navigate("/")
        }
    }, [user, navigate])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        if (!email || !password) {
            return toast.error("Please fill in all fields")
        }

        try {
            setLoading(true)
            const userData = await login({ email, password })
            toast.success(`Welcome back! ${userData.name}`)
            navigate("/")
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Login failed")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="bg-[#050505] min-h-screen text-white flex items-center justify-center p-4 relative overflow-hidden">
             {/* Background Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff5c5c]/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="w-full max-w-md bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 relative z-10">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
                    <p className="text-gray-400">Sign in to your Tycoonz account</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <Input 
                        id="email"
                        label="Email Address"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Button type="submit" className="w-full" isLoading={loading}>
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