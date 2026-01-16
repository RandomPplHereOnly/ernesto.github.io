import { Palette, Smartphone, PenTool, Download } from 'lucide-react';
import { Section } from '../components';
import { DESIGN_PORTFOLIO } from '../data/designPortfolio';

const UiUxShowcase = () => {
  return (
    <Section id="design">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            UI/UX Design
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
            Beyond code, I craft digital experiences that look beautiful and feel intuitive.
          </p>
        </div>
        <div className="flex gap-2">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg">
                <Palette size={20} />
            </div>
             <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                <Smartphone size={20} />
            </div>
             <div className="p-2 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-lg">
                <PenTool size={20} />
            </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {DESIGN_PORTFOLIO.map((item, index) => (
          <div key={index} className="group relative rounded-2xl overflow-hidden cursor-pointer h-80 shadow-md hover:shadow-2xl transition-all">
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} transition-transform duration-700 group-hover:scale-110`}></div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-300"></div>
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-8 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
               <div className="text-xs font-bold uppercase tracking-wider mb-2 opacity-80 flex items-center gap-2">
                 <span className="w-1 h-1 bg-white rounded-full"></span>
                 {item.category}
               </div>
               <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
               <p className="text-sm text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-6 leading-relaxed">
                 {item.description}
               </p>
               <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <div className="flex gap-2">
                      {item.tools.map(t => (
                          <span key={t} className="text-[10px] font-medium border border-white/30 bg-white/10 px-2 py-1 rounded backdrop-blur-md">
                            {t}
                          </span>
                      ))}
                  </div>
                   <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle download logic here
                    }}
                    className="flex items-center gap-1 text-xs font-bold bg-white text-slate-900 px-3 py-1.5 rounded-full hover:bg-teal-50 transition-colors"
                  >
                    <Download size={12} /> Download
                  </button>
               </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default UiUxShowcase;