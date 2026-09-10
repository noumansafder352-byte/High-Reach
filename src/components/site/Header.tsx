import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";
import { Arrow, Container } from "./primitives";
import { cn } from "@/lib/utils";
import logoAsset from "@/assets/highreach-logo.png";

const NAV = [
  { label: "HOME", href: "/", path: "/", chevron: false },
  { label: "ABOUT US", href: "/about", path: "/about", chevron: false },
  {
    label: "ARTIFICIAL INTELLIGENCE",
    href: "https://londonstrategycentre.com/artificial-intelligence",
    chevron: true,
  },
  {
    label: "CYBER SECURITY",
    href: "https://londonstrategycentre.com/cyber-security",
    chevron: true,
  },
  {
    label: "ADVISORY SERVICES",
    href: "https://londonstrategycentre.com/advisory-services",
    chevron: true,
  },
  { label: "CONTACT", href: "https://londonstrategycentre.com/contact", chevron: false },
] as { label: string; href: string; path?: string; chevron: boolean }[];

const AI_DROPDOWN = [
  {
    label: "The Agentic Systems Lab",
    href: "https://londonstrategycentre.com/artificial-intelligence/agentic-systems-lab",
  },
  {
    label: "Capability Transformation (CT) Scan",
    href: "https://londonstrategycentre.com/artificial-intelligence/capability-transformation-scan",
  },
  {
    label: "Agentic Leadership Transformation",
    href: "https://londonstrategycentre.com/artificial-intelligence/agentic-leadership-transformation",
  },
  {
    label: "Cybernetic Organisation Design",
    href: "https://londonstrategycentre.com/artificial-intelligence/cybernetic-organisation-design",
  },
  {
    label: "From AI Noise to Clear Direction in 5 Minutes",
    href: "https://londonstrategycentre.com/artificial-intelligence/ai-noise-to-direction",
  },
  {
    label: "AIx Programme",
    href: "https://londonstrategycentre.com/artificial-intelligence/aix-programme",
  },
];

const CYBER_DROPDOWN = [
  {
    label: "Cyber Excellence",
    href: "https://londonstrategycentre.com/cyberexcellence",
  },
  {
    label: "Certification & Compliance Services",
    href: "https://londonstrategycentre.com/cyber-security/certification-and-compliance",
  },
  {
    label: "Cyber Risk & Resilience",
    href: "https://londonstrategycentre.com/cyber-security/cyber-risk-and-resilience",
  },
  {
    label: "Technical Security Services",
    href: "https://londonstrategycentre.com/cyber-security/technical-security-services",
  },
  {
    label: "Defence & Government Cyber Assurance",
    href: "https://londonstrategycentre.com/cyber-security/defence-and-government-cyber-assurance",
  },
  {
    label: "Cyber Risk & Architecture Advisory",
    href: "https://londonstrategycentre.com/cyber-security/cyber-risk-and-architecture-advisory",
  },
  {
    label: "Operational Technology & Specialist Security",
    href: "https://londonstrategycentre.com/cyber-security/operational-technology-specialist-security",
  },
  {
    label: "Cyber Strategy & Governance Advisory",
    href: "https://londonstrategycentre.com/cyber-security/cyber-strategy-and-governance-advisory",
  },
  {
    label: "Specialist Programme Support",
    href: "https://londonstrategycentre.com/cyber-security/specialist-programme-support",
  },
];

const ADVISORY_DROPDOWN = [
  {
    label: "Entrepreneurship and Scale-Up Services",
    href: "https://londonstrategycentre.com/advisory-services/entrepreneurship-and-scale-up",
  },
  {
    label: "Operational and Strategic Advisory Services",
    href: "https://londonstrategycentre.com/advisory-services/operational-and-strategic-advisory",
  },
  {
    label: "Digital Twin",
    href: "https://londonstrategycentre.com/digital-twin",
  },
];

const DROPDOWN_LINKS = {
  "ARTIFICIAL INTELLIGENCE": {
    items: AI_DROPDOWN,
    viewAll: "https://londonstrategycentre.com/artificial-intelligence",
  },
  "CYBER SECURITY": {
    items: CYBER_DROPDOWN,
    viewAll: "https://londonstrategycentre.com/cyber-security",
  },
  "ADVISORY SERVICES": {
    items: ADVISORY_DROPDOWN,
    viewAll: "https://londonstrategycentre.com/advisory-services",
  },
} as const;

const FLOATING = "bg-white border border-black/[0.06] shadow-[0_8px_25px_rgba(15,45,75,0.10)]";

export function Header() {
  const [open, setOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive = (item: (typeof NAV)[number]) => item.path === pathname;

  useEffect(() => {
    const close = () => {
      setOpen(false);
      setMobileSubmenu(null);
    };
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="flex items-center justify-between gap-6 pt-4 lg:pt-6">
        {/* Floating logo container */}
        <div
          className={cn("flex h-14 items-center gap-3 rounded-2xl px-3 lg:h-16 lg:px-4", FLOATING)}
        >
          <button
            type="button"
            onClick={() => {
              setOpen((v) => !v);
              setMobileSubmenu(null);
            }}
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f3f4f3] text-[#053462] transition-colors hover:bg-[#e8eeec] hover:text-[#1480AE]"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <a href="/" className="group flex items-center pr-1" aria-label="HighReach home">
            <img
              src={logoAsset}
              alt="HighReach — Success Elevated"
              className="h-8 w-auto lg:h-9"
              width={240}
              height={64}
            />
          </a>
        </div>

        {/* Floating navigation container (desktop) */}
        <nav
          aria-label="Primary"
          className={cn(
            "hidden h-14 items-center rounded-2xl px-3 lg:h-16 lg:px-5 xl:flex",
            FLOATING,
          )}
        >
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.label} className="relative group/nav-item">
                <a
                  href={item.href}
                  aria-current={isActive(item) ? "page" : undefined}
                  className={cn(
                    "inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3.5 py-2 text-[0.83rem] font-semibold tracking-wide text-[#053462]/85 transition-colors hover:bg-[#f3f4f3] hover:text-[#1480AE]",
                    isActive(item) &&
                      "bg-[#f3f4f3] text-[#053462] hover:bg-[#e8eeec] hover:text-[#053462]",
                  )}
                >
                  {item.label}
                  {item.chevron && (
                    <ChevronDown
                      className="h-3.5 w-3.5 shrink-0 text-[#053462]/60"
                      aria-hidden="true"
                    />
                  )}
                </a>
                {item.label === "ARTIFICIAL INTELLIGENCE" && (
                  <div className="pointer-events-none invisible absolute left-1/2 top-full z-20 w-[22rem] -translate-x-1/2 translate-y-2 rounded-2xl border border-black/[0.06] bg-white p-5 opacity-0 shadow-[0_18px_45px_rgba(15,45,75,0.14)] transition-all duration-200 group-hover/nav-item:pointer-events-auto group-hover/nav-item:visible group-hover/nav-item:translate-y-0 group-hover/nav-item:opacity-100">
                    <ul className="space-y-1">
                      {AI_DROPDOWN.map((entry) => (
                        <li key={entry.label}>
                          <a
                            href={entry.href}
                            className="block rounded-lg px-4 py-3 text-left text-[0.92rem] leading-snug text-[#053462]/85 transition-colors hover:bg-[#f3f4f3] hover:text-[#1480AE]"
                          >
                            {entry.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 border-t border-[#053462]/[0.08] pt-4">
                      <a
                        href="https://londonstrategycentre.com/artificial-intelligence"
                        className="inline-flex items-center gap-2 px-4 text-[0.82rem] font-bold uppercase tracking-[0.08em] text-[#053462] underline decoration-[#1480AE]/50 underline-offset-4 transition-colors hover:text-[#1480AE]"
                      >
                        View All
                        <Arrow className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                )}
                {item.label === "CYBER SECURITY" && (
                  <div className="pointer-events-none invisible absolute left-1/2 top-full z-20 w-[25rem] -translate-x-1/2 translate-y-2 rounded-2xl border border-black/[0.06] bg-white p-5 opacity-0 shadow-[0_18px_45px_rgba(15,45,75,0.14)] transition-all duration-200 group-hover/nav-item:pointer-events-auto group-hover/nav-item:visible group-hover/nav-item:translate-y-0 group-hover/nav-item:opacity-100">
                    <ul className="space-y-1">
                      {CYBER_DROPDOWN.map((entry) => (
                        <li key={entry.label}>
                          <a
                            href={entry.href}
                            className="block rounded-lg px-4 py-3 text-left text-[0.92rem] leading-snug text-[#053462]/85 transition-colors hover:bg-[#f3f4f3] hover:text-[#1480AE]"
                          >
                            {entry.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 border-t border-[#053462]/[0.08] pt-4">
                      <a
                        href="https://londonstrategycentre.com/cyber-security"
                        className="inline-flex items-center gap-2 px-4 text-[0.82rem] font-bold uppercase tracking-[0.08em] text-[#053462] underline decoration-[#1480AE]/50 underline-offset-4 transition-colors hover:text-[#1480AE]"
                      >
                        View All
                        <Arrow className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                )}
                {item.label === "ADVISORY SERVICES" && (
                  <div className="pointer-events-none invisible absolute left-1/2 top-full z-20 w-[25rem] -translate-x-1/2 translate-y-2 rounded-2xl border border-black/[0.06] bg-white p-5 opacity-0 shadow-[0_18px_45px_rgba(15,45,75,0.14)] transition-all duration-200 group-hover/nav-item:pointer-events-auto group-hover/nav-item:visible group-hover/nav-item:translate-y-0 group-hover/nav-item:opacity-100">
                    <ul className="space-y-1">
                      {ADVISORY_DROPDOWN.map((entry) => (
                        <li key={entry.label}>
                          <a
                            href={entry.href}
                            className="block rounded-lg px-4 py-3 text-left text-[0.92rem] leading-snug text-[#053462]/85 transition-colors hover:bg-[#f3f4f3] hover:text-[#1480AE]"
                          >
                            {entry.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 border-t border-[#053462]/[0.08] pt-4">
                      <a
                        href="https://londonstrategycentre.com/advisory-services"
                        className="inline-flex items-center gap-2 px-4 text-[0.82rem] font-bold uppercase tracking-[0.08em] text-[#053462] underline decoration-[#1480AE]/50 underline-offset-4 transition-colors hover:text-[#1480AE]"
                      >
                        View All
                        <Arrow className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <button
        type="button"
        aria-label="Close menu"
        onClick={() => {
          setOpen(false);
          setMobileSubmenu(null);
        }}
        className={cn(
          "fixed inset-0 bg-[#053462]/10 backdrop-blur-[2px] transition-opacity duration-300",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      {/* Menu panel (mobile + desktop via hamburger) */}
      <div
        id="site-nav"
        aria-hidden={!open}
        inert={!open}
        className={cn(
          "fixed inset-y-0 left-0 z-10 flex w-[min(28rem,88vw)] flex-col border-r border-[#053462]/[0.08] bg-white/95 px-6 pb-8 pt-6 shadow-[18px_0_55px_rgba(5,52,98,0.14)] backdrop-blur-xl transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-8",
          open ? "translate-x-0 opacity-100" : "pointer-events-none -translate-x-full opacity-0",
        )}
      >
        <div className="flex items-center justify-between border-b border-[#053462]/[0.08] pb-6">
          <a href="/" onClick={() => setOpen(false)} aria-label="HighReach home">
            <img
              src={logoAsset}
              alt="HighReach — Success Elevated"
              className="h-9 w-auto"
              width={240}
              height={64}
            />
          </a>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              setMobileSubmenu(null);
            }}
            aria-label="Close menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#f3f4f3] text-[#053462] transition-colors hover:bg-[#e8eeec] hover:text-[#1480AE]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav aria-label="Menu" className="mt-8 flex-1">
          <ul className="flex flex-col">
            {NAV.map((item, index) => (
              <li key={item.label}>
                {item.chevron && item.label in DROPDOWN_LINKS ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={mobileSubmenu === item.label}
                      onClick={() =>
                        setMobileSubmenu((current) => (current === item.label ? null : item.label))
                      }
                      className={cn(
                        "group flex w-full items-center gap-4 border-b border-[#053462]/[0.08] py-4 text-left text-[1.05rem] font-medium text-[#053462] transition-colors hover:text-[#1480AE]",
                        isActive(item) && "text-[#1480AE]",
                      )}
                    >
                      <span className="w-6 text-[0.68rem] font-semibold tracking-[0.18em] text-[#1480AE]/70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 text-[#1480AE] transition-transform duration-300",
                          mobileSubmenu === item.label && "rotate-180",
                        )}
                      />
                    </button>
                    {mobileSubmenu === item.label && (
                      <div className="border-b border-[#053462]/[0.08] bg-[#f8faf9] px-3 py-3">
                        {DROPDOWN_LINKS[item.label as keyof typeof DROPDOWN_LINKS].items.map(
                          (entry) => (
                            <a
                              key={entry.label}
                              href={entry.href}
                              onClick={() => setOpen(false)}
                              className="block rounded-lg px-3 py-3 text-sm leading-snug text-[#053462]/80 transition-colors hover:bg-white hover:text-[#1480AE]"
                            >
                              {entry.label}
                            </a>
                          ),
                        )}
                        <a
                          href={DROPDOWN_LINKS[item.label as keyof typeof DROPDOWN_LINKS].viewAll}
                          onClick={() => setOpen(false)}
                          className="mt-2 flex items-center gap-2 border-t border-[#053462]/[0.08] px-3 pt-3 text-sm font-bold uppercase tracking-[0.08em] text-[#053462] underline decoration-[#1480AE]/50 underline-offset-4"
                        >
                          View All
                          <Arrow className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "group flex items-center gap-4 border-b border-[#053462]/[0.08] py-4 text-[1.05rem] font-medium text-[#053462] transition-colors hover:text-[#1480AE]",
                      isActive(item) && "text-[#1480AE]",
                    )}
                  >
                    <span className="w-6 text-[0.68rem] font-semibold tracking-[0.18em] text-[#1480AE]/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">{item.label}</span>
                    <Arrow className="h-4 w-4 text-[#1480AE] transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 border-t border-[#053462]/[0.08] pt-5 text-sm text-[#053462]/65">
          <a href="tel:+966566653356" className="block transition-colors hover:text-[#1480AE]">
            +966 56 665 3356
          </a>
          <a
            href="mailto:info@HighReach.sa"
            className="mt-2 block transition-colors hover:text-[#1480AE]"
          >
            info@HighReach.sa
          </a>
        </div>
      </div>
    </header>
  );
}
