import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Sparkles, ShoppingBag } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
    const steps = [
        {
            icon: <ClipboardList size={32} className="text-white" />,
            title: "Answer a Few Questions",
            description: "Quick survey about your lifestyle, budget, and needs.",
            color: "bg-[#87CEEB]"
        },
        {
            icon: <Sparkles size={32} className="text-white" />,
            title: "Get Your Custom Guide",
            description: "AI analyzes your situation and curates the perfect list.",
            color: "bg-[#FFB6C1]"
        },
        {
            icon: <ShoppingBag size={32} className="text-white" />,
            title: "Shop with Confidence",
            description: "Know exactly what to buy, when to buy it, and what to skip.",
            color: "bg-[#98D8C8]"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-20 lg:px-32">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Three Steps to <span className="text-[var(--color-primary)]">Stress-Free</span> Shopping</h2>
                    <p className="text-lg text-gray-600">It's as easy as 1-2-3.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gray-100 -z-10 border-t-2 border-dashed border-gray-300"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col items-center text-center"
                        >
                            <div className={`w-24 h-24 ${step.color} rounded-full flex items-center justify-center shadow-lg mb-6 relative`}>
                                {step.icon}
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border-2 border-[var(--color-text)] flex items-center justify-center font-bold text-sm">
                                    {index + 1}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-gray-600 max-w-xs">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
