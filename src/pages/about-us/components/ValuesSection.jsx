import React from 'react';
import { 
  Heart, 
  Zap, 
  Shield, 
  Users, 
  Target, 
  Lightbulb 
} from 'lucide-react';

const ValuesSection = () => {
  const values = [
    {
      icon: Heart,
      title: 'Client-Centric Approach',
      description: 'Every decision we make is guided by what\'s best for our clients. Your success is our success.',
      color: 'text-red-500',
      bgColor: 'bg-red-50',
    },
    {
      icon: Zap,
      title: 'Innovation & Excellence',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions that drive competitive advantage.',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
    },
    {
      icon: Shield,
      title: 'Security & Reliability',
      description: 'We build robust, secure systems that you can depend on, with industry-leading security practices.',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
    },
    {
      icon: Users,
      title: 'Collaborative Partnership',
      description: 'We work as an extension of your team, fostering open communication and shared ownership.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on measurable outcomes that directly impact your business goals and bottom line.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Lightbulb,
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth and stay current with emerging technologies and best practices.',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
  ];

  return (
    <section className="section-padding bg-secondary-50">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Our <span className="text-gradient">Core Values</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            These fundamental principles guide everything we do and shape how we interact 
            with our clients, partners, and each other.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div 
                key={value.title}
                className="bg-surface rounded-2xl p-8 shadow-elevation-1 hover:shadow-elevation-3 transition-all duration-300 hover:-translate-y-2 group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 ${value.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 ${value.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                
                <p className="text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Company Culture Section */}
        <div className="bg-gradient-tech rounded-2xl p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold">Our Culture</h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                We've built a culture where innovation thrives, collaboration is natural, 
                and everyone has the opportunity to make a meaningful impact. Our team is 
                our greatest asset, and we invest in creating an environment where they can do their best work.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Remote-First', value: '100%' },
                  { label: 'Team Satisfaction', value: '98%' },
                  { label: 'Learning Budget', value: '$5K' },
                  { label: 'Retention Rate', value: '95%' },
                ].map((stat, index) => (
                  <div 
                    key={stat.label}
                    className="text-center animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="text-2xl font-bold text-accent mb-1">{stat.value}</div>
                    <div className="text-sm text-blue-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h4 className="text-xl font-bold mb-6 text-center">What Our Team Says</h4>
                
                <div className="space-y-6">
                  {[
                    {
                      quote: "The freedom to innovate and the support to grow makes this an amazing place to work.",
                      author: "Sarah K., Senior Developer"
                    },
                    {
                      quote: "Every project is a chance to solve interesting problems with a team that truly cares.",
                      author: "Mike R., Tech Lead"
                    },
                    {
                      quote: "The learning opportunities and collaborative environment are unmatched.",
                      author: "Elena M., UX Designer"
                    }
                  ].map((testimonial, index) => (
                    <div 
                      key={index}
                      className="bg-white/5 rounded-lg p-4 animate-fade-in"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <p className="text-sm text-blue-100 italic mb-2">"{testimonial.quote}"</p>
                      <p className="text-xs text-accent font-medium">— {testimonial.author}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating Decoration */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/20 rounded-full blur-xl animate-pulse animation-delay-400"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
