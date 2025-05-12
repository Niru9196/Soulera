import React from "react";
import astronaut from "../assets/images/astronaut.png";
import robot from "../assets/images/robot.png";

const features = [
    {
        title: "Boost Productivity",
        description:
            "Build an atmosphere that creates productivity in your organization and your company culture.",
        points: [
            "Maximize productivity and growth",
            "Speed past your competition",
            "Learn the top techniques",
        ],
        image: astronaut,
        reverse: false,
    },
    {
        title: "Automated Tasks",
        description:
            "Save time and money with our revolutionary services. We are the leaders in the industry.",
        points: [
            "Automated task management workflow",
            "Detailed analytics for your data",
            "Some awesome integrations",
        ],
        image: robot,
        reverse: true,
    },
];

export default function Feature() {
    return (
        <section className="py-16 bg-white" aria-labelledby="features-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="sr-only">
                    <h2 id="features-heading">Core Product Features</h2>
                </header>

                {features.map((feature, index) => (
                    <article
                        key={index}
                        className={`flex flex-col md:flex-row items-center gap-12 mb-20 ${
                            feature.reverse ? "md:flex-row-reverse" : ""
                        }`}
                        aria-labelledby={`feature-title-${index}`}
                    >
                        <figure className="w-full md:w-1/2 flex justify-center">
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="w-full max-w-md object-contain"
                                loading="lazy"
                            />
                        </figure>

                        <div className="w-full md:w-1/2 lg:max-w-lg">
                            <header>
                                <h3
                                    id={`feature-title-${index}`}
                                    className="text-2xl md:text-3xl font-bold mb-4 text-gray-900"
                                >
                                    {feature.title}
                                </h3>
                            </header>
                            <p className="text-gray-600 mb-6 text-base md:text-lg">
                                {feature.description}
                            </p>

                            <ul className="space-y-3">
                                {feature.points.map((point, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-2"
                                    >
                                        <span
                                            className="text-yellow-400 text-lg"
                                            aria-hidden="true"
                                        >
                                            🟡
                                        </span>
                                        <span className="text-gray-700">
                                            {point}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
