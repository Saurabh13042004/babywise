import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            text: "BabyWise saved us so much money! We were about to buy all this stuff we didn't need. The 'Skip It' section alone was worth it.",
            author: "Sarah M.",
            role: "First-time mom, Seattle",
            initials: "SM",
            color: "var(--primary)"
        },
        {
            text: "Finally, honest advice that's actually personalized! The recommendations for our small apartment were spot-on. No more generic baby registry lists.",
            author: "James K.",
            role: "Expecting dad, Brooklyn",
            initials: "JK",
            color: "var(--coral)"
        },
        {
            text: "The budget optimizer is a game-changer. We knew exactly where to invest and where to save. Stayed on budget and got everything we actually needed.",
            author: "Ashley L.",
            role: "New mom, Austin",
            initials: "AL",
            color: "var(--mint)"
        },
        {
            text: "I felt so overwhelmed by all the choices. BabyWise cut through the noise and gave me a simple, actionable plan. Best decision ever.",
            author: "Emily R.",
            role: "Mom of two, Chicago",
            initials: "ER",
            color: "#805AD5"
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Auto-play
    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="testimonials-section" style={{
            padding: '100px 2rem',
            background: 'var(--cream)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="testimonials-content" style={{
                maxWidth: '1000px',
                margin: '0 auto',
                textAlign: 'center'
            }}>
                <div className="section-label" style={{
                    fontSize: '0.875rem',
                    color: 'var(--coral)',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    marginBottom: '1rem'
                }}>WHAT PARENTS ARE SAYING</div>
                <h2 style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: '3.5rem',
                    lineHeight: 1.2,
                    marginBottom: '4rem',
                    color: 'var(--soft-black)'
                }}>Join 10,000+ Parents Who Get It</h2>

                <div className="carousel-container" style={{
                    position: 'relative',
                    background: 'white',
                    borderRadius: '30px',
                    padding: '4rem 2rem',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                    minHeight: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {/* Navigation Buttons */}
                    <button onClick={prevSlide} style={{
                        position: 'absolute',
                        left: '20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'white',
                        border: '1px solid #eee',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: 10,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                        color: 'var(--charcoal)'
                    }}>
                        <ChevronLeft size={24} />
                    </button>

                    <button onClick={nextSlide} style={{
                        position: 'absolute',
                        right: '20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'white',
                        border: '1px solid #eee',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: 10,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                        color: 'var(--charcoal)'
                    }}>
                        <ChevronRight size={24} />
                    </button>

                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            style={{ maxWidth: '700px', width: '100%' }}
                        >
                            <div style={{
                                marginBottom: '2rem',
                                color: testimonials[currentIndex].color,
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <Quote size={48} fill="currentColor" strokeWidth={0} style={{ opacity: 0.2 }} />
                            </div>

                            <p style={{
                                fontFamily: "'DM Serif Display', serif",
                                fontSize: '1.75rem',
                                lineHeight: 1.4,
                                color: 'var(--soft-black)',
                                marginBottom: '2.5rem',
                                fontStyle: 'italic'
                            }}>
                                "{testimonials[currentIndex].text}"
                            </p>

                            <div className="author-block" style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '1rem'
                            }}>
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    background: testimonials[currentIndex].color,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontWeight: 700,
                                    fontSize: '1.25rem'
                                }}>
                                    {testimonials[currentIndex].initials}
                                </div>
                                <div style={{ textAlign: 'left' }}>
                                    <div style={{ fontWeight: 700, color: 'var(--soft-black)', fontSize: '1.1rem' }}>
                                        {testimonials[currentIndex].author}
                                    </div>
                                    <div style={{ color: 'var(--charcoal)', opacity: 0.7, fontSize: '0.9rem' }}>
                                        {testimonials[currentIndex].role}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Dots Indicator */}
                    <div style={{
                        position: 'absolute',
                        bottom: '2rem',
                        display: 'flex',
                        gap: '0.5rem'
                    }}>
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                style={{
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    background: index === currentIndex ? 'var(--primary)' : '#E2E8F0',
                                    border: 'none',
                                    cursor: 'pointer',
                                    padding: 0,
                                    transition: 'all 0.3s ease'
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
