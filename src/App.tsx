import { useState } from 'react';
import { AmbientBackground } from './components/AmbientBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DisciplinesShowcase } from './components/DisciplinesShowcase';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { PortfolioGallery } from './components/PortfolioGallery';
import { CommissionEstimator } from './components/CommissionEstimator';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ArtworkLightbox } from './components/ArtworkLightbox';
import { PORTFOLIO_ARTWORKS } from './data/portfolioData';
import { Artwork, CommissionBrief } from './types';

export function App() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string | null>(null);
  const [initialEstimatorDiscipline, setInitialEstimatorDiscipline] = useState<string>('concept-art');
  const [prefilledBrief, setPrefilledBrief] = useState<CommissionBrief | null>(null);

  // Jump helpers
  const handleExploreGallery = () => {
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenEstimator = () => {
    const el = document.getElementById('estimator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectCategoryFromDiscipline = (categoryId: string) => {
    setSelectedCategoryFilter(categoryId);
    handleExploreGallery();
  };

  const handlePreloadEstimator = (disciplineId: string) => {
    setInitialEstimatorDiscipline(disciplineId);
    handleOpenEstimator();
  };

  const handleCommissionStyle = (artwork: Artwork) => {
    setInitialEstimatorDiscipline(artwork.category);
    setPrefilledBrief({
      clientName: '',
      email: '',
      discipline: artwork.categoryLabel,
      subcategory: artwork.subcategoryLabel,
      scope: '1 Hero Asset',
      complexity: 'High Detail',
      timeline: 'Standard (3-4 wks)',
      commercialRights: true,
      budgetRange: '$3,500 - $6,000',
      briefDescription: `Commission inquiry inspired by artwork: "${artwork.title}" (ID: ${artwork.id}) with software style: ${artwork.tools.join(', ')}.`,
    });
    handleOpenContact();
  };

  const handleTransferBriefToContact = (brief: CommissionBrief) => {
    setPrefilledBrief(brief);
    handleOpenContact();
  };

  // Featured artwork for Hero
  const featuredArtwork = PORTFOLIO_ARTWORKS.find((a) => a.featured) || PORTFOLIO_ARTWORKS[0];

  return (
    <div className="relative min-h-screen bg-[#070709] text-[#f4f4f5] selection:bg-white selection:text-black">
      {/* Ambient Atmospheric Lighting & Grid Pattern */}
      <AmbientBackground />

      {/* Fixed Navigation Header */}
      <Navbar
        onOpenEstimator={handleOpenEstimator}
        onOpenContact={handleOpenContact}
      />

      {/* Main Page Flow */}
      <main className="relative z-10">
        {/* Hero Section with Manifesto & Featured Artwork */}
        <Hero
          featuredArtwork={featuredArtwork}
          onSelectArtwork={(art) => setSelectedArtwork(art)}
          onOpenEstimator={handleOpenEstimator}
          onExploreGallery={handleExploreGallery}
        />

        {/* Core Disciplines & Taxonomy Showcase */}
        <DisciplinesShowcase
          onSelectCategory={handleSelectCategoryFromDiscipline}
        />

        {/* Interactive Before & After Pipeline Inspector */}
        <BeforeAfterSlider />

        {/* Deep Interactive Portfolio Matrix */}
        <PortfolioGallery
          onSelectArtwork={(art) => setSelectedArtwork(art)}
          selectedCategoryFilter={selectedCategoryFilter}
          onSelectCategoryFilter={setSelectedCategoryFilter}
          onPreloadEstimatorWithDiscipline={handlePreloadEstimator}
        />

        {/* Interactive Commission & Project Cost Estimator */}
        <CommissionEstimator
          key={initialEstimatorDiscipline}
          initialDiscipline={initialEstimatorDiscipline}
          onSendBriefToContact={handleTransferBriefToContact}
        />

        {/* Studio Services & Deliverables */}
        <ServicesSection
          onSelectServiceDiscipline={handleSelectCategoryFromDiscipline}
        />

        {/* 4-Stage Production Pipeline SOP */}
        <ProcessSection />

        {/* Client Testimonials Showcase */}
        <TestimonialsSection />

        {/* FAQ Accordion */}
        <FAQSection onOpenContact={handleOpenContact} />

        {/* Creative Brief Intake Form */}
        <ContactSection initialBrief={prefilledBrief} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lightbox Inspector Modal */}
      <ArtworkLightbox
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
        onSelectArtwork={(art) => setSelectedArtwork(art)}
        onCommissionStyle={handleCommissionStyle}
      />
    </div>
  );
}

export default App;
