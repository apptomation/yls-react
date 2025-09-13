import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Database, 
  Shield, 
  Zap,
  ArrowRight 
} from 'lucide-react';
import Button from '../../../components/ui/Button';

const ServicesOverview = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies for optimal performance and user experience.',
      features: ['React & Vue.js', 'Node.js Backend', 'Responsive Design', 'SEO Optimized'],
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization'],
      color: 'text-green-500',
      bgColor: 'bg-green-50',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to modernize your business operations.',
      features: ['AWS & Azure', 'DevOps & CI/CD', 'Microservices', 'Auto Scaling'],
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence.',
      features: ['Big Data Processing', 'Machine Learning', 'Real-time Analytics', 'Custom Dashboards'],
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Management', '24/7 Monitoring'],
      color: 'text-red-500',
      bgColor: 'bg-red-50',
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business processes.',
      features: ['Process Automation', 'Legacy System Migration', 'Change Management', 'Training & Support'],
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-50',
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Our <span className="text-gradient">IT Solutions</span> & Services
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            We provide comprehensive technology solutions tailored to your business needs. 
            From concept to deployment, we're your trusted technology partner.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.title}
                className="card-hover group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${service.color}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-text-secondary">
                        <div className={`w-1.5 h-1.5 ${service.color.replace('text-', 'bg-')} rounded-full mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <Link 
                    to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-primary font-medium hover:text-primary-700 transition-colors group-hover:translate-x-1 transform duration-200"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-tech rounded-2xl p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our IT solutions can help you achieve your business goals. 
            Get a free consultation with our experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-blue-50" asChild>
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10" asChild>
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
