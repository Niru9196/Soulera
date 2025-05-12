import { useState } from "react";
import { Search, Menu, X } from "lucide-react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex-1">
                    <h1 className="text-2xl font-bold text-purple-600">
                        nullBrains
                    </h1>
                </div>

                <nav className="hidden md:flex flex-1 justify-center items-center space-x-8">
                    <a href="#features" className="hover:text-purple-600">
                        Home
                    </a>
                    <a href="#team" className="hover:text-purple-600">
                        Features
                    </a>
                    <a href="#blog" className="hover:text-purple-600">
                        Blog
                    </a>
                    <a href="#contact" className="hover:text-purple-600">
                        Contact
                    </a>
                    <Search className="w-5 h-5 text-gray-600 hover:text-purple-600 cursor-pointer" />
                </nav>

                <div className="hidden md:flex flex-1 justify-end items-center space-x-4">
                    <a href="#" className="text-gray-700 hover:text-purple-600">
                        Sign In
                    </a>
                    <button className="rounded-full bg-purple-500 text-white px-4 py-2">
                        Sign Up
                    </button>
                </div>

                <div className="md:hidden flex items-center">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-3 bg-white">
                    <a
                        href="#features"
                        className="block text-gray-700 hover:text-purple-600"
                    >
                        Home
                    </a>
                    <a
                        href="#team"
                        className="block text-gray-700 hover:text-purple-600"
                    >
                        Features
                    </a>
                    <a
                        href="#blog"
                        className="block text-gray-700 hover:text-purple-600"
                    >
                        Blog
                    </a>
                    <a
                        href="#contact"
                        className="block text-gray-700 hover:text-purple-600"
                    >
                        Contact
                    </a>
                    <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                        <Search className="w-5 h-5 text-gray-600 hover:text-purple-600 cursor-pointer" />
                        <div className="space-x-4">
                            <a
                                href="#"
                                className="text-gray-700 hover:text-purple-600"
                            >
                                Sign In
                            </a>
                            <button className="rounded-full bg-purple-500 text-white px-4 py-2">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
