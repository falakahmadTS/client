import { type TextareaHTMLAttributes, forwardRef } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ 
    className = '', 
    label, 
    error,
    id,
    ...props 
}, ref) => {
    return (
        <div className="w-full">
            {label && (
                <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">
                    {label}
                </label>
            )}
            <textarea
                ref={ref}
                id={id}
                className={`w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#ff5c5c] focus:border-transparent outline-none transition-all text-white placeholder-gray-600 disabled:opacity-50 min-h-[100px] ${error ? 'border-red-500 focus:ring-red-500' : ''} ${className}`}
                {...props}
            />
            {error && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
            )}
        </div>
    )
})

TextArea.displayName = "TextArea"
