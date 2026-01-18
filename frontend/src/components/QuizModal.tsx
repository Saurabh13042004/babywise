import React, { useState } from 'react';

interface QuizModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(0);

    if (!isOpen) return null;

    const quizQuestions = [
        {
            question: "What's your budget for baby gear?",
            options: ["Under $1,000", "$1,000-$2,500", "$2,500-$5,000", "$5,000+"]
        },
        {
            question: "What's your living situation?",
            options: ["Small apartment", "Standard apartment", "House with space", "Large house"]
        },
        {
            question: "When is your due date?",
            options: ["0-3 months", "3-6 months", "6-9 months", "Already born"]
        }
    ];

    const handleOptionSelect = (_index: number) => {
        if (step < quizQuestions.length) {
            setStep(step + 1);
        }
    };

    const handleCloseAndSignup = () => {
        onClose();
        const signupSection = document.getElementById('signup');
        if (signupSection) {
            signupSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
            animation: 'fadeIn 0.3s ease'
        }}>
            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>

            <div style={{
                background: 'white',
                padding: '3rem',
                borderRadius: '25px',
                maxWidth: '500px',
                width: '90%',
                position: 'relative',
                animation: 'slideUp 0.4s ease'
            }}>
                <button onClick={onClose} style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'none',
                    border: 'none',
                    fontSize: '2rem',
                    cursor: 'pointer',
                    color: '#2C3748'
                }}>&times;</button>

                {step < quizQuestions.length ? (
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '0.875rem', color: '#4A90E2', fontWeight: 600, marginBottom: '1rem' }}>
                            QUESTION {step + 1} OF 3
                        </div>
                        <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.75rem', marginBottom: '2rem', color: '#1A202C' }}>
                            {quizQuestions[step].question}
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {quizQuestions[step].options.map((option, index) => (
                                <button key={index} onClick={() => handleOptionSelect(index)} style={{
                                    padding: '1rem',
                                    border: '2px solid #4A90E2',
                                    background: 'white',
                                    borderRadius: '15px',
                                    cursor: 'pointer',
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    transition: 'all 0.3s ease',
                                    fontFamily: "'Karla', sans-serif"
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = '#4A90E2';
                                        e.currentTarget.style.color = 'white';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'white';
                                        e.currentTarget.style.color = '#2C3748';
                                    }}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
                        <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '2rem', marginBottom: '1rem', color: '#1A202C' }}>
                            Here's a Sneak Peek!
                        </h3>
                        <p style={{ color: '#2C3748', marginBottom: '2rem', lineHeight: 1.7 }}>
                            Based on your answers, BabyWise AI would recommend focusing on compact, budget-friendly options.
                            You'd save money on overhyped products and invest in safety essentials.
                        </p>
                        <div style={{ background: '#FFF8F0', padding: '1.5rem', borderRadius: '15px', marginBottom: '2rem', textAlign: 'left' }}>
                            <div style={{ fontWeight: 700, marginBottom: '0.5rem' }}>✅ Must-Have: Convertible Car Seat</div>
                            <div style={{ fontWeight: 700, marginBottom: '0.5rem' }}>⏰ Get Soon: Compact Stroller</div>
                            <div style={{ fontWeight: 700, marginBottom: '0.5rem' }}>❌ Skip: Wipe Warmer, Diaper Genie</div>
                        </div>
                        <button onClick={handleCloseAndSignup} style={{
                            background: '#4A90E2',
                            color: 'white',
                            padding: '1rem 2rem',
                            border: 'none',
                            borderRadius: '50px',
                            fontWeight: 700,
                            fontSize: '1rem',
                            cursor: 'pointer',
                            width: '100%',
                            fontFamily: "'Karla', sans-serif"
                        }}>
                            Join Waitlist for Full Report
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuizModal;
