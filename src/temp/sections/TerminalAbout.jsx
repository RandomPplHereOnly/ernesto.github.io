const TerminalAbout = () => {
  const [history, setHistory] = useState([
    { type: 'output', content: 'Welcome to temporary.sh v1.0.0' },
    { type: 'output', content: 'Type "help" to see available commands.' },
  ]);
  const [input, setInput] = useState('');
  const terminalBodyRef = useRef(null);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      const newHistory = [...history, { type: 'input', content: input }];

      let response = '';
      switch (cmd) {
        case 'help':
          response = 'Available commands: about, skills, contact, clear';
          break;
        case 'about':
          response = 'I am a Full Stack Developer bridging the gap between design and engineering. Based in Global/Remote.';
          break;
        case 'skills':
          response = 'Frontend: React, Next.js | Backend: Node, Go | Database: Postgres, Redis';
          break;
        case 'contact':
          response = 'Email: hello@temporary.dev | Twitter: @temporary';
          break;
        case 'clear':
          setHistory([]);
          setInput('');
          return;
        default:
          response = `Command not found: ${cmd}. Type "help" for assistance.`;
      }

      newHistory.push({ type: 'output', content: response });
      setHistory(newHistory);
      setInput('');
    }
  };

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <Section id="about" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">About Me</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              I bridge the gap between design and engineering. My philosophy is simple: technology should be invisible, enabling users to achieve their goals without friction.
            </p>
            <p>
              With a background in both visual design and distributed systems, I bring a unique perspective to full-stack development. I don't just write code; I build product ecosystems.
            </p>
            <p>
              When I'm not deploying to production, you'll find me contributing to open source, optimizing my Vim config, or exploring minimal architecture.
            </p>
          </div>
        </div>

        {/* Interactive Terminal UI */}
        <div className="rounded-xl overflow-hidden bg-slate-900 shadow-2xl border border-slate-700 font-mono text-sm h-80 flex flex-col">
          <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700 shrink-0">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="ml-4 text-slate-400 text-xs">user@temporary:~/interactive</div>
          </div>
          <div 
            ref={terminalBodyRef}
            className="p-4 text-slate-300 flex-1 overflow-y-auto custom-scrollbar"
          >
            {history.map((line, i) => (
              <div key={i} className="mb-2 break-words">
                {line.type === 'input' ? (
                  <div>
                    <span className="text-teal-400">➜</span> <span className="text-purple-400">~</span> <span className="text-white">{line.content}</span>
                  </div>
                ) : (
                  <div className="text-slate-400 pl-4">{line.content}</div>
                )}
              </div>
            ))}
            <div className="flex items-center gap-2 mt-2">
              <span className="text-teal-400">➜</span>
              <span className="text-purple-400">~</span>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                className="bg-transparent border-none outline-none text-white w-full"
                placeholder="Type 'help'..."
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

  
export default TerminalAbout;