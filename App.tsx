
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ExternalLink, Mail, Youtube, 
  Gamepad2, Video, Sparkles, GraduationCap, 
  Briefcase, Code2, Globe, ChevronRight 
} from 'lucide-react';
import { PROJECTS, SKILLS, EXPERIENCES } from './constants';
import { Project } from './types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-4 shadow-2xl' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-black tracking-tighter cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500 group-hover:from-fuchsia-500 group-hover:to-cyan-400 transition-all duration-500">
            DENG YUXIAO
          </span>
        </motion.div>

        <div className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass border-t border-white/10 mt-4 overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-2xl font-black text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ToolTag: React.FC<{ text: string }> = ({ text }) => (
  <motion.span 
    whileHover={{ y: -3, scale: 1.05 }}
    className="px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest glass bg-white/5 border border-white/10 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.1)]"
  >
    {text}
  </motion.span>
);

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/60 to-[#050505]" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-technology-digital-interface-31991-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-fuchsia-500/5 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-block px-4 py-1.5 mb-8 rounded-full glass border border-cyan-500/30 text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400"
          >
            Technical Animator | Character Performance
          </motion.span>
          <h1 className="text-7xl md:text-[10rem] font-black mb-4 leading-[0.85] tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500">
            DENG YUXIAO
          </h1>
          <p className="max-w-xl mx-auto text-lg text-gray-400 mb-12 font-medium leading-relaxed tracking-tight">
            Specializing in high-end character performance, cinematic motion capture, and next-gen AIGC animation pipelines.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {['UE5', 'Unity', 'MoCap', 'Character Rigging', 'AIGC Animation'].map((tool, i) => (
            <motion.div
              key={tool}
              animate={{ 
                y: [0, -6, 0],
                transition: { duration: 4, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }
              }}
            >
              <ToolTag text={tool} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a 
            href="#projects" 
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('projects');
              if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
            }}
            className="px-10 py-5 rounded-full bg-white text-black font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
          >
            Explore Showcase
          </a>
          <a href="mailto:1348808477@qq.com" className="px-10 py-5 rounded-full glass border border-white/10 font-black uppercase tracking-widest text-xs hover:bg-white/5 transition-all">
            Contact Me
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20">
        <div className="w-0.5 h-16 rounded-full bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass group rounded-3xl overflow-hidden flex flex-col h-full border border-white/10 hover:border-cyan-500/30 transition-all duration-500"
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
        <div className="absolute bottom-4 left-6">
          <span className="px-3 py-1 rounded-lg glass text-[9px] font-black uppercase tracking-widest text-cyan-400 border border-cyan-500/20">
            {project.type}
          </span>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-black mb-2 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs font-bold text-fuchsia-400 mb-6 uppercase tracking-widest opacity-80">{project.subtitle}</p>
        
        <div className="space-y-3 mb-8 flex-grow">
          {project.description.map((desc, i) => (
            <div key={i} className="flex gap-3 items-start text-sm text-gray-400 leading-relaxed font-medium">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0" />
              <span>{desc}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold px-3 py-1 rounded bg-white/5 border border-white/10 text-gray-400">
              {tag}
            </span>
          ))}
        </div>

        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-cyan-400 hover:text-white transition-colors mt-auto"
          >
            Launch Project <ExternalLink size={14} className="ml-1" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Game' | 'Animation' | 'AIGC'>('All');
  const filtered = PROJECTS.filter(p => filter === 'All' || p.type === filter);

  return (
    <section id="projects" className="py-32 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">ENGINEERING <br/><span className="text-cyan-500">EXPERIENCE</span></h2>
            <p className="text-gray-400 text-lg font-medium">From technical rigging systems in Unity to cinematic storytelling in Unreal Engine.</p>
          </div>
          <div className="flex flex-wrap gap-2 p-1.5 glass rounded-2xl">
            {(['All', 'Game', 'Animation', 'AIGC'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                  filter === type 
                    ? 'bg-white text-black shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 glass border-y border-white/5 relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 gradient-bg opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">Technical <span className="text-fuchsia-500">Arsenal</span></h2>
          <p className="text-gray-400 text-lg font-medium">Propelling character expression with advanced toolsets.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="p-10 rounded-[2.5rem] glass border border-white/5 hover:border-cyan-500/20 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                {i === 0 && <Gamepad2 className="text-cyan-400" size={28} />}
                {i === 1 && <Code2 className="text-fuchsia-400" size={28} />}
                {i === 2 && <Video className="text-amber-400" size={28} />}
                {i === 3 && <Sparkles className="text-blue-400" size={28} />}
              </div>
              <h3 className="text-xl font-black mb-6 uppercase tracking-widest">{cat.title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map(s => (
                  <span key={s} className="text-[11px] font-bold px-4 py-2 rounded-xl bg-white/5 text-gray-300 border border-white/5 group-hover:bg-white/10 transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-6 mb-24">
          <div className="p-4 rounded-3xl bg-cyan-500/10">
            <Briefcase className="text-cyan-400" size={32} />
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">History</h2>
        </div>

        <div className="space-y-20">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative pl-12 border-l border-white/10"
            >
              <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,1)]" />
              <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-3xl font-black text-white mb-2">{exp.role}</h3>
                  <p className="text-fuchsia-400 font-black uppercase tracking-widest text-sm">{exp.company}</p>
                </div>
                <span className="text-[10px] font-black tracking-widest glass px-5 py-2 rounded-full border border-white/10 text-gray-400 uppercase">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-4">
                {exp.points.map((p, j) => (
                  <li key={j} className="text-gray-400 text-base leading-relaxed flex gap-4 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2.5 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-3">
                {exp.tools.map(tool => (
                  <span key={tool} className="text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg glass bg-cyan-500/5 text-cyan-400 border border-cyan-500/10">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Education: React.FC = () => {
  return (
    <section id="education" className="py-32 glass border-t border-white/5 relative scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-6 mb-20">
          <div className="p-4 rounded-3xl bg-amber-500/10">
            <GraduationCap className="text-amber-400" size={32} />
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Roots</h2>
        </div>

        <div className="grid gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[2.5rem] glass border border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 hover:bg-white/5 transition-colors"
          >
            <div>
              <h3 className="text-3xl font-black mb-2">University of Birmingham, UK</h3>
              <p className="text-amber-400 font-black uppercase tracking-widest text-xs">MSc Digital Media and Creative Industries</p>
            </div>
            <span className="text-[10px] font-black glass px-6 py-2.5 rounded-full border border-white/10 text-gray-400 uppercase tracking-widest">
              2025 - 2026
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[2.5rem] glass border border-white/10 hover:bg-white/5 transition-colors"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
              <div>
                <h3 className="text-3xl font-black mb-2">Xiamen University, China</h3>
                <p className="text-amber-400 font-black uppercase tracking-widest text-xs">BEng Digital Media Technology</p>
              </div>
              <span className="text-[10px] font-black glass px-6 py-2.5 rounded-full border border-white/10 text-gray-400 uppercase tracking-widest">
                2021 - 2025
              </span>
            </div>
            <div className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-cyan-400 bg-cyan-500/5 px-6 py-3 rounded-2xl border border-cyan-500/10">
              <Sparkles size={16} />
              Excellence Award in Computer Animation
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="py-32 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500 uppercase">
          Collaborate?
        </h2>
        <p className="text-gray-400 mb-16 max-w-2xl mx-auto text-xl font-medium tracking-tight">
          Pushing the boundaries of character performance through technical innovation and artistic precision.
        </p>

        <div className="flex justify-center gap-10 mb-20">
          <a href="mailto:1348808477@qq.com" className="group flex flex-col items-center gap-4">
            <div className="p-6 rounded-3xl glass group-hover:bg-cyan-500/10 group-hover:text-cyan-400 transition-all duration-500">
              <Mail size={28} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">Mail</span>
          </a>
          <a href="https://space.bilibili.com/16210268" target="_blank" className="group flex flex-col items-center gap-4">
            <div className="p-6 rounded-3xl glass group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-all duration-500">
              <Globe size={28} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">Bilibili</span>
          </a>
          <a href="https://www.youtube.com/@winestring" target="_blank" className="group flex flex-col items-center gap-4">
            <div className="p-6 rounded-3xl glass group-hover:bg-red-500/10 group-hover:text-red-400 transition-all duration-500">
              <Youtube size={28} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">YouTube</span>
          </a>
        </div>

        <div className="text-[10px] font-black text-gray-600 uppercase tracking-[0.5em]">
          &copy; {new Date().getFullYear()} DENG YUXIAO. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Education />
      </main>
      <Footer />
      
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-900/5 blur-[200px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-900/5 blur-[200px] rounded-full" />
      </div>
    </div>
  );
};

export default App;
