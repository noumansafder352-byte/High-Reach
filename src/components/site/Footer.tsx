import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Arrow, Container } from "./primitives";
import logoAsset from "@/assets/highreach-logo.png";

const QUICK_LINKS = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#about" },
  { label: "Artificial Intelligence", href: "#capability" },
  { label: "Cyber Security", href: "#capability" },
  { label: "Advisory Services", href: "#services" },
  { label: "Press Release", href: "#resources" },
];

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M17.53 3H20.5l-6.49 7.42L21.75 21h-5.99l-4.69-6.13L5.7 21H2.73l6.94-7.93L2.25 3h6.14l4.24 5.6L17.53 3Zm-1.04 16.2h1.65L7.6 4.71H5.83L16.49 19.2Z" />
    </svg>
  );
}

const SOCIALS = [
  { label: "Facebook", href: "https://facebook.com", Icon: Facebook },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
  { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { label: "X", href: "https://x.com", Icon: XIcon },
];

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-foreground">
      {children}
    </h2>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-surface text-foreground">
      {/* subtle premium depth */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-accent/[0.07] blur-3xl" />
        <div className="absolute -bottom-56 -left-40 h-[32rem] w-[32rem] rounded-full bg-foreground/[0.04] blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      </div>

      <Container className="relative grid gap-14 pt-20 pb-12 md:grid-cols-2 md:gap-x-12 md:pb-14 lg:grid-cols-12 lg:gap-x-10 lg:pt-24 lg:pb-16">
        <div className="lg:col-span-4 lg:pr-8">
          <img
            src={logoAsset}
            alt="HighReach — Success Elevated"
            className="h-10 w-auto"
            width={240}
            height={64}
          />
          <div className="mt-9">
            <ColumnHeading>About HighReach</ColumnHeading>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-[1.85] text-secondary-ink">
            HighReach develops people and organisations through expertise in strategy, innovation
            and leadership.
          </p>

          <ul className="mt-8 flex items-center gap-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-white text-foreground/70 transition-all duration-[400ms] ease-out hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
                >
                  <Icon className="h-[1.05rem] w-[1.05rem]" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Quick links" className="lg:col-span-3">
          <ColumnHeading>Quick Links</ColumnHeading>
          <ul className="mt-6 space-y-3.5">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="group inline-flex items-center gap-2 text-sm text-secondary-ink transition-all duration-[400ms] ease-out hover:translate-x-1 hover:text-accent"
                >
                  <span className="border-b border-transparent pb-0.5 transition-colors duration-[400ms] group-hover:border-accent/50">
                    {l.label}
                  </span>
                  <Arrow className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-[400ms] group-hover:translate-x-0 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-2">
          <ColumnHeading>Contact</ColumnHeading>
          <ul className="mt-6 space-y-4 text-sm text-secondary-ink">
            <li className="group">
              <a
                className="flex items-center gap-3 transition-colors duration-[400ms] hover:text-accent"
                href="tel:+966566653356"
              >
                <Phone
                  className="h-4 w-4 text-foreground/60 transition-colors duration-[400ms] group-hover:text-accent"
                  aria-hidden="true"
                />
                +966 56 665 3356
              </a>
            </li>
            <li className="group">
              <a
                className="flex items-center gap-3 transition-colors duration-[400ms] hover:text-accent"
                href="mailto:info@HighReach.sa"
              >
                <Mail
                  className="h-4 w-4 text-foreground/60 transition-colors duration-[400ms] group-hover:text-accent"
                  aria-hidden="true"
                />
                info@HighReach.sa
              </a>
            </li>
            <li className="group flex max-w-[16rem] items-start gap-3 leading-[1.85] text-secondary-ink/80">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-foreground/60" aria-hidden="true" />
              AI Tauwin – Othman Bin Afan Road, Riyadh, Saudi Arabia
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <ColumnHeading>Newsletter</ColumnHeading>
          <p className="mt-6 text-sm text-secondary-ink">Subscribe To Our Newsletter</p>
          <form
            className="group mt-5 flex items-center gap-2 rounded-[12px] border border-hairline bg-white px-4 transition-all duration-[400ms] ease-out hover:border-accent/40 focus-within:border-accent focus-within:ring-1 focus-within:ring-accent/20"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Your email
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your email"
              className="w-full bg-transparent py-3 text-sm text-foreground outline-none placeholder:text-secondary-ink/50"
            />
            <button
              type="submit"
              aria-label="Subscribe to our newsletter"
              className="shrink-0 p-1 text-accent transition-transform duration-[400ms] ease-out hover:translate-x-1"
            >
              <Arrow />
            </button>
          </form>
        </div>
      </Container>

      <div className="relative border-t border-hairline bg-[#ECEFF3]">
        <Container className="flex flex-col gap-2 py-7">
          <p className="text-xs tracking-wide text-secondary-ink">
            © 2026 HighReach. All Rights Reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
