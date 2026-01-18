
import { Car, BedDouble, Milk, Baby, Bath, Gamepad2, ArrowRight, Plus } from 'lucide-react';

const CategoryExplorer = () => {
    const categories = [
        { icon: Car, title: 'Travel & Safety', text: 'Car seats, strollers, carriers', badge: '20+ products', color: 'var(--primary)' },
        { icon: BedDouble, title: 'Sleep Essentials', text: 'Cribs, bassinets, monitors', badge: '25+ products', color: 'var(--coral)' },
        { icon: Milk, title: 'Feeding', text: 'Bottles, pumps, high chairs', badge: '30+ products', color: 'var(--mint)' },
        { icon: Baby, title: 'Diapering', text: 'Tables, pails, wipes', badge: '15+ products', color: '#805AD5' },
        { icon: Bath, title: 'Bath Time', text: 'Tubs, towels, toys', badge: '12+ products', color: '#3182CE' },
        { icon: Gamepad2, title: 'Play & Learn', text: 'Toys, books, play mats', badge: '35+ products', color: '#D69E2E' }
    ];

    return (
        <section className="category-explorer" style={{
            background: 'var(--warm-white)',
            padding: '100px 2rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background blobs */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(74, 144, 226, 0.05) 0%, transparent 70%)',
                pointerEvents: 'none'
            }}></div>

            <div className="category-content" style={{
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
                }}>EXPLORE BY CATEGORY</div>
                <h2 style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: '3.5rem',
                    lineHeight: 1.2,
                    marginBottom: '2rem',
                    color: 'var(--soft-black)'
                }}>See What BabyWise AI Recommends</h2>
                <p className="category-subtitle" style={{
                    fontSize: '1.15rem',
                    color: 'var(--charcoal)',
                    marginBottom: '4rem',
                    maxWidth: '600px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>Get personalized recommendations across all essential baby categories, filtered for your specific needs.</p>

                <div className="category-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {categories.map((category, index) => (
                        <div key={index} className="category-card" style={{
                            background: 'white',
                            padding: '2.5rem 2rem',
                            borderRadius: '20px',
                            border: '1px solid rgba(0,0,0,0.05)',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            textAlign: 'left',
                            position: 'relative',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.08)';
                                e.currentTarget.style.borderColor = `${category.color}30`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)';
                            }}
                        >
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '15px',
                                background: `${category.color}15`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem',
                                color: category.color
                            }}>
                                <category.icon size={30} strokeWidth={1.5} />
                            </div>

                            <h3 style={{
                                fontFamily: "'DM Serif Display', serif",
                                fontSize: '1.5rem',
                                marginBottom: '0.5rem',
                                color: 'var(--soft-black)'
                            }}>{category.title}</h3>

                            <p style={{
                                color: 'var(--charcoal)',
                                marginBottom: '1.5rem',
                                fontSize: '0.95rem',
                                lineHeight: 1.6,
                                flex: 1
                            }}>{category.text}</p>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '100%',
                                marginTop: 'auto'
                            }}>
                                <div className="category-badge" style={{
                                    display: 'inline-block',
                                    background: 'var(--warm-white)',
                                    color: 'var(--charcoal)',
                                    padding: '0.4rem 0.8rem',
                                    borderRadius: '50px',
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    border: '1px solid rgba(0,0,0,0.05)'
                                }}>{category.badge}</div>

                                <div style={{
                                    width: '30px',
                                    height: '30px',
                                    borderRadius: '50%',
                                    background: `${category.color}15`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: category.color
                                }}>
                                    <ArrowRight size={16} />
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Glassmorphism "Many More" Card */}
                    <div className="category-card glass-card" style={{
                        background: 'rgba(255, 255, 255, 0.4)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        padding: '2.5rem 2rem',
                        borderRadius: '20px',
                        border: '1px solid rgba(255, 255, 255, 0.8)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '300px',
                        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.05)'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.08)';
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.6)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.05)';
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.4)';
                        }}
                    >
                        <div style={{
                            width: '70px',
                            height: '70px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1.5rem',
                            color: 'white',
                            boxShadow: '0 10px 20px rgba(74, 144, 226, 0.3)'
                        }}>
                            <Plus size={32} strokeWidth={2} />
                        </div>

                        <h3 style={{
                            fontFamily: "'DM Serif Display', serif",
                            fontSize: '1.75rem',
                            marginBottom: '0.75rem',
                            color: 'var(--soft-black)'
                        }}>And Many More</h3>

                        <p style={{
                            color: 'var(--charcoal)',
                            fontSize: '1rem',
                            lineHeight: 1.6,
                            maxWidth: '200px'
                        }}>Health, Nursery, Clothing, and everything else.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoryExplorer;
