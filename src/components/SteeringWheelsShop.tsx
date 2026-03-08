import { useState, useMemo } from "react";
import { Search, X, ChevronLeft, ChevronRight, ExternalLink, Package, Truck } from "lucide-react";
import { steeringWheels, type SteeringWheel } from "@/data/steeringWheels";

const ITEMS_PER_PAGE = 12;
const FALLBACK_IMG = "https://usedparts.mercedes-benz.com/out/pictures/generated/product/1/600_600_75/nopic.jpg";

const SteeringWheelsShop = () => {
  const [search, setSearch] = useState("");
  const [colorFilter, setColorFilter] = useState("All");
  const [sortBy, setSortBy] = useState<"price-asc" | "price-desc" | "name">("price-asc");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<SteeringWheel | null>(null);

  const colors = useMemo(() => {
    const set = new Set(steeringWheels.map((sw) => sw.color));
    return ["All", ...Array.from(set).sort()];
  }, []);

  const filtered = useMemo(() => {
    let items = steeringWheels.filter((sw) => {
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        sw.name.toLowerCase().includes(q) ||
        sw.productNumber.toLowerCase().includes(q) ||
        sw.oemNumber.toLowerCase().includes(q);
      const matchesColor = colorFilter === "All" || sw.color === colorFilter;
      return matchesSearch && matchesColor;
    });

    if (sortBy === "price-asc") items.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") items.sort((a, b) => b.price - a.price);
    else items.sort((a, b) => a.name.localeCompare(b.name));

    return items;
  }, [search, colorFilter, sortBy]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const currentPage = Math.min(page, totalPages || 1);
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <section id="products" className="py-10 sm:py-14 md:py-[100px] px-3 sm:px-4 md:px-14" style={{ background: "var(--gradient-products)" }}>
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-4xl md:text-[44px] font-bold tracking-tight mb-2 sm:mb-3 text-foreground">Steering Wheels</h2>
        <p className="text-xs sm:text-sm text-muted-foreground tracking-[2px] sm:tracking-[3px] uppercase">
          {filtered.length} Genuine Mercedes-Benz Parts
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-[1400px] mx-auto mb-6 sm:mb-10 flex flex-col sm:flex-row gap-2 sm:gap-4 items-stretch sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by name, part number, or OEM..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="w-full h-10 sm:h-12 pl-9 sm:pl-11 pr-9 sm:pr-10 rounded-lg bg-secondary/50 border border-border text-foreground text-xs sm:text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
          />
          {search && (
            <button onClick={() => { setSearch(""); setPage(1); }} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex gap-2">
          <select
            value={colorFilter}
            onChange={(e) => { setColorFilter(e.target.value); setPage(1); }}
            className="h-10 sm:h-12 px-3 sm:px-4 rounded-lg bg-secondary/50 border border-border text-foreground text-xs sm:text-sm focus:outline-none focus:border-primary/50 cursor-pointer flex-1 sm:flex-none"
          >
            {colors.map((c) => (
              <option key={c} value={c}>{c === "All" ? "All Colors" : c}</option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="h-10 sm:h-12 px-3 sm:px-4 rounded-lg bg-secondary/50 border border-border text-foreground text-xs sm:text-sm focus:outline-none focus:border-primary/50 cursor-pointer flex-1 sm:flex-none"
          >
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
            <option value="name">Name A-Z</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3 md:gap-5 max-w-[1400px] mx-auto">
        {paginated.map((sw) => (
          <div
            key={sw.id}
            onClick={() => setSelected(sw)}
            className="group rounded-lg sm:rounded-xl overflow-hidden cursor-pointer border border-border transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-[0_24px_60px_hsl(var(--primary)/0.18)] hover:border-primary/50"
            style={{ background: "hsl(var(--card-glass))" }}
          >
            <div className="overflow-hidden h-[120px] sm:h-[180px] md:h-[220px] bg-secondary/30 flex items-center justify-center">
              <img
                src={sw.imageUrl}
                alt={sw.name}
                className="w-full h-full object-contain p-3 sm:p-4 transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_IMG; }}
              />
            </div>
            <div className="p-2.5 sm:p-3 md:p-5 pb-3 sm:pb-4 md:pb-6">
              <p className="text-[8px] sm:text-[9px] md:text-[10px] font-semibold tracking-[2px] sm:tracking-[3px] uppercase text-primary mb-0.5 sm:mb-1">{sw.color}</p>
              <h3 className="text-[12px] sm:text-[13px] md:text-[15px] font-semibold text-foreground mb-0.5 sm:mb-1 line-clamp-1">{sw.name}</h3>
              <p className="text-[9px] sm:text-[10px] md:text-[11px] text-muted-foreground mb-0.5 sm:mb-1 font-mono hidden sm:block">{sw.productNumber}</p>
              <p className="text-[9px] sm:text-[10px] md:text-[11px] text-muted-foreground mb-2 sm:mb-3 md:mb-4 hidden sm:block">OEM: {sw.oemNumber} · {sw.weight}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm sm:text-base md:text-xl font-bold text-foreground">€{sw.price.toFixed(2)}</span>
                <span className="text-[8px] sm:text-[10px] text-emerald-400 font-medium tracking-wide uppercase flex items-center gap-1">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-400 inline-block" />
                  <span className="hidden sm:inline">In Stock</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-14 sm:py-20 text-muted-foreground">
          <p className="text-base sm:text-lg">No steering wheels found matching your criteria.</p>
          <button onClick={() => { setSearch(""); setColorFilter("All"); setPage(1); }} className="mt-4 text-primary hover:underline text-sm">
            Clear filters
          </button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-8 sm:mt-12">
          <button
            onClick={() => setPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                p === currentPage
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              }`}
            >
              {p}
            </button>
          ))}

          <button
            onClick={() => setPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Detail Modal */}
      {selected && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4" onClick={() => setSelected(null)}>
          <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" />
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full sm:max-w-[700px] max-h-[85vh] sm:max-h-[90vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl border border-border"
            style={{ background: "hsl(var(--card-glass))" }}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-secondary/80 flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="bg-secondary/30 flex items-center justify-center h-[200px] sm:h-[280px] md:h-[320px]">
              <img
                src={selected.imageUrl}
                alt={selected.name}
                className="max-h-[170px] sm:max-h-[240px] md:max-h-[280px] object-contain"
                onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_IMG; }}
              />
            </div>

            <div className="p-4 sm:p-6 md:p-8">
              <p className="text-[9px] sm:text-[10px] font-semibold tracking-[3px] sm:tracking-[4px] uppercase text-primary mb-1.5 sm:mb-2">
                {selected.color}{selected.textileType ? ` · ${selected.textileType}` : ""}
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">{selected.name}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground font-mono mb-4 sm:mb-6">{selected.productNumber}</p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
                <div className="rounded-lg bg-secondary/30 p-3 sm:p-4">
                  <p className="text-[9px] sm:text-[10px] font-semibold tracking-[2px] uppercase text-muted-foreground mb-0.5 sm:mb-1">OEM Number</p>
                  <p className="text-xs sm:text-sm font-medium text-foreground">{selected.oemNumber}</p>
                </div>
                <div className="rounded-lg bg-secondary/30 p-3 sm:p-4">
                  <p className="text-[9px] sm:text-[10px] font-semibold tracking-[2px] uppercase text-muted-foreground mb-0.5 sm:mb-1">Weight</p>
                  <p className="text-xs sm:text-sm font-medium text-foreground">{selected.weight}</p>
                </div>
                <div className="rounded-lg bg-secondary/30 p-3 sm:p-4">
                  <p className="text-[9px] sm:text-[10px] font-semibold tracking-[2px] uppercase text-muted-foreground mb-0.5 sm:mb-1">Fits Models</p>
                  <p className="text-xs sm:text-sm font-medium text-foreground">{selected.modelsCount} vehicles</p>
                </div>
                <div className="rounded-lg bg-secondary/30 p-3 sm:p-4">
                  <p className="text-[9px] sm:text-[10px] font-semibold tracking-[2px] uppercase text-muted-foreground mb-0.5 sm:mb-1">Quality</p>
                  <p className="text-xs sm:text-sm font-medium text-foreground">Grade A — Genuine</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 text-[11px] sm:text-[12px] text-muted-foreground">
                <span className="flex items-center gap-1.5"><Package className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" /> {selected.availability}</span>
                <span className="flex items-center gap-1.5"><Truck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" /> {selected.deliveryTime}</span>
              </div>

              <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-border">
                <span className="text-2xl sm:text-3xl font-bold text-foreground">€{selected.price.toFixed(2)}</span>
                <a
                  href={selected.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-primary text-primary-foreground text-xs sm:text-sm font-semibold tracking-wide hover:bg-primary/90 transition-colors"
                >
                  View Details <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SteeringWheelsShop;
