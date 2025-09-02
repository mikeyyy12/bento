"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AnimatedPath() {
    const pathRef = useRef<SVGPathElement>(null);
    const gradientRef = useRef<SVGLinearGradientElement>(null);

    useEffect(() => {
        if (!pathRef.current || !gradientRef.current) return;

        const pathLength = pathRef.current.getTotalLength();

        // Animate the dash moving along the path
        gsap.set(pathRef.current, { strokeDasharray: 30, strokeDashoffset: pathLength });
        gsap.to(pathRef.current, {
            strokeDashoffset: 0,
            repeat: -1,
            duration: 2,
            ease: "linear",
        });

        // Animate the gradient moving along the path
        // Shift gradient x1/x2 or use gradientTransform
        gsap.to(gradientRef.current, {
            attr: { gradientTransform: "translate(100,0)" },
            repeat: -1,
            duration: 2,
            ease: "linear",
            yoyo: true,
        });
    }, []);

    return (
        <svg width="298" height="71" viewBox="0 0 298 71" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Background path */}
            <path
                d="M1 70H297V1"
                stroke="#909090"
                strokeOpacity="0.4"
                strokeLinecap="round"
                strokeWidth={1.5}
            />

            {/* Animated path */}
            <path
                ref={pathRef}
                d="M1 70H297V1"
                stroke="url(#movingGradient)"
                strokeLinecap="round"
                strokeWidth={2}
            />

            <defs>
                <linearGradient
                    ref={gradientRef}
                    id="movingGradient"
                    x1="0"
                    y1="0"
                    x2="298"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#40FFA6" />
                    <stop offset="1" stopColor="red" stopOpacity="1" />
                </linearGradient>
            </defs>
        </svg>
    );
}
