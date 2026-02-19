"use client";

import { useState } from "react";

export default function FeatureCard({
    icon,
    title,
    description,
    gradient,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    gradient: string;
}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <article
            className={`relative p-6 rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-300 cursor-pointer overflow-hidden group ${isHovered ? "shadow-xl scale-105 border-transparent" : "hover:shadow-md"
                }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Gradient background on hover */}
            <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${gradient}`}
            />

            {/* Icon container */}
            <div
                className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${gradient} ${isHovered ? "scale-110 rotate-3" : ""
                    }`}
            >
                <span className="text-white text-2xl" aria-hidden="true">{icon}</span>
            </div>

            {/* Content */}
            <h3 className="relative text-xl font-semibold text-gray-900 mb-2">
                {title}
            </h3>
            <p className="relative text-gray-600 leading-relaxed">{description}</p>
        </article>
    );
}
