import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    const navLinks = [
        { name: 'Why BabyWise', href: '#why-babywise' },
        { name: 'Solution', href: '#solution' },
        { name: 'How it Works', href: '#how-it-works' },
        { name: 'Features', href: '#features' },
    ];

    return (
        <>
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-250%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={`fixed top-4 md:top-6 left-0 right-0 z-50 mx-auto w-[95%] md:w-fit transition-all duration-300`}
            >
                <div className={`px-6 py-3 rounded-full flex items-center justify-between gap-4 md:gap-12 border ${scrolled
                    ? "bg-white/80 backdrop-blur-md border-white/40 shadow-lg"
                    : "bg-white/50 backdrop-blur-sm border-transparent shadow-sm"
                    }`}>
                    {/* Logo */}
                    <a href="#" className="text-xl font-bold text-gray-800 tracking-tight">
                        BabyWise<span className="text-[var(--color-primary)]">.AI</span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-600 hover:text-[var(--color-primary)] transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <a href="#cta" className="hidden md:block bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors shadow-md">
                            Get Early Access
                        </a>
                        <button
                            className="md:hidden text-gray-800"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-32 px-6 md:hidden"
                >
                    <div className="flex flex-col gap-6 text-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-2xl font-bold text-gray-800"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="#cta" className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-full text-lg font-bold mt-4 shadow-lg inline-block" onClick={() => setMobileMenuOpen(false)}>
                            Get Early Access
                        </a>
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default Navbar;
