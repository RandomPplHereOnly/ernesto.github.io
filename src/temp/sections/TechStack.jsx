const TechStack = () => {
  return (
    <Section id="stack">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Technical Arsenal</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          I choose the right tool for the job. Here is my preferred stack for building scalable, high-performance applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(SKILLS).map(([key, category]) => (
          <div key={key} className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6 text-teal-600 dark:text-teal-400">
              <div className="p-2 bg-teal-50 dark:bg-teal-900/30 rounded-lg">
                {category.icon}
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white capitalize">{category.title}</h3>
            </div>
            <ul className="space-y-2">
              {category.skills.map(skill => (
                <li key={skill} className="flex items-center text-slate-600 dark:text-slate-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600 mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TechStack;