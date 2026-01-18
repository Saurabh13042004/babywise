import React from 'react';
import { ClipboardList, Brain, Sparkles } from 'lucide-react';

const HowItWorksSection = () => {
    return (
        <section className="how-it-works" style={{
            background: 'white',
            padding: '100px 2rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at 50% 50%, rgba(74, 144, 226, 0.05) 0%, transparent 50%)',
                pointerEvents: 'none'
            }}></div>

            <div className="how-content" style={{
                maxWidth: '1200px',
                margin: '0 auto',
                textAlign: 'center',
                position: 'relative',
                zIndex: 2
            }}>
                <div className="section-label" style={{
                    fontSize: '0.875rem',
                    color: 'var(--coral)',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    marginBottom: '1rem'
                }}>HOW IT WORKS</div>

                <h2 style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: '3.5rem',
                    lineHeight: 1.2,
                    marginBottom: '1.5rem',
                    color: 'var(--soft-black)'
                }}>Get Your Perfect Registry in 3 Steps</h2>

                <p style={{
                    fontSize: '1.15rem',
                    color: 'var(--charcoal)',
                    marginBottom: '5rem',
                    maxWidth: '600px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    We do the heavy lifting so you can focus on the fun parts of preparing for baby.
                </p>

                <div className="steps-container" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '3rem',
                    position: 'relative'
                }}>
                    {/* Connecting Line (Desktop only) */}
                    <div className="connector-line" style={{
                        position: 'absolute',
                        top: '100px',
                        left: '15%',
                        right: '15%',
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent, var(--primary-light), transparent)',
                        zIndex: 0,
                        display: 'none' // Hidden by default, shown via media query
                    }}></div>
                    <style>{`
            @media (min-width: 968px) {
              .connector-line { display: block !important; }
            }
          `}</style>

                    {[
                        {
                            icon: ClipboardList,
                            title: "Tell Us Your Needs",
                            desc: "Answer a few quick questions about your lifestyle, budget, and space constraints.",
                            color: "var(--primary)"
                        },
                        {
                            icon: Brain,
                            title: "AI Analyzes Everything",
                            desc: "We cross-reference your profile with thousands of safety ratings and parent reviews.",
                            color: "var(--coral)"
                        },
                        {
                            icon: Sparkles,
                            title: "Get Your Custom Plan",
                            desc: "Receive a tailored list of must-haves, nice-to-haves, and products to skip.",
                            color: "var(--mint)"
                        }
                    ].map((step, index) => (
                        <div key={index} className="step-card-modern" style={{
                            position: 'relative',
                            background: 'white',
                            padding: '2rem',
                            borderRadius: '20px',
                            border: '1px solid rgba(0,0,0,0.05)',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            transition: 'all 0.3s ease',
                            zIndex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(74, 144, 226, 0.15)';
                                e.currentTarget.style.borderColor = 'var(--primary-light)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)';
                            }}
                        >
                            <div style={{
                                width: '80px',
                                height: '80px',
                                background: step.color === 'var(--mint)' ? '#E6FFFA' : step.color === 'var(--coral)' ? '#FFF5F5' : '#EBF8FF',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem',
                                position: 'relative'
                            }}>
                                <step.icon size={40} color={step.color === 'var(--mint)' ? '#2C7A7B' : step.color} strokeWidth={1.5} />
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-10px',
                                    background: 'var(--soft-black)',
                                    color: 'white',
                                    width: '30px',
                                    height: '30px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 700,
                                    fontSize: '0.9rem',
                                    border: '4px solid white'
                                }}>{index + 1}</div>
                            </div>

                            <h3 style={{
                                fontFamily: "'DM Serif Display', serif",
                                fontSize: '1.5rem',
                                marginBottom: '1rem',
                                color: 'var(--soft-black)'
                            }}>{step.title}</h3>

                            <p style={{
                                color: 'var(--charcoal)',
                                lineHeight: 1.6,
                                fontSize: '1rem',
                                opacity: 0.9
                            }}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
