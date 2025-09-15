import React from 'react';
import Header from '../../../components/ui/Header';
import Footer from '../../homepage/components/Footer';

const TABS = ["About", "Details"];

export default function Profile() {
  const [selectedTab, setSelectedTab] = React.useState(0);
  return (
       <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
              {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float animation-delay-400"></div>
      </div>


<div className="relative max-w-7xl mx-auto container-padding py-20">
        <div className="text-center space-y-8">
          {/* Main Content */}
          <div className="space-y-6 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="text-gradient">Profile</span>
            </h1>
            <div className="flex flex-col md:flex-row w-full gap-8 mt-8">
              {/* Left: Image */}
              <div className="md:w-1/2 flex items-center justify-center mb-6 md:mb-0">
                <img src="/img/home/samar.png" alt="Profile" className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg" />
              </div>
              {/* Right: Tabs */}
              <div className="md:w-1/2 flex flex-col justify-center">
                <div className="flex space-x-4 mb-6 justify-center md:justify-start">
                  {['Professional Summary', 'Philosophy'].map((tab, idx) => (
                    <button
                      key={tab}
                      className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${
                        selectedTab === idx
                          ? 'bg-accent text-white shadow'
                          : 'bg-white/10 text-secondary-100 hover:bg-accent/20'
                      }`}
                      onClick={() => setSelectedTab(idx)}
                      type="button"
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="text-lg text-secondary-100 bg-white/5 rounded-xl p-6 shadow transition-all duration-300">
                  {selectedTab === 0 && (
                    <span>
                      Dynamic and results-oriented Business Consultant and Project Manager with over 22 years of experience in strategic management and project leadership. A seasoned professional with a strong background in Business Management, Project Management, and Supply Chain Management in the Canadian business landscape. Proven expertise in driving organizational success through effective project delivery, business strategy development, and supply chain optimization.
                    </span>
                  )}
                  {selectedTab === 1 && (
                    <span>
                      My approach to business consulting and project management is centered on collaboration, innovation, and delivering tangible results. I believe in leveraging my diverse skill set and extensive experience to drive positive change and create value for clients and organizations. With a commitment to excellence and a focus on strategic thinking, I aim to consistently exceed expectations and contribute to the success of the businesses I serve.
                    </span>
                  )}
                </div>
              </div>
            </div>
           
          </div>
        </div>
        </div>
        


        </section>
  );
}
