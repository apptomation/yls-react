import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicesOverview from './components/ServicesOverview';
import FeaturesSection from './components/FeaturesSection';
import StatsSection from './components/StatsSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16 lg:pt-18">
          {/* Hero Skeleton */}
          <div className="relative h-[600px] bg-secondary-100 skeleton"></div>
          
          {/* Content Skeletons */}
          <div className="max-w-7xl mx-auto container-padding section-padding space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="card">
                  <div className="h-48 bg-secondary-100 rounded-t-xl skeleton"></div>
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-secondary-100 rounded skeleton"></div>
                    <div className="h-4 bg-secondary-100 rounded w-3/4 skeleton"></div>
                    <div className="h-4 bg-secondary-100 rounded w-1/2 skeleton"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main className="pt-16 lg:pt-18">
        <HeroSection />
        {/* <ServicesOverview />
        <FeaturesSection />
        <StatsSection />
        <TestimonialsSection /> */}
      </main>
      
      <Footer />
    </div>
  );
};

export default Homepage;
