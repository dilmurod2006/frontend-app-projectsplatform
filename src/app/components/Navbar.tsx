"use client"; // Interaktivlik uchun "use client" direktivasi

import { useState } from 'react';
import { usePathname } from 'next/navigation'; // Faol sahifani aniqlash uchun
import Link from 'next/link'; // Next.js'ning Link komponenti
import Image from 'next/image'; // Next.js'ning Image komponenti
import { Menu, X } from 'lucide-react';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname(); // Joriy URL manzilini olish
    
    // Asosiy sahifalar uchun havolalar ro'yxati
    const navLinks = [
        { name: 'Bosh sahifa', href: '/' },
        { name: 'Biz haqimizda', href: '/about' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md border-b border-emerald-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                             <Image
                                src="/favicon.png" // public papkasidagi rasm
                                alt="ProjectsPlatform Logo"
                                width={32}
                                height={32}
                                className="object-contain"
                            />
                            <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                                ProjectsPlatform
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                        pathname === link.href
                                            ? 'text-emerald-700 font-semibold'
                                            : 'text-slate-700 hover:text-emerald-700'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/maintenance"
                                className="text-slate-700 hover:text-emerald-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                Kirish
                            </Link>
                            <Link
                                href="/maintenance"
                                className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md transform hover:scale-105 transition-all duration-300"
                            >
                                Bepul foydalanish
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-emerald-50 inline-flex items-center justify-center p-2 rounded-md text-emerald-700 hover:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Asosiy menyuni ochish</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
                id="mobile-menu"
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-emerald-100 bg-white/95 backdrop-blur-sm">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`block px-3 py-2 rounded-md text-base font-medium ${
                                pathname === link.href 
                                ? 'bg-emerald-50 text-emerald-700' 
                                : 'text-slate-700 hover:bg-emerald-50 hover:text-emerald-700'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/maintenance"
                        onClick={() => setIsOpen(false)}
                        className="text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Kirish
                    </Link>
                    <Link
                        href="/maintenance"
                        onClick={() => setIsOpen(false)}
                        className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white block w-full text-center mt-2 px-4 py-2 rounded-lg text-base font-semibold shadow-md hover:scale-[1.02] transition-transform duration-300"
                    >
                        Bepul foydalanish
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

