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
{ name: "Wheels & Suspension", num: "06", image: mercedesRear }];


const Categories = () => {
  return (
    <section id="categories" className="md:py-[100px] md:px-14 bg-background px-[16px] py-[18px]">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-[44px] font-bold tracking-tight mb-3 text-foreground">
          Browse by Category
        </h2>
        <p className="text-sm text-muted-foreground tracking-[3px] uppercase">
          S-Class 2026 — Complete Parts Range
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 max-w-[1400px] mx-auto">
        {categories.map((cat) =>
        <div
          key={cat.num}
          className="group relative h-[180px] sm:h-[240px] md:h-[300px] rounded-xl overflow-hidden cursor-pointer border border-transparent hover:border-primary/60 transition-all duration-350 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_hsl(var(--primary)/0.2)]">

            {/* Background */}
            <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[550ms] ease-out group-hover:scale-105"
            style={{ backgroundImage: `url(${cat.image})` }} />

            {/* Dark gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent rounded-xl" />

            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-7 py-0 px-[20px] pr-0 pl-px pb-0 pt-0 my-0 mx-0">
              <div className="text-[10px] font-semibold tracking-[4px] uppercase text-cyan mb-1.5">
                {cat.num}
              </div>
              <div className="text-[22px] font-semibold text-foreground">{cat.name}</div>
              <div className="h-0.5 bg-primary mt-2.5 w-0 group-hover:w-10 transition-all duration-400 ease-out" />
            </div>
          </div>
        )}
      </div>
    </section>);

};

export default Categories;