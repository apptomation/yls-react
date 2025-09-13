import React from 'react';
import { Lightbulb, Target, Rocket } from 'lucide-react';

const StorySection = () => {
  const storyPoints = [
    {
      icon: Lightbulb,
      title: 'The Beginning',
      year: '2014',
      description: 'Founded with a vision to bridge the gap between complex technology and business needs. Our journey started in a small garage with big dreams.',
    },
    {
      icon: Target,
      title: 'Finding Our Purpose',
      year: '2017',
      description: 'Focused on delivering custom software solutions that truly make a difference. We refined our approach to prioritize client success above all.',
    },
    {
      icon: Rocket,
      title: 'Scaling Impact',
      year: '2020',
      description: 'Expanded globally while maintaining our commitment to quality and innovation. Today, we serve clients across 25+ countries.',
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
                Our <span className="text-gradient">Story</span>
              </h2>
              <p className="text-xl text-text-secondary leading-relaxed">
                What started as a simple idea has grown into a comprehensive technology 
                consultancy that serves businesses worldwide. Here's how we got here.
              </p>
            </div>

            <div className="space-y-8">
              {storyPoints.map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <div 
                    key={point.title}
                    className="flex items-start space-x-6 animate-slide-up"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="w-16 h-16 bg-gradient-tech rounded-2xl flex items-center justify-center flex-shrink-0 shadow-tech">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-xl font-bold text-text-primary">{point.title}</h3>
                        <span className="bg-primary-100 text-primary text-sm font-medium px-3 py-1 rounded-full">
                          {point.year}
                        </span>
                      </div>
                      <p className="text-text-secondary leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            {/* Main Image Placeholder */}
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-12 shadow-elevation-2">
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-text-primary mb-4">Our Journey in Numbers</h3>
                </div>
                
                {/* Journey Stats */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: 'Happy Clients', value: '200+', color: 'text-blue-600' },
                    { label: 'Team Members', value: '50+', color: 'text-green-600' },
                    { label: 'Countries', value: '25+', color: 'text-purple-600' },
                    { label: 'Awards Won', value: '15+', color: 'text-orange-600' },
                  ].map((stat, index) => (
                    <div 
                      key={stat.label}
                      className="text-center p-4 bg-surface rounded-xl shadow-elevation-1 animate-fade-in"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-text-secondary">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Timeline Visual */}
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-tech rounded-full"></div>
                  <div className="space-y-8">
                    {['2014', '2017', '2020', '2024'].map((year, index) => (
                      <div 
                        key={year}
                        className="relative flex items-center justify-center animate-pulse"
                        style={{ animationDelay: `${index * 300}ms` }}
                      >
                        <div className="w-4 h-4 bg-gradient-tech rounded-full border-4 border-surface shadow-lg"></div>
                        <div className="absolute left-8 bg-surface px-3 py-1 rounded-lg shadow-elevation-1">
                          <span className="text-sm font-medium text-primary">{year}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-float animation-delay-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
