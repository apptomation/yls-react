import React from 'react';
import { Award, Users, Globe, Zap } from 'lucide-react';

const HeroSection = () => {
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
              About <span className="text-gradient">DigiTekk</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary-200 max-w-4xl mx-auto leading-relaxed">
              We are a passionate team of innovators, developers, and digital strategists 
              dedicated to transforming businesses through cutting-edge technology solutions.
            </p>
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

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 animate-slide-up animation-delay-400">
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={item.label}
                  className="text-center group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/20">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {item.number}
                  </div>
                  <div className="text-sm md:text-base text-secondary-200">
                    {item.label}
                  </div>
                </div>
              );
            })}
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
