import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        { q: 'When will BabyWise AI launch?', a: 'We\'re launching in Spring 2026! Join the waitlist to get early access and exclusive benefits like lifetime premium membership.' },
        { q: 'How much will it cost?', a: 'We\'re committed to keeping BabyWise AI affordable for all families. Pricing will be announced closer to launch, but early members get special lifetime discounts.' },
        { q: 'Do you make money from product recommendations?', a: 'No! Unlike other sites, we don\'t use affiliate links or get paid by brands. Our recommendations are 100% unbiased and based solely on your needs.' },
        { q: 'What makes BabyWise AI different from a registry?', a: 'Generic registries give everyone the same list. BabyWise AI personalizes recommendations based on YOUR budget, space, lifestyle, and priorities. Plus, we tell you what NOT to buy.' },
        { q: 'Can I use this if I already have kids?', a: 'Absolutely! BabyWise AI adapts to experienced parents too. You\'ll get recommendations based on what you already own and what might be helpful for your next baby.' },
        { q: 'Will this work in my country?', a: 'We\'re launching in the US first, with plans to expand to Canada, UK, and Australia in 2026. Join the waitlist to be notified when we\'re available in your region.' }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section" style={{
            background: 'linear-gradient(135deg, var(--peach) 0%, var(--cream) 100%)',
            padding: '100px 2rem'
        }}>
            <div className="faq-content" style={{
                maxWidth: '800px',
                margin: '0 auto'
            }}>
                <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div className="section-label" style={{
                        fontSize: '0.875rem',
                        color: 'var(--coral)',
                        fontWeight: 700,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        marginBottom: '1rem'
                    }}>FREQUENTLY ASKED QUESTIONS</div>
                    <h2 style={{
                        fontFamily: "'DM Serif Display', serif",
                        fontSize: '3.5rem',
                        lineHeight: 1.2,
                        marginBottom: '1.5rem',
                        color: 'var(--soft-black)'
                    }}>Got Questions? We've Got Answers</h2>
                </div>

                <div className="faq-accordion" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }}>
                    {faqs.map((item, index) => (
                        <div key={index} className="faq-item" style={{
                            background: 'white',
                            borderRadius: '15px',
                            border: '1px solid rgba(0,0,0,0.05)',
                            overflow: 'hidden',
                            transition: 'all 0.3s ease',
                            boxShadow: openIndex === index ? '0 10px 30px rgba(0,0,0,0.05)' : 'none'
                        }}>
                            <button
                                onClick={() => toggleFAQ(index)}
                                style={{
                                    width: '100%',
                                    padding: '1.5rem 2rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    textAlign: 'left'
                                }}
                            >
                                <span style={{
                                    fontFamily: "'DM Serif Display', serif",
                                    fontSize: '1.25rem',
                                    color: openIndex === index ? 'var(--primary)' : 'var(--soft-black)',
                                    fontWeight: 500,
                                    transition: 'color 0.3s ease'
                                }}>{item.q}</span>
                                <div style={{
                                    flexShrink: 0,
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    background: openIndex === index ? 'var(--primary)' : '#F7FAFC',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: openIndex === index ? 'white' : 'var(--charcoal)',
                                    transition: 'all 0.3s ease',
                                    marginLeft: '1rem'
                                }}>
                                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                                </div>
                            </button>

                            <div style={{
                                height: openIndex === index ? 'auto' : 0,
                                opacity: openIndex === index ? 1 : 0,
                                overflow: 'hidden',
                                transition: 'all 0.3s ease'
                            }}>
                                <div style={{
                                    padding: '0 2rem 2rem 2rem',
                                    color: 'var(--charcoal)',
                                    lineHeight: 1.7,
                                    fontSize: '1rem',
                                    opacity: 0.9
                                }}>
                                    {item.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
