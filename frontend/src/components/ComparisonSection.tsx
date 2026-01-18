import React from 'react';
import { Check, X, Minus, Trophy } from 'lucide-react';

const ComparisonSection = () => {
    const features = [
        { name: 'Personalized to your situation', babywise: true, generic: false, blogs: false },
        { name: 'Shows what NOT to buy', babywise: true, generic: false, blogs: 'partial' },
        { name: 'No affiliate bias', babywise: true, generic: true, blogs: false },
        { name: 'Budget optimization', babywise: true, generic: false, blogs: false },
        { name: 'Shopping timeline', babywise: true, generic: false, blogs: false },
        { name: 'AI-powered analysis', babywise: true, generic: false, blogs: false }
    ];

    return (
        <section className="comparison-section" style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
            padding: '100px 2rem',
            position: 'relative'
        }}>
            <div className="comparison-content" style={{
                maxWidth: '1100px',
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
                }}>THE DIFFERENCE</div>
                <h2 style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: '3.5rem',
                    lineHeight: 1.2,
                    marginBottom: '4rem',
                    color: 'var(--soft-black)'
                }}>BabyWise vs. Everything Else</h2>

                <div className="comparison-table-container" style={{
                    position: 'relative',
                    overflowX: 'auto',
                    paddingTop: '2rem', // Space for "Best Choice" badge
                    paddingBottom: '2rem' // Space for shadow
                }}>
                    <div className="comparison-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'minmax(200px, 1.5fr) minmax(180px, 1fr) minmax(150px, 1fr) minmax(150px, 1fr)',
                        gap: '0',
                        minWidth: '800px' // Ensure it doesn't squish too much on mobile
                    }}>
                        {/* Header Row */}
                        <div className="grid-header" style={{ padding: '1.5rem', textAlign: 'left' }}></div>

                        {/* BabyWise Header - Highlighted */}
                        <div className="grid-header highlight" style={{
                            background: 'var(--primary)',
                            color: 'white',
                            padding: '2rem 1rem',
                            borderRadius: '20px 20px 0 0',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 -10px 30px rgba(74, 144, 226, 0.15)'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '-15px',
                                background: 'var(--coral)',
                                color: 'white',
                                padding: '0.25rem 1rem',
                                borderRadius: '50px',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                letterSpacing: '0.05em',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.25rem'
                            }}>
                                <Trophy size={12} fill="white" /> BEST CHOICE
                            </div>
                            <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.5rem' }}>BabyWise AI</div>
                        </div>

                        <div className="grid-header" style={{ padding: '2rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'var(--charcoal)' }}>Generic Registries</div>
                        <div className="grid-header" style={{ padding: '2rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'var(--charcoal)' }}>Mommy Blogs</div>

                        {/* Rows */}
                        {features.map((feature, index) => (
                            <React.Fragment key={index}>
                                {/* Feature Name */}
                                <div className="grid-cell feature" style={{
                                    padding: '1.5rem',
                                    textAlign: 'left',
                                    borderBottom: '1px solid #eee',
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontWeight: 600,
                                    color: 'var(--charcoal)'
                                }}>
                                    {feature.name}
                                </div>

                                {/* BabyWise Cell - Highlighted */}
                                <div className="grid-cell highlight" style={{
                                    background: 'white',
                                    padding: '1.5rem',
                                    borderLeft: '2px solid var(--primary)',
                                    borderRight: '2px solid var(--primary)',
                                    borderBottom: index === features.length - 1 ? '2px solid var(--primary)' : '1px solid #eee',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 0 30px rgba(74, 144, 226, 0.05)',
                                    borderRadius: index === features.length - 1 ? '0 0 20px 20px' : '0'
                                }}>
                                    <div style={{
                                        background: '#EBF8FF',
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Check size={20} color="var(--primary)" strokeWidth={3} />
                                    </div>
                                </div>

                                {/* Generic Cell */}
                                <div className="grid-cell" style={{
                                    padding: '1.5rem',
                                    borderBottom: '1px solid #eee',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {feature.generic ? (
                                        <Check size={20} color="#CBD5E0" />
                                    ) : (
                                        <X size={20} color="#CBD5E0" />
                                    )}
                                </div>

                                {/* Blogs Cell */}
                                <div className="grid-cell" style={{
                                    padding: '1.5rem',
                                    borderBottom: '1px solid #eee',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {feature.blogs === 'partial' ? (
                                        <span style={{ fontSize: '0.875rem', color: '#718096', fontWeight: 500 }}>Sometimes</span>
                                    ) : feature.blogs ? (
                                        <Check size={20} color="#CBD5E0" />
                                    ) : (
                                        <X size={20} color="#CBD5E0" />
                                    )}
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComparisonSection;
