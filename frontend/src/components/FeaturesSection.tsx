import React from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign, Star, Home, MessageSquare, Calendar } from 'lucide-react';

const FeaturesSection: React.FC = () => {
    const featuresLeft = [
        {
            icon: <Clock size={24} className="text-blue-600" />,
            bg: "bg-blue-100",
            title: "Must-Have vs. Can Wait",
            description: "Know exactly when to buy so you don't clutter your home too early."
        },
        {
            icon: <DollarSign size={24} className="text-green-600" />,
            bg: "bg-green-100",
            title: "Budget Optimizer",
            description: "Track spending and know where it's worth splurging (and where to save)."
        },
        {
            icon: <Star size={24} className="text-yellow-600" />,
            bg: "bg-yellow-100",
            title: "Hype vs. Reality",
            description: "See which viral products are actually worth the money."
        }
    ];

    const featuresRight = [
        {
            icon: <Home size={24} className="text-purple-600" />,
            bg: "bg-purple-100",
            title: "Space-Savvy Picks",
            description: "Recommendations tailored to your living space, whether big or small."
        },
        {
            icon: <MessageSquare size={24} className="text-pink-600" />,
            bg: "bg-pink-100",
            title: "Real Reviews Aggregated",
            description: "Insights from Reddit, Amazon, and Target all in one place."
        },
        {
            icon: <Calendar size={24} className="text-orange-600" />,
            bg: "bg-orange-100",
            title: "Shopping Timeline",
            description: "A week-by-week guide so you never feel rushed or unprepared."
        }
    ];

    return (
        <section id="features" className="py-32 bg-gradient-to-b from-white to-[#F0F8FF] relative overflow-hidden scroll-mt-24">
            {/* Background Mesh */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Everything You Need in <span className="text-[var(--color-primary)]">One App</span></h2>
                    <p className="text-xl text-gray-600">Smart tools to make parenting easier.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12 items-center">
                    {/* Left Column */}
                    <div className="space-y-16">
                        {featuresLeft.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 group"
                            >
                                <div className={`w-16 h-16 ${feature.bg} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed font-medium">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Center Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative flex justify-center order-first lg:order-none mb-12 lg:mb-0"
                    >
                        <div className="relative z-10">
                            <img
                                src="https://kidioz.risingbamboo.com/wp-content/uploads/2025/04/banner4-1.avif"
                                alt="Happy Baby"
                                className="w-full max-w-[350px] mx-auto drop-shadow-2xl"
                            />
                        </div>
                        {/* Blob behind image */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#FFB6C1]/20 rounded-full blur-3xl -z-10"></div>
                    </motion.div>

                    {/* Right Column */}
                    <div className="space-y-16">
                        {featuresRight.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col md:flex-row-reverse items-center md:items-start text-center md:text-right gap-6 group"
                            >
                                <div className={`w-16 h-16 ${feature.bg} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed font-medium">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
