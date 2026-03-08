import mercedesHeadlight from "@/assets/mercedes-headlight.jpg";
import mercedesSteering from "@/assets/mercedes-steering.jpg";
import mercedesDashboard from "@/assets/mercedes-dashboard.jpg";
import mercedesInterior from "@/assets/mercedes-interior.jpg";
import mercedesFront from "@/assets/mercedes-front.jpg";
import mercedesRear from "@/assets/mercedes-rear.jpg";

const categories = [
  { name: "Headlights & Lighting", num: "01", image: mercedesHeadlight },
  { name: "Interior & Trim", num: "02", image: mercedesSteering },
  { name: "Electronics & Displays", num: "03", image: mercedesDashboard },
  { name: "Seats & Comfort", num: "04", image: mercedesInterior },
  { name: "Body & Exterior", num: "05", image: mercedesFront },
  { name: "Wheels & Suspension", num: "06", image: mercedesRear },
];

const Categories = () => {
  return (
    <section id="categories" className="py-10 sm:py-14 md:py-[100px] px-3 sm:px-6 md:px-14 bg-background">
      <div className="text-center mb-8 sm:mb-14">
        <h2 className="text-2xl sm:text-4xl md:text-[44px] font-bold tracking-tight mb-2 sm:mb-3 text-foreground">
          Browse by Category
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground tracking-[2px] sm:tracking-[3px] uppercase">
          S-Class 2026 — Complete Parts Range
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 max-w-[1400px] mx-auto">
        {categories.map((cat) => (
          <div
            key={cat.num}
            className="group relative h-[140px] sm:h-[200px] md:h-[300px] rounded-lg sm:rounded-xl overflow-hidden cursor-pointer border border-transparent hover:border-primary/60 transition-all duration-350 hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-[0_24px_60px_hsl(var(--primary)/0.2)]"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[550ms] ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 md:p-7">
              <div className="text-[8px] sm:text-[10px] font-semibold tracking-[3px] sm:tracking-[4px] uppercase text-primary mb-1">
                {cat.num}
              </div>
              <div className="text-[14px] sm:text-[18px] md:text-[22px] font-semibold text-foreground leading-tight">
                {cat.name}
              </div>
              <div className="h-0.5 bg-primary mt-2 sm:mt-2.5 w-0 group-hover:w-8 sm:group-hover:w-10 transition-all duration-400 ease-out" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
