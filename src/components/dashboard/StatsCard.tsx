import type { LucideIcon } from "lucide-react";
import { Skeleton } from "../ui/Skeleton";

interface StatsCardProps {
    title: string;
    value: string | number;
    subValue?: string;
    icon: LucideIcon;
    trend?: string;
    trendType?: 'positive' | 'negative' | 'neutral';
    color: string;
    loading?: boolean;
}

export const StatsCard = ({ title, value, subValue, icon: Icon, trend, trendType = 'neutral', color, loading }: StatsCardProps) => {
    if (loading) {
        return (
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-xl h-full flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4">
                    <Skeleton className="w-12 h-12 rounded-2xl" />
                    <Skeleton className="w-16 h-6 rounded-full" />
                </div>
                <div>
                    <Skeleton className="w-24 h-4 mb-2" />
                    <Skeleton className="w-32 h-8" />
                </div>
            </div>
        )
    }

    const colorClasses = {
        red: { bg: 'bg-[#ff5c5c]/10', text: 'text-[#ff5c5c]', border: 'group-hover:border-[#ff5c5c]/30' },
        blue: { bg: 'bg-blue-500/10', text: 'text-blue-500', border: 'group-hover:border-blue-500/30' },
        purple: { bg: 'bg-purple-500/10', text: 'text-purple-500', border: 'group-hover:border-purple-500/30' },
        green: { bg: 'bg-green-500/10', text: 'text-green-500', border: 'group-hover:border-green-500/30' },
    }[color] || { bg: 'bg-gray-500/10', text: 'text-gray-500', border: 'group-hover:border-gray-500/30' };

    return (
        <div className={`p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-xl group ${colorClasses.border} transition-all h-full`}>
            <div className="flex justify-between items-start mb-4">
                <div className={`p-3 ${colorClasses.bg} rounded-2xl`}>
                    <Icon className={`w-6 h-6 ${colorClasses.text}`} />
                </div>
                {trend && (
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                        trendType === 'positive' ? 'text-green-400 bg-green-400/10' : 
                        trendType === 'negative' ? 'text-red-400 bg-red-400/10' : 
                        'text-gray-400 bg-white/5'
                    }`}>
                        {trend}
                    </span>
                )}
            </div>
            <p className="text-gray-400 text-sm mb-1">{title}</p>
            <h2 className="text-3xl font-bold flex items-baseline gap-2">
                {value}
                {subValue && <span className="text-gray-500 text-lg uppercase">{subValue}</span>}
            </h2>
        </div>
    )
}
