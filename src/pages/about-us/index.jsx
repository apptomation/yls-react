import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import TeamSection from './components/TeamSection';
import ValuesSection from './components/ValuesSection';
import TimelineSection from './components/TimelineSection';
import Footer from '../homepage/components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main className="pt-16 lg:pt-18">
        <HeroSection />
        <StorySection />
        <ValuesSection />
        {/* <TimelineSection />
        <TeamSection /> */}
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
