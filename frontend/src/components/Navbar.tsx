import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            background: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
            backdropFilter: scrolled ? 'blur(12px)' : 'none',
            padding: '1rem 2rem',
            zIndex: 1000,
            borderBottom: scrolled ? '1px solid rgba(0, 0, 0, 0.05)' : 'none',
            transition: 'all 0.3s ease'
        }}>
            <div className="nav-container" style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                {/* Logo */}
                <a href="#" className="logo" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    textDecoration: 'none',
                    color: 'var(--soft-black)',
                    zIndex: 1002
                }}>
                    {/* <svg className="logo-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '40px', height: '40px' }}>
                        <rect x="18" y="8" width="12" height="4" rx="2" fill="#4A90E2" />
                        <path d="M16 12 L16 28 Q16 36 24 36 Q32 36 32 28 L32 12 Z" fill="#7CB3F5" />
                        <path d="M20 16 Q22 14 24 16 Q26 14 28 16" stroke="#4A90E2" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                        <path d="M20 20 Q22 18 24 20 Q26 18 28 20" stroke="#4A90E2" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                        <path d="M20 24 Q22 22 24 24 Q26 22 28 24" stroke="#4A90E2" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                        <rect x="18" y="28" width="12" height="6" rx="1" fill="white" opacity="0.4" />
                        <ellipse cx="24" cy="36" rx="3" ry="4" fill="#FF6B6B" />
                    </svg> */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{
                            fontFamily: "'DM Serif Display', serif",
                            fontSize: '1.5rem',
                            lineHeight: 1,
                            color: 'var(--soft-black)'
                        }}>BabyWise</span>
                    </div>
                </a>

                {/* Desktop Links */}
                <div className="desktop-links" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2.5rem',
                }}>
                    <a href="#how-it-works" style={{
                        textDecoration: 'none',
                        color: 'var(--charcoal)',
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        opacity: 0.8,
                        transition: 'opacity 0.2s'
                    }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}>
                        How it Works
                    </a>
                    <a href="#signup" style={{
                        background: 'var(--primary)',
                        color: 'white',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        fontWeight: 600,
                        fontSize: '0.95rem',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 12px rgba(74, 144, 226, 0.2)'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 8px 20px rgba(74, 144, 226, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(74, 144, 226, 0.2)';
                        }}
                    >
                        Get Early Access
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{
                        display: 'none', // Hidden by default, shown via CSS media query usually, but inline styles are tricky for media queries. 
                        // Since we can't easily do media queries in inline styles for display, we'll rely on the fact that 
                        // the user likely has a css file or we can just leave it visible for now and hide desktop links.
                        // Actually, let's use a simple window width check or just render it and hide via class in index.css if we could, 
                        // but we are doing inline styles. 
                        // For this specific task, I'll add a class 'mobile-toggle' and assume we might need to add a media query in index.css 
                        // or just accept it shows on desktop for a second if I don't handle it.
                        // BETTER APPROACH: Just render it, but for the sake of the "Minimalist" request, 
                        // I will assume the user is on desktop mostly or I'll add a style tag.
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'var(--soft-black)',
                        zIndex: 1002
                    }}
                    className="mobile-toggle"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                background: 'rgba(255, 255, 255, 0.98)',
                backdropFilter: 'blur(10px)',
                zIndex: 1001,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2rem',
                transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
                transition: 'transform 0.3s ease-in-out',
                opacity: mobileMenuOpen ? 1 : 0
            }}>
                <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} style={{
                    textDecoration: 'none',
                    color: 'var(--soft-black)',
                    fontSize: '1.5rem',
                    fontWeight: 600
                }}>How it Works</a>
                <a href="#signup" onClick={() => setMobileMenuOpen(false)} style={{
                    textDecoration: 'none',
                    color: 'var(--primary)',
                    fontSize: '1.5rem',
                    fontWeight: 700
                }}>Get Early Access</a>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .desktop-links { display: none !important; }
                    .mobile-toggle { display: block !important; }
                }
                @media (min-width: 769px) {
                    .mobile-toggle { display: none !important; }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
