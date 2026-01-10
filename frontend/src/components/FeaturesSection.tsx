import React from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign, Star, Home, MessageSquare, Calendar } from 'lucide-react';

const FeaturesSection: React.FC = () => {
    const features = [
        {
            icon: <Clock size={24} className="text-blue-500" />,
            title: "Must-Have vs. Can Wait",
            description: "Know exactly when to buy so you don't clutter your home too early."
        },
        {
            icon: <DollarSign size={24} className="text-green-500" />,
            title: "Budget Optimizer",
            description: "Track spending and know where it's worth splurging (and where to save)."
        },
        {
            icon: <Star size={24} className="text-yellow-500" />,
            title: "Hype vs. Reality",
            description: "See which viral products are actually worth the money."
        },
        {
            icon: <Home size={24} className="text-purple-500" />,
            title: "Space-Savvy Picks",
            description: "Recommendations tailored to your living space, whether big or small."
        },
        {
            icon: <MessageSquare size={24} className="text-pink-500" />,
            title: "Real Reviews Aggregated",
            description: "Insights from Reddit, Amazon, and Target all in one place."
        },
        {
            icon: <Calendar size={24} className="text-orange-500" />,
            title: "Shopping Timeline",
            description: "A week-by-week guide so you never feel rushed or unprepared."
        }
    ];

    return (
        <section className="py-32 bg-gradient-to-b from-white to-[#F0F8FF] relative overflow-hidden">
            {/* Background Mesh */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 md:px-20 lg:px-32 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Everything You Need in <span className="text-[var(--color-primary)]">One App</span></h2>
                    <p className="text-xl text-gray-600">Smart tools to make parenting easier.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-sm border border-white hover:shadow-xl transition-all hover:-translate-y-2 group"
                        >
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
