
import { Instagram, Facebook, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            background: '#1A202C',
            color: 'rgba(255, 255, 255, 0.7)',
            padding: '5rem 2rem 2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
            <div className="footer-content" style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '4rem',
                marginBottom: '4rem'
            }}>
                {/* Brand Column */}
                <div className="footer-brand" style={{ maxWidth: '300px' }}>
                    <div className="footer-logo" style={{
                        fontFamily: "'DM Serif Display', serif",
                        fontSize: '1.75rem',
                        color: 'white',
                        marginBottom: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        BabyWise AI
                    </div>
                    <p style={{
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                        marginBottom: '1.5rem',
                        opacity: 0.8
                    }}>
                        Helping new parents make confident decisions with personalized, data-driven product recommendations.
                    </p>
                    <div className="footer-social" style={{
                        display: 'flex',
                        gap: '1rem'
                    }}>
                        {[Instagram, Facebook, Twitter, Linkedin].map((Icon, index) => (
                            <a key={index} href="#" style={{
                                color: 'white',
                                opacity: 0.7,
                                transition: 'opacity 0.2s',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                background: 'rgba(255,255,255,0.1)'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                                onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
                            >
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Links Columns */}
                <div>
                    <h4 style={{ color: 'white', fontWeight: 700, marginBottom: '1.5rem', fontSize: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Product</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {['How It Works', 'Features', 'Pricing', 'Reviews', 'FAQ'].map((item) => (
                            <a key={item} href="#" style={{ color: 'inherit', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                            >{item}</a>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 style={{ color: 'white', fontWeight: 700, marginBottom: '1.5rem', fontSize: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Company</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {['About Us', 'Our Story', 'Careers', 'Blog', 'Contact'].map((item) => (
                            <a key={item} href="#" style={{ color: 'inherit', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                            >{item}</a>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 style={{ color: 'white', fontWeight: 700, marginBottom: '1.5rem', fontSize: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Legal</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'].map((item) => (
                            <a key={item} href="#" style={{ color: 'inherit', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                            >{item}</a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="footer-bottom" style={{
                textAlign: 'center',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                fontSize: '0.875rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem'
            }}>
                <p>&copy; 2026 BabyWise AI. All rights reserved.</p>
                <p style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', opacity: 0.5 }}>
                    Made with <Heart size={12} fill="currentColor" /> for parents everywhere
                </p>
            </div>
        </footer>
    );
};

export default Footer;
