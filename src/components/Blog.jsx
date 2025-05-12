import React from "react";
import img1 from "../assets/images/blog1.jpg";
import img2 from "../assets/images/blog2.jpg";
import img3 from "../assets/images/blog3.jpg";
import img4 from "../assets/images/blog4.jpg";
import img5 from "../assets/images/blog5.jpg";
import img6 from "../assets/images/blog6.jpg";

const topCards = [
    {
        title: "Refreshing Designs",
        description:
            "Quench satisfying designs to help you stir up emotion and tell a story.",
        tag: "RESOURCES",
        topColor: "bg-purple-600",
        bottomColor: "bg-purple-800",
        img: img1,
    },
    {
        title: "Healthier Lifestyle",
        description:
            "Living a healthier lifestyle will help with your productivity and your mind-set.",
        tag: "LIFESTYLE",
        topColor: "bg-blue-600",
        bottomColor: "bg-blue-800",
        img: img2,
    },
    {
        title: "Gaming Evolution",
        description:
            "Learn about the evolution of gaming and how it started a revolution.",
        tag: "ENTERTAINMENT",
        topColor: "bg-yellow-500",
        bottomColor: "bg-yellow-800",
        img: img3,
    },
];

const bottomCards = [
    {
        title: "Best Workstations of the Year",
        description:
            "Check out these inspiring workstations to get ideas on how to level-up your workstation.",
        tag: "INSPIRATION",
        img: img4,
        tagbgColor: "bg-blue-400",
    },
    {
        title: "Eating for Productivity",
        description:
            "Learn how to be more disciplined in your diet and how you can eat to maximize productivity.",
        tag: "FOOD",
        img: img5,
        tagbgColor: "bg-red-300",
    },
    {
        title: "A Design Mind-set",
        description:
            "What does it mean to have a design mind-set? Learn how to improve your eye for design.",
        tag: "RESOURCES",
        img: img6,
        tagbgColor: "bg-purple-400",
    },
];

export default function BlogGrid() {
    return (
        <div className="max-w-7xl mx-auto p-6 space-y-10">
            <p className="text-7xl font-bold">The Project Blog</p>
            <p className="text-gray-600 -mt-6 text-lg">
                Designs and layouts to help you with your app
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {topCards.map((card, idx) => (
                    <div
                        key={idx}
                        className="rounded-xl overflow-hidden shadow-md border"
                    >
                        <div className="relative">
                            <div className="p-6 flex justify-center">
                                <img
                                    src={card.img}
                                    alt={card.title}
                                    className="h-80 object-cover w-full bg-purple-500"
                                />
                            </div>

                            <span className="absolute -bottom-3 left-3 bg-white px-3 py-1 text-xs font-semibold border rounded-2xl">
                                {card.tag}
                            </span>
                        </div>

                        <div className={`${card.bottomColor} pb-4 py-6`}>
                            <h2 className="text-5xl font-bold mb-2 text-white px-4">
                                {card.title}
                            </h2>
                            <p className="text-sm text-gray-400 px-4">
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {bottomCards.map((card, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition duration-300 border"
                    >
                        <div className="relative">
                            <img
                                src={card.img}
                                alt={card.title}
                                className="w-full h-60 object-cover"
                            />

                            <div
                                className={`absolute -bottom-2 left-4 px-3 py-1 text-xs font-semibold border rounded-2xl bg-amber-900 text-white`}
                            >
                                {card.tag}
                            </div>
                        </div>

                        <div className="pb-4 mt-9">
                            <h3 className="text-lg font-bold text-gray-800 mb-2 leading-snug px-6">
                                {card.title}
                            </h3>
                            <p className="text-sm text-gray-600 px-6 mb-3">
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
