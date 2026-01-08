import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ThumbsDown, Users } from 'lucide-react';

const SolutionSection: React.FC = () => {
    return (
        <section className="py-20 bg-[var(--color-background)] overflow-hidden">
            <div className="container mx-auto px-6 md:px-20 lg:px-32">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-block px-4 py-2 bg-blue-50 rounded-full text-blue-600 font-bold text-sm mb-6">
                            Meet BabyWise AI
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                            Your Personal Baby Gear Guide <br />
                            <span className="text-gray-500 text-2xl md:text-3xl font-normal">(Minus the Marketing BS)</span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Smart recommendations. Real parent experiences. Zero regrets.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-600">
                                    <Sparkles size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2">Personalized Just for You</h3>
                                    <p className="text-gray-600">
                                        Tell us about your budget, space, and lifestyle. Get recommendations that actually fit YOUR life.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0 text-red-600">
                                    <ThumbsDown size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2">Skip the Overhyped Stuff</h3>
                                    <p className="text-gray-600">
                                        We'll tell you what NOT to buy. Save money on products that look great but disappoint.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 text-purple-600">
                                    <Users size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2">Real Parent Insights</h3>
                                    <p className="text-gray-600">
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
                        <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden">
                            {/* Screen Content */}
                            <div className="w-full h-full bg-white relative overflow-hidden">
                                {/* Header */}
                                <div className="bg-[var(--color-primary)] p-6 pt-12 text-white">
                                    <h4 className="font-bold text-lg">My Recommendations</h4>
                                    <p className="text-sm opacity-90">Based on your small apartment</p>
                                </div>

                                {/* List */}
                                <div className="p-4 space-y-4">
                                    <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex gap-3 items-center">
                                        <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                                        <div className="flex-1">
                                            <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
                                            <div className="h-3 w-1/2 bg-gray-100 rounded"></div>
                                        </div>
                                        <div className="text-green-500 font-bold text-sm">98% Match</div>
                                    </div>
                                    <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex gap-3 items-center">
                                        <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                                        <div className="flex-1">
                                            <div className="h-4 w-2/3 bg-gray-200 rounded mb-2"></div>
                                            <div className="h-3 w-1/2 bg-gray-100 rounded"></div>
                                        </div>
                                        <div className="text-green-500 font-bold text-sm">95% Match</div>
                                    </div>
                                    {/* "Skip" Item */}
                                    <div className="bg-red-50 p-3 rounded-xl border border-red-100 flex gap-3 items-center opacity-70">
                                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-500">X</div>
                                        <div className="flex-1">
                                            <div className="h-4 w-3/4 bg-red-200 rounded mb-2"></div>
                                            <div className="text-xs text-red-500 font-bold">Skip: Overrated</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Button */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                                    <div className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-full shadow-lg font-bold text-sm">
                                        Start Shopping
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
