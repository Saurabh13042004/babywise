import React from 'react';

const DifferentiatorsSection = () => {
    return (
        <section className="differentiators-section" style={{
            background: 'var(--charcoal)',
            color: 'white',
            padding: '100px 2rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{
                content: "''",
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234A90E2' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                opacity: 0.3
            }}></div>

            <div className="differentiators-content" style={{
                maxWidth: '1200px',
                margin: '0 auto',
                position: 'relative',
                zIndex: 2
            }}>
                <div className="section-label" style={{
                    fontSize: '0.875rem',
                    color: 'var(--primary-light)',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    marginBottom: '1rem',
                    textAlign: 'center'
                }}>WHY BABYWISE IS DIFFERENT</div>
                <h2 style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: '3.5rem',
                    lineHeight: 1.2,
                    marginBottom: '2rem',
                    color: 'white',
                    textAlign: 'center'
                }}>Finally, Honest Advice You Can Trust</h2>

                <div className="diff-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '3rem',
                    marginTop: '5rem'
                }}>
                    {[
                        { icon: '🛡️', title: 'Safety-First Recommendations', text: 'Every product is vetted for safety ratings, recalls, and compliance. We prioritize your baby\'s wellbeing above all else.' },
                        { icon: '🤖', title: 'AI + Real Parent Data', text: 'We analyze thousands of reviews and real parent experiences to find what actually works.' },
                        { icon: '🏠', title: 'Context Matters', text: 'Apartment vs. house. Compact car vs. minivan. Budget-conscious vs. premium. We factor it all in.' },
                        { icon: '⚡', title: 'Save 40+ Hours', text: 'Get personalized recommendations in 5 minutes instead of spending weeks researching.' },
                        { icon: '🎓', title: 'Learn as You Go', text: 'Not just what to buy—understand WHY certain products matter and others don\'t.' },
                        { icon: '🔄', title: 'Evolves With You', text: 'Your needs change as baby grows. Update your profile anytime for fresh recommendations.' }
                    ].map((item, index) => (
                        <div key={index} className="diff-item" style={{
                            textAlign: 'center',
                            padding: '2rem',
                            background: 'rgba(255, 255, 255, 0.03)',
                            borderRadius: '20px',
                            border: '2px solid rgba(74, 144, 226, 0.2)',
                            transition: 'all 0.3s ease'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(74, 144, 226, 0.1)';
                                e.currentTarget.style.borderColor = 'var(--primary)';
                                e.currentTarget.style.transform = 'translateY(-5px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                                e.currentTarget.style.borderColor = 'rgba(74, 144, 226, 0.2)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <span className="diff-icon" style={{
                                fontSize: '3.5rem',
                                marginBottom: '1.5rem',
                                display: 'block'
                            }}>{item.icon}</span>
                            <h3 style={{
                                fontFamily: "'DM Serif Display', serif",
                                fontSize: '1.5rem',
                                marginBottom: '1rem',
                                color: 'white'
                            }}>{item.title}</h3>
                            <p style={{
                                color: 'rgba(255, 255, 255, 0.8)',
                                lineHeight: 1.7
                            }}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DifferentiatorsSection;
