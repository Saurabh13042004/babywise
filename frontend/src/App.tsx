import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import CategoryExplorer from './components/CategoryExplorer';
import TestimonialsSection from './components/TestimonialsSection';
import ComparisonSection from './components/ComparisonSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import QuizModal from './components/QuizModal';

function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      {/* <InteractiveTeaser onOpenQuiz={() => setIsQuizOpen(true)} /> */}
      <HowItWorksSection />
      <ProblemSection />
      <SolutionSection onOpenQuiz={() => setIsQuizOpen(true)} />
      <CategoryExplorer />
      {/* <DifferentiatorsSection /> */}
      <TestimonialsSection />
      <ComparisonSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </div>
  );
}

export default App;
