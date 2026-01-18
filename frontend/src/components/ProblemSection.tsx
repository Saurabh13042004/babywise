import React from 'react';
import { SearchX, CircleDollarSign, Clock, MessageSquareWarning, Frown, AlertCircle } from 'lucide-react';

const ProblemSection = () => {
    return (
        <section className="problem-section" style={{
            background: 'linear-gradient(180deg, #FFF5F5 0%, #FFF 100%)',
            padding: '100px 2rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="problem-content" style={{
                maxWidth: '1200px',
                margin: '0 auto',
                position: 'relative',
                zIndex: 2
            }}>
                <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div className="section-label" style={{
                        fontSize: '0.875rem',
                        color: 'var(--coral)',
                        fontWeight: 700,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        marginBottom: '1rem'
                    }}>THE STRUGGLE</div>
                    <h2 style={{
                        fontFamily: "'DM Serif Display', serif",
                        fontSize: '3.5rem',
                        lineHeight: 1.2,
                        marginBottom: '1.5rem',
                        color: 'var(--soft-black)'
                    }}>Why is Baby Shopping So Stressful?</h2>
                    <p className="problem-subtitle" style={{
                        fontSize: '1.25rem',
                        color: 'var(--charcoal)',
                        maxWidth: '700px',
                        margin: '0 auto',
                        opacity: 0.8
                    }}>
                        New parents spend 40+ hours researching products, only to end up more confused and
                        overwhelmed than when they started.
                    </p>
                </div>

                <div className="problem-cards" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {[
                        {
                            icon: SearchX,
                            title: 'Decision Paralysis',
                            text: 'Thousands of products. Conflicting reviews. Everyone has a different opinion. Where do you even start?'
                        },
                        {
                            icon: CircleDollarSign,
                            title: 'Overhyped Products',
                            text: 'Marketing makes everything seem essential. But do you really need a $300 wipe warmer?'
                        },
                        {
                            icon: Clock,
                            title: 'No Time to Research',
                            text: 'Between doctor appointments and nursery prep, who has time to read 1,000 reviews?'
                        },
                        {
                            icon: AlertCircle,
                            title: 'One-Size-Fits-All Advice',
                            text: 'Recommendations ignore your apartment size, budget, and lifestyle. What works for them won\'t work for you.'
                        },
                        {
                            icon: Frown,
                            title: 'Budget Anxiety',
                            text: 'It\'s easy to blow $5,000 before baby arrives. Where should you splurge? Where can you save?'
                        },
                        {
                            icon: MessageSquareWarning,
                            title: 'Regretful Purchases',
                            text: '75% of parents regret at least one major purchase. Learn from their mistakes, not yours.'
                        }
                    ].map((card, index) => (
                        <div key={index} className="problem-card" style={{
                            background: 'white',
                            padding: '2.5rem',
                            borderRadius: '20px',
                            border: '1px solid rgba(255, 107, 107, 0.1)',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 15px 30px rgba(255, 107, 107, 0.08)';
                                e.currentTarget.style.borderColor = 'rgba(255, 107, 107, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.borderColor = 'rgba(255, 107, 107, 0.1)';
                            }}
                        >
                            <div style={{
                                background: '#FFF5F5',
                                padding: '1rem',
                                borderRadius: '12px',
                                marginBottom: '1.5rem',
                                color: 'var(--coral)'
                            }}>
                                <card.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 style={{
                                fontFamily: "'DM Serif Display', serif",
                                fontSize: '1.5rem',
                                marginBottom: '1rem',
                                color: 'var(--soft-black)'
                            }}>{card.title}</h3>
                            <p style={{
                                color: 'var(--charcoal)',
                                lineHeight: 1.7,
                                fontSize: '1rem',
                                opacity: 0.9
                            }}>{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
