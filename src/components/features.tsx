'use client'

import React, { SVGProps, useEffect, useRef, useState } from 'react'
import { motion, stagger, useAnimate } from "motion/react"
import { cn } from '@/lib/utils';
import { TypeWritter } from '@/components/typewritter';
import { BoxIcon, BrainSvg, Call, CardHeading, Circle, Claude, Code, Connect, CursorSvg, Fingerprint, FloatinCard, GptIcon, Green, Meta, Notion, NotusLogo, Realtime, Share, Slack } from '@/utils/Svgs';


export type Chat = {
    type: "user" | "system",
    chat: string,
    instant?: boolean
}
export const FeaturesSection = () => {
    const [scope, animate] = useAnimate();


    const sparkles = [
        { x: -6, y: -32 },
        { x: 8, y: -10 },
        { x: -2, y: 6 },
        { x: 12, y: 18 },
        { x: 6, y: -24 },
        { x: 6, y: 10 },
        { x: -18, y: -14 },
        { x: -20, y: 2 },
    ]


    const chats: Chat[] = [
        { type: "user", chat: "Hello,how are you?" },
        { type: "system", chat: "I'm good, thank you! How can I help you today?" },
        { type: "user", chat: "I want to create a workflow that will send an email to all my clients" },
        { type: "system", chat: "Nah, do it yourself." },

    ]

    return (
        <div className="flex flex-col justify-center relative">
            <div className='flex items-center flex-col border-b  border-gray-200 pb-16'>
                <ShimmerText>Features</ShimmerText>
                <h1 className='text-4xl text-neutral-800 tracking-tighter mt-4'>Built for Agentic Intelligence</h1>
                <p className='text-[#8b8b8b] tracking-tight mt-6 text-base px-2 max-w-lg mx-auto text-center leading-6'>Build, test and deploy AI agents with a powerful visual interface designed for technical teams</p>
            </div>
            <div className='w-full grid gird-cols-1 md:grid-cols-2 divide-x border-b border-gray-200  divide-gray-200'>
                <div className='p-8 mask-b-from-80% overflow-hidden'>
                    <CardHeading Icon={BrainSvg}
                        title='LLM Model Selector'
                        subheading='Track real-time activity of agents with detailed records of triggers, tools used, outcomes, and timestamps.' />
                    <div className='mt-20 relative p-4 w-[85%] min-h-40 max-h-70 h-full mx-auto shadow-2xl rounded-2xl border-t bg-white border-gray-200  '>
                        <FloatinCard />
                        <div className='flex gap-2 '>
                            <div className='size-3 bg-red-500 rounded-full'></div>
                            <div className='size-3 bg-yellow-500 rounded-full'></div>
                            <div className='size-3 bg-green-500 rounded-full'></div>
                        </div>
                        <div className='flex gap-1 items-center mt-12 border-b border-gray-200 pb-2'>
                            <BoxIcon />
                            <p className='text-neutral-700 text-sm px-1'>All Models</p>
                            <p className='px-2 mx-0.5 text-neutral-700 text-sm border border-gray-100 rounded-lg py-0.5 bg-neutral-50'>69,420</p>
                        </div>
                        <div ref={scope} className='flex flex-col gap-4 mt-4'>
                            <div className='relative'>
                                <motion.div
                                    initial={{ clipPath: "inset(0px 100% 0px 0px)", filter: "blur(10px)" }}
                                    animate={{ clipPath: "inset(0px 0% 0px 0px)", filter: "blur(0px)" }}
                                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
                                    className='flex relative justify-between items-center mt-2'>
                                    <div className='flex gap-1'>
                                        <Claude />
                                        <p className='text-neutral-700 text-sm px-1'>Claude 4 Opus</p>
                                    </div>
                                    <div className=' text-xs border w-fit px-2 py-0.5 rounded-sm bg-red-50 border-red-500 text-red-500 font-extralight'>
                                        Unavailable
                                    </div>
                                </motion.div>
                                <motion.div
                                    style={{
                                        left: "0%",
                                        opacity: 0
                                    }}

                                    className='bar opacity-0 absolute inset-y-0 left-0 h-full w-[2px] bg-gradient-to-t from-transparent via-blue-500 to-transparent'>
                                    {sparkles.map((pos, i) => (
                                        <motion.div
                                            key={i}
                                            className="sparks absolute top-1/2 left-1/2 text-xs text-blue-400"
                                            style={{ opacity: 0, scale: 0, }}
                                            animate={{
                                                scale: [0, 1.2, 0],
                                                opacity: [0, 1, 0],
                                                x: pos.x,
                                                y: pos.y
                                            }}
                                            transition={{
                                                duration: 1,
                                                delay: i * 0.2
                                            }}
                                        >
                                            ✨
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>

                            <div className='relative'>
                                <motion.div className='flex  justify-between items-center'
                                    initial={{ clipPath: "inset(0px 100% 0px 0px)", filter: "blur(10px)" }}
                                    animate={{ clipPath: "inset(0px 0% 0px 0px)", filter: "blur(0px)" }}
                                    transition={{ duration: 0.8, ease: "easeInOut", delay: 1.4 }}
                                >
                                    <div className='flex gap-1  items-center '>
                                        <GptIcon className='size-4' />
                                        <p className='text-neutral-700 text-sm px-1'>ChatGPT
                                        </p>
                                    </div>
                                    <div className='text-xs border w-fit px-2 py-0.5 rounded-sm bg-green-50 border-green-500 text-green-500 font-extralight'>
                                        Connected
                                    </div>
                                </motion.div>
                                <motion.div
                                    style={{
                                        left: "0%",
                                        opacity: 0
                                    }}

                                    className='bar absolute inset-y-0 left-0 h-full w-[2px] bg-gradient-to-t from-transparent via-blue-500 to-transparent'>
                                    {sparkles.map((pos, i) => (
                                        <motion.div
                                            key={i}
                                            className="sparks absolute top-1/2 left-1/2 text-xs text-blue-400"
                                            style={{ opacity: 0, scale: 0, }}
                                            animate={{
                                                scale: [0, 1.2, 0],
                                                opacity: [0, 1, 0],
                                                x: pos.x,
                                                y: pos.y
                                            }}
                                            transition={{
                                                duration: 1,
                                                delay: i * 0.2
                                            }}
                                        >
                                            ✨
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                            <div className='relative'>
                                <motion.div className='flex  justify-between items-center'
                                    initial={{ clipPath: "inset(0px 100% 0px 0px)", filter: "blur(10px)" }}
                                    animate={{ clipPath: "inset(0px 0% 0px 0px)", filter: "blur(0px)" }}
                                    transition={{ duration: 0.8, ease: "easeInOut", delay: 2.8 }}
                                >
                                    <div className='flex gap-1 items-center'>
                                        <Meta />
                                        <p className='text-neutral-700 text-sm px-1'>Llama 3.2</p>
                                    </div>
                                    <div className='text-xs border w-fit px-2 py-0.5 rounded-sm bg-yellow-50 border-yellow-500 text-yellow-500 font-extralight'>
                                        Waiting
                                    </div>
                                </motion.div>
                                <motion.div
                                    style={{
                                        left: "0%",
                                        opacity: 0
                                    }}

                                    className='bar absolute opacity-0 inset-y-0 left-0 h-full w-[2px] bg-gradient-to-t from-transparent via-blue-500 to-transparent'>
                                    {sparkles.map((pos, i) => (
                                        <motion.div
                                            key={i}
                                            className="sparks absolute top-1/2 left-1/2 text-xs text-blue-400"
                                            style={{ opacity: 0, scale: 0, }}
                                            animate={{
                                                scale: [0, 1.2, 0],
                                                opacity: [0, 1, 0],
                                                x: pos.x,
                                                y: pos.y
                                            }}
                                            transition={{
                                                duration: 1.2,
                                                delay: i * 0.2
                                            }}
                                        >
                                            ✨
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* second card */}
                <div className='p-8 mask-b-from-80% overflow-hidden'>
                    <CardHeading
                        Icon={CursorSvg}
                        title='Text to workflow builder'
                        subheading='Preview and debug workflow logic in a safe sandbox before deploying, helping you iterate with confidence.' />


                    <TypeWritter chats={chats} />

                </div>

            </div>
            <div className='p-8 relative w-full h-full'>
                <CardHeading
                    Icon={Share}
                    title='Native Tools Integration'
                    subheading='Track real-time activity of agents with detailed records of triggers, tools used, outcomes, and timestamps.' />
                <div className='pointer-events-none absolute inset-0 h-full w-full bg-[radial-gradient(#eaedf1_1px,transparent_1px)] mask-radial-from-10% [background-size:10px_10px]'></div>
                <div className='grid relative h-full grid-cols-2 w-[67rem] min-h-[22rem] py-12 mt-10 mx-auto p-4'>
                    <div className='flex items-center justify-between'>
                        <div className='flex flex-col gap-10'>
                            <div className='flex items-center gap-2 relative '>
                                <Block title='Meeting Summarizer' Icon={BoxIcon} />
                                <motion.svg width="298" height="32" viewBox="0 0 298 32"
                                    className='absolute top-2 left-48'
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1H297V31.5" stroke="#909090" strokeOpacity="0.2"
                                        strokeWidth={1.2}
                                        strokeLinecap="round" />
                                    <motion.path
                                        stroke="#ED6455"
                                        strokeWidth={1.2}
                                        strokeLinecap="round"
                                        strokeDasharray="40 1000"      // gap > path length (~297px)
                                        strokeDashoffset={1040}        // dash+gap
                                        animate={{ strokeDashoffset: 0 }}
                                        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                                        d="M1 1H297V31.5" strokeOpacity="0.4" />
                                </motion.svg>

                            </div>

                            <div className="flex items-center gap-2 relative ">
                                <Block title='Code Reviewer' Icon={Code} />
                                <svg width="298" height="2" viewBox="0 0 298 2"
                                    fill="none"
                                    className='absolute top-2 left-48'
                                    xmlns="http://www.w3.org/2000/svg">

                                    <path d="M1 1H297" stroke="#909090" strokeOpacity="0.2" strokeLinecap="round"
                                        strokeWidth={1.2} />
                                    <motion.path
                                        stroke="#FFBC35"
                                        strokeWidth={1.2}
                                        strokeLinecap="round"
                                        strokeDasharray="40 1000"      // gap > path length (~297px)
                                        strokeDashoffset={1040}        // dash+gap
                                        animate={{ strokeDashoffset: 0 }}
                                        transition={{ repeat: Infinity, repeatDelay: 0.1, duration: 4, ease: "linear" }}
                                        d="M1 1H297" strokeOpacity="0.4" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className='flex items-center relative gap-2'>
                                <Block title='Customer Support' Icon={Call} />

                                <motion.svg width="298"

                                    height="40" viewBox="0 0 298 40" fill="none" className={"absolute -top-5 left-48"} xmlns="http://www.w3.org/2000/motion.svg">
                                    <path d="M1 34H297V1" stroke="#909090" strokeOpacity="0.2" strokeLinecap="round" strokeWidth={1.2} />
                                    <motion.path
                                        d="M1 34H297V1"
                                        stroke="#40FFA6"
                                        strokeWidth={1.2}
                                        strokeLinecap="round"
                                        strokeDasharray="40 1000"
                                        strokeDashoffset={1040}
                                        animate={{ strokeDashoffset: 0 }}
                                        transition={{ repeat: Infinity, repeatDelay: 0.1, duration: 4, ease: "linear" }}
                                    />


                                </motion.svg>
                            </div>

                        </div>
                        <div className='relative bg-gray-200  z-20 shadow-2xl size-16 rounded-md overflow-hidden p-px'>
                            <div className='absolute inset-0 animate-spin w-full h-full scale-[1.4] z-20 rounded-full [background-image:conic-gradient(var(--color-blue-400)_45deg,transparent_90deg,transparent_360deg)] [animation-duration:2s]'></div>
                            <div className='absolute inset-0 animate-spin w-full h-full scale-[1.4]   rounded-full [background-image:conic-gradient(var(--color-pink-400)_45deg,transparent_90deg,transparent_360deg)] [animation-delay:1s] [animation-duration:2s]'></div>
                            <div className='bg-white relative z-30 rounded-[5px] flex w-full h-full items-center justify-center'>
                                <NotusLogo />
                            </div>
                        </div>
                    </div>
                    <div className='relative flex justify-start  items-center h-full w-full'>
                        <motion.svg height="5" width="200">
                            <line
                                x1="0"
                                y1="2"
                                x2="250"
                                y2="2"
                                strokeWidth={1} stroke={"var(--color-stroke)"} strokeOpacity={0.2}
                            />
                            <motion.line
                                x1="0"
                                y1="2"
                                x2="25"
                                y2="2"
                                stroke="url(#gradient)"
                                strokeWidth="1"
                                strokeOpacity="0.8"
                                initial={{ x: -25 }}
                                animate={{ x: 240 }}
                                transition={{
                                    repeat: Infinity,
                                    repeatDelay: 1,
                                    duration: 1.6,
                                    ease: "linear"
                                }}
                            />
                            <linearGradient id="gradient" x1="41.5" y1="71.5" x2="-4.35509" y2="69.1602" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="var(--color-blue-500)" stopOpacity="1" />
                                <stop offset="50%" stopColor="var(--color-blue-500)" stopOpacity="1" />
                                <stop offset="100%" stopColor="var(--color-blue-500)" stopOpacity="0" />
                            </linearGradient>

                        </motion.svg>

                        <div className='flex items-center relative h-full'>
                            <span className='z-10  text-xs border w-fit px-2 py-0.5 rounded-sm bg-blue-50 border-blue-500 text-blue-500 font-extralight'>
                                Connected
                            </span>
                            <div className='absolute inset-x-0 h-full w-full flex flex-col items-center'>
                                <div className='bg-white rounded-md shadow-md border border-gray-200 size-12  flex shrink-0 items-center justify-center'>
                                    <Notion />
                                </div>
                                <motion.svg height="200" width="2" xmlns="http://www.w3.org/2000/svg">
                                    <motion.line
                                        x1="0"
                                        x2="0"
                                        stroke="url(#gradient1)"
                                        strokeWidth="1.4"
                                        strokeOpacity="1"
                                        initial={{
                                            y1: 75,
                                            y2: 75,
                                        }}
                                        strokeLinecap={"round"}
                                        animate={{
                                            y1: [75, 67, 64, -12],
                                            y2: [75, 72, 72, -2],
                                        }}
                                        transition={{
                                            duration: 2.4,
                                            ease: "linear",
                                            repeat: Infinity,
                                            repeatDelay: 1,
                                        }}
                                    />

                                    <line
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="75"
                                        strokeWidth={1.4}
                                        stroke="var(--color-stroke)"
                                        strokeOpacity={0.2}
                                    />
                                    <defs>
                                        <linearGradient id="gradient1" x1="18.5" y1="0" x2="18.5" y2="100" gradientUnits="userSpaceOnUse">
                                            <stop offset="0%" stopColor="#f17463" stopOpacity="1" />
                                            <stop offset="50%" stopColor="#f17463" stopOpacity="0.7" />
                                            <stop offset="100%" stopColor="#f17463" stopOpacity="0.2" />
                                        </linearGradient>

                                    </defs>
                                </motion.svg>
                                <motion.svg height="200" width="2" xmlns="http://www.w3.org/2000/svg">
                                    <motion.line
                                        x1="0"
                                        x2="0"
                                        stroke="url(#gradient1)"
                                        strokeWidth="1.4"
                                        strokeOpacity="1"
                                        initial={{
                                            y1: 90,
                                            y2: 90,
                                        }}
                                        strokeLinecap={"round"}
                                        animate={{
                                            y1: [90, 85, 78, -18],
                                            y2: [90, 88, 82, -2],
                                        }}
                                        transition={{
                                            duration: 2.4,
                                            ease: "linear",
                                            repeat: Infinity,
                                            repeatDelay: 1,
                                        }}
                                    />
                                    <line x1="0" y1="0" x2="0" y2="200" strokeWidth={1.4} stroke={"var(--color-stroke)"} strokeOpacity={0.2} />
                                </motion.svg>
                                <div className='bg-white rounded-md shadow-md border border-gray-200 size-12  flex shrink-0 items-center justify-center' >
                                    <Circle />
                                </div>
                            </div>
                        </div>
                        <svg height="5" width="220" xmlns="http://www.w3.org/2000/svg">
                            <motion.line
                                x1="0"
                                y1="2"
                                x2="25"
                                y2="2"
                                stroke="url(#gradient)"
                                strokeWidth="1"
                                strokeOpacity="0.8"
                                initial={{ x: -25 }}
                                animate={{ x: 220 }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1.8,
                                    repeatDelay: 1,
                                    ease: "linear"
                                }}
                            />
                            <linearGradient id="gradient" x1="41.5" y1="71.5" x2="-4.35509" y2="69.1602" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="var(--color-blue-500)" stopOpacity="1" />
                                <stop offset="50%" stopColor="var(--color-blue-500)" stopOpacity="1" />
                                <stop offset="100%" stopColor="var(--color-blue-500)" stopOpacity="0" />
                            </linearGradient>
                            <line x1="0" y1="2" x2="250" y2="2" strokeWidth={1} stroke={"var(--color-stroke)"} strokeOpacity={0.2} />
                        </svg>

                        <div className="absolute -top-11 right-32 flex h-full items-center flex-col">
                            <div className='bg-white rounded-md shadow-md border border-gray-200 size-12  flex shrink-0 items-center justify-center' >
                                <Green />
                            </div>
                            <svg height="90" width="2" xmlns="http://www.w3.org/2000/svg">
                                <motion.line
                                    x1="0"
                                    x2="0"
                                    stroke="url(#gradient1)"
                                    strokeWidth="1.4"
                                    strokeOpacity="1"
                                    initial={{
                                        y1: 90,
                                        y2: 90,
                                    }}
                                    strokeLinecap={"round"}
                                    animate={{
                                        y1: [90, 85, 78, -18],
                                        y2: [90, 88, 82, -2],
                                    }}
                                    transition={{
                                        duration: 2.4,
                                        ease: "linear",
                                        repeat: Infinity,
                                        repeatDelay: 1,
                                    }}

                                />


                                <line x1="0" y1="0" x2="0" y2="200"
                                    strokeWidth="1.4"
                                    stroke="var(--color-stroke)"
                                    strokeOpacity="0.2" />
                            </svg>

                            <div className='bg-white rounded-md shadow-md border border-gray-200 size-12  flex shrink-0 items-center justify-center' >
                                <Slack />
                            </div>
                        </div>
                        <div className='bg-white rounded-md shadow-md border border-gray-200 size-12  flex shrink-0 items-center justify-center' >
                            <GptIcon className='size-6' />
                        </div>


                    </div>
                </div>
                <div className='mt-20 grid grid-cols-3 gap-20 '>
                    <CardHeading
                        title='One Click Auth'
                        subheading='A drag-and-drop interface to create, connect, and configure agents into logical workflows'
                        Icon={Fingerprint}
                    />
                    <CardHeading
                        title='Realtime Sync'
                        subheading='Agents operate independently and coordinate tasks to complete complex all goals'
                        Icon={Realtime}
                    />
                    <CardHeading
                        title='Custom Connector SDK'
                        subheading='Run agent workflows in a sandbox to preview behavior, debug logic, and test interactions'
                        Icon={Connect}
                    />
                </div>
            </div>


        </div >
    )
}









function Tools() {
    return (
        <div>

        </div>
    )
}

function Block({ Icon, title }: { Icon: React.ComponentType<React.SVGProps<SVGElement>>, title: string }) {
    return <div className='flex gap-2 items-center'>
        <Icon />
        <p className='text-sm text-neutral-800 '>{title}</p>
    </div>
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
