import React from "react";
import google from "../assets/images/google.png";
import disney from "../assets/images/Disney.png";
import hubspot from "../assets/images/HubSpot.png";
import youtube from "../assets/images/unnamed.jpg";
import slack from "../assets/images/Slack.png";
import shopify from "../assets/images/shopify.png";

export default function TrustedBy() {
    const logos = [
        { src: disney, alt: "Disney", height: "h-16" },
        { src: google, alt: "Google", height: "h-20" },
        { src: hubspot, alt: "HubSpot", height: "h-16" },
        { src: youtube, alt: "YouTube", height: "h-16" },
        { src: slack, alt: "Slack", height: "h-16" },
        { src: shopify, alt: "Shopify", height: "h-24" },
    ];

    return (
        <section
            className="w-full bg-white py-10 px-4 sm:px-6 lg:px-20 lg:max-w-7xl mx-auto"
            aria-labelledby="trusted-heading"
        >
            <div className="max-w-7xl mx-auto text-center">
                <h2
                    id="trusted-heading"
                    className="uppercase text-sm font-bold text-gray-900 mb-8 tracking-wide"
                >
                    Trusted by top-leading companies
                </h2>

                <ul className="flex flex-wrap justify-center items-center gap-10 sm:gap-12 md:gap-16">
                    {logos.map((logo, index) => (
                        <li
                            key={index}
                            className="flex items-center justify-center"
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className={`${logo.height} object-contain max-w-[120px] sm:max-w-[140px]`}
                                loading="lazy"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
