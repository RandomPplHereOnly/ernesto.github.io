// Toast Notification Component
const Toast = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100] animate-fade-in-up">
      <div className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 border border-slate-700 dark:border-slate-200">
        <CheckCircle className="text-teal-500" size={20} />
        <span className="font-medium">{message}</span>
        <button onClick={onClose} className="ml-4 opacity-50 hover:opacity-100 transition-opacity">
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default Toast;