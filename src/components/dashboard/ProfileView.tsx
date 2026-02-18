import { Mail, Shield, Calendar, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const ProfileView = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className="space-y-6 animate-pulse max-w-5xl mx-auto">
                <div className="h-48 bg-white/5 rounded-3xl" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-32 bg-white/5 rounded-3xl" />
                    ))}
                </div>
            </div>
        )
    }

    if (!user) return null;

    const initials = user.name
        .split(' ')
        .map((n: string) => n[0])
        .join('')
        .toUpperCase();

    return (
        <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Profile Header Card */}
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12 backdrop-blur-xl mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-800 to-black border-4 border-white/10 shadow-2xl flex items-center justify-center shrink-0">
                        <span className="text-4xl font-light tracking-widest text-white">{initials}</span>
                    </div>
                    
                    <div className="text-center md:text-left flex-grow space-y-4">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">{user.name}</h2>
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                                <span className="px-4 py-1.5 bg-[#ff5c5c] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-[#ff5c5c]/20">
                                {user.isAdmin ? 'Administrator' : 'User'}
                                </span>
                                <span className="flex items-center gap-1.5 px-4 py-1.5 bg-green-500/10 text-green-400 border border-green-500/20 text-xs font-bold uppercase tracking-wider rounded-full">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    Active
                                </span>
                            </div>
                        </div>
                        
                        <p className="text-gray-400 max-w-xl text-sm leading-relaxed">
                            Global operative within the Tycoonz network. Full access to validation nodes, staking rewards, and advanced analytics enabled.
                        </p>
                    </div>

                    <div className="hidden md:block text-right space-y-1">
                        <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">User ID</p>
                        <p className="text-xl font-mono text-white/80">#{user._id.slice(-6).toUpperCase()}</p>
                    </div>
                </div>
            </div>

            {/* Account Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Email Card */}
                <div className="group p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20 mb-4 group-hover:scale-110 transition-transform">
                        <Mail className="w-5 h-5 text-blue-400" />
                    </div>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Email Address</p>
                    <p className="text-white font-medium truncate" title={user.email}>{user.email}</p>
                </div>

                {/* Account Type Card */}
                <div className="group p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300">
                    <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center border border-purple-500/20 mb-4 group-hover:scale-110 transition-transform">
                        <Shield className="w-5 h-5 text-purple-400" />
                    </div>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Access Level</p>
                    <p className="text-white font-medium">{user.isAdmin ? 'Admin Access' : 'Verified User'}</p>
                </div>

                {/* Join Date Card */}
                <div className="group p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/20 mb-4 group-hover:scale-110 transition-transform">
                        <Calendar className="w-5 h-5 text-orange-400" />
                    </div>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Membership</p>
                    <p className="text-white font-medium">Since Feb 2026</p>
                </div>
            </div>

            {/* System Status Footer */}
            <div className="mt-8 p-6 rounded-3xl border border-dashed border-white/10 flex items-center gap-4 text-gray-400 text-sm">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>All security protocols active. Last account audit completed successfully.</span>
            </div>
        </div>
    )
}
