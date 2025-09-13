import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Instagram
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Web Development', path: '/services/web-development' },
      { label: 'Mobile Apps', path: '/services/mobile-apps' },
      { label: 'Cloud Solutions', path: '/services/cloud-solutions' },
      { label: 'Digital Transformation', path: '/services/digital-transformation' },
      { label: 'Cybersecurity', path: '/services/cybersecurity' },
      { label: 'Data Analytics', path: '/services/data-analytics' },
    ],
    company: [
      { label: 'About Us', path: '/about-us' },
      { label: 'Our Team', path: '/team' },
      { label: 'Careers', path: '/careers' },
      { label: 'Portfolio', path: '/portfolio' },
      { label: 'Case Studies', path: '/case-studies' },
      { label: 'Blog', path: '/blog' },
    ],
    support: [
      { label: 'Contact Us', path: '/contact' },
      { label: 'Help Center', path: '/help' },
      { label: 'Documentation', path: '/docs' },
      { label: 'System Status', path: '/status' },
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Terms of Service', path: '/terms' },
    ],
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@digitekk.com',
      link: 'mailto:hello@digitekk.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Innovation Drive, Tech Valley, CA 94016',
      link: 'https://maps.google.com',
    },
  ];

  const socialLinks = [
    { icon: Facebook, link: 'https://facebook.com/digitekk', label: 'Facebook' },
    { icon: Twitter, link: 'https://twitter.com/digitekk', label: 'Twitter' },
    { icon: Linkedin, link: 'https://linkedin.com/company/digitekk', label: 'LinkedIn' },
    { icon: Github, link: 'https://github.com/digitekk', label: 'GitHub' },
    { icon: Instagram, link: 'https://instagram.com/digitekk', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gradient-hero text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">DigiTekk</h1>
                <p className="text-sm text-secondary-200">IT Solutions & Digital Services</p>
              </div>
            </div>
            
            <p className="text-secondary-200 leading-relaxed">
              Empowering businesses with innovative technology solutions. We transform ideas 
              into powerful digital experiences that drive growth and success.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((contact) => {
                const IconComponent = contact.icon;
                return (
                  <a
                    key={contact.label}
                    href={contact.link}
                    className="flex items-center space-x-3 text-secondary-200 hover:text-white transition-colors duration-200 group"
                  >
                    <IconComponent className="w-5 h-5 text-accent" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {contact.value}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-secondary-200 hover:text-white transition-colors duration-200 group flex items-center"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.label}
                    </span>
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-secondary-200 hover:text-white transition-colors duration-200 group flex items-center"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.label}
                    </span>
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-secondary-200 hover:text-white transition-colors duration-200 group flex items-center"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.label}
                    </span>
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto container-padding py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-secondary-200">
                Get the latest insights on technology trends, best practices, and company updates.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-secondary-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <button className="btn-accent whitespace-nowrap">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto container-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-secondary-200 text-sm">
              © {currentYear} DigiTekk. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-secondary-200 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-secondary-200 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-secondary-200 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
