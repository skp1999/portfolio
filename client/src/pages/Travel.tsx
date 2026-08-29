import { useEffect, useRef } from "react";
import { Link } from "wouter";

const categories = {
  birth: { label: "Birth country", color: "#f97316", active: "#c2410c" },
  lived: { label: "Lived", color: "#0891b2", active: "#0e7490" },
  conference: { label: "Conferences", color: "#6366f1", active: "#4338ca" },
  layover: { label: "Layovers", color: "#94a3b8", active: "#475569" },
} as const;

type CategoryKey = keyof typeof categories;

const visitedPlaces: Array<{ label: string; category: CategoryKey; countryId?: string; point?: [number, number] }> = [
  { label: "India", countryId: "IND", category: "birth" },
  { label: "UAE", countryId: "ARE", category: "lived" },
  { label: "USA", countryId: "USA", category: "conference" },
  { label: "Singapore", point: [1.29, 103.85], category: "conference" },
  { label: "Qatar", countryId: "QAT", category: "layover" },
  { label: "Japan", countryId: "JPN", category: "layover" },
  { label: "Hong Kong", point: [22.3193, 114.1694], category: "layover" },
];

const countryCategory: Record<string, CategoryKey> = Object.fromEntries(
  visitedPlaces.filter((place) => place.countryId).map((place) => [place.countryId as string, place.category]),
);

declare global {
  interface Window {
    L?: any;
  }
}

let leafletPromise: Promise<any> | null = null;

function loadLeaflet() {
  if (window.L) return Promise.resolve(window.L);
  if (leafletPromise) return leafletPromise;

  if (!document.querySelector('link[data-leaflet-styles]')) {
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    stylesheet.dataset.leafletStyles = "true";
    document.head.appendChild(stylesheet);
  }

  leafletPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.crossOrigin = "anonymous";
    script.onload = () => resolve(window.L);
    script.onerror = () => reject(new Error("Unable to load the travel map"));
    document.head.appendChild(script);
  });

  return leafletPromise;
}

export default function Travel() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const routeApi = useRef<{ highlight: (index: number) => void; reset: () => void } | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    let map: any;
    let cancelled = false;

    loadLeaflet().then(async (leaflet) => {
      if (cancelled || !mapContainer.current) return;

      map = leaflet.map(mapContainer.current, {
        scrollWheelZoom: false,
        dragging: false,
        doubleClickZoom: false,
        boxZoom: false,
        keyboard: false,
        touchZoom: false,
        zoomControl: false,
        zoomSnap: 0,
        attributionControl: false,
      });

      const otherStyle = { fillColor: "#e7ecf1", fillOpacity: 1, color: "#ffffff", weight: 0.7 };
      const countryBaseStyle = (id: string) => ({
        fillColor: categories[countryCategory[id]].color,
        fillOpacity: 0.9,
        color: "#ffffff",
        weight: 0.7,
      });

      const countryLayers: Record<string, any> = {};
      const pointLayers: Record<string, any> = {};

      // City-states too small to show as filled countries get a dot instead.
      visitedPlaces.forEach((place) => {
        if (!place.point) return;
        pointLayers[place.label] = leaflet.circleMarker(place.point, {
          radius: 6,
          color: "#ffffff",
          weight: 2,
          fillColor: categories[place.category].color,
          fillOpacity: 1,
        }).addTo(map).bindTooltip(place.label, { direction: "top", offset: [0, -6], className: "travel-airport-label" });
      });

      try {
        const world = await fetch("https://cdn.jsdelivr.net/gh/johan/world.geo.json@master/countries.geo.json").then((res) => res.json());
        if (cancelled || !map) return;
        leaflet.geoJSON(world, {
          style: (feature: any) => (countryCategory[feature.id] ? countryBaseStyle(feature.id) : otherStyle),
          onEachFeature: (feature: any, layer: any) => {
            if (!countryCategory[feature.id]) return;
            countryLayers[feature.id] = layer;
            const place = visitedPlaces.find((entry) => entry.countryId === feature.id);
            if (place) layer.bindTooltip(place.label, { sticky: true, className: "travel-airport-label" });
          },
        }).addTo(map);
      } catch {
        /* map will still show the city dots */
      }

      const reset = () => {
        Object.entries(countryLayers).forEach(([id, layer]) => layer.setStyle(countryBaseStyle(id)));
        visitedPlaces.forEach((place) => {
          if (place.point && pointLayers[place.label]) {
            pointLayers[place.label].setStyle({ radius: 6, fillColor: categories[place.category].color });
            pointLayers[place.label].closeTooltip();
          }
        });
      };

      const highlight = (index: number) => {
        reset();
        const place = visitedPlaces[index];
        const palette = categories[place.category];
        if (place.countryId && countryLayers[place.countryId]) {
          countryLayers[place.countryId].setStyle({ fillColor: palette.active, fillOpacity: 1, color: palette.active, weight: 1.6 });
          countryLayers[place.countryId].openTooltip();
        }
        if (place.point && pointLayers[place.label]) {
          pointLayers[place.label].setStyle({ radius: 8, fillColor: palette.active });
          pointLayers[place.label].openTooltip();
        }
      };

      visitedPlaces.forEach((place, index) => {
        const layer = place.countryId ? countryLayers[place.countryId] : pointLayers[place.label];
        if (!layer) return;
        layer.on("mouseover", () => highlight(index));
        layer.on("mouseout", reset);
      });

      routeApi.current = { highlight, reset };

      const containerWidth = mapContainer.current.clientWidth || 1000;
      const initialZoom = Math.log2(containerWidth / 256);
      map.setView([28, 12], initialZoom);
    }).catch(() => {
      if (mapContainer.current) mapContainer.current.textContent = "The map could not be loaded.";
    });

    return () => {
      cancelled = true;
      routeApi.current = null;
      map?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container py-4 flex items-center justify-end">
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/" className="text-sm hover:text-accent transition-colors">Home</Link>
            <Link href="/publications" className="text-sm hover:text-accent transition-colors">Publications</Link>
            <Link href="/blogs" className="text-sm hover:text-accent transition-colors">Blogs</Link>
            <Link href="/travel" className="text-sm font-semibold text-accent">Travel</Link>
            <Link href="/cv" className="text-sm hover:text-accent transition-colors">CV</Link>
            <a href="#contact" className="text-sm hover:text-accent transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="container pt-8 sm:pt-12">
          <div className="mb-6 max-w-2xl">
            <p className="text-sm font-semibold uppercase text-accent">On the map</p>
            <h1 className="mt-2 text-4xl sm:text-5xl font-bold">Travel</h1>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Countries and cities I've lived in, worked in, or presented in around the world.
            </p>
          </div>
        </section>

        <section aria-label="Travel map" className="bg-gradient-to-b from-muted/40 to-background">
          <div className="container py-8 sm:py-12">
            <div className="mx-auto max-w-6xl">
              <div ref={mapContainer} className="travel-map aspect-[2/1] max-h-[560px] w-full overflow-hidden rounded-2xl border border-border bg-muted shadow-sm" aria-label="Map of countries I have travelled to" />
              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                {Object.values(categories).map((category) => (
                  <span key={category.label} className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground sm:text-sm">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: category.color }} aria-hidden="true" />
                    {category.label}
                  </span>
                ))}
              </div>
              <ul className="mt-4 flex flex-wrap justify-center gap-2">
                {visitedPlaces.map((place, index) => (
                  <li key={place.label}>
                    <button
                      type="button"
                      onMouseEnter={() => routeApi.current?.highlight(index)}
                      onMouseLeave={() => routeApi.current?.reset()}
                      onFocus={() => routeApi.current?.highlight(index)}
                      onBlur={() => routeApi.current?.reset()}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:border-accent/60 hover:text-foreground focus:border-accent focus:text-foreground focus:outline-none sm:text-sm"
                    >
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: categories[place.category].color }} aria-hidden="true" />
                      {place.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <section id="contact" className="py-6 sm:py-8 bg-muted/30 scroll-mt-20">
        <div className="container text-center">
          <a href="mailto:saurabh2000.iitkgp@gmail.com" className="text-sm font-semibold text-accent hover:underline">
            Get in touch
          </a>
        </div>
      </section>

      <footer className="border-t border-border bg-background">
        <div className="container py-6">
          <p className="text-sm text-muted-foreground text-center">© 2026 Saurabh Kumar Pandey. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}