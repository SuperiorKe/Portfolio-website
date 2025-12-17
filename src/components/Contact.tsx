import React from 'react';

const Contact: React.FC = () => {
  const handleDownloadResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-3 sm:px-4 md:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 md:mb-8">
          Let's Talk
        </h2>
        
        <p className="text-sm sm:text-base md:text-lg text-slate-700 mb-6 sm:mb-8 md:mb-10 leading-relaxed">
          I'm currently open to junior/mid-level software engineering roles in Nairobi.
        </p>
        
        <p className="text-sm sm:text-base md:text-lg text-slate-700 mb-8 sm:mb-10 md:mb-12 leading-relaxed">
          If you're hiring or know someone who is, let's connect:
        </p>

        {/* Contact Links */}
        <div className="space-y-3 sm:space-y-4 md:space-y-5">
          {/* Email */}
          <a
            href="mailto:superiorwech@gmail.com"
            className="block text-base sm:text-lg md:text-xl text-blue-600 hover:text-blue-700 hover:underline font-semibold transition-all active:scale-95"
          >
            📧 superiorwech@gmail.com
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/kenn-macharia"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-base sm:text-lg md:text-xl text-blue-600 hover:text-blue-700 hover:underline font-semibold transition-all active:scale-95"
          >
            💼 linkedin.com/in/kenn-macharia
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/SuperiorKe"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-base sm:text-lg md:text-xl text-blue-600 hover:text-blue-700 hover:underline font-semibold transition-all active:scale-95"
          >
            💻 github.com/SuperiorKe
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/254715035359"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-base sm:text-lg md:text-xl text-blue-600 hover:text-blue-700 hover:underline font-semibold transition-all active:scale-95"
          >
            📱 +254 715 035 359
          </a>

          {/* Resume Download */}
          <button
            onClick={handleDownloadResume}
            className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:bg-blue-700 hover:shadow-lg active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            📄 Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
