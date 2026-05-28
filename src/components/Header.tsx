"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { nav } from "@/lib/content/nav";
import MagneticButton from "@/components/primitives/MagneticButton";

/** Pages whose hero is dark/full-bleed media — the nav floats over it. */
const DARK_HERO_ROUTES = new Set<string>(["/"]);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    // Stop Lenis so smooth-scroll doesn't bypass the body overflow lock.
    window.dispatchEvent(
      new CustomEvent("lenis-toggle", { detail: { stop: open } }),
    );
    return () => {
      document.body.style.overflow = "";
      window.dispatchEvent(
        new CustomEvent("lenis-toggle", { detail: { stop: false } }),
      );
    };
  }, [open]);

  const overDarkHero = DARK_HERO_ROUTES.has(pathname) && !scrolled;

  const textCls = overDarkHero ? "text-paper" : "text-ink";
  const textSoftCls = overDarkHero ? "text-paper/85" : "text-ink";
  const hoverCls = overDarkHero ? "hover:text-paper/70" : "hover:text-navy";

  return (
    <header
      className={
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 " +
        (scrolled
          ? "bg-paper/90 backdrop-blur-md border-b border-line"
          : "bg-transparent")
      }
    >
      <div className="container-x flex items-center justify-between h-[72px] md:h-[80px]">
        <Link
          href="/"
          aria-label="Reconnect — home"
          className="flex items-center gap-2"
        >
          <Image
            src="/logo.png"
            alt=""
            width={40}
            height={40}
            priority
            className={
              "h-8 md:h-9 w-auto transition-[filter] duration-300 " +
              (overDarkHero
                ? "[filter:brightness(0)_invert(1)]"
                : "[filter:none]")
            }
          />
          <span
            className={
              "font-[family-name:var(--font-display)] text-[1.5rem] md:text-[1.625rem] tracking-[-0.04em] font-bold transition-colors " +
              (open ? "text-paper" : textCls)
            }
          >
            reconnect
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((l) => {
            const active = pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <Link
                key={l.href}
                href={l.href}
                className={
                  "relative px-4 py-2 text-[0.9375rem] transition-colors " +
                  (active
                    ? overDarkHero
                      ? "text-paper font-medium"
                      : "text-navy font-medium"
                    : `${textSoftCls} ${hoverCls}`)
                }
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className={
                      "absolute left-3 right-3 -bottom-0.5 h-px " +
                      (overDarkHero ? "bg-paper" : "bg-navy")
                    }
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <MagneticButton
            href="/assessment"
            variant={overDarkHero ? "paper" : "ink"}
          >
            Take the free assessment
          </MagneticButton>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-overlay"
          className="md:hidden relative w-10 h-10 grid place-items-center"
          onClick={() => setOpen((s) => !s)}
        >
          <span
            className={
              "absolute block h-px w-6 bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] " +
              (open ? "rotate-45" : "-translate-y-1.5")
            }
            style={{
              color: open
                ? "var(--color-paper)"
                : overDarkHero
                  ? "var(--color-paper)"
                  : "var(--color-ink)",
            }}
          />
          <span
            className={
              "absolute block h-px w-6 bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] " +
              (open ? "-rotate-45" : "translate-y-1.5")
            }
            style={{
              color: open
                ? "var(--color-paper)"
                : overDarkHero
                  ? "var(--color-paper)"
                  : "var(--color-ink)",
            }}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-overlay"
            role="dialog"
            aria-modal="true"
            initial={reduce ? { opacity: 0 } : { y: "-100%" }}
            animate={reduce ? { opacity: 1 } : { y: 0 }}
            exit={reduce ? { opacity: 0 } : { y: "-100%" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 z-[60] text-paper overflow-hidden"
            style={{ backgroundColor: "var(--color-ink)" }}
          >
            {/* Top bar inside overlay — explicit Close button */}
            <div className="container-x flex items-center justify-between h-[72px] border-b border-paper/10">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                aria-label="Reconnect — home"
                className="flex items-center gap-2"
              >
                <Image
                  src="/logo.png"
                  alt=""
                  width={36}
                  height={36}
                  className="h-8 w-auto [filter:brightness(0)_invert(1)]"
                />
                <span className="font-[family-name:var(--font-display)] text-[1.5rem] tracking-[-0.04em] font-bold text-paper">
                  reconnect
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-paper/25 text-paper hover:bg-paper/10 transition-colors"
              >
                <span className="text-[0.8125rem] tracking-[0.12em] uppercase">
                  Close
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M2 2L12 12M12 2L2 12"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="container-x pt-8 pb-12 h-[calc(100%-72px)] flex flex-col">
              <ul className="flex-1 flex flex-col gap-1 mt-2">
                {nav.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={reduce ? false : { opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.06 + i * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-4 border-b border-paper/10 text-paper hover:text-navy-tint transition-colors"
                    >
                      <span
                        className="font-[family-name:var(--font-display)] font-bold tracking-[-0.025em]"
                        style={{ fontSize: "clamp(1.875rem, 9vw, 2.5rem)" }}
                      >
                        {l.label}
                      </span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M3.5 10.5L10.5 3.5M10.5 3.5H4.55M10.5 3.5V9.45"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="pt-6">
                <MagneticButton
                  href="/assessment"
                  variant="paper"
                  className="w-full justify-between"
                >
                  Take the free assessment
                </MagneticButton>
              </div>
              <div className="mt-6 flex items-center justify-between text-[0.8125rem] text-paper/50">
                <span>Designed by Dr. Shruthi Desai</span>
                <span>Tap anywhere to close</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
