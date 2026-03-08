import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-14 h-[56px] sm:h-[64px] md:h-[68px] bg-background/88 backdrop-blur-2xl backdrop-saturate-[180%] border-b border-border">
      {/* Logo */}
      <a href="#hero" className="flex items-center gap-2 sm:gap-3.5 no-underline">
        <svg className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="14.5" stroke="hsl(var(--foreground) / 0.18)" strokeWidth="1" />
          <circle cx="16" cy="16" r="11" stroke="hsl(var(--foreground) / 0.08)" strokeWidth="0.5" />
          <path d="M16 4 L17.2 14.4 L26.8 19.6 L16 16 L5.2 19.6 L14.8 14.4 Z" fill="hsl(var(--foreground) / 0.85)" />
          <circle cx="16" cy="16" r="1.8" fill="hsl(var(--foreground) / 0.9)" />
        </svg>

        <div className="w-px h-5 sm:h-7 bg-gradient-to-b from-transparent via-foreground/15 to-transparent shrink-0" />

        <div className="flex flex-col gap-px">
          <div className="font-serif text-base sm:text-xl tracking-[4px] sm:tracking-[6px] uppercase leading-none flex items-baseline">
            <span className="font-semibold text-foreground text-[16px] sm:text-[21px]">MB</span>
            <span className="inline-block w-px h-2.5 sm:h-3 bg-foreground/20 mx-1.5 sm:mx-[7px] align-middle" />
            <span className="font-light text-foreground/75 tracking-[3px] sm:tracking-[5px] text-[14px] sm:text-[19px] font-serif">
              euro<span className="text-foreground/45 tracking-[3px] sm:tracking-[4px]">parts</span>
            </span>
          </div>
          <div className="text-[6px] sm:text-[7px] font-medium tracking-[3px] sm:tracking-[5px] uppercase text-primary pl-px">
            powered by performance
          </div>
        </div>
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-9">
        <a href="#hero" className="text-[13px] font-medium tracking-[1.5px] uppercase text-muted-foreground hover:text-foreground transition-colors no-underline">Home</a>
        <a href="#products" className="text-[13px] font-medium tracking-[1.5px] uppercase text-muted-foreground hover:text-foreground transition-colors no-underline">Shop</a>
        <button
          onClick={() => setCartCount((c) => Math.min(9, c + 1))}
          className="flex items-center gap-2 text-[13px] font-medium tracking-[1.5px] uppercase text-muted-foreground hover:text-foreground transition-colors bg-transparent border-none cursor-pointer"
        >
          <ShoppingBag className="w-[18px] h-[18px]" />
          Cart
          <span className="bg-primary text-primary-foreground text-[10px] font-bold min-w-[18px] h-[18px] rounded-full flex items-center justify-center px-1">
            {cartCount}
          </span>
        </button>
      </div>

      {/* Mobile menu button */}
      <button className="md:hidden text-foreground p-1" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-[56px] sm:top-[64px] left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-5 flex flex-col gap-4 md:hidden">
          <a href="#hero" className="text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground no-underline" onClick={() => setMobileOpen(false)}>Home</a>
          <a href="#products" className="text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground no-underline" onClick={() => setMobileOpen(false)}>Shop</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
