import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import mercedesSide from "@/assets/mercedes-side.jpg";
import mercedesFront from "@/assets/mercedes-front.jpg";
import mercedesSilver from "@/assets/mercedes-silver.jpg";
import mercedesInterior from "@/assets/mercedes-interior.jpg";
import mercedesDashboard from "@/assets/mercedes-dashboard.jpg";

const slides = [
  { image: mercedesSide, title: "Side Profile", sub: "Aerodynamic Elegance", badge: "EXTERIOR" },
  { image: mercedesFront, title: "Front Fascia", sub: "Commanding Presence", badge: "DESIGN" },
  { image: mercedesSilver, title: "AMG Line", sub: "Performance Aesthetics", badge: "AMG" },
  { image: mercedesInterior, title: "Rear Lounge", sub: "First-Class Comfort", badge: "INTERIOR" },
  { image: mercedesDashboard, title: "Cockpit", sub: "Digital Intelligence", badge: "TECH" },
];

const Gallery = () => {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((idx: number) => {
    setCurrent(((idx % slides.length) + slides.length) % slides.length);
  }, []);

  return (
    <section className="py-10 sm:py-14 md:py-[100px] overflow-hidden relative" style={{ background: "#06060f" }}>
      {/* Background photos */}
      <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-2 pointer-events-none z-0">
        <div className="bg-cover bg-center brightness-90" style={{ backgroundImage: `url(${mercedesSide})` }} />
        <div className="hidden sm:block bg-cover bg-center brightness-90" style={{ backgroundImage: `url(${mercedesInterior})` }} />
      </div>
      <div className="absolute inset-0 bg-[#06060f]/20 z-[1]" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-14 px-4 sm:px-6">
          <h2 className="text-2xl sm:text-4xl md:text-[44px] font-bold tracking-tight mb-2 sm:mb-3 text-foreground">
            Gallery
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground tracking-[2px] sm:tracking-[3px] uppercase">
            The S-Class Experience
          </p>
        </div>

        {/* Slider */}
        <div className="relative max-w-[900px] mx-auto px-4 sm:px-6">
          <div className="relative h-[200px] sm:h-[350px] md:h-[480px] rounded-lg sm:rounded-xl overflow-hidden">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  i === current ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"
                }`}
              >
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
                <span className="absolute top-3 right-3 sm:top-5 sm:right-5 text-[8px] sm:text-[9px] font-semibold tracking-[2px] sm:tracking-[3px] text-primary border border-primary/35 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-sm">
                  {slide.badge}
                </span>
              </div>
            ))}
          </div>

          {/* Nav buttons */}
          <button
            onClick={() => goTo(current - 1)}
            className="absolute left-1 sm:left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-foreground/12 bg-background/70 backdrop-blur-lg text-foreground/60 flex items-center justify-center cursor-pointer hover:border-primary hover:text-foreground transition-all hover:scale-105"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={() => goTo(current + 1)}
            className="absolute right-1 sm:right-2 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-foreground/12 bg-background/70 backdrop-blur-lg text-foreground/60 flex items-center justify-center cursor-pointer hover:border-primary hover:text-foreground transition-all hover:scale-105"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-[5px] h-[5px] rounded-full border-none cursor-pointer transition-all duration-300 ${
                i === current ? "bg-primary scale-[1.4]" : "bg-foreground/20"
              }`}
            />
          ))}
        </div>

        {/* Info bar */}
        <div className="flex items-center gap-4 sm:gap-6 mx-4 sm:mx-6 md:mx-14 mt-10 sm:mt-[72px] pt-5 sm:pt-7 border-t border-foreground/[0.06]">
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[3px] sm:tracking-[4px] text-primary min-w-6 sm:min-w-7">
            {String(current + 1).padStart(2, "0")}
          </span>
          <div className="w-px h-7 sm:h-9 bg-foreground/10" />
          <div className="flex-1 min-w-0">
            <div className="text-[15px] sm:text-[17px] font-semibold tracking-tight mb-0.5 sm:mb-1 text-foreground truncate">
              {slides[current].title}
            </div>
            <div className="text-[10px] sm:text-xs text-muted-foreground tracking-[1px] sm:tracking-[2px] uppercase truncate">
              {slides[current].sub}
            </div>
          </div>
          <span className="text-[10px] sm:text-[11px] font-medium tracking-[2px] sm:tracking-[3px] text-foreground/25 tabular-nums shrink-0">
            {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
