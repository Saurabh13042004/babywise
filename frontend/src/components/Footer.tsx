import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white py-12 border-t border-gray-100">
            <div className="container mx-auto px-6 md:px-20 lg:px-32">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2">BabyWise AI</h3>
                        <p className="text-gray-500">Smart baby product advice, minus the hype.</p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-8 text-sm text-gray-500">
                        <a href="#" className="hover:text-[var(--color-primary)] transition-colors">About</a>
                        <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Contact</a>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-[var(--color-primary)] hover:text-white transition-all">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-[var(--color-primary)] hover:text-white transition-all">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-[var(--color-primary)] hover:text-white transition-all">
                            <Twitter size={20} />
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-50 text-center text-sm text-gray-400">
                    © 2026 BabyWise AI. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
