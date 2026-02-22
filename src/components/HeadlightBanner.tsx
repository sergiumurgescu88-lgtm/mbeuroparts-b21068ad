import bannerImg from "@/assets/mercedes-headlight.jpg";

const HeadlightBanner = () => {
  return (
    <section className="relative h-[280px] md:h-[420px] overflow-hidden flex items-center">
      <img
        src={bannerImg}
        alt="Mercedes S-Class Digital Light"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-banner)" }}
      />

      <div className="relative z-10 px-5 md:px-20">
        <div className="text-[10px] font-semibold tracking-[6px] uppercase text-cyan mb-4">
          Digital Light Technology
        </div>
        <h2 className="text-[clamp(36px,5vw,64px)] font-bold tracking-tight leading-[1.05] mb-2.5 text-foreground">
          Precision<br />Illumination
        </h2>
        <p className="text-[13px] tracking-[4px] uppercase text-muted-foreground">
          1.3 million micro-mirrors per headlight
        </p>
      </div>
    </section>
  );
};

export default HeadlightBanner;
