import React from 'react';

interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  learnings: string;
  links: {
    live?: string;
    github?: string;
    caseStudy?: string;
    demo?: string;
  };
  image: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 'afrimall',
      name: 'Afrimall E-Commerce Platform',
      description: 'Full-stack e-commerce platform with secure Stripe checkout, real-time notifications via AWS SES, and optimized load times through server-side rendering. Achieved 99.9% uptime.',
      techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe API', 'AWS (S3, SES)'],
      learnings: 'Scaling payment integrations, optimizing load times with SSR, handling real customer data',
      links: {
        live: 'https://afrimall.app',
        github: 'https://github.com/SuperiorKe/afrimall',
      },
      image: '/images/projects/afrimall.png',
    },
    {
      id: 'sms-chatbot',
      name: 'SMS-AI Chatbot',
      description: 'Webhook-driven chatbot with NLP pipeline for intent recognition. Built with FastAPI and Redis for real-time conversation state management.',
      techStack: ['FastAPI', 'Redis', 'NLP', 'Webhooks'],
      learnings: 'Real-time state management, webhook architecture, designing conversation flows',
      links: {
        demo: '#',
        github: 'https://github.com/SuperiorKe/sms-chatbot',
      },
      image: '/images/projects/ai-chatbot.png',
    },
    {
      id: 'carbon-calc',
      name: 'Carbon Footprint Calculator',
      description: 'Data-driven sustainability tool with intuitive dashboards for tracking carbon emissions. Migrated to AWS infrastructure for reliable scaling.',
      techStack: ['Django', 'PostgreSQL (AWS RDS)', 'React'],
      learnings: 'Database migrations to AWS, dashboard design, data visualization',
      links: {
        live: '#',
        github: 'https://github.com/SuperiorKe/carbon-calculator',
      },
      image: '/images/projects/carbon-calculator.png',
    },
    {
      id: 'worklog',
      name: 'Worklog Tracker',
      description: 'Personal productivity app with real-time data syncing and authentication. Optimized component structure improved rendering speed by 40%.',
      techStack: ['React', 'Supabase'],
      learnings: 'Real-time data syncing, authentication flows, query optimization',
      links: {
        github: 'https://github.com/SuperiorKe/worklog-tracker',
      },
      image: '/images/projects/work-tracker.png',
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 px-3 sm:px-4 md:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-8 sm:mb-12 md:mb-16 text-center">
          Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="w-full h-40 sm:h-48 bg-slate-100 border-b border-slate-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>

                {/* Project Description */}
                <p className="text-sm sm:text-base text-slate-700 mb-3 sm:mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="mb-3 sm:mb-4">
                  <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-1 sm:mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 bg-slate-100 text-slate-700 text-xs sm:text-sm rounded-md font-medium hover:bg-slate-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* What I Learned */}
                <div className="mb-4 sm:mb-6">
                  <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-1">What I Learned:</p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{project.learnings}</p>
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-slate-200">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 hover:underline font-semibold text-xs sm:text-sm flex items-center gap-1 transition-all"
                    >
                      Live Demo ↗
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 hover:underline font-semibold text-xs sm:text-sm flex items-center gap-1 transition-all"
                    >
                      Demo Video ↗
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 hover:underline font-semibold text-xs sm:text-sm flex items-center gap-1 transition-all"
                    >
                      GitHub ↗
                    </a>
                  )}
                  {project.links.caseStudy && (
                    <a
                      href={project.links.caseStudy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 hover:underline font-semibold text-xs sm:text-sm flex items-center gap-1 transition-all"
                    >
                      Case Study ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
