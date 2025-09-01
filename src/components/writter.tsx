"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TypewriterMessages({ chats }: { chats: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayed, setDisplayed] = useState<string[]>(chats.map(() => ""));
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (currentIndex >= chats.length) return;

        const text = chats[currentIndex];
        let i = 0;
        setDone(false);

        const interval = setInterval(() => {
            if (i < text.length) {
                setDisplayed((prev) => {
                    const updated = [...prev];
                    updated[currentIndex] += text[i];
                    return updated;
                });
                i++;
            } else {
                clearInterval(interval);
                setDone(true);

                // Start next chat after a pause
                setTimeout(() => {
                    setCurrentIndex((prev) => prev + 1);
                }, 500);
            }
        }, 50);

        return () => clearInterval(interval);
    }, [currentIndex, chats]);

    return (
        <div className="flex flex-col gap-2">
            {displayed.map((msg, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.5 }}
                    className="inline-block max-w-xs rounded-xl px-4 py-2 bg-gray-100 text-sm text-neutral-800 w-fit"
                >
                    {msg}
                    {idx === currentIndex && !done && (
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 1 }}
                            className="inline-block  w-[2px] h-4 bg-neutral-600 align-middle ml-[1px]"
                        />
                    )}
                </motion.div>
            ))}
        </div>
    );
}
