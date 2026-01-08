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
        <section className="py-20 bg-gradient-to-b from-white to-[#F0F8FF]">
            <div className="container mx-auto px-6 md:px-20 lg:px-32">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need in <span className="text-[var(--color-primary)]">One App</span></h2>
                    <p className="text-lg text-gray-600">Smart tools to make parenting easier.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-600 text-sm">
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
