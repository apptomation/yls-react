import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CTO',
      company: 'InnovateTech Solutions',
      avatar: 'SJ',
      rating: 5,
      text: 'DigiTekk transformed our entire digital infrastructure. Their cloud migration strategy saved us 40% in operational costs while improving our system performance dramatically.',
      project: 'Cloud Migration & DevOps'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'CEO',
      company: 'RetailMax Enterprise',
      avatar: 'MC',
      rating: 5,
      text: 'The e-commerce platform they built for us increased our online sales by 250% in just six months. Their attention to user experience is exceptional.',
      project: 'E-commerce Development'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Operations Director',
      company: 'Healthcare Plus',
      avatar: 'ER',
      rating: 5,
      text: 'Their custom healthcare management system streamlined our operations and improved patient care. The team was professional and delivered on time.',
      project: 'Healthcare Management System'
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'Founder',
      company: 'FinanceFlow',
      avatar: 'DT',
      rating: 5,
      text: 'Security was our top priority, and DigiTekk delivered a robust fintech solution that exceeds industry standards. Highly recommended!',
      project: 'Fintech Security Platform'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      position: 'VP Technology',
      company: 'EduTech Global',
      avatar: 'LW',
      rating: 5,
      text: 'The learning management platform they created revolutionized our online education delivery. Student engagement increased by 180%.',
      project: 'Learning Management System'
    },
    {
      id: 6,
      name: 'Robert Kumar',
      position: 'IT Director',
      company: 'ManufacturePro',
      avatar: 'RK',
      rating: 5,
      text: 'Their IoT solution optimized our manufacturing processes and reduced downtime by 60%. The ROI was evident within the first quarter.',
      project: 'IoT Manufacturing Solution'
    }
  ];

  return (
    <section className="section-padding bg-secondary-50">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say 
            about their experience working with DigiTekk.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-surface rounded-xl p-8 shadow-elevation-1 hover:shadow-elevation-3 transition-all duration-300 hover:-translate-y-2 relative animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-6 h-6 text-primary/20" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Project Type */}
              <div className="inline-block bg-primary-100 text-primary text-xs font-medium px-3 py-1 rounded-full mb-4">
                {testimonial.project}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-text-primary mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-tech rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold text-text-primary">{testimonial.name}</div>
                  <div className="text-sm text-text-secondary">
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-surface rounded-2xl p-12 text-center shadow-elevation-1">
          <h3 className="text-2xl font-bold text-text-primary mb-8">
            Trusted by Industry Leaders
          </h3>
          
          {/* Company Logos Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[
              'TechCorp', 'InnovateLab', 'DataFlow', 'CloudMax', 'SecureNet', 'FutureApp'
            ].map((company, index) => (
              <div 
                key={company}
                className="bg-secondary-100 rounded-lg p-6 text-center animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-tech rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{company.charAt(0)}</span>
                </div>
                <div className="text-xs font-medium text-text-secondary">{company}</div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-lg text-text-secondary mb-6">
              Ready to join our success stories?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Start Your Project
              </button>
              <button className="btn-secondary">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
