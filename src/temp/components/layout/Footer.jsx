import { Github, Twitter, Linkedin, Mail } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Ernesto Kevin Handoyo</h3>
          <p className="text-slate-500 dark:text-slate-500 text-sm mt-1">Full Stack Developer • UI/UX Designer</p>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-slate-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="text-slate-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-slate-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-slate-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
            <Mail size={20} />
          </a>
        </div>
        
        <div className="text-slate-400 text-xs">
          &copy; {new Date().getFullYear()} Ernesto. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 