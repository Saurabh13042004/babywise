import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, MessageCircle, AlertTriangle, Wallet } from 'lucide-react';

const ProblemSection: React.FC = () => {
    const problems = [
        {
            icon: <HelpCircle size={32} className="text-blue-500" />,
            title: "500+ products. Which ones matter?",
            description: "Strollers, monitors, bottles... the list never ends. It's easy to feel lost."
        },
        {
            icon: <MessageCircle size={32} className="text-purple-500" />,
            title: "Everyone says something different",
            description: "Your mom says one thing, TikTok says another. Who do you trust?"
        },
        {
            icon: <AlertTriangle size={32} className="text-orange-500" />,
            title: "What's hype vs. what's helpful?",
            description: "Marketing makes everything look essential. Most of it isn't."
        },
        {
            icon: <Wallet size={32} className="text-green-500" />,
            title: "Limited budget, unlimited options",
            description: "You want the best for your baby without breaking the bank."
        }
    ];

    return (
        <section id="why-babywise" className="py-24 bg-white relative overflow-hidden scroll-mt-24">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#87CEEB 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
            </div>

            <div className="container mx-auto px-6 md:px-20 lg:px-32 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">We Know It's <span className="text-[var(--color-secondary)]">Overwhelming</span></h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Every parent faces the same struggle. You're not alone in the chaos of baby gear shopping.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-[2.5rem] border-2 border-dashed border-blue-200 hover:border-blue-300 hover:shadow-lg transition-all flex flex-col items-center text-center group"
                        >
                            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {problem.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-800">{problem.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {problem.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
