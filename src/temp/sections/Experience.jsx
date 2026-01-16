const Experience = () => {
  return (
    <Section id="experience" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Experience</h2>
        
        <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 md:ml-6 space-y-12">
          {EXPERIENCE.map((job, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-teal-500 border-4 border-white dark:border-slate-900"></span>
              
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{job.company}</h3>
                <span className="text-sm font-mono text-slate-500 dark:text-slate-500">{job.period}</span>
              </div>
              
              <div className="text-teal-600 dark:text-teal-400 font-medium mb-3">{job.role}</div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;