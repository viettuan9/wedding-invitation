import { useCountdown } from "@/hooks/useCountdown";
import { Container } from "./Container";
import { motion } from "framer-motion";
import { TimeBox } from "../ui";
import {
  CalendarBlank,
  EnvelopeSimple,
  List,
  MapPin,
  X,
} from "@phosphor-icons/react";
import { useState } from "react";

const links = [
  { label: "Sự kiện", href: "#event", icon: CalendarBlank },
  { label: "Chỉ đường", href: "#location", icon: MapPin },
  { label: "Phản hồi", href: "#rsvp", icon: EnvelopeSimple },
] as const;

const weddingDate = new Date("2026-05-03T11:00:00");
const COUNTDOWN_UNITS = [
  { label: "Ngày", key: "days" },
  { label: "Giờ", key: "hours" },
  { label: "Phút", key: "minutes" },
  { label: "Giây", key: "seconds" },
] as const;

type HeaderProps = {
  onOpenRsvp?: () => void;
};

export const Header = ({ onOpenRsvp }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { days, hours, minutes, seconds, isExpired } =
    useCountdown(weddingDate);
  const countdown = { days, hours, minutes, seconds };

  return (
    <header className="fixed top-0 w-full z-50">
      <Container className="pt-4">
        <div className="relative px-4 py-2 md:px-7 md:py-4 rounded-2xl border border-white/60 bg-white/75 backdrop-blur-xl shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
          <div className="flex items-center justify-between gap-3">
            {/* Logo */}
            <a href="#hero" className="group leading-tight shrink-0">
              <p className="font-playfair text-base md:text-xl text-rose-400 tracking-wide">
                Tuấn & Vân
              </p>
              <p className="text-[8px] md:text-xs uppercase tracking-[0.24em] text-slate-400 group-hover:text-rose-500 transition-colors">
                Wedding Day
              </p>
            </a>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="inline-flex md:hidden h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 hover:text-rose-500 hover:border-rose-200 transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-header-nav"
              aria-label={isMobileMenuOpen ? "Đóng menu" : "Mở menu"}
            >
              {isMobileMenuOpen ? <X size={18} /> : <List size={18} />}
            </button>

            {/* Desktop countdown */}
            {!isExpired && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="hidden md:flex justify-center gap-3 lg:gap-4"
              >
                {COUNTDOWN_UNITS.map(({ label, key }) => (
                  <TimeBox key={key} label={label} value={countdown[key]} />
                ))}
              </motion.div>
            )}

            {isExpired && (
              <p className="hidden md:block text-sm md:text-base text-slate-700">
                Hôm nay là ngày cưới của chúng tôi ❤️
              </p>
            )}

            {/* Desktop navigation: cùng hàng với logo + countdown */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-2 lg:gap-3 text-sm">
                {links.map((link) => (
                  <li key={link.href} className="min-w-0">
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href === "#rsvp" && onOpenRsvp) {
                          e.preventDefault();
                          onOpenRsvp();
                        }
                      }}
                      className="inline-flex justify-center items-center px-3 lg:px-4 h-9 rounded-full text-slate-600 hover:text-rose-500 hover:bg-rose-50 transition-colors text-sm"
                    >
                      <link.icon size={14} weight="regular" className="mr-1" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Mobile navigation overlay */}
          <motion.nav
            id="mobile-header-nav"
            initial={false}
            animate={{
              opacity: isMobileMenuOpen ? 1 : 0,
              pointerEvents: isMobileMenuOpen ? "auto" : "none",
            }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 z-20 md:hidden rounded-2xl border border-white/60 bg-white/95 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between px-4 py-2 border-b border-slate-100">
              <p className="font-playfair text-base text-rose-400 tracking-wide">
                Tuấn & Vân
              </p>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:text-rose-500 hover:border-rose-200 transition-colors"
                aria-label="Đóng menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* Mobile navigation links */}
            <ul className="absolute inset-x-0 bottom-0 px-2 py-2 grid grid-cols-3 gap-2 text-sm top-0 left-0">
              {links.map((link) => (
                <li key={link.href} className="min-w-0">
                  <a
                    href={link.href}
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      if (link.href === "#rsvp" && onOpenRsvp) {
                        e.preventDefault();
                        onOpenRsvp();
                      }
                    }}
                    className="inline-flex w-full justify-center items-center px-2 h-9 rounded-full text-slate-600 bg-amber-50 hover:text-rose-500 hover:bg-rose-50 transition-colors text-[10px]"
                  >
                    <link.icon size={13} weight="regular" className="mr-1.5" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        </div>
      </Container>
    </header>
  );
};
