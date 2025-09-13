import React from 'react';
import { 
  Rocket, 
  Users, 
  Clock, 
  Trophy,
  CheckCircle,
  Star
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Rocket,
      title: 'Rapid Development',
      description: 'Fast-track your projects with our agile development methodology and experienced team.',
      stats: '50% Faster Delivery',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Work with certified professionals who bring years of industry experience to your project.',
      stats: '100+ Specialists',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support to ensure your systems run smoothly at all times.',
      stats: '99.9% Uptime',
    },
    {
      icon: Trophy,
      title: 'Award Winning',
      description: 'Recognized for excellence in digital innovation and customer satisfaction.',
      stats: '25+ Awards',
    },
  ];

  const whyChooseUs = [
    'Proven track record with 500+ successful projects',
    'Cutting-edge technology stack and methodologies',
    'Transparent pricing with no hidden costs',
    'Scalable solutions that grow with your business',
    'Dedicated project management and communication',
    'Post-launch support and maintenance',
  ];

  return (
    <section className="section-padding bg-secondary-50">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={feature.title}
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-tech rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-tech">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="text-primary font-bold text-lg">
                  {feature.stats}
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Why Choose <span className="text-gradient">DigiTekk</span>?
              </h2>
              <p className="text-xl text-text-secondary">
                We don't just build software; we create digital experiences that drive business growth. 
                Here's what sets us apart from the competition.
              </p>
            </div>

            <div className="space-y-4">
              {whyChooseUs.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-6 h-6 bg-gradient-tech rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-text-primary font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Client Testimonial Preview */}
            <div className="bg-surface rounded-xl p-6 border border-border shadow-elevation-1">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-text-primary italic mb-4">
                "DigiTekk transformed our business operations completely. Their team's expertise 
                and dedication to quality is unmatched in the industry."
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-tech rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">JD</span>
                </div>
                <div>
                  <div className="font-semibold text-text-primary">John Davidson</div>
                  <div className="text-sm text-text-secondary">CEO, TechCorp Solutions</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-tech rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-8 text-center">Our Process</h3>
              
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Discovery & Planning', desc: 'Understanding your needs and goals' },
                  { step: '02', title: 'Design & Development', desc: 'Creating your solution with precision' },
                  { step: '03', title: 'Testing & Deployment', desc: 'Ensuring quality and smooth launch' },
                  { step: '04', title: 'Support & Maintenance', desc: 'Ongoing support for your success' },
                ].map((item, index) => (
                  <div 
                    key={item.step}
                    className="flex items-center space-x-4 animate-slide-up"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-sm text-blue-100">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
