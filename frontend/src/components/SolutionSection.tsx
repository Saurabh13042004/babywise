import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ThumbsDown, Users } from 'lucide-react';

const SolutionSection: React.FC = () => {
    return (
        <section className="relative py-32 bg-[var(--color-background)] overflow-hidden">
            {/* Top Wave Divider */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
                <svg className="relative block w-full h-[80px] md:h-[120px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFFFFF"></path>
                </svg>
            </div>

            <div className="container mx-auto px-6 md:px-20 lg:px-32 relative z-10">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-block px-5 py-2 bg-blue-50 rounded-full text-blue-600 font-bold text-sm mb-8 tracking-wide uppercase">
                            Meet BabyWise AI
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight text-gray-900">
                            Your Personal Baby Gear Guide <br />
                            <span className="text-gray-400 text-3xl md:text-4xl font-normal block mt-2">(Minus the Marketing BS)</span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                            Smart recommendations. Real parent experiences. Zero regrets. We do the heavy lifting so you can focus on the baby.
                        </p>

                        <div className="space-y-10">
                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-blue-600 group-hover:scale-110 transition-transform">
                                    <Sparkles size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-800">Personalized Just for You</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Tell us about your budget, space, and lifestyle. Get recommendations that actually fit YOUR life.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-red-600 group-hover:scale-110 transition-transform">
                                    <ThumbsDown size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-800">Skip the Overhyped Stuff</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        We'll tell you what NOT to buy. Save money on products that look great but disappoint.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-purple-600 group-hover:scale-110 transition-transform">
                                    <Users size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-800">Real Parent Insights</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Aggregated reviews from thousands of parents who've been there, done that.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual - Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative flex justify-center"
                    >
                        <div className="relative w-[320px] h-[640px] bg-gray-900 rounded-[3.5rem] border-[10px] border-gray-900 shadow-2xl overflow-hidden ring-4 ring-gray-100/50">
                            {/* Screen Content */}
                            <div className="w-full h-full bg-white relative overflow-hidden flex flex-col">
                                {/* Header */}
                                <div className="bg-[var(--color-primary)] p-8 pt-14 text-white pb-10 rounded-b-[2rem] shadow-md z-10">
                                    <h4 className="font-bold text-xl mb-1">My Recommendations</h4>
                                    <p className="text-sm opacity-90 font-medium">Based on your small apartment</p>
                                </div>

                                {/* List */}
                                <div className="p-6 space-y-5 flex-1 overflow-y-auto pt-6">
                                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-center hover:shadow-md transition-shadow">
                                        <div className="w-14 h-14 bg-gray-100 rounded-xl"></div>
                                        <div className="flex-1">
                                            <div className="h-4 w-3/4 bg-gray-200 rounded-full mb-2"></div>
                                            <div className="h-3 w-1/2 bg-gray-100 rounded-full"></div>
                                        </div>
                                        <div className="text-green-500 font-bold text-sm bg-green-50 px-2 py-1 rounded-lg">98%</div>
                                    </div>
                                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-center hover:shadow-md transition-shadow">
                                        <div className="w-14 h-14 bg-gray-100 rounded-xl"></div>
                                        <div className="flex-1">
                                            <div className="h-4 w-2/3 bg-gray-200 rounded-full mb-2"></div>
                                            <div className="h-3 w-1/2 bg-gray-100 rounded-full"></div>
                                        </div>
                                        <div className="text-green-500 font-bold text-sm bg-green-50 px-2 py-1 rounded-lg">95%</div>
                                    </div>
                                    {/* "Skip" Item */}
                                    <div className="bg-red-50 p-4 rounded-2xl border border-red-100 flex gap-4 items-center opacity-80">
                                        <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center text-red-500 font-bold text-xl">X</div>
                                        <div className="flex-1">
                                            <div className="h-4 w-3/4 bg-red-200 rounded-full mb-2"></div>
                                            <div className="text-xs text-red-500 font-bold uppercase tracking-wide">Skip: Overrated</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Button */}
                                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full px-6">
                                    <div className="bg-[var(--color-primary)] text-white py-4 rounded-2xl shadow-lg font-bold text-center cursor-pointer hover:brightness-105 transition-all">
                                        Start Shopping
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[90%] bg-blue-100/40 rounded-full blur-3xl -z-10"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
