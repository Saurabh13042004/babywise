import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, CheckCircle } from 'lucide-react';

interface SuccessPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const SuccessPopup: React.FC<SuccessPopupProps> = ({ isOpen, onClose }) => {
    const [timeLeft, setTimeLeft] = useState(5);

    useEffect(() => {
        if (isOpen) {
            setTimeLeft(5);
            const timer = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        onClose();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    />

                    {/* Popup Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="bg-white rounded-[2rem] p-8 md:p-10 max-w-md w-full relative shadow-2xl border-4 border-blue-100 text-center z-10"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors bg-gray-50 p-2 rounded-full"
                        >
                            <X size={20} />
                        </button>

                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                            <CheckCircle size={40} className="text-green-500" />
                        </div>

                        <h3 className="text-3xl font-bold text-gray-800 mb-4 font-heading">You're In! 🎉</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            We've registered your email. Once we launch, we'll send you some <span className="font-bold text-[var(--color-primary)]">exciting rewards</span>!
                        </p>

                        <div className="bg-blue-50 rounded-xl p-4 flex items-center gap-3 mb-6 border border-blue-100">
                            <div className="bg-white p-2 rounded-full shadow-sm">
                                <Gift size={24} className="text-blue-500" />
                            </div>
                            <p className="text-sm text-blue-800 font-bold text-left">
                                Exclusive early-bird gift reserved.
                            </p>
                        </div>

                        <p className="text-xs text-gray-400 font-medium">
                            Auto-closing in {timeLeft}s...
                        </p>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default SuccessPopup;
