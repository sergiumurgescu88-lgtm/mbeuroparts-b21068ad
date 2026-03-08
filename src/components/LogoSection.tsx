import mercedesRear from "@/assets/mercedes-rear.jpg";
import mercedesNewSclass from "@/assets/mercedes-new-sclass.png";
import mercedesFront from "@/assets/mercedes-front.jpg";

const LogoSection = () => {
  return (
    <section className="relative flex flex-col items-center py-12 sm:py-16 md:py-[120px] px-4 sm:px-6 md:px-12 overflow-hidden bg-background">
      {/* Background photos grid */}
      <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-3 pointer-events-none z-0">
        <div className="hidden sm:block bg-cover bg-center brightness-90" style={{ backgroundImage: `url(${mercedesRear})` }} />
        <div className="bg-cover bg-center brightness-90" style={{ backgroundImage: `url(${mercedesNewSclass})` }} />
        <div className="hidden sm:block bg-cover bg-center brightness-90" style={{ backgroundImage: `url(${mercedesFront})` }} />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/20 z-[1]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Star icon */}
        <div className="relative w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] mb-4 sm:mb-6">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" style={{ animation: "starSpin 30s linear infinite" }}>
            <circle cx="50" cy="50" r="48" stroke="hsl(var(--foreground) / 0.1)" strokeWidth="0.7" />
            <circle cx="50" cy="50" r="38" stroke="hsl(var(--foreground) / 0.06)" strokeWidth="0.5" />
            <path d="M50 10 L53 44 L84 62 L50 50 L16 62 L47 44 Z" fill="hsl(var(--foreground) / 0.9)" />
            <circle cx="50" cy="50" r="5" fill="hsl(var(--foreground) / 0.95)" />
          </svg>
          <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl" />
        </div>

        {/* Tagline */}
        <p className="text-[13px] sm:text-[17px] font-normal tracking-[3px] sm:tracking-[5px] uppercase text-primary text-center">
          Precision · Heritage · Performance
        </p>
      </div>
    </section>
  );
};

export default LogoSection;
