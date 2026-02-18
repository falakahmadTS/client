import { cn } from "../../utils/cn"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string; // Explicitly adding className prop is redundant if extending HTMLAttributes but good for clarity
}

export const Skeleton = ({ className, ...props }: SkeletonProps) => {
    return (
        <div 
            className={cn("animate-pulse rounded-xl bg-white/5", className)} 
            {...props} 
        />
    )
}
