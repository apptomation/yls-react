import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navigationItems = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'About Us',
      path: '/about-us',
    },
    {
      label: 'Profile',
      path: '/profile',
    },
    {
      label: 'Contact',
      path: '/contact',
    },
  ];

  const isActivePath = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-surface/95 backdrop-blur-lg shadow-elevation-2 border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-tech rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Y</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-text-primary">YLS</h1>
              <p className="text-xs text-text-secondary">Business Management</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActivePath(item.path)
                      ? 'text-primary bg-primary-50'
                      : 'text-text-primary hover:text-primary hover:bg-primary-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="bg-surface rounded-lg shadow-elevation-3 border border-border p-2">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          to={dropdownItem.path}
                          className="block px-4 py-3 text-sm text-text-primary hover:text-primary hover:bg-primary-50 rounded-md transition-colors duration-200"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          {/* <div className="hidden lg:flex items-center space-x-4">
            <Button variant="secondary" size="sm" asChild>
              <Link to="/contact">Get Quote</Link>
            </Button>
            <Button variant="primary" size="sm" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-text-primary hover:bg-secondary-100 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-surface/95 backdrop-blur-lg">
            <nav className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.path}
                    className={`block px-4 py-3 text-base font-medium rounded-md transition-colors duration-200 ${
                      isActivePath(item.path)
                        ? 'text-primary bg-primary-50'
                        : 'text-text-primary hover:text-primary hover:bg-primary-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                  
                  {/* Mobile Dropdown Items */}
                  {item.hasDropdown && (
                    <div className="pl-4 space-y-1">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          to={dropdownItem.path}
                          className="block px-4 py-2 text-sm text-text-secondary hover:text-primary hover:bg-primary-50 rounded-md transition-colors duration-200"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Buttons */}
              {/* <div className="pt-4 px-4 space-y-3 border-t border-border">
                <Button variant="secondary" size="default" className="w-full" asChild>
                  <Link to="/contact">Get Quote</Link>
                </Button>
                <Button variant="primary" size="default" className="w-full" asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div> */}

            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
