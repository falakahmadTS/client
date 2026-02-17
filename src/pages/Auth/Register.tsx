import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Input } from "../../components/ui/Input"
import { Button } from "../../components/ui/Button"
import { useAuth } from "../../context/AuthContext"
import { toast } from "react-hot-toast"

export const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const { register, user } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            navigate("/")
        }
    }, [user, navigate])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        if (!name || !email || !password) {
            return toast.error("Please fill in all fields")
        }

        try {
            setLoading(true)
            await register({ name, email, password })
            toast.success("Welcome to Tycoonz!")
            navigate("/")
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Registration failed")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="bg-[#050505] min-h-screen text-white flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-[#ff5c5c]/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="w-full max-w-md bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 relative z-10">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-2">Create Account</h1>
                    <p className="text-gray-400">Join Tycoonz and start building today</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <Input 
                            id="name"
                            label="Full Name"
                            type="text"
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <Input 
                            id="email"
                            label="Email Address"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <Input 
                            id="password"
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Button type="submit" className="w-full" isLoading={loading}>
                        Create Account
                    </Button>
                </form>

                <div className="mt-8 text-center text-sm text-gray-400">
                    Already have an account?{" "}
                    <Link to="/login" className="text-[#ff5c5c] hover:text-[#ff8f8f] font-semibold transition-colors">
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    )
}