import bannerImg from "@/assets/mercedes-headlight.jpg";

const HeadlightBanner = () => {
  return (
    <section className="relative h-[200px] sm:h-[280px] md:h-[420px] overflow-hidden flex items-center">
      <img
        src={bannerImg}
        alt="Mercedes S-Class Digital Light"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-banner)" }} />

      <div className="relative z-10 px-4 sm:px-5 md:px-20">
        <div className="text-[8px] sm:text-[10px] font-semibold tracking-[4px] sm:tracking-[6px] uppercase text-primary mb-2 sm:mb-4">
          Digital Light Technology
        </div>
        <h2 className="text-[28px] sm:text-[clamp(36px,5vw,64px)] font-bold tracking-tight leading-[1.05] mb-1.5 sm:mb-2.5 text-foreground">
          Precision<br />Illumination
        </h2>
        <p className="text-[11px] sm:text-[13px] tracking-[2px] sm:tracking-[4px] uppercase text-muted-foreground">
          1.3 million micro-mirrors per headlight
        </p>
      </div>
    </section>
  );
};

export default HeadlightBanner;
