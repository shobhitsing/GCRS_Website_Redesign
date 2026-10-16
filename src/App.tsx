import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RouteSection from './components/RouteSection';
import FourPillars from './components/FourPillars';
import BrandsReady from './components/BrandsReady';
import ConnectedExpertise from './components/ConnectedExpertise';
import ContactSection from './components/ContactSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('what-we-do');
  const [showModal, setShowModal] = useState(false);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-[#CCFF00] selection:text-black relative overflow-x-clip">
      <Navbar
        activeId={activeTab}
        onNavItemClick={(item) => scrollToSection(item.id)}
        ctaLabel="Let's Talk"
        onCtaClick={() => setShowModal(true)}
      />

      <main className="flex-1 flex flex-col items-center justify-start pt-3 pb-12 w-full overflow-x-hidden">

        <div id="what-we-do" className="relative w-full max-w-[1225px] mx-auto px-4 sm:px-6 overflow-visible">
          <div
            className="gap-brand-ring hero-route-circle-reveal pointer-events-none select-none"
            aria-hidden="true"
          >
            <picture className="block h-full w-full">
              <source media="(max-width: 640px)" srcSet="/lime-brand-ring.png" />
              <img
                src="/ring.png"
                alt=""
                width={939}
                height={917}
                className="block h-full w-full select-none pointer-events-none"
              />
            </picture>
          </div>
          <Hero onCtaClick={() => setShowModal(true)} />
          <RouteSection />
        </div>

        <div id="pillars" className="pillars-section w-full mt-10">
          <FourPillars />
        </div>

        <div className="w-full mt-6 sm:mt-16 lg:mt-20">
          <BrandsReady onCtaClick={() => setShowModal(true)} />
        </div>

        <div className="w-full">
          <ConnectedExpertise />
        </div>

        <div id="contact" className="w-full">
          <ContactSection onSuccess={() => setShowModal(false)} />
        </div>

        <div className="w-full">
          <NewsletterSection />
        </div>

        <div className="w-full mt-0">
          <Footer />
        </div>

      </main>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all"
          onClick={() => setShowModal(false)}
        >
          <div
            className="w-full max-w-md bg-[#0e110c] border border-[#CCFF00]/30 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(204,255,0,0.12)] text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold font-serif text-white">Let's Talk</h3>
              <button
                type="button"
                className="text-white/60 hover:text-[#CCFF00] text-xl transition-colors p-1 cursor-pointer"
                onClick={() => setShowModal(false)}
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>
            <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-6">
              Global Access Partners helps beauty, fragrance and personal care brands enter new markets and build commercial relationships.
            </p>
            <button
              type="button"
              className="w-full py-3.5 rounded-full bg-[#CCFF00] hover:bg-[#d8ff33] text-black font-bold text-sm tracking-tight transition-all duration-200 cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
