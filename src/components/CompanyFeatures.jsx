import React from "react";
import {
    BadgeCheck,
    BellRing,
    Boxes,
    Code2,
    Blocks,
    Percent,
} from "lucide-react";

const features = [
    {
        title: "Certifications",
        desc: "Each of our plans will provide you and your team with certifications.",
        icon: BadgeCheck,
    },
    {
        title: "Notifications",
        desc: "Send out notifications to all your customers to keep them engaged.",
        icon: BellRing,
    },
    {
        title: "Bundles",
        desc: "High-quality bundles of awesome tools to help you out.",
        icon: Boxes,
    },
    {
        title: "Developer Tools",
        desc: "Developer tools to help grow your application and keep it up-to-date.",
        icon: Code2,
    },
    {
        title: "Building Blocks",
        desc: "The right kind of building blocks to take your company to the next level.",
        icon: Blocks,
    },
    {
        title: "Coupons",
        desc: "Coupon system to provide special offers and discounts for your app.",
        icon: Percent,
    },
];

export default function Features() {
    return (
        <section
            className="px-4 sm:px-6 lg:px-8 py-16 bg-white max-w-7xl mx-auto"
            aria-labelledby="features-title"
        >
            <div className="max-w-7xl mx-auto text-center">
                <header className="mb-10">
                    <h2
                        id="features-title"
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
                    >
                        Our Features
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg">
                        Check out our list of awesome features below.
                    </p>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {features.map((f, idx) => (
                        <article
                            key={idx}
                            className="bg-gray-50 p-6 py-8 rounded-lg shadow-sm text-center flex flex-col items-center"
                            role="region"
                            aria-labelledby={`feature-${idx}`}
                        >
                            <div
                                className="rounded-full bg-blue-500 w-12 h-12 flex items-center justify-center mb-4"
                                aria-hidden="true"
                            >
                                <f.icon className="text-white w-6 h-6" />
                            </div>
                            <h3
                                id={`feature-${idx}`}
                                className="text-lg font-semibold text-gray-800 mb-2"
                            >
                                {f.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-6 max-w-xs px-2">
                                {f.desc}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
