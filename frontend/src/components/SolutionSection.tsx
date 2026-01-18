import React from 'react';
import { CheckCircle2, ShieldCheck, PiggyBank, Sparkles, ArrowRight } from 'lucide-react';

interface SolutionSectionProps {
    onOpenQuiz?: () => void;
}

const SolutionSection: React.FC<SolutionSectionProps> = ({ onOpenQuiz }) => {
    return (
        <section className="solution-section" id="how-it-works" style={{
            padding: '120px 2rem',
            maxWidth: '1400px',
            margin: '0 auto',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #F0F7FF 100%)'
        }}>
            <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <div className="section-label" style={{
                    fontSize: '0.875rem',
                    color: 'var(--primary)',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    marginBottom: '1rem'
                }}>THE SOLUTION</div>
                <h2 style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: '3.5rem',
                    lineHeight: 1.2,
                    marginBottom: '2rem',
                    color: 'var(--soft-black)'
                }}>Your Personal Baby Product Expert</h2>
            </div>

            <div className="solution-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '6rem',
                alignItems: 'center'
            }}>
                {/* Visual Side */}
                <div className="solution-visual" style={{
                    background: 'linear-gradient(135deg, var(--primary-light) 0%, var(--primary) 100%)',
                    borderRadius: '30px',
                    padding: '3rem',
                    position: 'relative',
                    overflow: 'hidden',
                    minHeight: '500px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 20px 40px rgba(74, 144, 226, 0.2)'
                }}>
                    <div style={{
                        content: "''",
                        position: 'absolute',
                        top: '-50%',
                        left: '-50%',
                        width: '200%',
                        height: '200%',
                        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
                        animation: 'rotate 20s linear infinite'
                    }}></div>

                    <div className="mockup-placeholder" style={{
                        width: '100%',
                        maxWidth: '400px',
                        background: 'white',
                        borderRadius: '20px',
                        position: 'relative',
                        zIndex: 2,
                        padding: '2rem',
                        boxShadow: '0 30px 60px rgba(0, 0, 0, 0.15)'
                    }}>
                        <div className="mockup-header" style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '1.5rem',
                            borderBottom: '1px solid #eee',
                            paddingBottom: '1rem'
                        }}>
                            <div style={{ fontWeight: 700, color: 'var(--soft-black)' }}>Your Action Plan</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600 }}>95% Complete</div>
                        </div>

                        <div className="mockup-content" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem'
                        }}>
                            <div className="mockup-card" style={{
                                background: '#F0FFF4',
                                padding: '1rem',
                                borderRadius: '12px',
                                borderLeft: '4px solid #48BB78',
                                display: 'flex',
                                gap: '0.75rem'
                            }}>
                                <CheckCircle2 size={20} color="#48BB78" />
                                <div>
                                    <div style={{ fontWeight: 700, color: 'var(--soft-black)', fontSize: '0.9rem' }}>Must-Have: Car Seat</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--charcoal)', opacity: 0.8, marginTop: '0.25rem' }}>Chicco KeyFit 30 (Fits your car)</div>
                                </div>
                            </div>

                            <div className="mockup-card" style={{
                                background: '#EBF8FF',
                                padding: '1rem',
                                borderRadius: '12px',
                                borderLeft: '4px solid var(--primary)',
                                display: 'flex',
                                gap: '0.75rem'
                            }}>
                                <Clock size={20} color="var(--primary)" />
                                <div>
                                    <div style={{ fontWeight: 700, color: 'var(--soft-black)', fontSize: '0.9rem' }}>Get Soon: Baby Monitor</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--charcoal)', opacity: 0.8, marginTop: '0.25rem' }}>Simple audio monitor is sufficient</div>
                                </div>
                            </div>

                            <div className="mockup-card" style={{
                                background: '#FFF5F5',
                                padding: '1rem',
                                borderRadius: '12px',
                                borderLeft: '4px solid var(--coral)',
                                display: 'flex',
                                gap: '0.75rem'
                            }}>
                                <SearchX size={20} color="var(--coral)" />
                                <div>
                                    <div style={{ fontWeight: 700, color: 'var(--soft-black)', fontSize: '0.9rem' }}>Skip: Wipe Warmer</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--charcoal)', opacity: 0.8, marginTop: '0.25rem' }}>Save $45 (High regret item)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Side */}
                <div className="solution-features" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2.5rem'
                }}>
                    {[
                        {
                            icon: Sparkles,
                            title: 'Personalized to You',
                            text: 'Answer 12 quick questions about your budget, space, and lifestyle. Get recommendations that actually fit your situation.',
                            color: 'var(--primary)'
                        },
                        {
                            icon: ShieldCheck,
                            title: 'Calls Out the BS',
                            text: 'Our "Hype vs. Reality" feature explicitly tells you what NOT to buy. We\'re on your side, not the brands\'.',
                            color: 'var(--coral)'
                        },
                        {
                            icon: PiggyBank,
                            title: 'Budget Optimizer',
                            text: 'Know exactly where to splurge (car seats, mattresses) and where to save (toys, clothes). Stay on budget.',
                            color: 'var(--mint)'
                        },
                        {
                            icon: CheckCircle2,
                            title: 'Shopping Timeline',
                            text: 'Stop stressing about when to buy what. We\'ll tell you what you need now and what can wait until after baby arrives.',
                            color: '#805AD5'
                        }
                    ].map((feature, index) => (
                        <div key={index} className="feature-item" style={{
                            display: 'flex',
                            gap: '1.5rem',
                            alignItems: 'flex-start'
                        }}>
                            <div className="feature-icon" style={{
                                flexShrink: 0,
                                width: '50px',
                                height: '50px',
                                background: 'white',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                border: `1px solid ${feature.color}20`
                            }}>
                                <feature.icon size={24} color={feature.color === 'var(--mint)' ? '#2C7A7B' : feature.color} />
                            </div>
                            <div className="feature-content">
                                <h3 style={{
                                    fontFamily: "'DM Serif Display', serif",
                                    fontSize: '1.5rem',
                                    marginBottom: '0.5rem',
                                    color: 'var(--soft-black)'
                                }}>{feature.title}</h3>
                                <p style={{
                                    color: 'var(--charcoal)',
                                    lineHeight: 1.6,
                                    opacity: 0.9
                                }}>{feature.text}</p>
                            </div>
                        </div>
                    ))}

                    <button className="teaser-cta" onClick={onOpenQuiz} style={{
                        background: 'var(--coral)',
                        color: 'white',
                        padding: '1.25rem 3rem',
                        border: 'none',
                        borderRadius: '50px',
                        fontWeight: 700,
                        fontSize: '1.125rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        fontFamily: "'Karla', sans-serif",
                        letterSpacing: '0.02em',
                        boxShadow: '0 4px 20px rgba(255, 107, 107, 0.3)',
                        alignSelf: 'flex-start',
                        marginTop: '1rem'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'var(--coral-light)';
                            e.currentTarget.style.transform = 'translateY(-3px)';
                            e.currentTarget.style.boxShadow = '0 8px 30px rgba(255, 107, 107, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'var(--coral)';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 107, 107, 0.3)';
                        }}
                    >Try It Now - 30 Seconds</button>
                </div>
            </div>
        </section>
    );
};

// Need to import these icons as they are used in the mockup part but not defined in the main import
import { SearchX, Clock } from 'lucide-react';

export default SolutionSection;
