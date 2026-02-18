import { useState, useEffect } from 'react';
import { LayoutDashboard, Wallet, Activity, Box, TrendingUp, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import api from '../utils/api';
import { Link } from 'react-router-dom';
import { StatsCard } from '../components/dashboard/StatsCard';
import { ActivityChart } from '../components/dashboard/ActivityChart';
import { StakingCard } from '../components/dashboard/StakingCard';

export const Dashboard = () => {
    const { user, logout } = useAuth();
    const [stats, setStats] = useState<any>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                // Simulate network delay for testing loader
                await new Promise(resolve => setTimeout(resolve, 2000));
                
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

    const isLoading = !stats;

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
                    <StatsCard 
                        title="Total Balance" 
                        value={stats?.balance?.toLocaleString() || '0'} 
                        subValue="TYC" 
                        icon={Wallet} 
                        trend="+12.5%" 
                        trendType="positive"
                        color="red"
                        loading={isLoading}
                    />
                    <StatsCard 
                        title="Validation Nodes" 
                        value={stats?.nodesActive || '0'} 
                        subValue="Online" 
                        icon={Box} 
                        trend="Active" 
                        trendType="positive" // Assuming active is good/positive context
                        color="blue"
                        loading={isLoading}
                    />
                    <StatsCard 
                        title="Staking Rewards" 
                        value={stats?.rewardsTotal?.toLocaleString() || '0'} 
                        subValue="TYC" 
                        icon={TrendingUp} 
                        trend="Total Earned"
                        trendType="neutral"
                        color="purple"
                        loading={isLoading}
                    />
                </div>

                {/* Charts Area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <ActivityChart data={stats?.activityData || []} loading={isLoading} />
                    <StakingCard loading={isLoading} />
                </div>
            </main>
        </div>
    );
};
