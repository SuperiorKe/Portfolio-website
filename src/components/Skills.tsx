import React from 'react';

interface SkillCategory {
  title: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages & Frameworks',
      skills: ['JavaScript/TypeScript', 'Python', 'React', 'Next.js', 'Django', 'FastAPI', 'Node.js'],
    },
    {
      title: 'Frontend',
      skills: ['Tailwind CSS', 'Responsive Design', 'ShadCN/UI', 'Figma'],
    },
    {
      title: 'Backend & APIs',
      skills: ['RESTful APIs', 'Webhooks', 'Stripe API', 'tRPC', 'GraphQL'],
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Drizzle ORM'],
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS (S3, RDS, EC2, SES)', 'Docker', 'Kubernetes (EKS)', 'CI/CD', 'Vercel', 'GitHub Actions'],
    },
    {
      title: 'Currently Learning',
      skills: ['ML Systems', 'System Design', 'Advanced Kubernetes'],
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 px-3 sm:px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-8 sm:mb-12 md:mb-16 text-center">
          Technical Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-lg p-5 sm:p-6 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-300">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-white text-slate-700 text-sm rounded-md font-medium border border-slate-200 hover:border-blue-400 hover:text-blue-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
