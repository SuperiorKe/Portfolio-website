import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 sm:py-8 px-3 sm:px-4 md:px-6 lg:px-8 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4">
          © 2025 Kenn Macharia · Built with React & Tailwind CSS
        </p>
        
        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
          <a
            href="https://github.com/SuperiorKe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 hover:underline transition-all font-medium active:scale-95"
            aria-label="GitHub Profile"
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com/in/kenn-macharia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 hover:underline transition-all font-medium active:scale-95"
            aria-label="LinkedIn Profile"
          >
            LinkedIn ↗
          </a>
          <a
            href="mailto:superiorwech@gmail.com"
            className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 hover:underline transition-all font-medium active:scale-95"
            aria-label="Email"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
