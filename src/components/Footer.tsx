const Footer = () => {
  return (
    <footer className="border-t border-border py-14 px-6 md:px-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-background">
      {/* Logo */}
      <a href="#hero" className="flex items-center gap-3 no-underline">
        <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="14.5" stroke="hsl(var(--foreground) / 0.12)" strokeWidth="1" />
          <path d="M16 4 L17.2 14.4 L26.8 19.6 L16 16 L5.2 19.6 L14.8 14.4 Z" fill="hsl(var(--foreground) / 0.6)" />
          <circle cx="16" cy="16" r="1.8" fill="hsl(var(--foreground) / 0.7)" />
        </svg>
        <span className="font-serif text-sm tracking-[4px] uppercase text-foreground/60">MBeuropparts</span>
      </a>

      {/* Copyright */}
      <p className="text-xs text-muted-foreground tracking-wide">
        © 2026 MBeuropparts. All rights reserved. Not affiliated with Mercedes-Benz AG.
      </p>

      {/* Social icons */}
      <div className="flex items-center gap-5">
        {["M22.54 6.42a9.09 9.09 0 00-3.55-2.94A9 9 0 0012 2.96a8.86 8.86 0 00-4.29 1.1A9.09 9.09 0 004.16 7a8.86 8.86 0 00-1.1 4.29v.41a9 9 0 001.46 4.5 9 9 0 003.88 3.34 9 9 0 004.6 1.21c.7 0 1.39-.09 2.06-.26a1.13 1.13 0 00.82-.86 1.13 1.13 0 00-.35-1.07l-.08-.07a7 7 0 01-2.45.44 7 7 0 01-3.58-.98A7.06 7.06 0 016 14.34a7 7 0 01-.5-3.63 7 7 0 011.62-3.31A7.06 7.06 0 0110.32 5a7 7 0 013.63-.5 7 7 0 013.31 1.62A7.06 7.06 0 0119.67 9.3a7 7 0 01.5 3.63 7 7 0 01-1.62 3.31 1.13 1.13 0 00.09 1.6l.06.05a1.13 1.13 0 001.5-.08 9 9 0 002.34-4.6 9 9 0 00-.01-4.79z"].map((d, i) => (
          <button key={i} className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground cursor-pointer hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d={d} />
            </svg>
          </button>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
