import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { Loader2 } from 'lucide-react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ 
    className = '', 
    variant = 'primary', 
    isLoading, 
    children, 
    disabled,
    ...props 
}, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-bold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
    
    const variants = {
        primary: "bg-[#3a1515] text-[#ff5c5c] hover:bg-[#4a1a1a] border border-[#5c2222] shadow-[0_0_15px_rgba(255,92,92,0.1)] hover:shadow-[0_0_25px_rgba(255,92,92,0.2)]",
        secondary: "bg-white text-black hover:bg-gray-200",
        outline: "bg-transparent border border-white/20 text-white hover:bg-white/5",
        ghost: "bg-transparent text-gray-400 hover:text-white"
    }

    const sizes = "px-6 py-3 text-sm md:text-base"

    return (
        <button
            ref={ref}
            className={`${baseStyles} ${variants[variant]} ${sizes} ${className}`}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            {children}
        </button>
    )
})

Button.displayName = "Button"
