
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CarReviewsSection from '@/components/CarReviewsSection';
import RideSharingSection from '@/components/RideSharingSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CarReviewsSection />
      <RideSharingSection />
      <Footer />
    </div>
  );
};

export default Index;
