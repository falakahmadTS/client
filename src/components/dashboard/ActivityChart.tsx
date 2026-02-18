import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { Skeleton } from "../ui/Skeleton";

interface ActivityChartProps {
    data: any[];
    loading?: boolean;
}

export const ActivityChart = ({ data, loading }: ActivityChartProps) => {
    if (loading) {
        return (
            <div className="lg:col-span-2 p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-xl h-[400px] flex flex-col">
                <Skeleton className="w-48 h-8 mb-6" />
                <Skeleton className="w-full flex-grow rounded-xl" />
            </div>
        )
    }

    return (
        <div className="lg:col-span-2 p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-xl">
            <h3 className="text-lg font-bold mb-6">Network Activity</h3>
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#ff5c5c" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#ff5c5c" stopOpacity={0} />
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
    )
}
