import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import gamiLogo from "@/assets/partners/GAMI.svg";
import iamiLogo from "@/assets/partners/IAMI.svg";
import adiLogo from "@/assets/partners/ADI.svg";
import salLogo from "@/assets/partners/SAL.svg";
import slaLogo from "@/assets/partners/SLA.svg";
import lscLogo from "@/assets/lsc-logo.svg";
import riyadhArchitecture from "@/assets/riyadh-architecture.jpg";
import aiTransformation from "@/assets/home/ai-transformation.jpeg";
import cyberSecurity from "@/assets/home/cyber-security.jpeg";
import advisoryMeeting from "@/assets/home/advisory-meeting.jpeg";
import resDiagnostic from "@/assets/home/res-diagnostic.jpeg";
import resArchitecture from "@/assets/home/res-architecture.jpeg";
import resIntelligence from "@/assets/home/res-intelligence.jpeg";
import resCapability from "@/assets/home/res-capability.jpeg";
import resCyber from "@/assets/home/res-cyber.jpeg";
import aboutExecutives from "@/assets/home/about-saudi-executives.jpeg";
import aboutDetail from "@/assets/home/about-strategy-detail.jpg";
import serviceCtScan from "@/assets/home/service-ct-scan.jpeg";
import serviceLeadership from "@/assets/home/service-agentic-leadership.jpeg";
import serviceCybernetics from "@/assets/home/service-cybernetics.jpeg";
import industryPublicSector from "@/assets/home/industry-public-sector.jpeg";
import industryTechTelecom from "@/assets/home/industry-tech-telecom.jpeg";
import industryPrivateSector from "@/assets/home/industry-private-sector.jpeg";
import industryRealEstate from "@/assets/home/industry-real-estate.jpeg";
import industryHealthcare from "@/assets/home/industry-healthcare.jpeg";
import industryMedia from "@/assets/home/industry-media.jpeg";
import industryLogistics from "@/assets/home/industry-logistics.jpeg";
import industryAerospace from "@/assets/home/industry-aerospace.jpeg";
import { Arrow, Container, Eyebrow, Reveal, SectionLabel } from "./primitives";

/* ------------------------------------------------------------------ HERO */

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-24 sm:pt-32 sm:pb-28 lg:pt-40 lg:pb-36"
    >
      <Container>
        <div className="relative mx-auto max-w-[58rem] text-center">
          <Reveal>
            <p className="mb-5 text-[0.75rem] font-medium uppercase tracking-[0.32em] text-foreground sm:mb-6">
              WELCOME TO HIGHREACH
            </p>
          </Reveal>
          <Reveal delay={90}>
            {/* <h1 className="mx-auto max-w-[30ch] text-[2.25rem] font-light leading-[1.1] tracking-[-0.025em] text-foreground sm:max-w-[34ch] sm:text-[2.75rem] lg:max-w-[36ch] lg:text-[3rem] xl:text-[3.5rem]">
              Building Intelligent Organisations
              <br className="hidden sm:block" /> for an AI-Driven World
            </h1> */}
            <h1 className="mx-auto max-w-[30ch] text-[clamp(1.75rem,7vw,3rem)] font-light leading-[1.15] tracking-[-0.025em] text-foreground sm:max-w-[34ch] lg:max-w-[36ch]">
              Building Intelligent Organisations
              <br className="hidden sm:block" /> for an AI-Driven World
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mx-auto mt-8 max-w-[42rem] text-lg leading-[1.7] text-secondary-ink">
              In an era of AI and constant disruption, organisations must become smarter, more
              adaptive and future-ready. HighReach develops the leadership, strategy and
              capabilities needed to thrive in a rapidly changing world.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------- RESOURCES */

const RESOURCES = [
  {
    id: "diagnostic",
    title: "Diagnostic Report Structure",
    sub: "What a CT Scan Delivers",
    image: resDiagnostic,
  },
  {
    id: "architecture",
    title: "Three-Tier Architecture Entry Point",
    sub: "Diagnosis Before Intervention",
    image: resArchitecture,
  },
  {
    id: "intelligence",
    title: "Intelligence",
    sub: "Strategic Intelligence",
    image: resIntelligence,
  },
  {
    id: "capability",
    title: "Capability Overview",
    sub: "Why LSC Does, and Why it Matters",
    image: resCapability,
  },
  {
    id: "cyber",
    title: "Cyber Security Practice",
    sub: "Cyber Capability Built for Complex",
    image: resCyber,
  },
];

/** One full-bleed immersive resource panel. Title shows by default; description + download reveal on hover. */
function ResourcePanel({ item }: { item: (typeof RESOURCES)[number] }) {
  return (
    <a
      href="#contact"
      className={
        "group relative block h-[21rem] w-full overflow-hidden rounded-2xl border border-hairline bg-background shadow-[0_10px_30px_-18px_rgba(5,52,98,0.35)] " +
        "transition-all duration-[550ms] ease-[cubic-bezier(0.16,1,0.3,1)] " +
        "hover:-translate-y-2 hover:border-accent hover:shadow-[0_28px_55px_-24px_rgba(5,52,98,0.45)]"
      }
    >
      <img
        src={item.image}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1024}
        height={768}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#053462]/75 via-[#053462]/30 to-transparent transition-all duration-[650ms] group-hover:from-[#053462]/85 group-hover:via-[#053462]/40"
      />

      <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-6 pb-4 transition-transform duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1">
        <h3 className="max-w-[20ch] text-lg font-medium leading-snug tracking-[-0.01em] text-white transition-transform duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1">
          {item.title}
        </h3>
        <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-[600ms] ease-out group-hover:mt-2 group-hover:max-h-24 group-hover:opacity-100">
          <p className="max-w-[28ch] text-sm leading-relaxed text-white/90">{item.sub}</p>
          <span className="mt-2 inline-flex items-center gap-2 text-[0.78rem] font-medium text-white">
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            Download
            <span className="sr-only"> {item.title}</span>
            <Arrow className="h-3 w-3 transition-transform duration-500 ease-out group-hover:translate-x-1.5" />
          </span>
        </div>
      </div>
    </a>
  );
}

export function Resources() {
  const n = RESOURCES.length;

  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [animated, setAnimated] = useState(true);
  const [positions, setPositions] = useState<number[]>([]);
  const busyRef = useRef(false);
  const pausedRef = useRef(false);
  const timerRef = useRef<number | null>(null);
  const releaseRef = useRef<number | null>(null);
  const touchX = useRef(0);

  // measure exact slide positions (both original + duplicated groups)
  useEffect(() => {
    const measure = () => {
      const el = trackRef.current;
      if (!el) return;
      const items = Array.from(el.children) as HTMLElement[];
      if (items.length < 2) return;
      const first = items[0];
      if (!first) return;
      setPositions(items.map((item) => item.offsetLeft - first.offsetLeft));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // single source of truth for carousel movement
  const move = (dir: 1 | -1) => {
    if (busyRef.current) return;
    busyRef.current = true;

    if (dir === -1 && index === 0) {
      // silently reposition onto the clone set, then animate one card back
      setAnimated(false);
      setIndex(n);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setAnimated(true);
          setIndex(n - 1);
        }),
      );
    } else {
      setAnimated(true);
      setIndex((i) => i + dir);
    }

    if (releaseRef.current) window.clearTimeout(releaseRef.current);
    releaseRef.current = window.setTimeout(() => {
      busyRef.current = false;
      // seamless index correction once the transition has completed
      setIndex((i) => {
        if (i >= n) {
          setAnimated(false);
          requestAnimationFrame(() => setAnimated(true));
          return i - n;
        }
        return i;
      });
    }, 950);
  };

  const manualMove = (dir: 1 | -1) => {
    if (busyRef.current) return;
    if (timerRef.current) window.clearTimeout(timerRef.current);
    move(dir);
  };

  // auto-scroll: one controlled timer, one card every ~6s, paused on hover/touch
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tick = () => {
      if (!pausedRef.current && !busyRef.current && positions.length) move(1);
      timerRef.current = window.setTimeout(tick, 12000);
    };
    timerRef.current = window.setTimeout(tick, 12000);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, positions.length]);

  useEffect(
    () => () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      if (releaseRef.current) window.clearTimeout(releaseRef.current);
    },
    [],
  );

  const x = positions.length ? (positions[index] ?? 0) : 0;

  return (
    <section
      id="resources"
      className="relative -mt-5 overflow-hidden bg-background pb-14 pt-0 sm:-mt-6 lg:-mt-8 lg:pb-16 lg:pt-0"
      aria-label="Resources"
    >
      <Reveal>
        <div
          className="mx-auto max-w-full overflow-hidden px-6 pb-6 pt-2 sm:w-[calc(2*12.5rem+1.5rem)] sm:px-0 md:w-[calc(3*13rem+4rem)] lg:w-[calc(4*11.5rem+6rem)] xl:w-[calc(4*13.75rem+8.25rem)]"
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
          }}
          onTouchStart={(e) => {
            pausedRef.current = true;
            touchX.current = e.touches[0]?.clientX ?? 0;
          }}
          onTouchEnd={(e) => {
            pausedRef.current = false;
            const dx = (e.changedTouches[0]?.clientX ?? 0) - touchX.current;
            if (Math.abs(dx) > 40) manualMove(dx < 0 ? 1 : -1);
          }}
        >
          <div
            ref={trackRef}
            className="flex w-max items-start gap-6 md:gap-8 xl:gap-11"
            style={{
              transform: `translate3d(-${x}px, 0, 0)`,
              transition: animated ? "transform 900ms cubic-bezier(0.65, 0, 0.35, 1)" : "none",
            }}
          >
            {[...RESOURCES, ...RESOURCES].map((r, i) => (
              <div
                key={`${i >= n ? "copy-" : ""}${r.id}`}
                className="w-[calc(100vw-3rem)] shrink-0 sm:w-[12.5rem] md:w-[13rem] lg:w-[11.5rem] xl:w-[13.75rem] hover:z-40"
                aria-hidden={i >= n ? true : undefined}
              >
                <ResourcePanel item={r} />
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* carousel arrow controls */}
      <div className="flex items-center justify-center gap-3 pt-2">
        <button
          type="button"
          aria-label="Previous resource"
          onClick={() => manualMove(-1)}
          className="group flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-white text-foreground transition-all duration-300 hover:border-accent hover:bg-accent/[0.06] hover:text-accent"
        >
          <ChevronLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
        </button>
        <button
          type="button"
          aria-label="Next resource"
          onClick={() => manualMove(1)}
          className="group flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-white text-foreground transition-all duration-300 hover:border-accent hover:bg-accent/[0.06] hover:text-accent"
        >
          <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- ASSESSMENT TOOLS */

const TOOLS = [
  { label: "AI Direction Scan", href: "https://londonstrategycentre.com/ai-direction-scan" },
  {
    label: "Cyber Excellence Assessment",
    href: "https://londonstrategycentre.com/cyber-assessment",
  },
  { label: "Digital, Business Plan", href: "https://londonstrategycentre.com/venture-framework" },
];

export function AssessmentTools() {
  return (
    <section className="py-10 lg:py-12" aria-label="Strategic & Digital Assessment Tools">
      <Container>
        <Reveal>
          <nav className="mx-auto w-full max-w-4xl rounded-[3rem] border border-hairline bg-background p-1 shadow-[0_2px_8px_rgba(5,52,98,0.05),0_10px_28px_rgba(5,52,98,0.09)]">
            <ul className="flex flex-col md:flex-row md:gap-0">
              {TOOLS.map((tool) => (
                <li
                  key={tool.label}
                  className="flex w-full justify-center border-b border-hairline last:border-b-0 md:w-auto md:flex-1 md:border-b-0 md:border-r md:last:border-r-0"
                >
                  <a
                    href={tool.href}
                    className="flex w-full items-center justify-center px-3 py-4 text-center text-sm font-medium leading-tight text-foreground transition-colors duration-300 hover:text-accent md:whitespace-nowrap md:px-5 md:py-3 md:text-[0.95rem]"
                  >
                    {tool.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- ABOUT */

export function About() {
  return (
    <section id="about" className="overflow-hidden py-20 lg:py-28" aria-labelledby="about-heading">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Visual */}
          <Reveal className="order-2 lg:order-1 lg:col-span-5">
            <div className="group relative">
              <div className="pointer-events-none absolute -left-6 -top-6 hidden h-24 w-24 border-l border-t border-accent/40 lg:block" />
              <div className="relative overflow-hidden rounded-2xl border border-hairline shadow-[0_18px_50px_rgba(5,52,98,0.12)]">
                <img
                  src={aboutExecutives}
                  alt="Senior Saudi executives in strategic discussion in a modern Riyadh boardroom"
                  loading="lazy"
                  width={1200}
                  height={1504}
                  className="h-[26rem] w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.03] sm:h-[32rem] lg:h-[38rem]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-8 -right-4 hidden w-52 overflow-hidden rounded-xl border border-hairline bg-background p-1.5 shadow-[0_14px_40px_rgba(5,52,98,0.14)] sm:block lg:-right-10 lg:w-60">
                <img
                  src={aboutDetail}
                  alt="Saudi business leader reviewing a strategy document"
                  loading="lazy"
                  width={928}
                  height={720}
                  className="h-28 w-full rounded-lg object-cover lg:h-32"
                />
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <Reveal>
              <SectionLabel>About HighReach</SectionLabel>
              <h2
                id="about-heading"
                className="mt-6 text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-[3.25rem]"
              >
                HighReach Business Solutions
              </h2>
            </Reveal>

            <div className="mt-8 border-l border-accent/40 pl-6 sm:pl-8">
              <Reveal delay={90}>
                <p className="max-w-[46rem] text-base leading-[1.8] text-secondary-ink">
                  With world-class expertise, extensive networks and strong partnerships, we develop
                  people and organisations across strategy, innovation and leadership.
                </p>
              </Reveal>
              <Reveal delay={150}>
                <p className="mt-5 max-w-[46rem] text-base leading-[1.8] text-secondary-ink">
                  We work with business leaders and management teams to overcome challenges, unlock
                  potential and create lasting impact.
                </p>
              </Reveal>
            </div>

            <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-px sm:bg-hairline">
              <Reveal delay={220} className="sm:bg-background">
                <div className="h-full sm:pr-8">
                  <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-accent">
                    Our Approach
                  </p>
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.01em] text-foreground lg:text-2xl">
                    Learning That Drives Action
                  </h3>
                  <p className="mt-4 text-sm leading-[1.75] text-secondary-ink">
                    Our executive development approach combines critical thinking, contemporary
                    education and practical application to enable organisational improvement.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={300} className="sm:bg-background">
                <div className="h-full sm:pl-8">
                  <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-accent">
                    Our Uniqueness
                  </p>
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.01em] text-foreground lg:text-2xl">
                    Expertise Built Around Transformation
                  </h3>
                  <p className="mt-4 text-sm leading-[1.75] text-secondary-ink">
                    We combine leadership facilitation, strategy, technology-enabled learning and
                    problem-based design to deliver impactful transformation programmes.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------ CAPABILITY */

const CAPABILITIES = [
  {
    title: "Artificial Intelligence",
    body: "Comprehensive AI strategy and implementation certification",
    href: "https://londonstrategycentre.com/artificial-intelligence",
    image: aiTransformation,
    alt: "Analysts reviewing AI performance dashboards",
    kind: "ai" as const,
  },
  {
    title: "Cyber Security",
    body: "Advanced cyber security framework and risk management",
    href: "https://londonstrategycentre.com/cyber-security",
    image: cyberSecurity,
    alt: "Cyber security operations centre",
    kind: "cyber" as const,
  },
  {
    title: "Advisory Services",
    body: "Advisory Services provide expert advice to support better decisions and growth.",
    href: "https://londonstrategycentre.com/advisory-services",
    image: advisoryMeeting,
    alt: "Executive advisory meeting in a Riyadh office",
    kind: "advisory" as const,
  },
];

/** Minimal navy/blue linework layered over each capability visual. */
function CapabilityGraphic({ kind }: { kind: "ai" | "cyber" | "advisory" }) {
  const common = "absolute inset-0 h-full w-full text-accent/70";
  if (kind === "ai") {
    return (
      <svg
        viewBox="0 0 400 240"
        fill="none"
        aria-hidden="true"
        className={common}
        preserveAspectRatio="none"
      >
        <g stroke="currentColor" strokeWidth="0.75" opacity="0.9">
          <path d="M60 190 L140 120 L230 160 L320 70" />
          <path d="M60 190 L150 60 L230 160" />
          <path d="M150 60 L320 70" />
        </g>
        {[
          [60, 190],
          [140, 120],
          [150, 60],
          [230, 160],
          [320, 70],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="3.5" fill="currentColor" />
        ))}
      </svg>
    );
  }
  if (kind === "cyber") {
    return (
      <svg
        viewBox="0 0 400 240"
        fill="none"
        aria-hidden="true"
        className={common}
        preserveAspectRatio="none"
      >
        <g stroke="currentColor" strokeWidth="0.75" opacity="0.9">
          <path d="M200 40 L280 75 V140 C280 178 240 198 200 208 C160 198 120 178 120 140 V75 Z" />
          <path
            d="M200 62 L258 88 V140 C258 168 228 183 200 191 C172 183 142 168 142 140 V88 Z"
            opacity="0.6"
          />
          <path d="M20 120 H120 M280 120 H380" />
          <path d="M20 90 H100 M300 150 H380" opacity="0.5" />
        </g>
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 400 240"
      fill="none"
      aria-hidden="true"
      className={common}
      preserveAspectRatio="none"
    >
      <g stroke="currentColor" strokeWidth="0.75" opacity="0.9">
        <rect x="40" y="150" width="60" height="50" />
        <rect x="130" y="110" width="60" height="90" />
        <rect x="220" y="70" width="60" height="130" />
        <rect x="310" y="30" width="50" height="170" />
        <path d="M40 200 H360" />
      </g>
    </svg>
  );
}

export function Capability() {
  return (
    <section
      id="capability"
      className="bg-surface py-20 lg:py-28"
      aria-labelledby="capability-heading"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-16">
          <Reveal className="lg:col-span-5">
            <Eyebrow>CAPABILITY</Eyebrow>
            <h2
              id="capability-heading"
              className="mt-5 text-[2.25rem] font-light leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[2.75rem] lg:text-[3.25rem]"
            >
              Our Capability
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7 lg:border-l lg:border-accent/40 lg:pl-10">
            <p className="max-w-2xl text-base leading-[1.7] text-secondary-ink sm:text-lg">
              Through advisory, capability development, and intelligent platforms, we help
              organisations strengthen leadership, align strategy with execution, and build the
              systems required to perform in an increasingly complex world.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((c, i) => (
            <Reveal
              as="li"
              key={c.title}
              delay={200 + i * 130}
              className={`group ${i === 1 ? "sm:translate-y-5 lg:translate-y-6" : ""}`}
            >
              <a
                href={c.href}
                className="relative block h-[22rem] w-full overflow-hidden rounded-[0.875rem] border border-hairline shadow-[0_1px_2px_rgba(5,52,98,0.04)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-[0_18px_40px_rgba(5,52,98,0.10)]"
              >
                <img
                  src={c.image}
                  alt={c.alt}
                  loading="lazy"
                  width={1408}
                  height={1008}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(5,52,98,0.42)_70%,rgba(5,52,98,0.72)_100%)] opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end px-5 pt-5 pb-4 lg:px-6 lg:pt-6 lg:pb-5">
                  <h3 className="text-2xl font-semibold tracking-[-0.01em] text-white transition-transform duration-500 ease-out sm:text-3xl">
                    {c.title}
                  </h3>
                  <p className="max-h-0 max-w-[30ch] overflow-hidden text-sm leading-relaxed text-white/90 opacity-0 transition-all duration-500 ease-out group-hover:mt-3 group-hover:max-h-24 group-hover:opacity-100">
                    {c.body}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------ INDUSTRIES */

const INDUSTRIES = [
  {
    title: "Public Sector",
    body: "Public administration optimization and digital government solutions",
    image: industryPublicSector,
    alt: "Modern civic government architecture representing the public sector",
  },
  {
    title: "Technology and Telecommunications",
    body: "Digital transformation and innovation strategies for tech companies",
    image: industryTechTelecom,
    alt: "Glowing data network and fibre optics representing technology and telecommunications",
  },
  {
    title: "Private Sector",
    body: "Comprehensive business solutions for private sector enterprises",
    image: industryPrivateSector,
    alt: "Executives collaborating in a modern corporate boardroom representing the private sector",
  },
  {
    title: "Real Estate",
    body: "Real estate leaders need organisational intelligence built for market complexity — not instinct or convention dressed as strategy.",
    image: industryRealEstate,
    alt: "Premium commercial skyscraper architecture representing real estate development",
  },
  {
    title: "Healthcare Sector",
    body: "Healthcare organisations demand the leadership capability and decision systems designed for a fundamentally different environment.",
    image: industryHealthcare,
    alt: "Modern hospital corridor representing the healthcare sector",
  },
  {
    title: "Media Sector",
    body: "The sector demands leaders making high-quality decisions under pressure, not those who react faster to change they failed to see.",
    image: industryMedia,
    alt: "Broadcast production control room representing the media sector",
  },
  {
    title: "Logistics Sector",
    body: "In logistics, execution coherence is the decisive competitive advantage separating organisations that perform from those who fail.",
    image: industryLogistics,
    alt: "Container port with cargo cranes at dusk representing the logistics sector",
  },
  {
    title: "Aerospace and Defence",
    body: "Strategic consulting for aerospace innovation and defense sector transformation.",
    image: industryAerospace,
    alt: "Jet aircraft on a runway at dusk representing aerospace and defence",
  },
];

export function Industries() {
  const n = INDUSTRIES.length;
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLUListElement | null>(null);
  const [index, setIndex] = useState(0);
  const [animated, setAnimated] = useState(true);
  const [step, setStep] = useState(0);
  const busyRef = useRef(false);
  const pausedRef = useRef(false);
  const timerRef = useRef<number | null>(null);
  const releaseRef = useRef<number | null>(null);

  // measure exact one-card step (card width + gap)
  useEffect(() => {
    const measure = () => {
      const el = trackRef.current;
      if (!el) return;
      const items = el.children;
      if (items.length < 2) return;
      const a = items[0] as HTMLElement;
      const b = items[1] as HTMLElement;
      setStep(b.offsetLeft - a.offsetLeft);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // single source of truth for movement — used by auto-scroll and both arrows
  const move = (dir: 1 | -1) => {
    if (busyRef.current) return;
    busyRef.current = true;

    if (dir === -1 && index === 0) {
      // silently reposition onto the clone set, then animate one card back
      setAnimated(false);
      setIndex(n);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setAnimated(true);
          setIndex(n - 1);
        }),
      );
    } else {
      setAnimated(true);
      setIndex((i) => i + dir);
    }

    if (releaseRef.current) window.clearTimeout(releaseRef.current);
    releaseRef.current = window.setTimeout(() => {
      busyRef.current = false;
      // seamless index correction once the transition has completed
      setIndex((i) => {
        if (i >= n) {
          setAnimated(false);
          requestAnimationFrame(() => setAnimated(true));
          return i - n;
        }
        return i;
      });
    }, 950);
  };

  const manualMove = (dir: 1 | -1) => {
    if (busyRef.current) return;
    if (timerRef.current) window.clearTimeout(timerRef.current);
    move(dir);
  };

  // Auto-scroll: one controlled timer, one card every ~3.5s, paused on hover/touch
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tick = () => {
      if (!pausedRef.current && !busyRef.current) move(1);
      timerRef.current = window.setTimeout(tick, 3500);
    };
    timerRef.current = window.setTimeout(tick, 3500);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(
    () => () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      if (releaseRef.current) window.clearTimeout(releaseRef.current);
    },
    [],
  );

  // touch swipe: one swipe = exactly one card
  const touchX = useRef(0);

  return (
    <section id="industries" className="py-20 lg:py-28" aria-labelledby="industries-heading">
      <Container>
        <Reveal>
          <SectionLabel>Our Industries</SectionLabel>
          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2
              id="industries-heading"
              className="text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl"
            >
              Our Industries
            </h2>
            <div className="flex items-end justify-between gap-4 sm:gap-6 lg:items-center lg:gap-8">
              <p className="max-w-md text-base leading-relaxed text-secondary-ink">
                Specialised expertise across diverse sectors and industries
              </p>
              <div className="flex shrink-0 gap-3">
                <button
                  type="button"
                  aria-label="Previous industries"
                  onClick={() => manualMove(-1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-background text-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  <Arrow className="h-4 w-4 rotate-180" />
                </button>
                <button
                  type="button"
                  aria-label="Next industries"
                  onClick={() => manualMove(1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-background text-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  <Arrow className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>

      <div className="mt-14">
        <Container>
          <div
            ref={viewportRef}
            className="overflow-hidden pb-4"
            onMouseEnter={() => {
              pausedRef.current = true;
            }}
            onMouseLeave={() => {
              pausedRef.current = false;
            }}
            onTouchStart={(e) => {
              pausedRef.current = true;
              touchX.current = e.touches[0]?.clientX ?? 0;
            }}
            onTouchEnd={(e) => {
              pausedRef.current = false;
              const dx = (e.changedTouches[0]?.clientX ?? 0) - touchX.current;
              if (Math.abs(dx) > 40) manualMove(dx < 0 ? 1 : -1);
            }}
          >
            <ul
              ref={trackRef}
              className="flex gap-5 lg:gap-6"
              style={{
                transform: `translate3d(-${index * step}px, 0, 0)`,
                transition: animated ? "transform 900ms cubic-bezier(0.65, 0, 0.35, 1)" : "none",
              }}
            >
              {[...INDUSTRIES, ...INDUSTRIES].map((ind, i) => (
                <li
                  key={`${ind.title}-${i}`}
                  aria-hidden={i >= n ? true : undefined}
                  className="w-full shrink-0 sm:w-[calc((100%_-_1.25rem)_/_2)] md:w-[calc((100%_-_2.5rem)_/_3)] lg:w-[calc((100%_-_4.5rem)_/_4)]"
                >
                  <div className="group relative block h-[24rem] overflow-hidden rounded-2xl shadow-[0_4px_16px_rgba(5,52,98,0.08)] transition-all duration-[800ms] ease-out hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(5,52,98,0.18)] sm:h-[26rem] lg:h-[28rem]">
                    <img
                      src={ind.image}
                      alt={ind.alt}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[800ms] ease-out group-hover:scale-[1.045]"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#053462]/95 via-[#053462]/35 to-transparent transition-opacity duration-[800ms] ease-out group-hover:opacity-90"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-[#053462]/0 transition-colors duration-[800ms] ease-out group-hover:bg-[#053462]/15"
                    />
                    <span className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-6 lg:p-7">
                      <h3 className="text-xl font-semibold leading-tight tracking-[-0.01em] text-white transition-transform duration-[800ms] ease-out lg:text-2xl">
                        {ind.title}
                      </h3>
                      <span className="grid max-h-0 overflow-hidden opacity-0 transition-all duration-[800ms] ease-out group-hover:max-h-32 group-hover:opacity-100">
                        <p className="pt-2.5 text-sm leading-relaxed text-white/85 transition-transform duration-[800ms] ease-out">
                          {ind.body}
                        </p>
                      </span>
                      <span className="mt-4 flex items-center gap-2 text-white/90">
                        <span className="block h-px w-7 bg-accent transition-all duration-[800ms] ease-out group-hover:w-10" />
                        <Arrow className="h-4 w-4 text-accent transition-transform duration-[800ms] ease-out group-hover:translate-x-1.5" />
                      </span>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- SERVICES */

const SERVICES = [
  {
    number: "01",
    title: "CT Scan",
    body: "An AI-enabled diagnostic, mapping how leaders think, decide, and execute, then surfacing the systemic constraints on performance.",
    href: "https://londonstrategycentre.com/artificial-intelligence/capability-transformation-scan",
    image: serviceCtScan,
    alt: "Illuminated neural network visualisation representing an AI-enabled organisational diagnostic",
  },
  {
    number: "02",
    title: "Agentic Leadership",
    body: "Producing measurable shifts in decision quality and execution coherence, not just competency scores or attendance on a programme.",
    href: "https://londonstrategycentre.com/artificial-intelligence/agentic-leadership-transformation",
    image: serviceLeadership,
    alt: "Senior executives in discussion around a boardroom table representing agentic leadership",
  },
  {
    number: "03",
    title: "Cybernetics Transformation",
    body: "Redesigning decision architecture, sensing systems, and governance so your organisation continuously senses, adapts, and performs.",
    href: "https://londonstrategycentre.com/artificial-intelligence/cybernetic-organisation-design",
    image: serviceCybernetics,
    alt: "Operations command centre with data dashboards representing cybernetics transformation",
  },
];

type ServiceItem = (typeof SERVICES)[number];

function ServiceCard({ service, featured = false }: { service: ServiceItem; featured?: boolean }) {
  return (
    <a
      href={service.href}
      className={`group relative flex h-full flex-col justify-between gap-16 overflow-hidden rounded-3xl p-7 shadow-[0_12px_40px_-12px_rgba(20,128,174,0.28)] transition-all duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:scale-[1.015] hover:shadow-[0_28px_60px_-16px_rgba(20,128,174,0.45)] lg:p-9 ${
        featured ? "min-h-[26rem] lg:min-h-[36rem]" : "min-h-[18rem] lg:min-h-[17.25rem]"
      }`}
    >
      <img
        src={service.image}
        alt={service.alt}
        loading="lazy"
        width={1200}
        height={900}
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[650ms] ease-out group-hover:scale-[1.03]"
      />
      <span aria-hidden="true" className="absolute inset-0 bg-[#053462]/40" />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-[#053462]/0 transition-colors duration-[600ms] ease-out group-hover:bg-[#053462]/15"
      />

      <span className="relative flex items-start justify-between gap-4">
        <span className="pt-2 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-white/75">
          {service.number} — Service
        </span>
        <span className="flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.16em] text-white backdrop-blur-sm transition-colors duration-[600ms] ease-out group-hover:border-white/70">
          Explore
          <Arrow className="h-4 w-4 transition-transform duration-[600ms] ease-out group-hover:translate-x-1.5" />
        </span>
      </span>

      <span className="relative flex flex-col transition-transform duration-[600ms] ease-out group-hover:-translate-y-1.5">
        <h3
          className={`font-semibold leading-[1.1] tracking-[-0.015em] text-white ${
            featured ? "text-3xl lg:text-[2.6rem]" : "text-2xl lg:text-[1.75rem]"
          }`}
        >
          {service.title}
        </h3>
        <p
          className={`mt-3 text-sm leading-relaxed text-white/80 ${featured ? "max-w-lg lg:text-base" : "max-w-md"}`}
        >
          {service.body}
        </p>
      </span>
    </a>
  );
}

export function Services() {
  const [featured, ...rest] = SERVICES;

  return (
    <section
      id="services"
      className="bg-foreground py-20 text-background lg:py-28"
      aria-labelledby="services-heading"
    >
      <Container>
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-accent-light" aria-hidden="true" />
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-background/70">
              Our Services
            </span>
          </div>
          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2
              id="services-heading"
              className="text-3xl font-semibold leading-[1.08] tracking-[-0.02em] sm:text-4xl lg:text-5xl"
            >
              Our Services
            </h2>
            <p className="max-w-md text-base leading-relaxed text-background/70">
              Specialised expertise across diverse sectors and industries
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {featured && (
            <Reveal className="h-full">
              <ServiceCard service={featured} featured />
            </Reveal>
          )}
          <div className="grid gap-5 lg:gap-6">
            {rest.map((s, i) => (
              <Reveal key={s.title} delay={(i + 1) * 90} className="h-full">
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* --------------------------------------------------------------- CAREERS */

export function Careers() {
  return (
    <section
      id="contact"
      className="bg-background pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24"
      aria-labelledby="careers-heading"
    >
      <Container>
        <div className="relative overflow-hidden rounded-[20px] bg-white shadow-[0_12px_44px_-16px_rgba(5,52,98,0.14)] ring-1 ring-[rgba(5,52,98,0.08)]">
          {/* full-width subtle gradient wash */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-surface to-[oklch(0.96_0.01_236)]"
          />

          {/* full-bleed premium abstract visual background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-light/[0.06] via-surface/50 to-accent/[0.10]"
          />

          {/* slow drifting gradient orbs */}
          <div
            aria-hidden="true"
            className="cta-aurora absolute -right-1/4 -top-1/4 h-[150%] w-[150%] rounded-full bg-[radial-gradient(circle_at_center,var(--accent-light),transparent_55%)] opacity-35 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="cta-aurora absolute -bottom-1/4 -left-1/4 h-[140%] w-[140%] rounded-full bg-[radial-gradient(circle_at_center,var(--accent),transparent_50%)] opacity-25 blur-3xl"
            style={{ animationDelay: "-14s" }}
          />

          <svg
            viewBox="0 0 420 420"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
          >
            <defs>
              <linearGradient id="ctaFlow1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--accent-light)" stopOpacity="0.35" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.08" />
              </linearGradient>
              <linearGradient id="ctaFlow2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.25" />
                <stop offset="100%" stopColor="var(--foreground)" stopOpacity="0.06" />
              </linearGradient>
              <linearGradient id="ctaPanelFill" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--accent-light)" stopOpacity="0.18" />
                <stop offset="60%" stopColor="var(--accent)" stopOpacity="0.06" />
                <stop offset="100%" stopColor="var(--foreground)" stopOpacity="0.04" />
              </linearGradient>
            </defs>
            <rect width="420" height="420" fill="url(#ctaPanelFill)" opacity="0.45" />
            <path
              d="M-30 290 C70 250 150 330 250 270 S440 210 470 310"
              fill="none"
              stroke="url(#ctaFlow1)"
              strokeWidth="1.5"
              opacity="0.55"
            />
            <path
              d="M-30 130 C90 170 190 70 310 110 S450 190 490 150"
              fill="none"
              stroke="url(#ctaFlow2)"
              strokeWidth="1.5"
              opacity="0.45"
            />
            <ellipse cx="340" cy="90" rx="95" ry="75" fill="url(#ctaFlow1)" opacity="0.22" />
            <ellipse cx="90" cy="340" rx="120" ry="90" fill="url(#ctaFlow2)" opacity="0.18" />
            <line
              x1="60"
              y1="60"
              x2="360"
              y2="360"
              stroke="var(--accent)"
              strokeWidth="0.5"
              opacity="0.12"
            />
            <line
              x1="360"
              y1="60"
              x2="60"
              y2="360"
              stroke="var(--foreground)"
              strokeWidth="0.5"
              opacity="0.08"
            />
            <circle
              cx="210"
              cy="210"
              r="150"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="0.5"
              opacity="0.08"
            />
            <circle
              cx="210"
              cy="210"
              r="110"
              fill="none"
              stroke="var(--accent-light)"
              strokeWidth="0.5"
              opacity="0.10"
            />
          </svg>

          {/* centered content */}
          <div className="relative z-10 flex flex-col items-center px-8 py-16 text-center sm:py-20 lg:px-14 lg:py-24">
            <Reveal>
              <h2
                id="careers-heading"
                className="text-3xl font-light leading-[1.05] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl"
              >
                Interested in Working With Us?
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-3xl text-base leading-[1.75] text-secondary-ink sm:text-lg">
                At HighReach, we develop the next generation of leaders and organisations by
                bringing the latest research and thinking into practice. We are always looking for
                passionate, experienced professionals and expert facilitators who are committed to
                excellence.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <a
                href="mailto:info@HighReach.sa"
                className="group mt-10 inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground shadow-[0_8px_24px_-8px_rgba(20,128,174,0.35)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-accent/90 hover:shadow-[0_16px_36px_-10px_rgba(20,128,174,0.45)]"
              >
                Work With HighReach
                <Arrow className="transition-transform duration-500 ease-out group-hover:translate-x-1.5" />
              </a>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------- PARTNERS */

const partnerLogos = [
  {
    src: gamiLogo,
    alt: "General Authority for Military Industries",
    size: "h-24 sm:h-28 lg:h-32 max-w-[220px]",
  },
  {
    src: iamiLogo,
    alt: "Innovation Award for Military Industries",
    size: "h-24 sm:h-28 lg:h-32 max-w-[210px]",
  },
  {
    src: adiLogo,
    alt: "Academy of Defense Industries",
    size: "h-24 sm:h-28 lg:h-32 max-w-[220px]",
  },
  { src: salLogo, alt: "SAL", size: "h-14 sm:h-16 lg:h-20 max-w-[200px]" },
  { src: slaLogo, alt: "Saudi Logistics Academy", size: "h-20 sm:h-24 lg:h-28 max-w-[240px]" },
];

export function Partners() {
  return (
    <section
      id="partners"
      className="relative overflow-hidden pt-20 pb-10 lg:pt-28 lg:pb-14"
      aria-labelledby="partners-heading"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#FFFFFF_0%,#F6F9FC_45%,#FFFFFF_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(60%_100%_at_50%_0%,rgba(20,128,174,0.07),transparent_70%)]"
      />
      <Container>
        {/* Supported By — primary institutional endorsement panel */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-hairline bg-[linear-gradient(160deg,#F2F8FC_0%,#E9F3F9_55%,#F7FBFD_100%)] px-6 py-16 text-center shadow-[0_28px_64px_-36px_rgba(5,52,98,0.28)] sm:px-12 sm:py-20 lg:py-24">
            {/* subtle abstract strategy/network motif */}
            <svg
              aria-hidden
              className="cta-aurora pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 1200 600"
              preserveAspectRatio="xMidYMid slice"
              fill="none"
            >
              <circle cx="600" cy="300" r="260" stroke="rgba(20,128,174,0.08)" strokeWidth="1" />
              <circle cx="600" cy="300" r="380" stroke="rgba(20,128,174,0.05)" strokeWidth="1" />
              <ellipse
                cx="600"
                cy="300"
                rx="520"
                ry="160"
                stroke="rgba(5,52,98,0.05)"
                strokeWidth="1"
              />
              <path
                d="M80 480 C 340 340, 860 340, 1120 480"
                stroke="rgba(20,128,174,0.07)"
                strokeWidth="1"
              />
              <path
                d="M120 140 C 400 240, 800 240, 1080 140"
                stroke="rgba(5,52,98,0.05)"
                strokeWidth="1"
              />
              <circle cx="340" cy="200" r="3" fill="rgba(20,128,174,0.18)" />
              <circle cx="860" cy="180" r="3" fill="rgba(20,128,174,0.18)" />
              <circle cx="600" cy="440" r="3" fill="rgba(5,52,98,0.14)" />
            </svg>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_70%_at_50%_45%,rgba(20,128,174,0.06),transparent_70%)]"
            />

            <div className="relative">
              <p className="text-xs font-medium uppercase tracking-[0.26em] text-accent">
                Supported By
              </p>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.015em] text-foreground sm:text-3xl lg:text-4xl">
                London Strategy Centre
              </h3>
              <div className="mx-auto mt-8 h-px w-16 bg-accent/40" aria-hidden />
              <div className="mt-10 flex items-center justify-center sm:mt-12">
                <img
                  src={lscLogo}
                  alt="London Strategy Centre"
                  loading="lazy"
                  className="h-16 w-auto max-w-[220px] object-contain transition-transform duration-700 ease-out hover:scale-[1.02] sm:h-20 sm:max-w-[260px] lg:h-28 lg:max-w-[320px]"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-20 lg:mt-16">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow>OUR PARTNERS</Eyebrow>
              <h2
                id="partners-heading"
                className="mt-6 text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-[2.75rem]"
              >
                Trusted Partnerships.
                <br />
                Shared Success.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={100}>
              <p className="max-w-xl text-base leading-[1.75] text-secondary-ink sm:text-lg">
                HighReach collaborates with leading partners in executive learning and
                organisational development to create impactful experiences for leaders and
                organisations.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Partners — secondary credibility strip */}
        <Reveal delay={150}>
          <div className="mt-14 lg:mt-16">
            <div className="flex items-center justify-center gap-5">
              <span className="h-px w-12 bg-hairline" aria-hidden />
              <h3 className="text-xs font-medium uppercase tracking-[0.22em] text-secondary-ink">
                Partners
              </h3>
              <span className="h-px w-12 bg-hairline" aria-hidden />
            </div>

            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14 lg:flex-nowrap lg:gap-x-16">
              {partnerLogos.map((logo) => (
                <li key={logo.alt} className="flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    className={`w-auto object-contain opacity-80 transition-all duration-500 ease-out hover:scale-[1.03] hover:opacity-100 ${logo.size}`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
