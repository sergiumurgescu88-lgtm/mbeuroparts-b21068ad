import heroImg from "@/assets/mercedes-side.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden flex items-end justify-start">
      {/* Background image with Ken Burns */}
      <img
        src={heroImg}
        alt="Mercedes-Benz S-Class 2026"
        className="absolute inset-0 w-full h-full object-cover origin-center"
        style={{ animation: "kenBurns 12s ease-in-out infinite alternate" }} />


      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }} />


      {/* Hero content */}
      <div
        className="relative z-10 text-left pl-8 md:pl-[72px] pb-[100px] w-full"
        style={{ animation: "heroReveal 1.6s cubic-bezier(.16,1,.3,1) .4s both" }}>

        <div className="text-[10px] font-medium tracking-[7px] uppercase text-foreground/45 mb-3.5">
          MBeuroparts — S-Class W223
        </div>
        <div className="w-8 h-px bg-primary mb-5" />
        <h1 className="text-[clamp(28px,3.5vw,48px)] font-light tracking-[2px] text-foreground/90 mb-2.5 leading-[1.15]">Genuine Parts for
Mercedes-Benz
          <strong className="font-semibold text-foreground block">2026 S-Class</strong>
        </h1>
        <p className="text-[13px] font-normal tracking-[3px] uppercase text-foreground/38 mb-11">
          OEM precision · Factory warranty · Global shipping
        </p>

        {/* CTA Button */}
        <a href="#products" className="group inline-flex items-center gap-[18px] text-foreground/75 text-[10px] font-medium tracking-[5px] uppercase no-underline hover:text-foreground transition-colors">
          <span className="block w-10 h-px bg-foreground/35 group-hover:w-16 group-hover:bg-primary transition-all duration-500 ease-out relative">
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-[3px] h-[3px] rounded-full bg-foreground/35 group-hover:bg-primary transition-colors" />
          </span>
          Explore Collection
        </a>
      </div>

      {/* Luxury corner badge */}
      <div
        className="absolute z-10 top-[108px] right-8 md:right-14 flex flex-col items-end gap-2 pt-4"
        style={{ animation: "heroReveal 1.8s cubic-bezier(.16,1,.3,1) .7s both" }}>

        <div className="absolute top-0 right-0 w-14 h-px bg-gradient-to-l from-foreground/25 to-transparent" />
        <span className="text-[8px] font-semibold tracking-[10px] uppercase text-foreground/28">Luxury</span>
        <div className="w-1 h-1 bg-primary rotate-45 opacity-70" />
        <span className="text-[11px] font-light tracking-[5px] uppercase text-foreground/50">W223 · 2026</span>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted-foreground text-[9px] tracking-[4px] uppercase">
        Scroll
        <div
          className="w-px h-9 bg-gradient-to-b from-primary to-transparent"
          style={{ animation: "scrollPulse 2s ease-in-out infinite" }} />

      </div>
    </section>);

};

export default Hero;