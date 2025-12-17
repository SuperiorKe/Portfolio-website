import React from 'react';

const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      // Calculate offset for fixed headers if needed
      const offset = 0;
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleDownloadResume = () => {
    // Will link to resume.pdf once it's added
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Heading - Extra Large Typography */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-slate-900 mb-4 sm:mb-6 md:mb-8 leading-tight px-2">
          Hi, I'm <span className="text-blue-600">Kenn Macharia</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-slate-600 mb-6 sm:mb-8 md:mb-10 font-medium leading-relaxed px-2">
          Full-Stack Developer | Building AI-Powered Tools for Real Problems
        </p>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-700 mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
          I build products that solve real business problems — from e-commerce platforms to AI chatbots.
        </p>

        {/* Status */}
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600 mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto px-2">
          Currently looking for my first full-time role at a startup in Nairobi.
        </p>

        {/* CTA Buttons - Clean and Clear */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center flex-wrap px-2">
          {/* Primary CTA */}
          <button
            onClick={scrollToProjects}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:bg-blue-700 hover:shadow-lg active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            View My Work ↓
          </button>

          {/* Secondary CTA */}
          <button
            onClick={handleDownloadResume}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:bg-blue-50 hover:border-blue-700 hover:shadow-md active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Download Resume
          </button>

          {/* Social Links */}
          <a
            href="https://github.com/SuperiorKe"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-slate-100 text-slate-700 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:bg-slate-200 hover:shadow-md active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 inline-flex items-center justify-center gap-2"
            aria-label="GitHub Profile"
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com/in/kenn-macharia"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-slate-100 text-slate-700 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:bg-slate-200 hover:shadow-md active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 inline-flex items-center justify-center gap-2"
            aria-label="LinkedIn Profile"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
