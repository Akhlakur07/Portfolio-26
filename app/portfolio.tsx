"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DitherVeil from "../components/DitherVeil";
import DecryptedText from "../components/DecryptedText";
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
  siNumpy,
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
  [siNumpy, "Numpy"],
  [siHuggingface, "Hugging Face"],
  [siGit, "Git"],
  [siGithub, "GitHub"],
  [siPostman, "Postman"],
  [siFigma, "Figma"],
  [siRetool, "Retool"],
] as const;

const technologyGroups = [
  {
    name: "LANGUAGES & FRONTEND",
    tools: [
      [siPython, "Python"],
      [siJavascript, "JavaScript"],
      [siHtml5, "HTML5"],
      [siCss, "CSS3"],
      [siReact, "React"],
      [siTailwindcss, "Tailwind CSS"],
      [siFigma, "Figma"],
    ],
  },
  {
    name: "BACKEND & DATABASES",
    tools: [
      [siNodedotjs, "Node.js"],
      [siExpress, "Express.js"],
      [siMongodb, "MongoDB"],
      [siMysql, "MySQL"],
      [siPostgresql, "PostgreSQL"],
      [siFirebase, "Firebase"],
    ],
  },
  {
    name: "MACHINE LEARNING",
    tools: [
      [siPytorch, "PyTorch"],
      [siHuggingface, "Hugging Face"],
    ],
  },
  {
    name: "DEVELOPER TOOLS",
    tools: [
      [siGit, "Git"],
      [siGithub, "GitHub"],
      [siPostman, "Postman"],
      [siRetool, "Retool"],
    ],
  },
] as const;

const heroPhrases = ["curiosity.", "clarity.", "real people."];

const projects = [
  {
    number: "01",
    name: "Learnly",
    type: "Learning platform",
    description:
      "A welcoming space to discover, learn, and grow at your own pace.",
    image: "/images/learnly.png",
    github: "https://github.com/Akhlakur07/learnly",
    live: "https://learnly-auth.web.app/",
    tags: "React · Firebase · Education",
  },
  {
    number: "02",
    name: "StackSphere",
    type: "Community platform",
    description:
      "A place for curious people to share knowledge and find their community.",
    image: "/images/stackvault.png",
    github: "https://github.com/Akhlakur07/StackSphere-client-side",
    live: "http://stack-web-6def0.web.app/",
    tags: "React · Firebase · Community",
  },
  {
    number: "03",
    name: "Taskforce",
    type: "Freelance task platform",
    description:
      "Connecting people with meaningful work through a clear task workflow.",
    image: "/images/taskforce.png",
    github: "https://github.com/Akhlakur07/freelance-web-client",
    live: "https://freelance-auth-96883.web.app/",
    tags: "React · Firebase · Marketplace",
  },
  {
    number: "04",
    name: "Volunteer",
    type: "Volunteer coordination",
    description:
      "Helping people find a cause, get involved, and make time count.",
    image: "/images/volunteer.png",
    github: "https://github.com/Akhlakur07/volunteer-client-side",
    live: "https://volunteer-auth-e1a75.web.app/",
    tags: "React · Firebase · Social impact",
  },
  {
    number: "05",
    name: "Restaurant Analysis",
    type: "Business intelligence",
    description:
      "Restaurant performance, made easier to understand through data.",
    image: "/images/Restaurant.png",
    github:
      "https://github.com/Akhlakur07/Restaurant-Business-Analysis-PowerBi",
    tags: "Power BI · Data analysis",
  },
  {
    number: "06",
    name: "3D Space Shooter",
    type: "Computer graphics",
    description:
      "A space shooter built as an exploration of interactive 3D graphics.",
    image: "/images/3dSpaceShooter.png",
    github: "https://github.com/Akhlakur07/3D-Space-Shooter_CSE423",
    tags: "CSE423 · OpenGL · Game",
  },
];

const decryptedWordProps = {
  animateOn: "inViewHover" as const,
  effect: "scramble" as const,
  sequential: true,
  revealDirection: "start" as const,
  speed: 55,
  maxIterations: 10,
  hoverRadius: 100,
  scrambleColor: "#c6fa62",
  loop: true,
  loopDelay: 2000,
  useOriginalCharsOnly: false,
  characters:
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
  className: "revealed",
  encryptedClassName: "encrypted",
  clickMode: "once" as const,
};

const researchPapers = [
  {
    number: "01",
    field: "EDGE AI · INTELLIGENT TUTORING",
    title: "Confidence-Governed Hybrid SLM–LLM Tutoring",
    paperTitle:
      "Dual-Gate Confidence and Groundedness Verification: Mitigating Hallucination and Overconfidence in Edge SLM–LLM Cascades",
    summary:
      "A two-stage confidence gate checks answer consistency across paraphrases and verifies claims against curriculum text before escalating uncertain answers to a cloud tutor. Evaluated across 1,560 NCTB secondary-physics query episodes.",
    statuses: [
      "Extended abstract accepted · BRAC University Silver Jubilee Research Conference 2026",
      "Recommended for exhibition · Phase 2 panel, CSE Department, BRAC University",
    ],
    metrics: [
      ["76.7%", "queries directly handled on edge"],
      ["96.2%", "groundedness in a 30-question ablation"],
      ["92.0%", "pedagogical soundness · 100 answers reviewed"],
    ],
  },
  {
    number: "02",
    field: "CLASSICAL MACHINE LEARNING · SPATIAL GENERALIZATION",
    title: "Flood Risk Prediction Across Regions",
    paperTitle:
      "Random Splits Overstate Flood Prediction Skill: Held-Out-Region Evidence from Bangladesh Stations and U.S. Gauges",
    summary:
      "Tests whether high flood-classification scores transfer to unseen stations and regions. The study compares random splits with station- and region-held-out validation across Bangladesh, with an independent check on U.S. stream gauges.",
    statuses: ["Under review · Submitted to ECCE 2027, hosted at CUET"],
    metrics: [
      ["20,544", "Bangladesh station-month observations"],
      ["0.11–0.15", "F1 drop in held-out-region evaluation"],
      ["42", "U.S. gauges in the external check"],
    ],
  },
] as const;

function SmoothScroll() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    const aboutMedia = gsap.matchMedia();
    const marqueeTrack = document.querySelector<HTMLElement>(".tech-track");
    const marqueeTween = marqueeTrack
      ? gsap.to(marqueeTrack, {
          xPercent: -50,
          duration: 44,
          ease: "none",
          repeat: -1,
        })
      : undefined;

    lenis.on("scroll", ({ velocity }) => {
      ScrollTrigger.update();
      marqueeTween?.timeScale(1 + Math.min(Math.abs(velocity) / 1.5, 2.5));
    });

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 28, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 88%", once: true },
          },
        );
      });
      gsap.utils.toArray<HTMLElement>(".technology-group").forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>(
          ".technology-group-label, .technology-item",
        );
        gsap.fromTo(
          items,
          { y: 22, autoAlpha: 0, scale: 0.97 },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 0.65,
            stagger: 0.045,
            ease: "power3.out",
            scrollTrigger: { trigger: group, start: "top 84%", once: true },
          },
        );
      });
      const researchSlider =
        document.querySelector<HTMLElement>(".research-slider");
      if (researchSlider) {
        gsap.fromTo(
          researchSlider,
          { y: 34, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".research",
              start: "top 78%",
              once: true,
            },
          },
        );
      }
      aboutMedia.add(
        "(min-width: 901px) and (prefers-reduced-motion: no-preference)",
        () => {
          const chapters =
            document.querySelector<HTMLElement>(".about-chapters");
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
        },
      );
      const track = document.querySelector<HTMLElement>(".project-track");
      if (track) {
        const createProjectScroll = (
          trigger: string,
          start: string,
        ) => {
          gsap.to(track, {
            xPercent: -((projects.length - 1) * 100) / projects.length,
            ease: "none",
            scrollTrigger: {
              trigger,
              start,
              end: () => `+=${window.innerHeight * (projects.length - 1)}`,
              pin: ".work",
              scrub: 0.65,
              invalidateOnRefresh: true,
            },
          });
        };

        aboutMedia.add(
          "(min-width: 901px) and (max-height: 650px)",
          () => createProjectScroll(".work-heading h2", "top 20px"),
        );
        aboutMedia.add(
          "(min-width: 901px) and (min-height: 651px) and (max-height: 730px)",
          () =>
            createProjectScroll(
              ".work-heading .section-kicker",
              "top 20px",
            ),
        );
        aboutMedia.add(
          "(min-width: 900px) and (min-height: 731px)",
          () => createProjectScroll(".work", "top top"),
        );
      }
    });

    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 250);
    return () => {
      window.clearTimeout(refresh);
      ctx.revert();
      aboutMedia.revert();
      marqueeTween?.kill();
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}

function Preloader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = previousOverflow;
    };
  }, [visible]);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let timerFinished = false;
    let pageLoaded = document.readyState === "complete";
    const start = performance.now();
    const duration = 1450;
    let frame = 0;

    const finishIfReady = () => {
      if (!timerFinished || !pageLoaded) return;
      setProgress(100);
      setReady(true);
    };
    const handlePageLoad = () => {
      pageLoaded = true;
      finishIfReady();
    };

    if (!pageLoaded) {
      window.addEventListener("load", handlePageLoad, { once: true });
    }

    if (reduceMotion) {
      timerFinished = true;
      finishIfReady();
      return () => window.removeEventListener("load", handlePageLoad);
    }

    const animate = (now: number) => {
      const elapsed = now - start;
      const next = Math.min(99, Math.floor((elapsed / duration) * 100));
      setProgress(next);
      if (elapsed < duration) {
        frame = requestAnimationFrame(animate);
      } else {
        timerFinished = true;
        finishIfReady();
      }
    };
    frame = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  useEffect(() => {
    if (!ready || isExiting) return;

    const enterOnKey = (event: KeyboardEvent) => {
      if (event.repeat || (event.key !== "Enter" && event.code !== "Space")) {
        return;
      }
      event.preventDefault();
      setIsExiting(true);
    };

    window.addEventListener("keydown", enterOnKey);
    return () => window.removeEventListener("keydown", enterOnKey);
  }, [ready, isExiting]);

  useEffect(() => {
    if (!isExiting) return;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const timeout = window.setTimeout(
      () => setVisible(false),
      reducedMotion ? 0 : 900,
    );
    return () => window.clearTimeout(timeout);
  }, [isExiting]);

  if (!visible) return null;

  const beginEntering = () => {
    if (ready && !isExiting) setIsExiting(true);
  };

  return (
    <div
      className={`preloader${isExiting ? " is-exiting" : ""}`}
      aria-label="Portfolio loading screen"
      aria-busy={!ready}
      onClick={beginEntering}
    >
      <div className="preloader-top">
        <span>AKHLAKUR RAHMAN</span>
        <span>PORTFOLIO — 2026</span>
      </div>

      <div className="preloader-center">
        <span className="preloader-count">
          {String(progress).padStart(2, "0")}
          <sup>%</sup>
        </span>
        {ready && (
          <button
            className="preloader-enter"
            type="button"
            onClick={beginEntering}
          >
            Click to Enter <span aria-hidden="true">↗</span>
          </button>
        )}
      </div>

      <div className="preloader-bottom">
        <span className={`preloader-loading${ready ? " is-ready" : ""}`}>
          {ready ? "SYSTEM READY" : "LOADING PORTFOLIO"}
          {!ready && <i aria-hidden="true" />}
        </span>
        <span>{ready ? "PRESS ENTER" : `${String(progress).padStart(2, "0")}%`}</span>
      </div>
      <div className="preloader-line">
        <i style={{ transform: `scaleX(${progress / 100})` }} />
      </div>
    </div>
  );
}

function DhakaClock() {
  const [time, setTime] = useState("--:--");
  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Dhaka",
          hour: "2-digit",
          minute: "2-digit",
        }).format(new Date()),
      );
    update();
    const id = window.setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      {time} <span>BST</span>
    </>
  );
}

function LogoMarquee() {
  const logos = (duplicate = false) => (
    <div
      className="tech-group"
      role={duplicate ? undefined : "list"}
      aria-hidden={duplicate || undefined}
    >
      {technologies.map(([icon, name]) => (
        <span
          className="tech-logo"
          role={duplicate ? undefined : "listitem"}
          key={`${duplicate ? "copy-" : ""}${name}`}
        >
          <svg
            viewBox="0 0 24 24"
            role={duplicate ? undefined : "img"}
            aria-label={duplicate ? undefined : name}
            focusable="false"
          >
            <path d={icon.path} />
          </svg>
        </span>
      ))}
    </div>
  );
  return (
    <div className="tech-marquee" aria-label="Technologies I use">
      <div className="tech-track">
        {logos()}
        {logos(true)}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [copiedContact, setCopiedContact] = useState<{
    kind: "email" | "phone";
    copied: boolean;
  } | null>(null);
  const [activePhrase, setActivePhrase] = useState(0);
  const [activeResearch, setActiveResearch] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(
      () => setActivePhrase((current) => (current + 1) % heroPhrases.length),
      2600,
    );
    return () => window.clearInterval(interval);
  }, []);
  const copyContact = async (kind: "email" | "phone", value: string) => {
    let copied = false;
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(value);
        copied = true;
      } catch {}
    }
    if (!copied) {
      const field = document.createElement("textarea");
      field.value = value;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      try {
        copied = document.execCommand("copy");
      } catch {
        copied = false;
      }
      field.remove();
    }
    setCopiedContact({ kind, copied });
    window.setTimeout(() => setCopiedContact(null), 2200);
  };

  return (
    <>
      <SmoothScroll />
      <Preloader />
      <div className="viewport-frame" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Akhlakur Rahman home">
          AR<span>®</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">
            Work <sup>06</sup>
          </a>
          <a href="#research">Research</a>
          <a href="#contact">
            Contact <span className="nav-dot" />
          </a>
          <a
            className="nav-resume"
            href="https://drive.google.com/file/d/1mOmCYzFVl2bktuETnp9VxfDnGEBP-GzV/view"
            target="_blank"
            rel="noreferrer"
          >
            Resume <span aria-hidden="true">↗</span>
          </a>
        </nav>
        <a className="header-availability" href="mailto:akhlak.ur433@gmail.com">
          <span className="status-dot" /> Available for opportunities
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-meta">
            <span>INDEPENDENT DEVELOPER</span>
            <span>
              DHAKA, BANGLADESH <b>↘</b>
            </span>
          </div>
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="accent-mark">✳</span> DIGITAL PRODUCTS, BUILT
              WITH INTENT
            </p>
            <h1 id="hero-title" className="hero-title">
              I TURN IDEAS
              <br />
              INTO INTUITIVE
              <br />
              <span className="hero-title-accent">PRODUCTS.</span>
            </h1>
            <p className="hero-statement">
              <span>DESIGNED FOR</span>
              <strong key={activePhrase}>{heroPhrases[activePhrase]}</strong>
            </p>
 
          </div>
          <div className="hero-image-wrap">
            <Image
              className="hero-photo"
              src="/images/profile.jpeg"
              alt="Portrait of Akhlakur Rahman"
              fill
              fetchPriority="high"
              sizes="(max-width: 800px) 70vw, 39vw"
            />
            <svg
              className="hero-border"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <rect x="0.5" y="0.5" width="99" height="99" pathLength="100" />
            </svg>
          </div>
          <span className="hero-index">01 / 08</span>
          <LogoMarquee />
        </section>

        <section id="about" className="about section-pad">
          <div className="section-kicker" data-reveal>
            <span>01 — THE PERSON</span>
            <span>CURIOUS BY DEFAULT</span>
          </div>
          <div className="about-story">
            <div className="about-fixed">
              <div
                className="about-dither"
                role="img"
                aria-label="Interactive dithered silver portrait artwork"
              >
                <DitherVeil
                  src="/images/silver.png"
                  pattern="floyd"
                  pixelSize={2}
                  inkColor="#0B0B0B"
                  paperColor="#eeffce"
                  revealRadius={200}
                  softness={0.6}
                  linger={1}
                  fit="contain"
                  rimColor="#c6fa62"
                  palette="duotone"
                  levels={2}
                  contrast={1.15}
                  brightness={0}
                  rim={0}
                  reverse={false}
                  wander
                  clickBurst
                />
              </div>
              <h2>
                I’m Akhlakur Rahman<span className="accent-mark">.</span>
              </h2>
              <span className="about-fixed-note">
                CSE GRADUATE · BRAC UNIVERSITY
              </span>
            </div>
            <div className="about-chapter-window">
              <div className="about-chapters">
                <article className="about-chapter">
                  <span>01 / BACKGROUND</span>
                  <p>
                    I’m a Computer Science and Engineering graduate from{" "}
                    <strong>BRAC University</strong> in Bangladesh. My
                    background in computing shaped how I approach challenges:
                    break a complex problem into smaller parts, look for the
                    idea underneath, and work toward a solution that’s both
                    thoughtful and useful.
                  </p>
                  <small>Based in Bangladesh · Open to opportunities</small>
                </article>

                <article className="about-chapter">
                  <span>02 / WHAT I DO</span>
                  <p>
                    I turn questions, early ideas, and complex problems into{" "}
                    <strong>useful digital products.</strong> I’m interested in
                    the full journey—from understanding what needs to be solved
                    to building an experience that feels clear, practical, and
                    easy to use.
                  </p>
                  <small>From a rough idea to something people can use.</small>
                </article>

                <article className="about-chapter">
                  <span>03 / HOW I WORK</span>
                  <p>
                    I start by understanding the problem and what a useful
                    outcome looks like. Then I shape a clear direction, build it
                    in deliberate steps, test what works, and refine the details
                    until the solution feels cohesive.
                  </p>
                  <small>
                    Curiosity first · Thoughtful execution throughout
                  </small>
                </article>

                <article className="about-chapter">
                  <span>04 / OUTSIDE THE SCREEN</span>
                  <p>
                    I’m curious about the systems beneath digital products: how
                    full-stack architecture connects the pieces, how data
                    reveals useful patterns, and how machine learning can create new possibilities. I enjoy learning how these areas fit together.
                  </p>
                  <a
                    className="text-link"
                    href="https://drive.google.com/file/d/1mOmCYzFVl2bktuETnp9VxfDnGEBP-GzV/view"
                    target="_blank"
                    rel="noreferrer"
                  >
                    VIEW MY RESUME <span>↗</span>
                  </a>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="work">
          <div className="work-heading section-pad">
            <div className="section-kicker">
              <span>02 — SELECTED WORK</span>
              <span>2023 — 2026</span>
            </div>
            <h2>
              Made to{" "}
              <span>
                <DecryptedText {...decryptedWordProps} text="matter" />.
              </span>
            </h2>
            <p>Some problems I’ve had the pleasure of working through.</p>
          </div>
          <div className="project-track">
            {projects.map((project) => (
              <article className="project-slide" key={project.number}>
                <div className="project-card">
                  <div className="project-visual">
                    <Image
                      src={project.image}
                      alt={`${project.name} project preview`}
                      fill
                      sizes="(max-width: 899px) 88vw, 69vw"
                    />
                    <span className="visual-index">
                      PROJECT / {project.number}
                    </span>
                    <span className="visual-open">↗</span>
                  </div>
                  <div className="project-info">
                    <div>
                      <span className="project-type">{project.type}</span>
                      <h3>{project.name}</h3>
                      <p>{project.description}</p>
                      <div className="project-tags">{project.tags}</div>
                    </div>
                    <div className="project-links">
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer">
                          LIVE SITE <span>↗</span>
                        </a>
                      )}
                      <a href={project.github} target="_blank" rel="noreferrer">
                        GITHUB <span>↗</span>
                      </a>
                    </div>
                  </div>
                </div>
                <span className="project-count">
                  {project.number} <i>/ 06</i>
                </span>
              </article>
            ))}
          </div>
          <div className="work-mobile-hint">
            <span>SCROLL TO EXPLORE PROJECTS</span>
            <span>↓</span>
          </div>
        </section>

        <section
          className="technologies section-pad"
          aria-labelledby="technologies-title"
        >
          <div className="section-kicker" data-reveal>
            <span>03 — TECHNOLOGIES</span>
            <span>TOOLS I USE TO BUILD</span>
          </div>
          <div className="technologies-heading" data-reveal>
            <h2 id="technologies-title">
              <DecryptedText {...decryptedWordProps} text="Technologies" /> I
              use<span className="accent-mark">.</span>
            </h2>
          </div>
          <div className="technology-groups">
            {technologyGroups.map((group, index) => (
              <div className="technology-group" key={group.name}>
                <div className="technology-group-label">
                  <span>0{index + 1}</span>
                  <h3>{group.name}</h3>
                </div>
                <div
                  className="technology-items"
                  role="list"
                  aria-label={group.name}
                >
                  {group.tools.map(([icon, name]) => (
                    <div className="technology-item" role="listitem" key={name}>
                      <svg
                        viewBox="0 0 24 24"
                        role="img"
                        aria-label={name}
                        focusable="false"
                      >
                        <path d={icon.path} />
                      </svg>
                      <span>{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="research"
          className="research section-pad"
          aria-labelledby="research-title"
        >
          <div className="section-kicker" data-reveal>
            <span>04 — RESEARCH</span>
            <span>QUESTIONS, TESTED</span>
          </div>
          <div className="research-heading" data-reveal>
            <h2 id="research-title">
              Research &amp;
              <span>
                {" "}
                <DecryptedText {...decryptedWordProps} text="findings" />.
              </span>
            </h2>
          </div>
          <div
            className="research-slider"
            role="region"
            aria-roledescription="carousel"
            aria-label="Research papers"
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") {
                event.preventDefault();
                setActiveResearch((activeResearch + 1) % researchPapers.length);
              }
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                setActiveResearch(
                  (activeResearch + researchPapers.length - 1) %
                    researchPapers.length,
                );
              }
            }}
          >
            {researchPapers.map((paper, index) => {
              const isActive = index === activeResearch;
              return (
                <article
                  className={`research-card research-card--${index === 0 ? "tutoring" : "flood"} ${isActive ? "is-active" : "is-preview"}`}
                  key={paper.number}
                  role={isActive ? undefined : "button"}
                  tabIndex={isActive ? -1 : 0}
                  aria-label={
                    isActive
                      ? undefined
                      : `Show research paper ${paper.number}: ${paper.title}`
                  }
                  aria-current={isActive ? "true" : undefined}
                  onClick={
                    isActive ? undefined : () => setActiveResearch(index)
                  }
                  onKeyDown={(event) => {
                    if (
                      !isActive &&
                      (event.key === "Enter" || event.key === " ")
                    ) {
                      event.preventDefault();
                      setActiveResearch(index);
                    }
                  }}
                >
                  <div className="research-card-topline">
                    <span>RESEARCH / {paper.number}</span>
                    <span className="research-card-dot" aria-hidden="true" />
                  </div>
                  {isActive ? (
                    <div className="research-card-content">
                      <div className="research-field">{paper.field}</div>
                      <h3>{paper.title}</h3>
                      <p className="research-paper-title">{paper.paperTitle}</p>
                      <p className="research-summary">{paper.summary}</p>
                      <div className="research-statuses">
                        {paper.statuses.map((status) => (
                          <span key={status}>{status}</span>
                        ))}
                      </div>
                      <div className="research-metrics">
                        {paper.metrics.map(([value, label]) => (
                          <div className="research-metric" key={value}>
                            <strong>{value}</strong>
                            <span>{label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="research-preview-content">
                      <div className="research-field">{paper.field}</div>
                      <h3>{paper.title}</h3>
                      <span className="research-preview-status">
                        {paper.statuses[0]}
                      </span>
                      <span className="research-preview-action">
                        EXPLORE PAPER <b aria-hidden="true">↗</b>
                      </span>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
          <div
            className="research-controls"
            aria-label="Research paper navigation"
          >
            <button
              type="button"
              aria-label="Previous research paper"
              onClick={() =>
                setActiveResearch(
                  (activeResearch + researchPapers.length - 1) %
                    researchPapers.length,
                )
              }
            >
              ←
            </button>
            <span className="research-slide-count">
              <strong>0{activeResearch + 1}</strong> / 0{researchPapers.length}
            </span>
            {researchPapers.map((paper, index) => (
              <button
                className="research-dot-control"
                type="button"
                key={paper.number}
                aria-label={`Show research paper ${paper.number}`}
                aria-pressed={index === activeResearch}
                onClick={() => setActiveResearch(index)}
              />
            ))}
            <button
              type="button"
              aria-label="Next research paper"
              onClick={() =>
                setActiveResearch((activeResearch + 1) % researchPapers.length)
              }
            >
              →
            </button>
          </div>
        </section>

        <section id="contact" className="contact section-pad">
          <div className="section-kicker" data-reveal>
            <span>05 — YOUR TURN</span>
            <span>HAVE SOMETHING IN MIND?</span>
          </div>
          <div className="contact-main" data-reveal>
            <p className="eyebrow">
              <span className="status-dot" /> OPEN TO OPPORTUNITIES
            </p>
            <h2>
              Let’s build
              <br />
              something <span>useful.</span>
            </h2>
          </div>
          <footer className="footer">
            <div className="footer-top">
              <div className="footer-contact-column">
                <span className="footer-label">DIRECT CONTACT</span>
                <button
                  className="contact-detail contact-copy"
                  type="button"
                  aria-label={
                    copiedContact?.kind === "email" && copiedContact.copied
                      ? "Email copied to clipboard"
                      : "Copy email address"
                  }
                  onClick={() => copyContact("email", "akhlak.ur433@gmail.com")}
                >
                  <span className="contact-detail-label">
                    {copiedContact?.kind === "email"
                      ? copiedContact.copied
                        ? "COPIED TO CLIPBOARD"
                        : "COPY FAILED — SELECT ADDRESS"
                      : "EMAIL · CLICK TO COPY"}
                  </span>
                  <strong>akhlak.ur433@gmail.com</strong>
                  <span className="contact-detail-arrow" aria-hidden="true">
                    {copiedContact?.kind === "email" && copiedContact.copied
                      ? "✓"
                      : "↗"}
                  </span>
                </button>
                <button
                  className="contact-detail contact-copy"
                  type="button"
                  aria-label={
                    copiedContact?.kind === "phone" && copiedContact.copied
                      ? "Phone copied to clipboard"
                      : "Copy phone number"
                  }
                  onClick={() => copyContact("phone", "+8801305685267")}
                >
                  <span className="contact-detail-label">
                    {copiedContact?.kind === "phone"
                      ? copiedContact.copied
                        ? "COPIED TO CLIPBOARD"
                        : "COPY FAILED — SELECT NUMBER"
                      : "PHONE · CLICK TO COPY"}
                  </span>
                  <strong>+880 1305 685267</strong>
                  <span className="contact-detail-arrow" aria-hidden="true">
                    {copiedContact?.kind === "phone" && copiedContact.copied
                      ? "✓"
                      : "↗"}
                  </span>
                </button>
                <a
                  className="contact-detail contact-detail-link"
                  href="https://wa.me/8801305685267"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contact-detail-label">
                    WHATSAPP · OPEN CHAT
                  </span>
                  <strong>
                    +880 1305 685267 <span aria-hidden="true">↗</span>
                  </strong>
                </a>
              </div>
              <div className="footer-social-column">
                <span className="footer-label">ELSEWHERE</span>
                <a
                  className="contact-social-link"
                  href="https://github.com/Akhlakur07"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>GitHub</span>
                  <strong>Akhlakur07 ↗</strong>
                </a>
                <a
                  className="contact-social-link"
                  href="https://www.linkedin.com/in/akhlakur-rahman-92ba312bb/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>LinkedIn</span>
                  <strong>Akhlakur Rahman ↗</strong>
                </a>
                <a
                  className="contact-social-link"
                  href="https://www.facebook.com/akhlakur.rahman.007"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Facebook</span>
                  <strong>akhlakur.rahman.007 ↗</strong>
                </a>
                <a
                  className="contact-social-link"
                  href="https://drive.google.com/file/d/1mOmCYzFVl2bktuETnp9VxfDnGEBP-GzV/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Resume</span>
                  <strong>View resume ↗</strong>
                </a>
              </div>
              <div className="footer-clock">
                <span className="footer-label">LOCAL TIME · DHAKA</span>
                <strong className="clock-value">
                  <DhakaClock />
                </strong>
                <span className="contact-location">
                  <span className="status-dot" /> Based in Bangladesh · Open to
                  opportunities
                </span>
              </div>
            </div>
            <div className="footer-bottom">
              <span>© 2026 AKHLAKUR RAHMAN</span>
              <span>BUILT WITH INTENT</span>
              <a href="#top">BACK TO TOP ↑</a>
            </div>
          </footer>
        </section>
      </main>
    </>
  );
}
