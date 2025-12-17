import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 px-3 sm:px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 sm:mb-8 md:mb-12">About Me</h2>
        
        {/* Content with optional profile photo */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
          {/* Profile Photo - Optional */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-100 to-slate-200 flex items-center justify-center overflow-hidden border-4 border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200">
              <img
                src="/images/profile.jpg"
                alt="Kenn Macharia"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <div className="space-y-4 sm:space-y-5 text-slate-700 leading-relaxed">
              <p className="text-sm sm:text-base md:text-lg leading-7">
                I'm a self-taught developer based in Nairobi, Kenya.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg leading-7">
                I've spent the last 2 years building full-stack web applications — from e-commerce platforms 
                with Stripe integration to AI-powered chatbots with FastAPI and Redis.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg leading-7">
                Before software, I was an automotive electrician. Debugging electrical systems taught me how 
                to think systematically — a skill that translates directly to debugging code and designing systems.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg leading-7">
                I learn fast, ship products, and iterate based on feedback. Currently looking for my first 
                full-time role at a startup where I can learn from a team and contribute to products people 
                actually use.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg leading-7">
                When I'm not coding, I'm reading about ML systems, solving problems on Codewars, or building 
                tools for local artisans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
