import { Link } from "react-router-dom"
import { Input } from "../../components/ui/Input"
import { Button } from "../../components/ui/Button"

export const Register = () => {
    return (
        <div className="bg-[#050505] min-h-screen text-white flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-[#ff5c5c]/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="w-full max-w-md bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 relative z-10">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-2">Create Account</h1>
                    <p className="text-gray-400">Join Tycoonz and start building today</p>
                </div>

                <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                         <div>
                            <Input 
                                id="firstName"
                                label="First Name"
                                type="text"
                                placeholder="John"
                            />
                        </div>
                        <div>
                            <Input 
                                id="lastName"
                                label="Last Name"
                                type="text"
                                placeholder="Doe"
                            />
                        </div>
                    </div>
                    <div>
                        <Input 
                            id="email"
                            label="Email Address"
                            type="email"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <Input 
                            id="password"
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                        />
                    </div>
                    <Button type="submit" className="w-full">
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