import React, { useState } from 'react';
import { ArrowRight, Sparkles, Star } from 'lucide-react';

const CTASection = () => {
    const [email, setEmail] = useState('');

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Thanks for joining! We'll send updates to ${email}`);
        setEmail('');
    };

    return (
        <section className="final-cta-section" id="signup" style={{
            background: 'linear-gradient(135deg, #1A365D 0%, #2B6CB0 100%)',
            padding: '120px 2rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            color: 'white'
        }}>
            {/* Background Decorative Elements */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)',
                pointerEvents: 'none'
            }}></div>

            <div className="final-cta-content" style={{
                maxWidth: '800px',
                margin: '0 auto',
                position: 'relative',
                zIndex: 2
            }}>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '0.5rem 1rem',
                    borderRadius: '50px',
                    marginBottom: '2rem',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                    <Sparkles size={16} className="text-yellow-300" color="#F6E05E" />
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.05em' }}>LIMITED EARLY ACCESS</span>
                </div>

                <h2 style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: '4rem',
                    lineHeight: 1.1,
                    marginBottom: '1.5rem',
                    color: 'white'
                }}>Stop Wasting Time & Money</h2>

                <p style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '1.25rem',
                    marginBottom: '3rem',
                    lineHeight: 1.6,
                    maxWidth: '600px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    Join the waitlist for BabyWise AI. Be among the first to get smart,
                    honest recommendations tailored to your unique life.
                </p>

                <form className="email-signup" onSubmit={handleSignup} style={{
                    display: 'flex',
                    gap: '1rem',
                    maxWidth: '500px',
                    margin: '0 auto 2.5rem',
                    position: 'relative'
                }}>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                            flex: 1,
                            padding: '1.25rem 1.5rem',
                            border: 'none',
                            borderRadius: '50px',
                            fontSize: '1.1rem',
                            fontFamily: "'Karla', sans-serif",
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                    <button type="submit" style={{
                        background: 'var(--coral)',
                        color: 'white',
                        padding: '1.25rem 2.5rem',
                        border: 'none',
                        borderRadius: '50px',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        fontFamily: "'Karla', sans-serif",
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                        whiteSpace: 'nowrap'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
                        }}
                    >
                        Join Waitlist <ArrowRight size={20} />
                    </button>
                </form>

                <div className="social-proof" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '0.9rem'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ display: 'flex' }}>
                            {[1, 2, 3, 4, 5].map((_, i) => (
                                <Star key={i} size={16} fill="#F6E05E" color="#F6E05E" />
                            ))}
                        </div>
                        <span>Trusted by 10,000+ parents</span>
                    </div>
                    <div style={{ width: '1px', height: '20px', background: 'rgba(255, 255, 255, 0.2)' }}></div>
                    <div>🔒 Secure & Spam-free</div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
