import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AmbientBackground } from './components/AmbientBackground';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ArtworkLightbox } from './components/ArtworkLightbox';
import { HomePage } from './pages/HomePage';
import { InspectorPage } from './pages/InspectorPage';
import { ServicesPage } from './pages/ServicesPage';
import { EstimatorPage } from './pages/EstimatorPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ContactPage } from './pages/ContactPage';
import { Artwork, CommissionBrief } from './types';

export function App() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string | null>(null);
  const [activeBrief, setActiveBrief] = useState<CommissionBrief | null>(null);

  const handleCommissionStyle = (artwork: Artwork) => {
    setActiveBrief({
      clientName: '',
      email: '',
      discipline: artwork.categoryLabel,
      subcategory: artwork.subcategoryLabel,
      scope: '1 Hero Asset',
      complexity: 'High Detail',
      timeline: 'Standard (3-4 wks)',
      commercialRights: true,
      budgetRange: '$3,500 - $6,000',
      briefDescription: `Commission inquiry inspired by artwork: "${artwork.title}" (ID: ${artwork.id}) with software tools: ${artwork.tools.join(', ')}.`,
    });
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen bg-[#070709] text-[#f4f4f5] selection:bg-white selection:text-black">
        {/* Subtle Atmospheric Lighting Backdrop */}
        <AmbientBackground />

        {/* Global Navigation Header */}
        <Navbar />

        {/* Routed Pages */}
        <main className="relative z-10">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onSelectArtwork={(art) => setSelectedArtwork(art)}
                  selectedCategoryFilter={selectedCategoryFilter}
                  onSelectCategoryFilter={setSelectedCategoryFilter}
                />
              }
            />
            <Route path="/inspector" element={<InspectorPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route
              path="/estimator"
              element={<EstimatorPage onSendBriefToContact={(brief) => setActiveBrief(brief)} />}
            />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route
              path="/contact"
              element={<ContactPage initialBrief={activeBrief} />}
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Fullscreen High-Res Artwork Lightbox Modal (Accessible across all routes) */}
        <ArtworkLightbox
          artwork={selectedArtwork}
          onClose={() => setSelectedArtwork(null)}
          onSelectArtwork={(art) => setSelectedArtwork(art)}
          onCommissionStyle={handleCommissionStyle}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
