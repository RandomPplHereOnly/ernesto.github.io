import { useScrollReveal } from '../../hooks';

// Reusable Section Wrapper with Animation
const Section = ({ children, id, className = "" }) => {
  const [ref, isVisible] = useScrollReveal();
  
  return (
    <section 
      id={id} 
      ref={ref}
      className={`py-20 md:py-32 px-6 transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;