"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 md:gap-3" aria-label="Tabnify Home">
                    <Image
                        src="/logo.png"
                        alt="Tabnify Logo"
                        width={40}
                        height={40}
                        className="rounded-xl w-8 h-8 md:w-10 md:h-10"
                        priority
                    />
                    <span className="text-lg md:text-xl font-bold text-gray-900">Tabnify</span>
                </Link>
                <div className="flex items-center gap-4 md:gap-6">
                    <div className="hidden md:flex items-center gap-6">
                        <Link
                            href="#features"
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Features
                        </Link>
                        <Link
                            href="#faq"
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            FAQ
                        </Link>
                        <Link
                            href="/privacy"
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Privacy
                        </Link>
                    </div>
                    <div className="flex items-center gap-3">
                        <a
                            href="https://chromewebstore.google.com/detail/smart-tab-manager/mgigbjjhejcaigecdanajdmolpijbogm"
                            className="px-4 py-2 text-sm md:px-5 md:py-2.5 md:text-base rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105 whitespace-nowrap"
                            rel="noopener noreferrer"
                        >
                            Add to Chrome
                        </a>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 -mr-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg transition-colors"
                            aria-label="Toggle menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            {isMobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white shadow-xl ${isMobileMenuOpen ? 'max-h-60 border-t border-gray-100 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
            >
                <div className="px-4 py-4 space-y-4">
                    <Link
                        href="#features"
                        className="block text-gray-600 hover:text-gray-900 hover:translate-x-1 transition-all font-medium py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Features
                    </Link>
                    <Link
                        href="#faq"
                        className="block text-gray-600 hover:text-gray-900 hover:translate-x-1 transition-all font-medium py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        FAQ
                    </Link>
                    <Link
                        href="/privacy"
                        className="block text-gray-600 hover:text-gray-900 hover:translate-x-1 transition-all font-medium py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Privacy
                    </Link>
                </div>
            </div>
        </nav>
    );
}
