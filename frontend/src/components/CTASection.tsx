import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lock, Check } from 'lucide-react';

const CTASection: React.FC = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            localStorage.setItem('babywise_email', email);
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 5000);
            setEmail('');
        }
    };

    return (
        <section className="py-24 relative overflow-hidden text-white">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#87CEEB] to-[#FFB6C1] z-0"></div>

            {/* Clouds Overlay */}
            <div className="absolute inset-0 opacity-30 z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23ffffff\' fill-opacity=\'0.2\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}></div>

            <div className="container mx-auto px-6 md:px-20 lg:px-32 relative z-10 text-center max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-white mb-6 text-4xl md:text-5xl font-bold">Be the First to Know When We Launch</h2>
                    <p className="text-xl text-white/90 mb-10">
                        Join the waitlist and get exclusive early access + a free baby gear checklist.
                    </p>

                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="flex-1 px-6 py-4 rounded-full border-none focus:ring-4 focus:ring-white/30 shadow-lg text-gray-800 text-lg bg-white placeholder-gray-400 outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                            >
                                Get Early Access <ArrowRight size={20} />
                            </button>
                        </form>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white/20 backdrop-blur-md border border-white/40 text-white px-8 py-6 rounded-2xl inline-flex items-center gap-4 mb-8"
                        >
                            <div className="bg-green-400 p-2 rounded-full">
                                <Check size={24} className="text-white" />
                            </div>
                            <div className="text-left">
                                <p className="font-bold text-xl">You're on the list!</p>
                                <p className="opacity-90">We'll be in touch soon.</p>
                            </div>
                        </motion.div>
                    )}

                    <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
                        <Lock size={14} />
                        <span>We respect your privacy. No spam, ever.</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
