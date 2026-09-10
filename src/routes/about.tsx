import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Arrow, Container, Eyebrow, Reveal } from "@/components/site/primitives";
import aboutHeroVideo from "@/assets/about/about_video.mp4";
import aboutSystems from "@/assets/about/system-level.jpeg";
import resDiagnostic from "@/assets/about/res-diagnostic.jpeg";
import aiTransformation from "@/assets/about/ai-augmented.jpeg";
import cyberSecurity from "@/assets/about/built-for-complexity.jpeg";
import advisoryMeeting from "@/assets/about/partnership-not-prescription.jpeg";
import aboutDetail from "@/assets/about/about-strategy-detail.jpeg";

const TITLE = "About HighReach | Capability Transformation Partner, Riyadh";
const DESCRIPTION =
  "HighReach helps executives and organisations unlock their full potential in preparation for the future world of work — system-level capability transformation from Riyadh.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const PRINCIPLES = [
  {
    heading: "System-level, not individual-level",
    content:
      "The assumption in organisational development is that improving people improves performance, but performance only improves when the system supports it through effective governance, decision making, execution, and human AI integration.",
    image: aboutSystems,
  },
  {
    heading: "Diagnostic intelligence before every intervention",
    content:
      "HighReach uses structured organisational diagnostics and AI-enabled insight to identify decision gaps, execution barriers, and systemic constraints, ensuring every intervention addresses the factors shaping long-term performance.",
    image: resDiagnostic,
  },
  {
    heading: "AI-augmented, not AI-dependent",
    content:
      "HighReach helps organisations build governed, measurable, and sustainable human AI capability through clear accountability, phased adoption, and practical integration within real operating environments.",
    image: aiTransformation,
  },
  {
    heading: "Built for complexity, not optimised for simplicity",
    content:
      "HighReach supports defence, government, and enterprise organisations operating in high-stakes environments where strategic alignment, cross-functional execution, and organisational resilience drive long-term success.",
    image: cyberSecurity,
  },
  {
    heading: "Partnership, not prescription",
    content:
      "HighReach works alongside leadership teams to deliver practical organisational change, embedding expertise within real business challenges to create sustainable transformation, stronger execution, and lasting organisational ownership.",
    image: advisoryMeeting,
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-accent-foreground"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        {/* HERO */}
        <section className="relative isolate flex min-h-[560px] items-center overflow-hidden pt-28 pb-10 sm:min-h-[600px] sm:pt-32 lg:h-[640px] lg:min-h-[620px] lg:max-h-[680px] lg:pt-36 lg:pb-14">
          {/* Fallback background image / colour (visible while video loads) */}
          {/* <div
            aria-hidden="true"
            className="absolute inset-0 z-0 bg-[#053462] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${aboutHero})` }}
          /> */}
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className="absolute inset-0 z-[1] h-full w-full object-cover"
          >
            <source src={aboutHeroVideo} type="video/mp4" />
          </video>
          {/* Subtle dark/blue readability overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 z-[2] bg-gradient-to-br from-[#053462]/80 via-[#053462]/55 to-[#1480AE]/30"
          />

          <Container className="relative z-10">
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
              <Reveal className="lg:col-span-7 xl:col-span-6">
                <Eyebrow className="text-white/80">About us</Eyebrow>
                <span aria-hidden="true" className="mt-5 block h-0.5 w-16 bg-accent" />
                <h1 className="mt-6 text-[clamp(2.5rem,6.5vw,4.75rem)] font-semibold leading-[1.0] tracking-[-0.03em] text-white">
                  HighReach
                </h1>
                <p className="mt-6 max-w-xl text-base leading-[1.85] text-white/90 sm:text-lg">
                  Helping executives and organisations unlock their full potential in preparation
                  for the future world of work.
                </p>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* SECTION 1 */}
        <section className="relative overflow-hidden py-14 sm:py-16 lg:py-20">
          {/* Abstract strategy/system visual layer */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            {/* architectural grid lines */}
            <div className="absolute inset-y-0 left-1/2 hidden w-px bg-gradient-to-b from-transparent via-foreground/[0.05] to-transparent lg:block" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent" />
            {/* soft blue gradient field */}
            <div className="absolute -bottom-40 left-1/2 h-[24rem] w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(20,128,174,0.08),transparent)] blur-2xl" />
            {/* subtle circular forms — left side only */}
            <div className="absolute -left-28 top-6 h-64 w-64 rounded-full border border-foreground/[0.05]" />
            <div className="absolute -left-14 top-20 h-36 w-36 rounded-full border border-accent/15" />
          </div>

          <Container className="relative">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
              <Reveal className="lg:col-span-5 lg:-mt-2">
                <span className="block h-0.5 w-14 rounded-full bg-accent" />
                <h2 className="mt-5 text-[clamp(2rem,4.6vw,3.5rem)] font-semibold leading-[1.06] tracking-[-0.025em] text-foreground">
                  We Transform How Organisations Think, Decide, and Execute
                </h2>
                <p className="mt-5 text-[clamp(0.95rem,1.55vw,1.35rem)] font-semibold leading-[1.35] tracking-[-0.01em] text-accent lg:mt-6">
                  HighReach exists to close that gap.
                </p>
              </Reveal>
              <Reveal delay={120} className="lg:col-span-6 lg:col-start-7 lg:mt-9">
                <p className="max-w-xl text-base leading-[1.9] text-secondary-ink sm:text-[1.05rem]">
                  Most organisations have capable people. The problem is not individual performance,
                  it is the system those people operate within. When decision architecture is poorly
                  designed, when strategy dilutes as it passes through organisational layers, when
                  execution fragments across functions and geographies, capability at the individual
                  level fails to translate into performance at the system level. The gap compounds
                  over time. Transformation programmes come and go. The underlying system remains
                  unchanged.
                </p>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* SECTION 2 */}
        <section className="bg-surface py-12 sm:py-14 lg:py-20">
          <Container>
            <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
              <Reveal className="flex flex-col justify-center lg:col-span-7">
                <h2 className="max-w-2xl text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-foreground">
                  HighReach is your capability transformation partner
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-[1.95] text-secondary-ink sm:text-[1.05rem]">
                  The central premise of HighReach's work is that measurable organisational
                  performance improvement requires a system-level intervention, not a training
                  programme, a strategy report, or a technology implementation. It requires
                  redesigning how the organisation senses its environment, how decisions are made
                  and communicated, how execution is governed, and how capability compounds across
                  time. That is what HighReach builds.
                </p>
              </Reveal>
              <Reveal delay={120} className="lg:col-span-5 lg:h-full">
                <div className="group relative h-[16rem] min-h-0 overflow-hidden rounded-[18px] bg-white sm:h-[20rem] lg:h-full">
                  <img
                    src={aboutDetail}
                    alt="Executive strategy session mapping organisational decision architecture"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-[18px] ring-1 ring-inset ring-foreground/10"
                  />
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* MISSION / VISION + PRINCIPLES */}
        <section className="overflow-hidden bg-background py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="flex flex-col gap-12 lg:gap-16">
              {/* Centered Mission / Vision */}
              <Reveal>
                <div className="mx-auto max-w-3xl text-center">
                  <h2 className="text-[clamp(2.1rem,4.5vw,3.75rem)] font-semibold leading-[1.02] tracking-[-0.025em] text-foreground">
                    Mission / Vision
                  </h2>
                  <span
                    aria-hidden="true"
                    className="mx-auto mt-6 block h-[3px] w-20 rounded-full bg-accent"
                  />
                  <p className="mx-auto mt-6 max-w-[720px] text-base leading-[1.95] text-secondary-ink sm:text-[1.05rem]">
                    Our mission is to empower individuals and organisations through strategic
                    thinking, leadership excellence, and innovation that drives sustainable growth,
                    while our vision is to become a globally recognised centre of excellence that
                    develops future-ready leaders who create meaningful and lasting impact.
                  </p>
                </div>
              </Reveal>

              {/* Five Principles */}
              <div className="flex flex-col gap-14 lg:gap-20">
                {PRINCIPLES.map((p, i) => {
                  const reversed = i % 2 === 1;
                  return (
                    <Reveal key={p.heading} delay={60}>
                      <article className="relative">
                        {/* connecting line with node */}
                        <div
                          aria-hidden="true"
                          className="absolute -top-7 left-0 right-0 hidden items-center gap-4 lg:flex lg:-top-9"
                        >
                          <span className="h-px flex-1 bg-hairline" />
                          <span className="h-1.5 w-1.5 rounded-full bg-accent/50" />
                        </div>
                        <div className="grid items-center gap-8 pt-8 lg:grid-cols-12 lg:gap-14 lg:pt-10">
                          <div className={`lg:col-span-6 ${reversed ? "lg:order-2" : ""}`}>
                            <div className="flex items-baseline gap-5">
                              <span
                                aria-hidden="true"
                                className="text-[clamp(2.2rem,4vw,3.25rem)] font-semibold leading-none tracking-[-0.02em] text-accent/25"
                              >
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span
                                aria-hidden="true"
                                className="hidden h-px w-12 self-center bg-accent/40 sm:block"
                              />
                            </div>
                            <h3 className="mt-5 max-w-xl text-[clamp(1.5rem,3vw,2.3rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-foreground">
                              {p.heading}
                            </h3>
                            <p className="mt-5 max-w-xl text-base leading-[1.9] text-secondary-ink">
                              {p.content}
                            </p>
                          </div>
                          <div className={`lg:col-span-6 ${reversed ? "lg:order-1" : ""}`}>
                            <div className="group relative overflow-hidden rounded-[20px]">
                              <img
                                src={p.image}
                                alt={p.heading}
                                loading="lazy"
                                className="h-[15rem] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03] sm:h-[18rem] lg:h-[22rem]"
                              />
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-foreground/10"
                              />
                            </div>
                          </div>
                        </div>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        {/* FINAL CTA */}
        <section
          id="contact"
          className="bg-background pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24"
          aria-labelledby="about-cta-heading"
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
                    id="about-cta-heading"
                    className="text-3xl font-light leading-[1.05] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl"
                  >
                    Contact the HighReach Team
                  </h2>
                </Reveal>
                <Reveal delay={120}>
                  <p className="mt-6 max-w-3xl text-base leading-[1.75] text-secondary-ink sm:text-lg">
                    HighReach helps leadership teams turn strategic intent into organisational
                    performance through rigorous diagnostics, system-level insight, and embedded
                    partnership. Contact our team to discuss your organisation's context.
                  </p>
                </Reveal>
                <Reveal delay={220}>
                  <a
                    href="mailto:info@HighReach.sa"
                    className="group mt-10 inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground shadow-[0_8px_24px_-8px_rgba(20,128,174,0.35)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-accent/90 hover:shadow-[0_16px_36px_-10px_rgba(20,128,174,0.45)]"
                  >
                    Contact the team
                    <Arrow className="transition-transform duration-500 ease-out group-hover:translate-x-1.5" />
                  </a>
                </Reveal>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
