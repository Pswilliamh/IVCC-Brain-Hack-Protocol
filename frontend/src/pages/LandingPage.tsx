import HeroSection from '../components/landing/sections/HeroSection';
import VideoSection from '../components/landing/sections/VideoSection';
import RevealSection from '../components/landing/sections/RevealSection';
import ProductSection from '../components/landing/sections/ProductSection';
import WordAwarenessResetSection from '../components/landing/sections/WordAwarenessResetSection';
import SecondVideoSection from '../components/landing/sections/SecondVideoSection';
import Sections1to7 from '../components/landing/sections/Sections1to7';
import VisualPerimeterSection from '../components/landing/sections/VisualPerimeterSection';
import MissionSection from '../components/landing/sections/MissionSection';
import AboutSection from '../components/landing/sections/AboutSection';
import Footer from '../components/landing/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-charcoal">
      <HeroSection />
      <VideoSection />
      <ProductSection />
      <WordAwarenessResetSection />
      <RevealSection />
      <SecondVideoSection />
      <Sections1to7 />
      <VisualPerimeterSection />
      <MissionSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
