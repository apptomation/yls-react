import React, { useState, useEffect, useRef } from 'react';
import '../../../styles/slideAnimations.css';
import '../../../styles/yls.css';

const slides = [
  {
    image: '/img/home/slide1.png',
    title: <>YLS Makes Your <br /> Biz <span className="text-blue-400">Greater.</span></>,
  },
  {
    image: '/img/home/slide2.png',
    title: <>Efficiency <br /> Drives <span className="text-blue-400">Success.</span></>,
  },
  {
    image: '/img/home/slide3.png',
    title: <>Lead, Inspire, <br /> <span className="text-blue-400">Succeed.</span></>,
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

return (
  <>
    <section className="relative w-full min-h-[60vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="relative z-30 w-full flex flex-col md:flex-row items-center justify-center px-6 py-20 md:py-32 gap-10 md:gap-0">
        {/* Content (left) */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-left mb-8 md:mb-0 md:pr-12">
          <h2 data-animation="fadeInUp" className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-8 drop-shadow-xl leading-tight">
            {slides[current].title}
          </h2>
          <a href="/about" className="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl shadow-xl hover:bg-blue-700 transition font-semibold text-xl mb-8">
            Start Exploring
          </a>
        </div>
        {/* Image (right) */}
        <div className="single-welcome-slide">
          <div className="background-curve">
            <img src="./img/core-img/curve-1.png" alt="" />
          </div>
        
        <div className="w-full md:w-1/2 flex items-center justify-center relative min-h-[320px] md:min-h-[480px]">
          <div className="welcome-thumbnail ">
            {slides.map((slide, idx) => (
              <img
                key={slide.image}
                src={slide.image}
                alt={`Slide ${idx + 1}`}
                data-animation="slideInRight"
                className={`w-full h-full max-w-[420px] object-contain rounded-2xl shadow-2xl absolute top-0 left-1/2 -translate-x-1/2 transition-opacity duration-700 ${current === idx ? 'opacity-100 z-10 animate-slide-in-right' : 'opacity-0 z-0'}`}
                style={{ minHeight: '320px', maxHeight: '480px' }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-blue-200/10 to-transparent z-20 pointer-events-none rounded-2xl" />
          </div>
        </div>
</div>


      </div>
      {/* Slider dots for mobile */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-40">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-4 h-4 rounded-full border-2 border-blue-400 ${current === idx ? 'bg-blue-400' : 'bg-white/60'} transition-all duration-300`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>

    <section className="relative w-full py-16 md:py-24 bg-white" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* About Thumbnail */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="/img/home/1 (1).jpg" alt="About Us" className="w-full h-auto object-cover" />
            </div>
          </div>
          {/* About Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-12">
            <div className="mb-8">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">We're an Agency Team &amp; Outsourcing Business</h2>
              <p className="text-gray-700 mb-6">Welcome to our agency, your trusted partner for comprehensive outsourcing services. We have been dedicated to delivering exceptional solutions to businesses across various industries, empowering them to focus on their core competencies while we handle their non-core functions.</p>
              <a href="/profile" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition font-semibold text-base mt-4">Read More</a>
            </div>
          </div>
        </div>
      </div>
      {/* About Background Pattern */}
      <div className="absolute right-0 bottom-0 w-32 md:w-48 opacity-40 pointer-events-none">
        <img src="/img/core-img/curve-2.png" alt="Pattern" className="w-full h-auto" />
      </div>
    </section>
  </>
);
}