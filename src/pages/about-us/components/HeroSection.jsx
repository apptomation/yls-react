import React from 'react';
import { Award, Users, Globe, Zap } from 'lucide-react';

const HeroSection = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const highlights = [
    {
      icon: Users,
      number: '50+',
      label: 'Expert Team Members',
    },
    {
      icon: Globe,
      number: '25+',
      label: 'Countries Served',
    },
    {
      icon: Award,
      number: '10+',
      label: 'Years of Excellence',
    },
    {
      icon: Zap,
      number: '500+',
      label: 'Projects Delivered',
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float animation-delay-400"></div>
      </div>

      <div className="relative max-w-7xl mx-auto container-padding py-20">
        <div className="text-center space-y-8">
          {/* Main Content */}
          <div className="space-y-6 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              About <span className="text-gradient">YLS BUSINESS MANAGEMENT</span>
            </h1>
            <div className="flex flex-col items-center">
              <div className="flex space-x-4 mb-6">
                {['Who We Are', 'Our Values', 'Why Choose Us'].map((tab, idx) => (
                  <button
                    key={tab}
                    className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${
                      selectedTab === idx
                        ? 'bg-accent text-white shadow'
                        : 'bg-white/10 text-secondary-100 hover:bg-accent/20'
                    }`}
                    onClick={() => setSelectedTab(idx)}
                    type="button"
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="max-w-2xl text-lg text-secondary-100 bg-white/5 rounded-xl p-6 shadow transition-all duration-300">
                {selectedTab === 0 && (
                  <span>
                    YLS is a global business management consultancy dedicated to helping organizations unlock their full potential. Our team combines deep industry expertise with a passion for innovation and client success.
                  </span>
                )}
                {selectedTab === 1 && (
                  <span>
                    Integrity, collaboration, and excellence are at the heart of everything we do. We foster a culture of inclusion, continuous learning, and social responsibility to create lasting impact for our clients and communities.
                  </span>
                )}
                {selectedTab === 2 && (
                  <span>
                    We deliver tailored solutions, measurable results, and unwavering support. Our proven track record and commitment to client satisfaction make us the trusted partner for businesses seeking transformation and growth.
                  </span>
                )}
              </div>
            </div>
           
          </div>

          {/* Mission Statement */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 max-w-4xl mx-auto animate-fade-in animation-delay-200">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-lg text-secondary-100 leading-relaxed">
              To empower businesses worldwide by delivering innovative, scalable, and secure 
              technology solutions that drive digital transformation and sustainable growth. 
              We believe in turning complex challenges into simple, elegant solutions.
            </p>
          </div>

          
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
