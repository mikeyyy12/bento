"use client"
import { Chat } from '@/components/features'
import { cn } from '@/lib/utils'
import { AttachmentSvg, NotusLogo, SendSvg } from '@/utils/Svgs'
import { motion } from "motion/react"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'


export const funnyReplies: string[] = [
    "Don ko pakadna mushkil hi nahi... namumkin hai! 🔥",
    "All is well! 🙏",
    "Bhagwan ke ghar der hai andher nahi. ⏳",
    "Aap purush hi nahi, maha purush hain! 😂",
    "Dosti ka ek usool hai madam – no sorry, no thank you! 🙌",
    "I can talk English, I can walk English, I can laugh English... 😆",
];

export const TypeWritter = ({ chats: initialChats }: { chats: Chat[] }) => {
    const [chats, setChats] = useState<Chat[]>(initialChats)
    const [scrollToBottom, setScrollToBottom] = useState(false);
    const [displayedText, setDisplayedText] = useState<Chat[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [userPrompt, setUserPrompt] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!scrollToBottom || !containerRef.current) return;

        containerRef.current.scrollTop = containerRef.current.scrollHeight;


        setScrollToBottom(false);
    }, [scrollToBottom]);

    useEffect(() => {
        if (currentIndex >= chats.length) return;
        const currentChat = chats[currentIndex]
        if (chats[currentIndex].instant === true) {
            setDisplayedText((prev) => [...prev, chats[currentIndex]])
            setCurrentIndex(prev => prev + 1);
            return
        }
        const text = currentChat.chat;
        let i = 0;
        console.log(currentIndex)
        setDisplayedText(prev => [
            ...prev,
            { ...currentChat, chat: "" }
        ]);
        setScrollToBottom(true);
        const interval = setInterval(() => {
            if (i < text.length) {
                const nextChar = text[i];
                setDisplayedText(prev => {
                    const updated = [...prev];
                    updated[currentIndex] = {
                        ...updated[currentIndex],
                        chat: updated[currentIndex].chat + nextChar
                    };
                    return updated;
                });
                i++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    setCurrentIndex(prev => prev + 1);
                }, 500);
            }
        }, 40);
        console.log('disp text->', displayedText,)
        return () => clearInterval(interval);
    }, [currentIndex, chats]);

    function handleSubmit() {

        console.log(userPrompt)
        const random = Math.floor(Math.random() * funnyReplies.length)

        setChats((prev) => [...prev, { type: "user", chat: userPrompt, instant: true }])

        setChats((prev) => [...prev, { type: "system", chat: funnyReplies[random] }])
        console.log(chats, displayedText)
        setUserPrompt("")
    }

    return (
        <div className='relative max-h-70 w-[85%] mx-auto mt-4 p-4 min-h-40 h-full' >
            <div className='absolute inset-x-0 -bottom-4 z-20 mx-auto flex w-[85%] items-center justify-between rounded-lg border border-gray-200 bg-white shadow-xs'>
                <input
                    type='text'
                    placeholder='Ask Nodus AI'
                    name='prompt'
                    id='pormpt'
                    value={userPrompt}
                    onChange={(e) => setUserPrompt(e.target.value)}
                    className='outline-none p-4 text-xs font-extralight text-neutral-800 w-full'
                />
                <div className='flex gap-2 mr-4'>
                    <AttachmentSvg />
                    <button className=' cursor-pointer' onClick={handleSubmit}>
                        <SendSvg />
                    </button>
                </div>
            </div>
            <div
                className=' flex flex-col gap-4 mask-t-from-70% mask-b-from-80% max-h-[calc(100%-1rem)] pb-16   pt-4 overflow-y-auto'
                ref={containerRef}
                style={{
                    scrollbarWidth: "none",
                }}>
                <div className="flex flex-col gap-4">
                    {displayedText.map((item, index) => (
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 10, }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.02 * index }}
                            key={index}
                            className={cn(
                                "flex gap-3 items-start",
                                item.type === "user" ? "flex-row-reverse" : "flex-row px-1"
                            )}
                        >
                            {item.type === "user" ? (
                                <img
                                    src='new1.jpeg'
                                    alt='user logo'
                                    className='size-8 rounded-full object-cover mt-1'
                                />
                            ) : (
                                <div className='bg-white size-8 rounded-full justify-center flex items-center p-2 shrink-0 shadow-xs border border-gray-200'>
                                    <NotusLogo />
                                </div>
                            )}

                            <motion.div
                                initial={{ scale: 0.95, opacity: 0, }}
                                animate={{ scale: 1, opacity: 1, }}
                                transition={{ duration: 0.4, delay: 0.02 * index }}
                                className={cn(
                                    "text-sm py-2 px-4 max-w-xs rounded-2xl tracking-tight",
                                    item.type === "user"
                                        ? "text-white bg-blue-500 rounded-br-md"
                                        : "text-neutral-800 bg-gray-100 rounded-bl-md"
                                )}
                            >
                                {item.chat}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
