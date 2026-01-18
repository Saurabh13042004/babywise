import { ArrowRight, Check, X, Baby } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero" style={{
      padding: '120px 2rem 60px', // Reduced padding
      maxWidth: '1400px',
      margin: '0 auto',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="hero-container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '3rem', // Reduced gap
        alignItems: 'center'
      }}>
        {/* Left Column: Text Content */}
        <div className="hero-content" style={{
          textAlign: 'left',
          position: 'relative',
          zIndex: 2,
          animation: 'fadeInUp 0.8s ease-out 0.3s both'
        }}>
          <div className="hero-badge" style={{
            display: 'inline-block',
            background: 'var(--peach)',
            color: 'var(--coral)',
            padding: '0.5rem 1.25rem',
            borderRadius: '50px',
            fontSize: '0.875rem',
            fontWeight: 600,
            letterSpacing: '0.05em',
            marginBottom: '1.5rem',
            boxShadow: '0 2px 10px rgba(255, 107, 107, 0.1)'
          }}>🎯 LAUNCHING SPRING 2026</div>

          <h1 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 'clamp(3rem, 5vw, 4.5rem)',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            color: 'var(--soft-black)'
          }}>
            Build Your Perfect Baby Registry in <span style={{ color: 'var(--primary)' }}>Minutes</span>
          </h1>

          <p className="hero-subtitle" style={{
            fontSize: '1.25rem',
            color: 'var(--charcoal)',
            marginBottom: '2.5rem',
            fontWeight: 400,
            lineHeight: 1.6,
            maxWidth: '540px'
          }}>
            Stop guessing. Get a personalized plan based on your budget, space, and lifestyle.
            We tell you exactly what to buy—and what to skip.
          </p>

          <div className="cta-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-start' }}>
            <div className="cta-container" style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              <a href="#signup" className="primary-cta" style={{
                background: 'var(--primary)',
                color: 'white',
                padding: '1.25rem 2.5rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '1.125rem',
                transition: 'all 0.3s ease',
                display: 'inline-block',
                letterSpacing: '0.02em',
                boxShadow: '0 4px 20px rgba(74, 144, 226, 0.3)'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--primary-dark)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(74, 144, 226, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--primary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(74, 144, 226, 0.3)';
                }}
              >Get Your Free Plan</a>

              <a href="#how-it-works" className="secondary-cta" style={{
                color: 'var(--charcoal)',
                padding: '1rem 1.5rem',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--primary-dark)';
                  e.currentTarget.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--charcoal)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                See How It Works
                <ArrowRight size={18} />
              </a>
            </div>

            {/* <span className="trust-mini" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem', // Tighter gap
              fontSize: '0.9rem',
              color: 'var(--charcoal)',
              opacity: 0.9,
              flexDirection: 'column', // Stack stars and text
              alignItems: 'flex-start'
            }}>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} size={16} fill="#FF6B6B" color="#FF6B6B" />
                ))}
              </div>
              <span>Trusted by <strong>10,000+</strong> parents</span>
            </span> */}
          </div>
        </div>

        {/* Right Column: Visual Composition */}
        <div className="hero-visual" style={{
          position: 'relative',
          height: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'fadeInUp 0.8s ease-out 0.5s both'
        }}>
          {/* Abstract Background Blob */}
          <div style={{
            position: 'absolute',
            width: '120%',
            height: '120%',
            background: 'radial-gradient(circle, var(--peach) 0%, rgba(255,255,255,0) 70%)',
            top: '-10%',
            left: '-10%',
            zIndex: 0
          }}></div>

          {/* Main Card: Personalized Plan */}
          <div className="visual-card main-card" style={{
            background: 'white',
            borderRadius: '20px',
            padding: '1.5rem',
            boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
            width: '320px',
            position: 'relative',
            zIndex: 2,
            transform: 'rotate(-2deg)',
            border: '1px solid rgba(0,0,0,0.05)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--mint)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Baby size={24} color="#2C7A7B" />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Sarah's Registry</div>
                <div style={{ fontSize: '0.75rem', color: '#888' }}>Due in 3 months • Apartment</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', background: 'var(--warm-white)', borderRadius: '10px' }}>
                <Check size={18} color="var(--primary)" />
                <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>Convertible Car Seat</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', background: 'var(--warm-white)', borderRadius: '10px' }}>
                <Check size={18} color="var(--primary)" />
                <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>Compact Stroller</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', background: '#FFF5F5', borderRadius: '10px', opacity: 0.8 }}>
                <X size={18} color="var(--coral)" />
                <div style={{ fontSize: '0.85rem', textDecoration: 'line-through', color: '#888' }}>Wipe Warmer</div>
              </div>
            </div>
          </div>

          {/* Floating Card: Savings */}
          <div className="visual-card float-card-1" style={{
            position: 'absolute',
            top: '10%',
            right: '5%',
            background: 'white',
            padding: '1rem 1.5rem',
            borderRadius: '15px',
            boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
            zIndex: 3,
            animation: 'float 6s ease-in-out infinite'
          }}>
            <div style={{ fontSize: '0.75rem', color: '#888', marginBottom: '0.25rem' }}>Potential Savings</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)' }}>$2,450</div>
          </div>

          {/* Floating Card: Match Score */}
          <div className="visual-card float-card-2" style={{
            position: 'absolute',
            bottom: '15%',
            left: '-5%',
            background: 'white',
            padding: '1rem',
            borderRadius: '15px',
            boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
            zIndex: 3,
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            animation: 'float 7s ease-in-out infinite 1s'
          }}>
            <div style={{
              width: '40px', height: '40px', borderRadius: '50%',
              background: 'conic-gradient(var(--primary) 98%, #eee 0)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.75rem', fontWeight: 700
            }}>98%</div>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>Match Score</div>
              <div style={{ fontSize: '0.7rem', color: '#888' }}>Based on lifestyle</div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        
        @media (max-width: 968px) {
          .hero-container {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-content {
            text-align: center !important;
          }
          .hero-subtitle {
            margin-left: auto;
            margin-right: auto;
          }
          .cta-container {
            justify-content: center;
          }
          .cta-wrapper {
            align-items: center !important;
          }
          .trust-mini {
            align-items: center !important;
          }
          .hero-visual {
            height: 400px !important;
            margin-top: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
