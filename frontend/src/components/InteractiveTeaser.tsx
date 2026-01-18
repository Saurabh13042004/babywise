import React from 'react';

interface InteractiveTeaserProps {
    onOpenQuiz?: () => void;
}

const InteractiveTeaser: React.FC<InteractiveTeaserProps> = ({ onOpenQuiz }) => {
    return (
        <section className="interactive-teaser" style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
            padding: '80px 2rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{
                content: "''",
                position: 'absolute',
                top: '-50%',
                right: '-20%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
                borderRadius: '50%'
            }}></div>

            <div className="teaser-content" style={{
                maxWidth: '800px',
                margin: '0 auto',
                position: 'relative',
                zIndex: 2
            }}>
                <div className="teaser-box" style={{
                    background: 'white',
                    padding: '3rem',
                    borderRadius: '25px',
                    textAlign: 'center',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
                    transform: 'translateY(0)',
                    transition: 'transform 0.3s ease'
                }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                    <div className="teaser-icon" style={{
                        fontSize: '4rem',
                        marginBottom: '1.5rem',
                        animation: 'bounce 2s infinite'
                    }}>🎁</div>
                    <h3 style={{
                        fontFamily: "'DM Serif Display', serif",
                        fontSize: '2rem',
                        marginBottom: '1rem',
                        color: 'var(--soft-black)'
                    }}>Get Your Free Personalized Baby Gear Preview</h3>
                    <p style={{
                        color: 'var(--charcoal)',
                        fontSize: '1.15rem',
                        marginBottom: '2rem',
                        lineHeight: 1.7
                    }}>Answer 3 quick questions and see what BabyWise AI would recommend for your unique situation.</p>
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
                        boxShadow: '0 4px 20px rgba(255, 107, 107, 0.3)'
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
                    <p className="teaser-note" style={{
                        marginTop: '1rem',
                        fontSize: '0.875rem',
                        color: 'var(--charcoal)',
                        opacity: 0.7
                    }}>No email required • See results instantly</p>
                </div>
            </div>
        </section>
    );
};

export default InteractiveTeaser;
