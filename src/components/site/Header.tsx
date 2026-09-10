import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";
import { Arrow, Container } from "./primitives";
import { cn } from "@/lib/utils";
import logoAsset from "@/assets/highreach-logo.png";

const NAV = [
  { label: "Home", href: "/", path: "/", chevron: false },
  { label: "About Us", href: "/about", path: "/about", chevron: false },
  { label: "Artificial Intelligence", href: "/#capability", chevron: true },
  { label: "Cyber Security", href: "/#capability", chevron: true },
  { label: "Advisory Services", href: "/#services", chevron: true },
  { label: "Press Release", href: "/#resources", chevron: true },
  { label: "Contact", href: "/#contact", chevron: false },
] as { label: string; href: string; path?: string; chevron: boolean }[];

const FLOATING = "bg-white border border-black/[0.06] shadow-[0_8px_25px_rgba(15,45,75,0.10)]";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive = (item: (typeof NAV)[number]) => item.path === pathname;

  useEffect(() => {
    const close = () => setOpen(false);
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
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f3f4f3] text-[#053462] transition-colors hover:bg-[#e8eeec] hover:text-[#1480AE]"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <a href="#top" className="group flex items-center pr-1" aria-label="HighReach home">
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
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-current={isActive(item) ? "page" : undefined}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[0.83rem] font-semibold tracking-wide text-[#053462]/85 transition-colors hover:bg-[#f3f4f3] hover:text-[#1480AE]",
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
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      {/* Menu panel (mobile + desktop via hamburger) */}
      <div id="site-nav" hidden={!open} className="absolute inset-x-0 top-full px-4 pt-3">
        <div className={cn("mx-auto max-w-md rounded-2xl p-3", FLOATING)}>
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3.5 text-base text-[#053462] transition-colors hover:bg-[#f3f4f3] hover:text-[#1480AE]",
                    isActive(item) && "bg-[#f3f4f3]",
                  )}
                >
                  {item.label}
                  <Arrow className="text-[#1480AE]" />
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex flex-col gap-1 border-t border-black/[0.06] px-4 pb-3 pt-4 text-sm text-[#053462]/70">
            <a href="tel:+966566653356" className="transition-colors hover:text-[#1480AE]">
              +966 56 665 3356
            </a>
            <a href="mailto:info@HighReach.sa" className="transition-colors hover:text-[#1480AE]">
              info@HighReach.sa
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
