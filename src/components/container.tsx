import { cn } from '@/lib/utils';
import React from 'react'

const Container = ({ children, className }
    : {
        children: React.ReactNode;
        className?: string
    }
) => {
    return (
        <div className={cn("max-w-7xl mx-auto w-full md:py-4 border-x border-gray-200")}>{children}</div>
    )
}

export default Container