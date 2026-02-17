import { useState, useEffect } from 'react';
import { LayoutDashboard, Wallet, Activity, Box, TrendingUp, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import api from '../utils/api';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
    const { user, logout } = useAuth();
    const [stats, setStats] = useState<any>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const { data } = await api.get('/api/users/stats');
                setStats(data);
            } catch (err) {
                console.error("Failed to fetch stats", err);
            }
        };
        fetchStats();
    }, []);

    const sidebarItems = [
        { icon: LayoutDashboard, label: 'Overview', active: true },
        { icon: Wallet, label: 'Assets', active: false },
        { icon: Box, label: 'Nodes', active: false },
        { icon: Activity, label: 'Analytics', active: false },
        { icon: TrendingUp, label: 'Staking', active: false },
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white flex">
            {/* Sidebar */}
            <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#0a0a0a] border-r border-white/5 transition-transform duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
                <div className="h-full flex flex-col p-6">
                    <div className="flex items-center gap-3 mb-10 px-2">
                        <Link to="/" className="text-xl font-bold tracking-tighter">TYCOONZ <span className="text-[#ff5c5c]">.</span></Link>

                    </div>

                    <nav className="flex-grow space-y-2">
                        {sidebarItems.map((item) => (
                            <button
                                key={item.label}
                                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${item.active ? 'bg-[#ff5c5c]/10 text-[#ff5c5c] border border-[#ff5c5c]/20' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                            >
                                <item.icon className="w-5 h-5" />
                                <span className="font-medium">{item.label}</span>
                            </button>
                        ))}
                    </nav>

                    <div className="mt-auto space-y-4">
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                            <p className="text-xs text-gray-400 mb-1">Authenticated as</p>
                            <p className="text-sm font-bold truncate">{user?.name}</p>
                        </div>
                        <button 
                            onClick={logout}
                            className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-gray-400 hover:bg-red-500/10 hover:text-red-500 transition-all"
                        >
                            <LogOut className="w-5 h-5" />
                            <span className="font-medium">Logout</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow p-4 lg:p-8 overflow-x-hidden">
                <header className="flex justify-between items-center mb-10">
                    <div>
                        <h1 className="text-2xl font-bold">Welcome back, {user?.name.split(' ')[0]} 👋</h1>
                        <p className="text-gray-400">Here's what's happening on Tycoonz today.</p>
                    </div>
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden p-2 bg-white/5 rounded-lg">
                        {isSidebarOpen ? <X /> : <Menu />}
                    </button>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-xl group hover:border-[#ff5c5c]/30 transition-all">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-[#ff5c5c]/10 rounded-2xl">
                                <Wallet className="w-6 h-6 text-[#ff5c5c]" />
                            </div>
                            <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded-full">+12.5%</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-1">Total Balance</p>
                        <h2 className="text-3xl font-bold">{stats?.balance.toLocaleString()} <span className="text-gray-500 text-lg uppercase">tyc</span></h2>
                    </div>

                    <div className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-xl group hover:border-[#ff5c5c]/30 transition-all">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-blue-500/10 rounded-2xl">
                                <Box className="w-6 h-6 text-blue-500" />
                            </div>
                            <span className="text-xs font-bold text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full">Active</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-1">Validation Nodes</p>
                        <h2 className="text-3xl font-bold">{stats?.nodesActive} <span className="text-gray-500 text-lg">Online</span></h2>
                    </div>

                    <div className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-xl group hover:border-[#ff5c5c]/30 transition-all">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-purple-500/10 rounded-2xl">
                                <TrendingUp className="w-6 h-6 text-purple-500" />
                            </div>
                            <span className="text-xs font-bold text-gray-400 bg-white/5 px-2 py-1 rounded-full">Total Earned</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-1">Staking Rewards</p>
                        <h2 className="text-3xl font-bold">{stats?.rewardsTotal.toLocaleString()} <span className="text-gray-500 text-lg">TYC</span></h2>
                    </div>
                </div>

                {/* Charts Area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-xl">
                        <h3 className="text-lg font-bold mb-6">Network Activity</h3>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={stats?.activityData}>
                                    <defs>
                                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#ff5c5c" stopOpacity={0.3}/>
                                            <stop offset="95%" stopColor="#ff5c5c" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                                    <XAxis 
                                        dataKey="name" 
                                        stroke="#4b5563" 
                                        fontSize={12} 
                                        tickLine={false} 
                                        axisLine={false} 
                                    />
                                    <YAxis 
                                        stroke="#4b5563" 
                                        fontSize={12} 
                                        tickLine={false} 
                                        axisLine={false} 
                                        tickFormatter={(value) => `${value}`}
                                    />
                                    <Tooltip 
                                        contentStyle={{ backgroundColor: '#0a0a0a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                                        itemStyle={{ color: '#ff5c5c' }}
                                    />
                                    <Area 
                                        type="monotone" 
                                        dataKey="value" 
                                        stroke="#ff5c5c" 
                                        strokeWidth={3}
                                        fillOpacity={1} 
                                        fill="url(#colorValue)" 
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="p-8 bg-gradient-to-br from-[#ff5c5c]/20 to-[#ff5c5c]/5 rounded-3xl border border-[#ff5c5c]/20 flex flex-col justify-center items-center text-center">
                        <div className="w-16 h-16 bg-[#ff5c5c]/20 rounded-full flex items-center justify-center mb-6 border border-[#ff5c5c]/30">
                            <TrendingUp className="w-8 h-8 text-[#ff5c5c]" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Passive Rewards</h4>
                        <p className="text-gray-400 text-sm mb-6">Your APY is currently at <span className="text-white font-bold">14.5%</span>. Stake more to increase your tier.</p>
                        <button className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-gray-200 transition-all">
                            Stake TYC Tokens
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};
