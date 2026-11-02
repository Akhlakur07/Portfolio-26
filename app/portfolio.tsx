"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  siCss,
  siExpress,
  siFigma,
  siFirebase,
  siGit,
  siGithub,
  siHtml5,
  siHuggingface,
  siJavascript,
  siMongodb,
  siMysql,
  siNodedotjs,
  siPostgresql,
  siPostman,
  siPython,
  siPytorch,
  siReact,
  siRetool,
  siTailwindcss,
} from "simple-icons";

const technologies = [
  [siPython, "Python"],
  [siJavascript, "JavaScript"],
  [siHtml5, "HTML5"],
  [siCss, "CSS"],
  [siReact, "React"],
  [siTailwindcss, "Tailwind CSS"],
  [siNodedotjs, "Node.js"],
  [siExpress, "Express"],
  [siMongodb, "MongoDB"],
  [siMysql, "MySQL"],
  [siPostgresql, "PostgreSQL"],
  [siFirebase, "Firebase"],
  [siPytorch, "PyTorch"],
  [siHuggingface, "Hugging Face"],
  [siGit, "Git"],
  [siGithub, "GitHub"],
  [siPostman, "Postman"],
  [siFigma, "Figma"],
  [siRetool, "Retool"],
] as const;

const heroPhrases = ["curiosity.", "clarity.", "real people."];

const projects = [
  { number: "01", name: "Learnly", type: "Learning platform", description: "A welcoming space to discover, learn, and grow at your own pace.", image: "/images/learnly.png", github: "https://github.com/Akhlakur07/learnly", live: "https://learnly-auth.web.app/", tags: "React · Firebase · Education" },
  { number: "02", name: "StackSphere", type: "Community platform", description: "A place for curious people to share knowledge and find their community.", image: "/images/stackvault.png", github: "https://github.com/Akhlakur07/StackSphere-client-side", live: "http://stack-web-6def0.web.app/", tags: "React · Firebase · Community" },
  { number: "03", name: "Taskforce", type: "Freelance task platform", description: "Connecting people with meaningful work through a clear task workflow.", image: "/images/taskforce.png", github: "https://github.com/Akhlakur07/freelance-web-client", live: "https://freelance-auth-96883.web.app/", tags: "React · Firebase · Marketplace" },
  { number: "04", name: "Volunteer", type: "Volunteer coordination", description: "Helping people find a cause, get involved, and make time count.", image: "/images/volunteer.png", github: "https://github.com/Akhlakur07/volunteer-client-side", live: "https://volunteer-auth-e1a75.web.app/", tags: "React · Firebase · Social impact" },
  { number: "05", name: "Restaurant Analysis", type: "Business intelligence", description: "Restaurant performance, made easier to understand through data.", image: "/images/Restaurant.png", github: "https://github.com/Akhlakur07/Restaurant-Business-Analysis-PowerBi", tags: "Power BI · Data analysis" },
  { number: "06", name: "3D Space Shooter", type: "Computer graphics", description: "A space shooter built as an exploration of interactive 3D graphics.", image: "/images/3dSpaceShooter.png", github: "https://github.com/Akhlakur07/3D-Space-Shooter_CSE423", tags: "CSE423 · OpenGL · Game" },
];

function SmoothScroll() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const lenis = new Lenis({ duration: 1.05, smoothWheel: true, wheelMultiplier: 0.9 });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    const aboutMedia = gsap.matchMedia();

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(element, { y: 28, autoAlpha: 0 }, {
          y: 0, autoAlpha: 1, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });
      gsap.utils.toArray<HTMLElement>(".hero-photo").forEach((element) => {
        gsap.to(element, { yPercent: 6, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.5 } });
      });
      aboutMedia.add("(min-width: 901px) and (prefers-reduced-motion: no-preference)", () => {
        const chapters = document.querySelector<HTMLElement>(".about-chapters");
        if (!chapters) return;
        gsap.to(chapters, {
          yPercent: -75,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-story",
            start: "top top",
            end: () => `+=${window.innerHeight * 3}`,
            pin: true,
            scrub: 0.7,
            invalidateOnRefresh: true,
          },
        });
      });
      const track = document.querySelector<HTMLElement>(".project-track");
      if (track && window.matchMedia("(min-width: 900px)").matches) {
        gsap.to(track, {
          xPercent: -((projects.length - 1) * 100) / projects.length,
          ease: "none",
          scrollTrigger: { trigger: ".work", start: "top top", end: () => `+=${window.innerHeight * (projects.length - 1)}`, pin: true, scrub: 0.65, invalidateOnRefresh: true },
        });
      }
    });
    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 250);
    return () => {
      window.clearTimeout(refresh);
      ctx.revert();
      aboutMedia.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}

function Preloader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const start = performance.now();
    let frame = 0;
    let done = false;
    const animate = (now: number) => {
      if (done) return;
      const next = Math.min(100, Math.round(((now - start) / 1050) * 100));
      setProgress(next);
      if (next < 100) frame = requestAnimationFrame(animate);
      else window.setTimeout(() => setVisible(false), 180);
    };
    frame = requestAnimationFrame(animate);
    const fallback = window.setTimeout(() => setVisible(false), 1800);
    return () => { done = true; cancelAnimationFrame(frame); clearTimeout(fallback); };
  }, []);
  if (!visible) return null;
  return <div className="preloader" aria-label="Loading portfolio" role="status"><div className="preloader-top"><span>AKHLAKUR RAHMAN</span><span>PORTFOLIO — 2026</span></div><div className="preloader-bottom"><span>DESIGNING WITH INTENT</span><span className="preloader-count">{String(progress).padStart(2, "0")}<sup>%</sup></span></div><div className="preloader-line"><i style={{ transform: `scaleX(${progress / 100})` }} /></div></div>;
}

function DhakaClock() {
  const [time, setTime] = useState("--:--");
  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Dhaka", hour: "2-digit", minute: "2-digit" }).format(new Date()));
    update(); const id = window.setInterval(update, 30_000); return () => clearInterval(id);
  }, []);
  return <>{time} <span>BST</span></>;
}

function LogoMarquee() {
  const logos = (duplicate = false) => (
    <div className="tech-group" role={duplicate ? undefined : "list"} aria-hidden={duplicate || undefined}>
      {technologies.map(([icon, name]) => (
        <span className="tech-logo" role={duplicate ? undefined : "listitem"} key={`${duplicate ? "copy-" : ""}${name}`}>
          <svg viewBox="0 0 24 24" role={duplicate ? undefined : "img"} aria-label={duplicate ? undefined : name} focusable="false">
            <path d={icon.path} />
          </svg>
        </span>
      ))}
    </div>
  );

  return <div className="tech-marquee" aria-label="Technologies I use">
    <div className="tech-track">{logos()}{logos(true)}</div>
  </div>;
}

export default function Portfolio() {
  const [copied, setCopied] = useState(false);
  const [activePhrase, setActivePhrase] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(() => {
      setActivePhrase((current) => (current + 1) % heroPhrases.length);
    }, 2600);
    return () => window.clearInterval(interval);
  }, []);
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText("akhlak.ur433@gmail.com"); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
    catch { window.location.href = "mailto:akhlak.ur433@gmail.com"; }
  };

  return <>
    <SmoothScroll />
    <Preloader />
    <header className="site-header"><a className="brand" href="#top" aria-label="Akhlakur Rahman home">AR<span>®</span></a><nav aria-label="Main navigation"><a href="#about">About</a><a href="#work">Work <sup>06</sup></a><a href="#contact">Contact <span className="nav-dot" /></a></nav><a className="header-availability" href="mailto:akhlak.ur433@gmail.com"><span className="status-dot" /> Available for opportunities</a></header>

    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-meta"><span>INDEPENDENT DEVELOPER</span><span>DHAKA, BANGLADESH <b>↘</b></span></div>
        <div className="hero-copy"><p className="eyebrow"><span className="accent-mark">✳</span> DIGITAL PRODUCTS, BUILT WITH INTENT</p><h1 id="hero-title">I TURN IDEAS<br />INTO USEFUL<br /><span>PRODUCTS.</span></h1><p className="hero-statement"><span>DESIGNED FOR</span><strong key={activePhrase}>{heroPhrases[activePhrase]}</strong></p><div className="hero-bottom"><p>Developer with a curious mind<br />and a practical point of view.</p><a className="scroll-cue" href="#about"><span className="scroll-ring">↓</span><span>SCROLL TO EXPLORE</span></a></div></div>
        <div className="hero-image-wrap"><Image className="hero-photo" src="/images/profile.jpeg" alt="Portrait of Akhlakur Rahman" fill priority sizes="(max-width: 800px) 70vw, 39vw" /></div>
        <span className="hero-index">01 / 08</span>
        <LogoMarquee />
      </section>

      <section id="about" className="about section-pad">
        <div className="section-kicker" data-reveal><span>01 — THE PERSON</span><span>CURIOUS BY DEFAULT</span></div>
        <div className="about-story"><div className="about-fixed"><h2>I’m Akhlakur Rahman<span className="accent-mark">.</span></h2><span className="about-fixed-note">CSE GRADUATE · BRAC UNIVERSITY</span></div><div className="about-chapter-window"><div className="about-chapters">
          <article className="about-chapter"><span>01 / BACKGROUND</span><p>A Computer Science and Engineering graduate from <strong>BRAC University</strong>, Bangladesh.</p><small>Based in Bangladesh · Open to opportunities</small></article>
          <article className="about-chapter"><span>02 / WHAT I DO</span><p>I turn questions, ideas, and complex problems into <strong>useful digital products.</strong></p><small>From a rough idea to something people can use.</small></article>
          <article className="about-chapter"><span>03 / HOW I WORK</span><p>Understand the problem. Shape a clear solution. Build, test, and refine the details.</p><small>Curiosity first. Thoughtful execution throughout.</small></article>
          <article className="about-chapter"><span>04 / OUTSIDE THE SCREEN</span><p>I’m interested in the systems behind products—from full stack architecture to data, machine learning, and computer graphics.</p><a className="text-link" href="https://drive.google.com/file/d/1mOmCYzFVl2bktuETnp9VxfDnGEBP-GzV/view" target="_blank" rel="noreferrer">VIEW MY RESUME <span>↗</span></a></article>
        </div></div></div>
      </section>

      <section id="work" className="work">
        <div className="work-heading section-pad"><div className="section-kicker"><span>02 — SELECTED WORK</span><span>2023 — 2026</span></div><h2>Made to <span>matter.</span></h2><p>Some problems I’ve had the pleasure of working through.</p></div>
        <div className="project-track">{projects.map((project) => <article className="project-slide" key={project.number}><div className="project-visual"><Image src={project.image} alt={`${project.name} project preview`} fill sizes="(max-width: 899px) 88vw, 69vw" /><span className="visual-index">PROJECT / {project.number}</span><span className="visual-open">↗</span></div><div className="project-info"><div><span className="project-type">{project.type}</span><h3>{project.name}</h3><p>{project.description}</p><div className="project-tags">{project.tags}</div></div><div className="project-links">{project.live && <a href={project.live} target="_blank" rel="noreferrer">LIVE SITE <span>↗</span></a>}<a href={project.github} target="_blank" rel="noreferrer">GITHUB <span>↗</span></a></div></div><span className="project-count">{project.number} <i>/ 06</i></span></article>)}</div>
        <div className="work-mobile-hint"><span>SCROLL TO EXPLORE PROJECTS</span><span>↓</span></div>
      </section>

      <section className="process section-pad"><div className="section-kicker" data-reveal><span>03 — HOW I WORK</span><span>FROM QUESTION TO SHIPPED</span></div><div className="process-row" data-reveal><div className="process-number">01</div><h2>Question<span>.</span></h2><p>Understand the people, goals, and constraints before reaching for a solution.</p></div><div className="process-row" data-reveal><div className="process-number">02</div><h2>Shape<span>.</span></h2><p>Turn complexity into clear interfaces and systems with room to grow.</p></div><div className="process-row" data-reveal><div className="process-number">03</div><h2>Ship<span>.</span></h2><p>Build, test, and refine the details that make a product feel considered.</p></div><div className="stack-row" data-reveal><span>TOOLS I REACH FOR</span><p>Next.js <i>·</i> React <i>·</i> TypeScript <i>·</i> Tailwind CSS <i>·</i> Firebase <i>·</i> Node.js <i>·</i> Power BI <i>·</i> OpenGL</p></div></section>

      <section className="portrait-section"><Image src="/images/profile.jpeg" alt="Akhlakur Rahman, based in Bangladesh" fill sizes="100vw" /><div className="portrait-overlay" /><div className="portrait-caption"><span>BASED IN BANGLADESH</span><h2>Thoughtful work.<br />Useful outcomes.</h2><span>OPEN TO BUILDING GOOD THINGS <b>↗</b></span></div><span className="portrait-index">AKHLAKUR RAHMAN — 2026</span></section>

      <section id="contact" className="contact section-pad"><div className="section-kicker" data-reveal><span>04 — YOUR TURN</span><span>HAVE SOMETHING IN MIND?</span></div><div className="contact-main" data-reveal><p className="eyebrow"><span className="status-dot" /> OPEN TO OPPORTUNITIES</p><h2>Let’s build<br />something <span>useful.</span></h2><button className="email-button" onClick={copyEmail}>{copied ? "EMAIL COPIED ✓" : "AKHLAK.UR433@GMAIL.COM"}<span>{copied ? "✓" : "↗"}</span></button></div>
        <footer className="footer"><div className="footer-top"><div><span className="footer-label">SAY HELLO</span><a href="mailto:akhlak.ur433@gmail.com">Email <span>↗</span></a><a href="https://wa.me/8801305685267" target="_blank" rel="noreferrer">WhatsApp <span>↗</span></a><a href="tel:+8801305685267">Phone <span>↗</span></a></div><div><span className="footer-label">ELSEWHERE</span><a href="https://github.com/Akhlakur07" target="_blank" rel="noreferrer">GitHub <span>↗</span></a><a href="https://www.linkedin.com/in/akhlakur-rahman-92ba312bb/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a><a href="https://www.facebook.com/akhlakur.rahman.007" target="_blank" rel="noreferrer">Facebook <span>↗</span></a></div><div className="footer-clock"><span className="footer-label">LOCAL TIME · DHAKA</span><b><DhakaClock /></b></div></div><div className="footer-bottom"><span>© 2026 AKHLAKUR RAHMAN</span><span>BUILT WITH INTENT</span><a href="#top">BACK TO TOP ↑</a></div></footer>
      </section>
    </main>
  </>;
}
