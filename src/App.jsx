import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Instagram, Linkedin, Mail, Menu, Play, Send, X } from 'lucide-react';
import { designCollections, videoCollections } from './portfolio';

// Retained only while the portfolio is rendered below through the category experience.
const photography = [];
const motionWork = [];
const designWork = [];

const nav = ['Home', 'About', 'Work', 'Services', 'Contact'];
const reveal = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };

function SectionHeading({ eyebrow, title, copy }) {
  return <motion.div className="section-heading" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .25 }} transition={{ duration: .7 }}>
    <p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p className="section-copy">{copy}</p>}
  </motion.div>;
}

function ProjectCard({ project, onClick, video = false, index }) {
  return <motion.button className={`project-card p-${index % 3}`} onClick={() => onClick(project)} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .16 }} transition={{ duration: .55, delay: index * .05 }}>
    <img src={project.image} alt={`${project.title}, ${project.type}`} loading="lazy" />
    <span className="image-shade" />{video && <span className="play"><Play size={18} fill="currentColor" /></span>}
    <span className="project-meta"><small>{project.type}</small><strong>{project.title}</strong><ArrowUpRight size={18} /></span>
  </motion.button>;
}

function FacebookIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.8 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5H17V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.5V13h2.8v8h3.5Z" /></svg>;
}

function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a9.8 9.8 0 0 0-8.4 14.8L2 22l5.4-1.4A9.8 9.8 0 1 0 12 2Zm0 17.8a8 8 0 0 1-4.1-1.1l-.3-.2-3.2.8.9-3.1-.2-.3A8 8 0 1 1 12 19.8Zm4.4-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.7.9-.3.2-.5.1a6.5 6.5 0 0 1-1.9-1.2 7 7 0 0 1-1.3-1.7c-.1-.2 0-.3.1-.5l.4-.4c.1-.1.1-.2.2-.3a.5.5 0 0 0 0-.4c0-.1-.5-1.3-.7-1.8s-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 12 12 0 0 0 4.6 4 5.5 5.5 0 0 0 2.1.8 2.6 2.6 0 0 0 1.8-.4 2.2 2.2 0 0 0 .5-1.5c0-.1-.1-.2-.3-.3Z" /></svg>;
}

function LegacyApp() {
  const [menuOpen, setMenuOpen] = useState(false); const [selected, setSelected] = useState(null); const reduce = useReducedMotion();
  useEffect(() => { document.body.style.overflow = menuOpen || selected ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [menuOpen, selected]);
  const scroll = (id) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }); };
  return <>
    <header className="nav"><button className="wordmark" onClick={() => scroll('home')} aria-label="Go to home">NN<span>®</span></button><nav>{nav.map(item => <button key={item} onClick={() => scroll(item.toLowerCase())}>{item}</button>)}</nav><button className="menu-btn" onClick={() => setMenuOpen(true)} aria-label="Open navigation"><Menu /></button></header>
    <AnimatePresence>{menuOpen && <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><button className="close" onClick={() => setMenuOpen(false)}><X /></button>{nav.map((item, i) => <motion.button key={item} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 + i * .05 }} onClick={() => scroll(item.toLowerCase())}>{item}</motion.button>)}</motion.div>}</AnimatePresence>
    <main>
      <section id="home" className="hero"><img src={photography[2]?.image} aria-hidden="true" /><div className="hero-vignette" /><div className="hero-content"><motion.p className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 }}>Nithira Nethmuthu / Creative Visual Artist</motion.p><motion.h1 initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .28 }}>Capturing<br /><i>Moments.</i> Creating<br />Visions.</motion.h1><motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .7 }}><button className="button light" onClick={() => scroll('work')}>Explore My Work <ArrowDown size={17} /></button><button className="text-button" onClick={() => scroll('contact')}>Contact Me <ArrowUpRight size={17} /></button></motion.div></div><button className="scroll-cue" onClick={() => scroll('about')}>Scroll to discover <span /></button></section>
      <section id="about" className="about wrap"><SectionHeading eyebrow="01 / About" title={<>A studied eye for<br /><i>what lasts.</i></>} /><div className="about-copy"><p>I am Nithira Nethmuthu, a Sri Lankan visual artist crafting still and moving images with a sense of atmosphere, intention, and human connection.</p><p>From an honest portrait to a fully formed campaign, every frame begins with attention: to light, rhythm, and the details people remember.</p><div className="expertise">{['Photography', 'Videography', 'Graphic Design', 'Video Editing', 'Brand Direction'].map(x => <span key={x}>{x}</span>)}</div></div></section>
      <section id="work" className="work wrap"><SectionHeading eyebrow="02 / Selected Work" title={<>Stories in <i>stillness.</i></>} copy="A selection of photographic work across people, places, and fleeting moments." /><div className="masonry">{photography.map((p, i) => <ProjectCard key={p.title} project={p} index={i} onClick={setSelected} />)}</div></section>
      <section className="showreel"><div className="showreel-inner"><p className="eyebrow">03 / Moving Image</p><h2>Motion with a<br /><i>point of view.</i></h2><button className="round-play" onClick={() => setSelected(motionWork[0])} aria-label="Play showreel"><Play fill="currentColor" /></button><p>Showreel 2025 — 01:42</p></div></section>
      <section className="motion-section wrap"><SectionHeading eyebrow="04 / Videography & Editing" title="Frames that move you." /><div className="three-grid">{motionWork.map((p, i) => <ProjectCard key={p.title} project={p} index={i} onClick={setSelected} video />)}</div></section>
      <section className="design-section wrap"><SectionHeading eyebrow="05 / Design" title={<>Built for a second<br /><i>look.</i></>} copy="Identity, visual systems, poster work, and social-first creative that make an impression." /><div className="three-grid">{designWork.map((p, i) => <ProjectCard key={p.title} project={p} index={i} onClick={setSelected} />)}</div></section>
      <section id="services" className="services wrap"><p className="eyebrow">06 / Services</p><div>{['Photography', 'Videography', 'Graphic Design', 'Video Editing'].map((x, i) => <div className="service" key={x}><span>0{i + 1}</span><h3>{x}</h3><ArrowUpRight /></div>)}</div></section>
      <section id="contact" className="contact"><p className="eyebrow">07 / Start a conversation</p><h2>Have a vision?<br /><i>Let’s make it visible.</i></h2><a className="email" href="mailto:nithiranethmuthu@gmail.com">nithiranethmuthu@gmail.com <ArrowUpRight /></a><form className="contact-form" onSubmit={(e) => { e.preventDefault(); window.location.href = 'mailto:nithiranethmuthu@gmail.com?subject=' + encodeURIComponent(e.currentTarget.subject.value) + '&body=' + encodeURIComponent(e.currentTarget.message.value); }}><input name="name" required placeholder="Your name" aria-label="Your name" /><input name="subject" required placeholder="Project subject" aria-label="Project subject" /><textarea name="message" required placeholder="Tell me about your project" aria-label="Tell me about your project" /><button type="submit">Send enquiry <Send size={16} /></button></form><div className="socials"><a href="https://www.instagram.com/nithira_nethmuthu/" target="_blank" rel="noreferrer"><Instagram /> Instagram</a><a href="https://www.facebook.com/share/19y5vmNTah/?mibextid=wwXIfr" target="_blank" rel="noreferrer"><FacebookIcon /> Facebook</a><a href="https://www.linkedin.com/in/nithira-nethmuthu" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a><a href="https://wa.me/qr/FQQSIBFU4HOHB1" target="_blank" rel="noreferrer"><WhatsAppIcon /> WhatsApp</a><a href="mailto:nithiranethmuthu@gmail.com"><Mail /> Email</a></div></section>
    </main><footer><span>© {new Date().getFullYear()} Nithira Nethmuthu</span><span>Capturing Moments. Creating Visions.</span><a href="#home">Back to top ↑</a></footer>
    <AnimatePresence>{selected && <motion.div className="lightbox" role="dialog" aria-modal="true" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}><button className="close" aria-label="Close project"><X /></button><motion.div className="lightbox-body" initial={{ scale: .96 }} animate={{ scale: 1 }} onClick={e => e.stopPropagation()}>{selected.video ? <video controls autoPlay poster={selected.image}><source src={selected.video} type="video/mp4" /></video> : <img src={selected.image} alt={selected.title} />}<div><p className="eyebrow">{selected.type}</p><h3>{selected.title}</h3><p>Selected work from the Nithira Nethmuthu portfolio.</p></div></motion.div></motion.div>}</AnimatePresence>
  </>;
}

const gmailUrl = (subject = '', body = '') => `https://mail.google.com/mail/?view=cm&fs=1&to=nithiranethmuthu@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

function BrandIcon({ name }) {
  const paths = {
    Facebook: 'M13.8 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5H17V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.5V13h2.8v8h3.5Z',
    WhatsApp: 'M12 2a9.8 9.8 0 0 0-8.4 14.8L2 22l5.4-1.4A9.8 9.8 0 1 0 12 2Zm0 17.8a8 8 0 0 1-4.1-1.1l-.3-.2-3.2.8.9-3.1-.2-.3A8 8 0 1 1 12 19.8Zm4.4-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.7.9-.3.2-.5.1a6.5 6.5 0 0 1-1.9-1.2 7 7 0 0 1-1.3-1.7c-.1-.2 0-.3.1-.5l.4-.4c.1-.1.1-.2.2-.3a.5.5 0 0 0 0-.4c0-.1-.5-1.3-.7-1.8s-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 12 12 0 0 0 4.6 4 5.5 5.5 0 0 0 2.1.8 2.6 2.6 0 0 0 1.8-.4 2.2 2.2 0 0 0 .5-1.5c0-.1-.1-.2-.3-.3Z',
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d={paths[name]} /></svg>;
}

function CollectionCard({ collection, onOpen }) {
  return <motion.button className="collection-card" onClick={() => onOpen(collection)} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5 }}>
    <img src={collection.cover} alt="" /><span className="collection-overlay" /><span className="collection-content"><small>{collection.items.length} projects</small><strong>{collection.title}</strong><span>{collection.description}</span><ArrowUpRight size={19} /></span>
  </motion.button>;
}

function ProjectTile({ item, onOpen }) {
  return <motion.button className="project-tile" onClick={() => onOpen(item)} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .35 }}>
    {item.video ? <video src={item.video} autoPlay loop muted playsInline aria-label={item.title} /> : <img src={item.image} alt={item.title} loading="lazy" />}<span><small>{item.video ? 'Watch video' : 'View design'}</small><strong>{item.title}</strong><ArrowUpRight size={16} /></span>
  </motion.button>;
}

export default function App() {
  const [activeCollection, setActiveCollection] = useState(null);
  const [selected, setSelected] = useState(null);
  const openCollection = (collection) => { setActiveCollection(collection); setSelected(null); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const backHome = () => { setActiveCollection(null); setSelected(null); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const scroll = (id) => { setActiveCollection(null); setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 0); };

  if (activeCollection) return <>
    <header className="nav modern-nav"><button className="wordmark" onClick={backHome} aria-label="Go to home">NN<span>Ar</span></button><button className="back-button" onClick={backHome}>← All work</button></header>
    <main className="collection-page"><section className="collection-hero"><p className="eyebrow">{activeCollection.kind}</p><h1>{activeCollection.title}</h1><p>{activeCollection.description}</p><span>{activeCollection.items.length} selected projects</span></section><section className="collection-work">{activeCollection.items.map((item) => <ProjectTile key={item.title} item={item} onOpen={setSelected} />)}</section></main>
    <AnimatePresence>{selected && <motion.div className="lightbox" role="dialog" aria-modal="true" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}><button className="close" aria-label="Close project"><X /></button><motion.div className="lightbox-body modern-lightbox" initial={{ y: 20 }} animate={{ y: 0 }} onClick={e => e.stopPropagation()}>{selected.video ? <video controls autoPlay poster={selected.image}><source src={selected.video} type="video/mp4" /></video> : <img src={selected.image} alt={selected.title} />}<div><p className="eyebrow">{activeCollection.kind}</p><h3>{selected.title}</h3><p>{selected.description}</p></div></motion.div></motion.div>}</AnimatePresence>
  </>;

  return <>
    <header className="nav modern-nav"><button className="wordmark" onClick={backHome} aria-label="Go to home">NN<span>Ar</span></button><nav><button onClick={() => scroll('design')}>Design</button><button onClick={() => scroll('video')}>Video</button><button onClick={() => scroll('about')}>About</button><button onClick={() => scroll('contact')}>Contact</button></nav></header>
    <main>
      <section className="hero modern-hero" id="home"><div className="hero-grain" /><div className="hero-content"><motion.p className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Nithira Nethmuthu / Creative Visual Artist</motion.p><motion.h1 initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75 }}>Ideas with<br /><i>movement.</i></motion.h1><motion.p className="hero-intro" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }}>Graphic design and visual storytelling made to make people stop, feel, and remember.</motion.p><motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .35 }}><button className="button light" onClick={() => scroll('design')}>Explore work <ArrowDown size={17} /></button><button className="text-button" onClick={() => scroll('contact')}>Start a project <ArrowUpRight size={17} /></button></motion.div></div><div className="hero-orbit" aria-hidden="true"><span>Design</span><span>Motion</span><span>Story</span></div></section>
      <section id="design" className="category-section wrap"><SectionHeading eyebrow="01 / Graphic Design" title={<>Design with<br /><i>intention.</i></>} copy="Choose a category to explore the complete body of work." /><div className="collection-grid">{designCollections.map(c => <CollectionCard key={c.id} collection={c} onOpen={openCollection} />)}</div></section>
      <section id="video" className="category-section video-section wrap"><SectionHeading eyebrow="02 / Videography & Editing" title={<>Stories that<br /><i>move.</i></>} copy="Open a category to watch every project in that collection." /><div className="collection-grid">{videoCollections.map(c => <CollectionCard key={c.id} collection={c} onOpen={openCollection} />)}</div></section>
      <section id="about" className="about modern-about wrap"><div className="about-mark">NN</div><div><p className="eyebrow">03 / About</p><h2>A visual mind for<br /><i>moments that matter.</i></h2><p className="about-lead">I’m Nithira Nethmuthu, a Sri Lankan creative visual artist working across graphic design, videography, and editing.</p><p className="section-copy">I shape campaigns, celebrations, events, and everyday stories into work that feels clear, energetic, and memorable. Every piece starts with an idea and ends with a visual people want to share.</p></div></section>
      <section id="services" className="services wrap"><p className="eyebrow">04 / Services</p><div>{[['Graphic Design', 'design'], ['Videography', 'video'], ['Video Editing', 'video'], ['Photography', 'contact']].map(([name, target], i) => <button className="service service-link" key={name} onClick={() => scroll(target)}><span>0{i + 1}</span><h3>{name}</h3><ArrowUpRight /></button>)}</div></section>
      <section id="contact" className="contact"><p className="eyebrow">05 / Start a conversation</p><h2>Have a vision?<br /><i>Let’s make it visible.</i></h2><a className="email" href={gmailUrl()}>nithiranethmuthu@gmail.com <ArrowUpRight /></a><form className="contact-form" onSubmit={(e) => { e.preventDefault(); window.open(gmailUrl(e.currentTarget.subject.value, `${e.currentTarget.message.value}\n\nFrom: ${e.currentTarget.name.value}`), '_blank', 'noopener,noreferrer'); }}><input name="name" required placeholder="Your name" aria-label="Your name" /><input name="subject" required placeholder="Project subject" aria-label="Project subject" /><textarea name="message" required placeholder="Tell me about your project" aria-label="Tell me about your project" /><button type="submit">Write with Gmail <Send size={16} /></button></form><div className="socials"><a href="https://www.instagram.com/nithira_nethmuthu/" target="_blank" rel="noreferrer"><Instagram /> Instagram</a><a href="https://www.facebook.com/share/19y5vmNTah/?mibextid=wwXIfr" target="_blank" rel="noreferrer"><BrandIcon name="Facebook" /> Facebook</a><a href="https://www.linkedin.com/in/nithira-nethmuthu" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a><a href="https://wa.me/qr/FQQSIBFU4HOHB1" target="_blank" rel="noreferrer"><BrandIcon name="WhatsApp" /> WhatsApp</a><a href={gmailUrl()}><Mail /> Email</a></div></section>
    </main><footer><span>© {new Date().getFullYear()} Nithira Nethmuthu</span><span>Designing stories worth remembering.</span><button onClick={backHome}>Back to top ↑</button></footer>
  </>;
}
