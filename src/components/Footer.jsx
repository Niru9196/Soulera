import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaDribbble,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer
            className="text-white py-20 px-4"
            aria-labelledby="footer-heading"
        >
            <div className="max-w-7xl mx-auto text-center">
                <h2 id="footer-heading" className="sr-only">
                    Footer
                </h2>

                <nav aria-label="Footer navigation" className="mb-6">
                    <ul className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
                        {[
                            "About",
                            "Blog",
                            "Team",
                            "Pricing",
                            "Contact",
                            "Terms",
                        ].map((link) => (
                            <li key={link}>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <nav aria-label="Social media" className="mb-6">
                    <ul className="flex justify-center gap-6">
                        <li>
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded"
                            >
                                <FaFacebook size={20} />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded"
                            >
                                <FaInstagram size={20} />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                aria-label="Twitter"
                                className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded"
                            >
                                <FaTwitter size={20} />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded"
                            >
                                <FaLinkedinIn size={20} />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                aria-label="Dribbble"
                                className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded"
                            >
                                <FaDribbble size={20} />
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="text-sm text-gray-500">
                    <p>&copy; 2025 nullBrains. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
