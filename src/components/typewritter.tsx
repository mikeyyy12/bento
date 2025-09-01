"use client"
import { Chat, NotusLogo } from '@/components/features'
import { cn } from '@/lib/utils'
import { motion } from "motion/react"
import React, { useEffect, useRef, useState } from 'react'

export const TypeWritter = ({ chats }: { chats: Chat[] }) => {
    const [displayedText, setDisplayedText] = useState<Chat[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            const container = containerRef.current
            console.log(containerRef.current.scrollHeight)
            console.log("container height", containerRef.current.clientHeight)
            if (container.clientHeight < container.scrollHeight) {
                container.scrollTop = container.scrollHeight
            }

        }
    }, [displayedText])

    useEffect(() => {
        if (currentIndex >= chats.length) return;

        const text = chats[currentIndex].chat;
        let i = 0;

        setDisplayedText(prev => [
            ...prev,
            { ...chats[currentIndex], chat: "" }
        ]);

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

        return () => clearInterval(interval);
    }, [currentIndex, chats]);

    return (
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
                            <div className='bg-white size-8 rounded-full justify-center flex items-center shrink-0 shadow-xs border border-gray-200'>
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
    )
}
