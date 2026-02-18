import { TrendingUp } from "lucide-react";
import { Skeleton } from "../ui/Skeleton";

interface StakingCardProps {
    apy?: number;
    loading?: boolean;
}

export const StakingCard = ({ apy = 14.5, loading }: StakingCardProps) => {
    if (loading) {
        return (
            <div className="p-8 bg-gradient-to-br from-[#ff5c5c]/20 to-[#ff5c5c]/5 rounded-3xl border border-[#ff5c5c]/20 flex flex-col justify-center items-center text-center h-[400px]">
                <Skeleton className="w-16 h-16 rounded-full mb-6" />
                <Skeleton className="w-48 h-8 mb-6" />
                <Skeleton className="w-64 h-4 mb-2" />
                <Skeleton className="w-48 h-4 mb-6" />
                <Skeleton className="w-full h-14 rounded-2xl" />
            </div>
        )
    }

    return (
        <div className="p-8 bg-gradient-to-br from-[#ff5c5c]/20 to-[#ff5c5c]/5 rounded-3xl border border-[#ff5c5c]/20 flex flex-col justify-center items-center text-center h-full">
            <div className="w-16 h-16 bg-[#ff5c5c]/20 rounded-full flex items-center justify-center mb-6 border border-[#ff5c5c]/30">
                <TrendingUp className="w-8 h-8 text-[#ff5c5c]" />
            </div>
            <h4 className="text-xl font-bold mb-2">Passive Rewards</h4>
            <p className="text-gray-400 text-sm mb-6">Your APY is currently at <span className="text-white font-bold">{apy}%</span>. Stake more to increase your tier.</p>
            <button className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-gray-200 transition-all">
                Stake TYC Tokens
            </button>
        </div>
    )
}
