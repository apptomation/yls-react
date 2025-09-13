import React from 'react';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

const TeamSection = () => {
  const leadership = [
    {
      name: 'Alex Chen',
      position: 'CEO & Co-Founder',
      bio: 'Visionary leader with 15+ years in enterprise software. Former VP of Engineering at TechCorp.',
      avatar: 'AC',
      specialties: ['Strategic Leadership', 'Digital Transformation', 'Enterprise Architecture'],
      social: {
        linkedin: 'https://linkedin.com/in/alexchen',
        twitter: 'https://twitter.com/alexchen',
        email: 'alex@digitekk.com'
      }
    },
    {
      name: 'Sarah Martinez',
      position: 'CTO & Co-Founder',
      bio: 'Technology innovator passionate about scalable solutions. PhD in Computer Science from Stanford.',
      avatar: 'SM',
      specialties: ['Cloud Architecture', 'AI/ML', 'System Design'],
      social: {
        linkedin: 'https://linkedin.com/in/sarahmartinez',
        github: 'https://github.com/sarahmartinez',
        email: 'sarah@digitekk.com'
      }
    },
    {
      name: 'David Kim',
      position: 'VP of Engineering',
      bio: 'Full-stack expert leading our development teams. Former Senior Architect at Microsoft.',
      avatar: 'DK',
      specialties: ['Team Leadership', 'Agile Development', 'Code Quality'],
      social: {
        linkedin: 'https://linkedin.com/in/davidkim',
        github: 'https://github.com/davidkim',
        email: 'david@digitekk.com'
      }
    },
    {
      name: 'Emily Johnson',
      position: 'VP of Client Success',
      bio: 'Customer-focused leader ensuring exceptional client experiences and successful project delivery.',
      avatar: 'EJ',
      specialties: ['Client Relations', 'Project Management', 'Business Strategy'],
      social: {
        linkedin: 'https://linkedin.com/in/emilyjohnson',
        twitter: 'https://twitter.com/emilyjohnson',
        email: 'emily@digitekk.com'
      }
    }
  ];

  const departments = [
    {
      name: 'Engineering',
      size: 25,
      description: 'Full-stack developers, DevOps engineers, and architects building scalable solutions.',
      color: 'bg-blue-500',
    },
    {
      name: 'Design',
      size: 8,
      description: 'UX/UI designers creating intuitive and beautiful user experiences.',
      color: 'bg-purple-500',
    },
    {
      name: 'Cloud & Infrastructure',
      size: 12,
      description: 'Cloud architects and infrastructure specialists ensuring reliable, scalable systems.',
      color: 'bg-green-500',
    },
    {
      name: 'Data & AI',
      size: 10,
      description: 'Data scientists and ML engineers unlocking insights from complex datasets.',
      color: 'bg-orange-500',
    },
    {
      name: 'Quality Assurance',
      size: 8,
      description: 'QA engineers ensuring every solution meets the highest standards.',
      color: 'bg-red-500',
    },
    {
      name: 'Business & Strategy',
      size: 7,
      description: 'Business analysts and consultants bridging technology and business needs.',
      color: 'bg-cyan-500',
    }
  ];

  return (
    <section className="section-padding bg-secondary-50">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our diverse team of experts brings together decades of experience across 
            technology, design, and business strategy to deliver exceptional results.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-12 text-center">
            Leadership Team
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <div 
                key={leader.name}
                className="bg-surface rounded-2xl p-8 shadow-elevation-1 hover:shadow-elevation-3 transition-all duration-300 hover:-translate-y-2 text-center group animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Avatar */}
                <div className="w-24 h-24 bg-gradient-tech rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-tech">
                  <span className="text-white font-bold text-2xl">{leader.avatar}</span>
                </div>
                
                {/* Info */}
                <h4 className="text-xl font-bold text-text-primary mb-2">{leader.name}</h4>
                <p className="text-primary font-medium mb-4">{leader.position}</p>
                <p className="text-text-secondary text-sm mb-6 leading-relaxed">{leader.bio}</p>
                
                {/* Specialties */}
                <div className="mb-6">
                  <h5 className="text-xs font-semibold text-text-primary uppercase tracking-wide mb-3">
                    Specialties
                  </h5>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {leader.specialties.map((specialty) => (
                      <span 
                        key={specialty}
                        className="bg-primary-100 text-primary text-xs px-2 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  {leader.social.linkedin && (
                    <a
                      href={leader.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-secondary-100 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors duration-200"
                    >
                      <Linkedin className="w-4 h-4 text-blue-600" />
                    </a>
                  )}
                  {leader.social.twitter && (
                    <a
                      href={leader.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-secondary-100 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors duration-200"
                    >
                      <Twitter className="w-4 h-4 text-blue-500" />
                    </a>
                  )}
                  {leader.social.github && (
                    <a
                      href={leader.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-secondary-100 hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors duration-200"
                    >
                      <Github className="w-4 h-4 text-gray-700" />
                    </a>
                  )}
                  <a
                    href={`mailto:${leader.social.email}`}
                    className="w-8 h-8 bg-secondary-100 hover:bg-green-100 rounded-lg flex items-center justify-center transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4 text-green-600" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Departments */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-12 text-center">
            Our Departments
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div 
                key={dept.name}
                className="bg-surface rounded-xl p-6 shadow-elevation-1 hover:shadow-elevation-2 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${dept.color} rounded-lg flex items-center justify-center mr-4`}>
                    <span className="text-white font-bold text-lg">{dept.size}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-text-primary">{dept.name}</h4>
                    <p className="text-sm text-text-secondary">{dept.size} Team Members</p>
                  </div>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {dept.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Join Our Team CTA */}
        <div className="bg-gradient-tech rounded-2xl p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Join Our Amazing Team</h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for 
            innovation and excellence. Come build the future with us.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { label: 'Remote-First Culture', value: '100%' },
              { label: 'Learning Budget', value: '$5,000' },
              { label: 'Flexible Hours', value: 'Always' },
            ].map((benefit, index) => (
              <div 
                key={benefit.label}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-2xl font-bold text-accent mb-1">{benefit.value}</div>
                <div className="text-sm text-blue-100">{benefit.label}</div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-secondary bg-white text-primary hover:bg-blue-50">
              View Open Positions
            </button>
            <button className="btn-ghost text-white border-white hover:bg-white/10">
              Learn About Our Culture
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
