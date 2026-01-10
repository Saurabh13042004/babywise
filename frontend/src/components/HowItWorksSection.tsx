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
        <section id="how-it-works" className="py-32 bg-white relative overflow-hidden scroll-mt-24">
            <div className="container mx-auto px-6 md:px-20 lg:px-32 relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Three Steps to <span className="text-[var(--color-primary)]">Stress-Free</span> Shopping</h2>
                    <p className="text-xl text-gray-600">It's as easy as 1-2-3.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop) - Curved SVG */}
                    <div className="hidden md:block absolute top-16 left-[15%] right-[15%] h-20 -z-10 opacity-30">
                        <svg width="100%" height="100%" viewBox="0 0 800 100" preserveAspectRatio="none">
                            <path d="M0,50 Q200,0 400,50 T800,50" fill="none" stroke="#CBD5E1" strokeWidth="3" strokeDasharray="10 10" />
                        </svg>
                    </div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className={`w-28 h-28 ${step.color} rounded-[2rem] flex items-center justify-center shadow-lg mb-8 relative group-hover:scale-105 transition-transform duration-300`}>
                                {step.icon}
                                <div className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full border-4 border-[var(--color-background)] flex items-center justify-center font-bold text-lg shadow-sm animate-pulse-soft text-gray-700">
                                    {index + 1}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">{step.title}</h3>
                            <p className="text-gray-600 max-w-xs leading-relaxed">
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
