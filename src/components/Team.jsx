import React from "react";
import { FaTwitter, FaGithub } from "react-icons/fa6";
import shinchan from "../assets/images/shinchan.jpg";

const members = [
    { name: "Freddy Smith", role: "CEO and Founder" },
    { name: "Carl Jones", role: "CTO and Co-Founder" },
    { name: "Freddy Smith", role: "CEO and Founder" },
    { name: "Carl Jones", role: "CTO and Co-Founder" },
    { name: "Freddy Smith", role: "CEO and Founder" },
    { name: "Carl Jones", role: "CTO and Co-Founder" },
    { name: "Freddy Smith", role: "CEO and Founder" },
    { name: "Carl Jones", role: "CTO and Co-Founder" },
];

export default function Team() {
    return (
        <section className="px-4 py-16 max-w-7xl mx-auto">
            <p className="text-blue-400 text-sm font-medium uppercase mb-4">
                Our Team
            </p>
            <h3 className="text-5xl font-bold tracking-wide leading-14">
                An incredible team of
            </h3>
            <h3 className="text-5xl font-bold mb-10 tracking-wide">
                amazing individuals
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 ">
                {members.map((m, idx) => (
                    <div key={idx} className="text-center space-y-2">
                        <div className="relative w-60 h-60 mx-auto bg-white rounded-full border-11 border-gray-300">
                            <div className="absolute -top-2 -right-2 w-36 h-36 bg-gray-300 -z-20 rounded-tr-md"></div>
                            <img
                                src={shinchan}
                                alt={m.name}
                                className="w-full h-full object-cover rounded-full z-50"
                            />
                        </div>

                        <h4 className="font-medium text-md">{m.name}</h4>
                        <p className="text-sm text-gray-500">{m.role}</p>
                        <div className="flex justify-center gap-3 text-gray-400 mt-1">
                            <FaTwitter />
                            <FaGithub />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
