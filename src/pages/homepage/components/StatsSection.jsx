import React from 'react';
import { TrendingUp, Users, Award, Globe } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: '500+',
      label: 'Projects Completed',
      description: 'Successful implementations across various industries',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Users,
      number: '200+',
      label: 'Happy Clients',
      description: 'Businesses transformed through our solutions',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
    },
    {
      icon: Award,
      number: '10+',
      label: 'Years Experience',
      description: 'Decade of excellence in IT solutions',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Globe,
      number: '25+',
      label: 'Countries Served',
      description: 'Global reach with local expertise',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
  ];

  const achievements = [
    {
      title: 'ISO 27001 Certified',
      description: 'Information Security Management',
    },
    {
      title: 'AWS Partner',
      description: 'Certified Cloud Solutions Provider',
    },
    {
      title: 'Microsoft Gold Partner',
      description: 'Enterprise Application Development',
    },
    {
      title: '99.9% Uptime',
      description: 'Guaranteed Service Availability',
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our track record speaks for itself. Join hundreds of satisfied clients 
            who have transformed their businesses with our innovative solutions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.label}
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-20 h-20 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                  <IconComponent className={`w-10 h-10 ${stat.color}`} />
                </div>
                
                <div className="text-4xl md:text-5xl font-bold text-text-primary mb-2 group-hover:scale-105 transition-transform">
                  {stat.number}
                </div>
                
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {stat.label}
                </h3>
                
                <p className="text-text-secondary">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Achievements and Certifications */}
        <div className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-2xl p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                  Certified Excellence
                </h3>
                <p className="text-lg text-text-secondary">
                  Our certifications and partnerships ensure that we deliver 
                  solutions that meet the highest industry standards.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div 
                    key={achievement.title}
                    className="bg-surface rounded-lg p-6 shadow-elevation-1 hover:shadow-elevation-2 transition-shadow animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <h4 className="font-bold text-text-primary mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-text-secondary">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="bg-gradient-tech rounded-xl p-8 text-white text-center">
                <h4 className="text-2xl font-bold mb-6">Client Satisfaction</h4>
                
                {/* Circular Progress */}
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-white/20"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 80}`}
                      strokeDashoffset={`${2 * Math.PI * 80 * (1 - 0.99)}`}
                      className="text-accent transition-all duration-1000 ease-out"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold">99%</div>
                      <div className="text-sm text-blue-100">Satisfaction Rate</div>
                    </div>
                  </div>
                </div>
                
                <p className="text-blue-100">
                  Our clients consistently rate our services as excellent, 
                  with most becoming long-term partners.
                </p>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/30 rounded-full blur-xl animate-pulse animation-delay-400"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
