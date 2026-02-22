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
    <section className="py-14 md:py-[100px] overflow-hidden relative" style={{ background: "#06060f" }}>
      {/* Background photos */}
      <div className="absolute inset-0 grid grid-cols-2 pointer-events-none z-0">
        <div className="bg-cover bg-center opacity-100 saturate-100 brightness-90" style={{ backgroundImage: `url(${mercedesSide})` }} />
        <div className="bg-cover bg-center opacity-100 saturate-100 brightness-90" style={{ backgroundImage: `url(${mercedesInterior})` }} />
      </div>
      <div className="absolute inset-0 bg-[#06060f]/80 z-[1]" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-14 px-6">
          <h2 className="text-4xl md:text-[44px] font-bold tracking-tight mb-3 text-foreground">
            Gallery
          </h2>
          <p className="text-sm text-muted-foreground tracking-[3px] uppercase">
            The S-Class Experience
          </p>
        </div>

        {/* Slider */}
        <div className="relative max-w-[900px] mx-auto px-6">
          <div className="relative h-[240px] sm:h-[350px] md:h-[480px] rounded-xl overflow-hidden">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  i === current ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"
                }`}
              >
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />

                {/* Badge */}
                <span className="absolute top-5 right-5 text-[9px] font-semibold tracking-[3px] text-cyan border border-cyan/35 px-2.5 py-1 rounded-sm">
                  {slide.badge}
                </span>
              </div>
            ))}
          </div>

          {/* Nav buttons */}
          <button
            onClick={() => goTo(current - 1)}
            className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-foreground/12 bg-background/70 backdrop-blur-lg text-foreground/60 flex items-center justify-center cursor-pointer hover:border-primary hover:text-foreground transition-all hover:scale-105"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => goTo(current + 1)}
            className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-foreground/12 bg-background/70 backdrop-blur-lg text-foreground/60 flex items-center justify-center cursor-pointer hover:border-primary hover:text-foreground transition-all hover:scale-105"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
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
        <div className="flex items-center gap-6 mx-6 md:mx-14 mt-[72px] pt-7 border-t border-foreground/[0.06]">
          <span className="text-[11px] font-semibold tracking-[4px] text-primary min-w-7">
            {String(current + 1).padStart(2, "0")}
          </span>
          <div className="w-px h-9 bg-foreground/10" />
          <div className="flex-1">
            <div className="text-[17px] font-semibold tracking-tight mb-1 text-foreground">
              {slides[current].title}
            </div>
            <div className="text-xs text-muted-foreground tracking-[2px] uppercase">
              {slides[current].sub}
            </div>
          </div>
          <span className="text-[11px] font-medium tracking-[3px] text-foreground/25 tabular-nums">
            {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
