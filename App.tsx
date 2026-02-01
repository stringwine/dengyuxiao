
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ExternalLink, Mail, Github, Youtube, 
  Gamepad2, Video, Sparkles, Cpu, GraduationCap, 
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
      const offset = 80; // Height of the fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          DENG YUXIAO
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-semibold text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 mt-4 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-lg font-medium text-gray-300"
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
    whileHover={{ y: -5, scale: 1.05 }}
    className="px-4 py-1.5 rounded-full text-xs font-bold glass bg-white/5 border border-white/20 whitespace-nowrap text-cyan-200 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
  >
    {text}
  </motion.span>
);

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-[#050505]" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-technology-digital-interface-31991-large.mp4" type="video/mp4" />
        </video>
        {/* Colorful Overlays */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full glass border border-cyan-500/30 text-xs font-black uppercase tracking-widest text-cyan-400">
            Technical Animator & Game Developer
          </span>
          <h1 className="text-7xl md:text-9xl font-black mb-4 leading-tight tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 drop-shadow-2xl">
            DENG YUXIAO
          </h1>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-10 text-white opacity-90 tracking-tight">
            Breathing Life into <span className="text-cyan-400">Digital Characters</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-12 font-medium leading-relaxed">
            Specializing in character performance, motion capture pipelines, and AIGC animation. 
            Merging technical expertise with artistic vision to create immersive digital experiences.
          </p>
        </motion.div>

        {/* Floating Tool Tags */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {['Unity', 'Unreal Engine 5', 'Blender', 'Maya', 'XR Animator', 'GPT-SoVITS', 'AIGC Pipeline'].map((tool, i) => (
            <motion.div
              key={tool}
              animate={{ 
                y: [0, -10, 0],
                transition: { duration: 3, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }
              }}
            >
              <ToolTag text={tool} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a 
            href="#projects" 
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('projects');
              if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
            }}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-bold hover:scale-105 transition-transform shadow-[0_0_30px_rgba(6,182,212,0.4)]"
          >
            View Showcase
          </a>
          <a href="mailto:1348808477@qq.com" className="px-8 py-4 rounded-full glass border border-white/10 font-bold hover:bg-white/5 transition-all">
            Get In Touch
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-cyan-500 to-transparent" />
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const CardContent = (
    <>
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-lg glass text-[10px] font-black uppercase tracking-tighter text-cyan-400 border border-cyan-500/20">
            {project.type}
          </span>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-black mb-1 group-hover:text-cyan-400 transition-colors flex items-center justify-between">
          {project.title}
          {project.link && <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
        </h3>
        <p className="text-sm font-bold text-fuchsia-400 mb-4 opacity-80">{project.subtitle}</p>
        
        <div className="space-y-3 mb-6 flex-grow">
          {project.description.map((desc, i) => (
            <div key={i} className="flex gap-2 items-start text-sm text-gray-400 leading-relaxed">
              <ChevronRight size={16} className="text-cyan-500 flex-shrink-0 mt-1" />
              <span>{desc}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-300">
              {tag}
            </span>
          ))}
        </div>

        {project.link && (
          <div className="flex items-center gap-2 text-sm font-bold text-cyan-400 group-hover:text-white transition-colors mt-auto">
            View Live Project <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>
        )}
      </div>
    </>
  );

  if (project.link) {
    return (
      <motion.a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -10 }}
        className="glass group rounded-3xl overflow-hidden flex flex-col h-full border border-white/10 block cursor-pointer transition-shadow hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
      >
        {CardContent}
      </motion.a>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass group rounded-3xl overflow-hidden flex flex-col h-full border border-white/10"
    >
      {CardContent}
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Game' | 'Animation' | 'AIGC'>('All');

  const filtered = PROJECTS.filter(p => filter === 'All' || p.type === filter);

  return (
    <section id="projects" className="py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Selected <span className="text-cyan-500">Creations</span></h2>
            <p className="text-gray-400 font-medium">Click on any project to see the live demo or documentation. From Unreal Engine systems to AIGC pipelines.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {['All', 'Game', 'Animation', 'AIGC'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type as any)}
                className={`px-6 py-2 rounded-full text-sm font-black transition-all ${
                  filter === type 
                    ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.5)]' 
                    : 'glass text-gray-400 hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 glass border-y border-white/5 relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 left-0 w-full h-full gradient-bg opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">The <span className="text-fuchsia-500">Toolkit</span></h2>
          <p className="text-gray-400 font-medium">Mastering the intersection of technology and performance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl glass border border-white/10 hover:border-cyan-500/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 flex items-center justify-center mb-6">
                {i === 0 && <Gamepad2 className="text-cyan-400" />}
                {i === 1 && <Code2 className="text-fuchsia-400" />}
                {i === 2 && <Video className="text-amber-400" />}
                {i === 3 && <Sparkles className="text-blue-400" />}
              </div>
              <h3 className="text-xl font-black mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(s => (
                  <span key={s} className="text-xs font-bold px-3 py-1 rounded-lg bg-white/5 text-gray-300 border border-white/5">
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
    <section id="experience" className="py-24 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <div className="p-3 rounded-2xl bg-cyan-500/20">
            <Briefcase className="text-cyan-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black">Professional <span className="text-cyan-500">Journey</span></h2>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-white/10"
            >
              <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
              <div className="mb-2 flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h3 className="text-2xl font-black text-white">{exp.role}</h3>
                  <p className="text-fuchsia-400 font-bold">{exp.company}</p>
                </div>
                <span className="text-sm font-black glass px-4 py-1 rounded-full border border-white/10 text-gray-400">
                  {exp.period}
                </span>
              </div>
              <ul className="mt-6 space-y-3">
                {exp.points.map((p, j) => (
                  <li key={j} className="text-gray-400 text-sm leading-relaxed flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {exp.tools.map(tool => (
                  <span key={tool} className="text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
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
    <section id="education" className="py-24 glass border-t border-white/5 relative scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <div className="p-3 rounded-2xl bg-amber-500/20">
            <GraduationCap className="text-amber-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black">Academic <span className="text-amber-500">Roots</span></h2>
        </div>

        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl glass border border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          >
            <div>
              <h3 className="text-2xl font-black">University of Birmingham, UK</h3>
              <p className="text-amber-400 font-bold">MSc Digital Media and Creative Industries</p>
            </div>
            <span className="text-sm font-black glass px-4 py-1 rounded-full border border-white/10 text-gray-400">
              Sep 2025 - Sep 2026
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl glass border border-white/10"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-black">Xiamen University, China</h3>
                <p className="text-amber-400 font-bold">BEng Digital Media Technology</p>
              </div>
              <span className="text-sm font-black glass px-4 py-1 rounded-full border border-white/10 text-gray-400">
                Sep 2021 - Jun 2025
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-cyan-400 font-bold bg-cyan-500/5 p-3 rounded-xl border border-cyan-500/20">
              <Sparkles size={16} />
              Honours: Excellence Award in Computer Animation Fundamentals
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">
          Ready to Collaborate?
        </h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto font-medium">
          Whether it's a game project, animation pipeline, or technical challenge, 
          I'm always excited to connect with industry experts.
        </p>

        <div className="flex justify-center gap-6 mb-16">
          <a href="mailto:1348808477@qq.com" className="p-4 rounded-2xl glass hover:bg-cyan-500/20 transition-all text-gray-300 hover:text-cyan-400">
            <Mail size={24} />
          </a>
          <a href="https://space.bilibili.com/16210268" target="_blank" className="p-4 rounded-2xl glass hover:bg-blue-500/20 transition-all text-gray-300 hover:text-blue-400">
            <Globe size={24} />
          </a>
          <a href="https://www.youtube.com/@winestring" target="_blank" className="p-4 rounded-2xl glass hover:bg-red-500/20 transition-all text-gray-300 hover:text-red-400">
            <Youtube size={24} />
          </a>
        </div>

        <div className="text-xs font-bold text-gray-600 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} DENG YUXIAO. Built with Passion & Tech Animation.
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Footer />
      
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 blur-[150px] rounded-full" />
      </div>
    </div>
  );
};

export default App;
