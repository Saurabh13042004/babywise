import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
    const testimonials = [
        {
            quote: "I wish I had this for my first baby. Would've saved $1,000 on stuff we never used.",
            author: "Sarah M.",
            role: "Expecting Mom",
            image: "https://i.pravatar.cc/150?img=5"
        },
        {
            quote: "Finally, someone tells me what NOT to buy. That's the advice I actually needed.",
            author: "David K.",
            role: "New Dad",
            image: "https://i.pravatar.cc/150?img=11"
        },
        {
            quote: "The budget tracker alone is worth it. No more surprise expenses.",
            author: "Emily R.",
            role: "Mom of 2",
            image: "https://i.pravatar.cc/150?img=9"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-20 lg:px-32">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Thousands of <span className="text-[var(--color-secondary)]">Smart Parents</span></h2>
                    <p className="text-lg text-gray-600">Don't just take our word for it.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-[var(--color-background)] p-8 rounded-2xl relative"
                        >
                            <Quote className="absolute top-6 right-6 text-[var(--color-primary)] opacity-20" size={40} />

                            <p className="text-lg mb-6 italic text-gray-700 relative z-10">"{testimonial.quote}"</p>

                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.author}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                                />
                                <div>
                                    <h4 className="font-bold text-sm">{testimonial.author}</h4>
                                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
