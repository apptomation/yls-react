import React from 'react';
import { CheckCircle, Star, Award, Users } from 'lucide-react';

const TimelineSection = () => {
  const milestones = [
    {
      year: '2014',
      title: 'Company Founded',
      description: 'DigiTekk was established with a mission to transform businesses through technology.',
      icon: Star,
      achievements: ['First office in San Francisco', '3 founding members', 'First client project'],
    },
    {
      year: '2016',
      title: 'First Major Contract',
      description: 'Secured our first enterprise client and delivered a game-changing e-commerce platform.',
      icon: Award,
      achievements: ['$1M revenue milestone', 'Team grew to 15 people', 'Opened second office'],
    },
    {
      year: '2018',
      title: 'International Expansion',
      description: 'Expanded operations globally, serving clients across North America and Europe.',
      icon: Users,
      achievements: ['25+ team members', 'Clients in 10 countries', 'ISO 27001 certification'],
    },
    {
      year: '2020',
      title: 'Cloud Excellence',
      description: 'Became AWS Advanced Consulting Partner and Microsoft Gold Partner.',
      icon: CheckCircle,
      achievements: ['50+ cloud migrations', '99.9% uptime SLA', 'Remote-first culture'],
    },
    {
      year: '2022',
      title: 'AI & Innovation',
      description: 'Launched AI/ML practice and established Innovation Lab for emerging technologies.',
      icon: Star,
      achievements: ['20+ AI projects', 'Research partnerships', 'Innovation awards'],
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: 'Recognized as a leading technology consultancy with 500+ successful projects.',
      icon: Award,
      achievements: ['500+ projects delivered', '25+ countries served', 'Industry recognition'],
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Our <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A decade of growth, innovation, and success. Here are the key milestones 
            that have shaped DigiTekk into the company we are today.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-tech rounded-full"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={milestone.year}
                  className={`relative flex items-center ${isEven ? 'justify-start' : 'justify-end'} animate-slide-up`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-tech rounded-full flex items-center justify-center shadow-tech z-10 border-4 border-surface">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className={`w-5/12 ${isEven ? 'pr-16 text-right' : 'pl-16 text-left'}`}>
                    <div className="bg-surface rounded-2xl p-8 shadow-elevation-2 hover:shadow-elevation-3 transition-all duration-300 hover:-translate-y-1">
                      {/* Year Badge */}
                      <div className={`inline-block bg-gradient-tech text-white px-4 py-2 rounded-full font-bold text-lg mb-4`}>
                        {milestone.year}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl font-bold text-text-primary mb-4">
                        {milestone.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-text-secondary mb-6 leading-relaxed">
                        {milestone.description}
                      </p>
                      
                      {/* Achievements */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-text-primary text-sm uppercase tracking-wide">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {milestone.achievements.map((achievement, achievementIndex) => (
                            <li 
                              key={achievementIndex}
                              className="flex items-center text-sm text-text-secondary"
                            >
                              <div className={`w-1.5 h-1.5 bg-accent rounded-full mr-3 ${isEven ? 'order-2 ml-3 mr-0' : ''}`}></div>
                              <span className={isEven ? 'order-1' : ''}>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Future Vision */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
              Looking Forward
            </h3>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
              As we move forward, we're excited about the opportunities that lie ahead. 
              Our vision is to continue pushing the boundaries of what's possible with technology, 
              helping businesses not just adapt to change, but lead it.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: '2025 Goals',
                  items: ['Expand to 35+ countries', 'Launch AI Center of Excellence', '100+ team members']
                },
                {
                  title: 'Innovation Focus',
                  items: ['Quantum computing research', 'Sustainable tech solutions', 'Next-gen user experiences']
                },
                {
                  title: 'Community Impact',
                  items: ['Tech education programs', 'Open source contributions', 'Diversity & inclusion initiatives']
                }
              ].map((section, index) => (
                <div 
                  key={section.title}
                  className="bg-surface rounded-xl p-6 shadow-elevation-1 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <h4 className="font-bold text-text-primary mb-4">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-text-secondary">
                        <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
