const Testimonials = () => {
  return (
    <Section id="testimonials">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">What People Say</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm relative">
            <Quote className="absolute top-8 right-8 text-teal-500/20 w-10 h-10" />
            <p className="text-slate-600 dark:text-slate-400 italic mb-6 relative z-10">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-500">
                {t.author[0]}
              </div>
              <div>
                <div className="font-bold text-slate-900 dark:text-white text-sm">{t.author}</div>
                <div className="text-teal-600 dark:text-teal-400 text-xs">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Testimonials;