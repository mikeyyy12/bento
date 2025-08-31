'use client'
import React from 'react'
import { motion } from "motion/react"

export const FeaturesSection = () => {
    return (
        <div className="flex flex-col justify-center relative">

            <div className='flex items-center flex-col'>
                <ShimmerText>Features</ShimmerText>
                <h1 className='text-4xl text-neutral-800 tracking-tighter mt-4'>Built for Agentic Intelligence</h1>
                <p className='text-[#8b8b8b] tracking-tight mt-6 text-base px-2 max-w-lg mx-auto text-center leading-6'>Build, test and deploy AI agents with a powerful visual interface designed for technical teams</p>
            </div>
        </div>
    )
}


function ShimmerText({ children }: { children: string }) {
    return (
        <motion.p

            animate={{
                backgroundPosition: ["100% center", "-50% center"]
            }}
            transition={{
                duration: 1.6,
                repeat: Infinity,
                repeatDelay: 1.5
            }}
            className='text-sm text-transparent [background-repeat:no-repeat,padding-box] bg-clip-text [background-image:var(--bg),var(--gradient-brand)] background- inline-block font-normal bg-[length:250%,auto]'
        >{children}</motion.p>
    )
}