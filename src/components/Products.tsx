import mercedesHeadlight from "@/assets/mercedes-headlight.jpg";
import mercedesSteering from "@/assets/mercedes-steering.jpg";
import mercedesStar from "@/assets/mercedes-star.jpg";

const products = [
  {
    name: "DIGITAL LIGHT Module",
    desc: "OEM headlight unit with 1.3M micro-mirrors. Plug-and-play replacement for W223.",
    price: "$4,280",
    image: mercedesHeadlight,
  },
  {
    name: "AMG Steering Wheel",
    desc: "Nappa leather, heated, with haptic touch controls. S63 AMG spec.",
    price: "$2,150",
    image: mercedesSteering,
  },
  {
    name: "Hood Star Emblem",
    desc: "Illuminated three-pointed star. Genuine Mercedes-Benz accessory.",
    price: "$320",
    image: mercedesStar,
  },
];

const Products = () => {
  return (
    <section
      id="products"
      className="py-[100px] px-6 md:px-14"
      style={{ background: "var(--gradient-products)" }}
    >
      <div className="text-center mb-[60px]">
        <h2 className="text-4xl md:text-[44px] font-bold tracking-tight mb-3 text-foreground">
          Featured Parts
        </h2>
        <p className="text-sm text-muted-foreground tracking-[3px] uppercase">
          Handpicked genuine components
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
        {products.map((product) => (
          <div
            key={product.name}
            className="group rounded-xl overflow-hidden cursor-pointer border border-border transition-all duration-350 hover:-translate-y-2 hover:shadow-[0_28px_70px_hsl(var(--primary)/0.22)] hover:border-primary/50"
            style={{ background: "hsl(var(--card-glass))" }}
          >
            {/* Image */}
            <div className="overflow-hidden h-[240px] bg-secondary">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-[550ms] ease-out group-hover:scale-[1.06]"
              />
            </div>

            {/* Body */}
            <div className="p-6 pb-7">
              <h3 className="text-lg font-semibold text-foreground mb-1.5">{product.name}</h3>
              <p className="text-[13px] text-muted-foreground mb-5 leading-relaxed">{product.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-[26px] font-bold text-foreground">{product.price}</span>
                <button className="group/btn inline-flex items-center gap-3.5 bg-transparent border-none text-foreground/60 text-[10px] font-medium tracking-[4px] uppercase cursor-pointer hover:text-foreground transition-colors">
                  <span className="block w-8 h-px bg-foreground/30 group-hover/btn:w-14 group-hover/btn:bg-primary transition-all duration-[450ms] ease-out" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
