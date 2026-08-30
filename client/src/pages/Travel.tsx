import { useEffect, useRef } from "react";
import { Camera, MapPin, Trophy } from "lucide-react";
import { Link } from "wouter";

const HIGHLIGHT = "#0891b2";
const HIGHLIGHT_ACTIVE = "#0e7490";

const visitedPlaces: Array<{ label: string; countryId?: string; point?: [number, number] }> = [
  { label: "India", countryId: "IND" },
  { label: "UAE", countryId: "ARE" },
  { label: "USA", countryId: "USA" },
  { label: "Singapore", point: [1.29, 103.85] },
  { label: "Qatar", countryId: "QAT" },
  { label: "Japan", countryId: "JPN" },
  { label: "Hong Kong", point: [22.3193, 114.1694] },
];

const visitedCountryIds = new Set(
  visitedPlaces.map((place) => place.countryId).filter(Boolean) as string[],
);

const flightCities: Record<string, [number, number]> = {
  IND: [22.5, 79.0], AUH: [24.43, 54.65], DOH: [25.27, 51.61], SIN: [1.29, 103.85],
  VN: [21.03, 105.85], TYO: [35.68, 139.77], HKG: [22.32, 114.17],
  SEA: [47.45, -122.31], SAN: [32.73, -117.19], SFO: [37.62, -122.38],
  MIA: [25.79, -80.29], ABQ: [35.04, -106.61], DEN: [39.86, -104.67], NYC: [40.71, -74.01],
};

const cityNames: Record<string, string> = {
  IND: "India", AUH: "Abu Dhabi", DOH: "Doha", SIN: "Singapore", VN: "Vietnam",
  TYO: "Tokyo", HKG: "Hong Kong", SEA: "Seattle", SAN: "San Diego", SFO: "San Francisco",
  MIA: "Miami", ABQ: "Albuquerque", DEN: "Denver", NYC: "New York",
};

const flights: Array<[string, string]> = [
  ["IND", "AUH"], ["IND", "SIN"], ["IND", "DOH"], ["IND", "TYO"], ["IND", "HKG"],
  ["IND", "SAN"], ["IND", "MIA"], ["IND", "ABQ"], ["IND", "DEN"], ["IND", "SEA"],
  ["IND", "SFO"], ["IND", "VN"], ["NYC", "AUH"],
];

const galleryPlaces = [
  { city: "Bengaluru", country: "India", note: "Home base", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=85" },
  { city: "Abu Dhabi", country: "UAE", note: "MBZUAI · COLING", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85" },
  { city: "Singapore", country: "Singapore", note: "EMNLP", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=85" },
  { city: "San Diego", country: "USA", note: "ACL · C3NLP", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85" },
  { city: "Tokyo", country: "Japan", note: "Layover", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=85" },
  { city: "Hong Kong", country: "China", note: "Layover", image: "https://images.unsplash.com/photo-1506970845246-18f21d533b20?auto=format&fit=crop&w=1200&q=85" },
];

const cricketGallery = [
  { title: "Match days", note: "Watching the game, wherever I am", image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1200&q=85" },
  { title: "Weekend cricket", note: "A bat, a ball, and one more over", image: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?auto=format&fit=crop&w=1200&q=85" },
  { title: "The scorebook", note: "Scores and match notes will live here", image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=85" },
];

declare global {
  interface Window { L?: any }
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

function flightCurve(start: [number, number], end: [number, number]) {
  const longitudeDistance = end[1] - start[1];
  const bow = Math.min(24, Math.abs(longitudeDistance) * 0.16 + 3);
  const control: [number, number] = [(start[0] + end[0]) / 2 + bow, (start[1] + end[1]) / 2];

  return Array.from({ length: 41 }, (_, index) => {
    const progress = index / 40;
    const inverse = 1 - progress;
    return [
      inverse * inverse * start[0] + 2 * inverse * progress * control[0] + progress * progress * end[0],
      inverse * inverse * start[1] + 2 * inverse * progress * control[1] + progress * progress * end[1],
    ] as [number, number];
  });
}

function planeIcon(angleDegrees: number) {
  return `<svg width="15" height="15" viewBox="0 0 24 24" fill="#64748b" style="transform: rotate(${angleDegrees}deg)"><path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2 1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>`;
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
        scrollWheelZoom: false, dragging: false, doubleClickZoom: false, boxZoom: false,
        keyboard: false, touchZoom: false, zoomControl: false, zoomSnap: 0, attributionControl: false,
      });

      const otherStyle = { fillColor: "#e7ecf1", fillOpacity: 1, color: "#ffffff", weight: 0.7 };
      const visitedStyle = { fillColor: HIGHLIGHT, fillOpacity: 0.85, color: "#ffffff", weight: 0.7 };
      const activeStyle = { fillColor: HIGHLIGHT_ACTIVE, fillOpacity: 1, color: HIGHLIGHT_ACTIVE, weight: 1.6 };
      const countryLayers: Record<string, any> = {};
      const pointLayers: Record<string, any> = {};

      visitedPlaces.forEach((place) => {
        if (!place.point) return;
        pointLayers[place.label] = leaflet.circleMarker(place.point, {
          radius: 6, color: "#ffffff", weight: 2, fillColor: HIGHLIGHT, fillOpacity: 1,
        }).addTo(map).bindTooltip(place.label, { direction: "top", offset: [0, -6], className: "travel-airport-label" });
      });

      try {
        const world = await fetch("https://cdn.jsdelivr.net/gh/johan/world.geo.json@master/countries.geo.json").then((response) => response.json());
        if (cancelled || !map) return;
        leaflet.geoJSON(world, {
          style: (feature: any) => visitedCountryIds.has(feature.id) ? visitedStyle : otherStyle,
          onEachFeature: (feature: any, layer: any) => {
            if (!visitedCountryIds.has(feature.id)) return;
            countryLayers[feature.id] = layer;
            const place = visitedPlaces.find((entry) => entry.countryId === feature.id);
            if (place) layer.bindTooltip(place.label, { sticky: true, className: "travel-airport-label" });
          },
        }).addTo(map);
      } catch {
        // City markers and routes remain useful when country boundaries are unavailable.
      }

      // Faint destination dots so the routes read as distinct arrivals.
      new Set(flights.flat()).forEach((code) => {
        if (code === "IND") return;
        leaflet.circleMarker(flightCities[code], {
          radius: 2.4, weight: 0, fillColor: "#9aa7b6", fillOpacity: 0.9, interactive: false,
        }).addTo(map);
      });

      // Flight arcs with a hover state and a small plane showing direction of travel.
      flights.forEach(([from, to]) => {
        const curve = flightCurve(flightCities[from], flightCities[to]);
        const line = leaflet.polyline(curve, {
          color: "#c4cdd9", weight: 1.2, opacity: 0.95, lineCap: "round", lineJoin: "round", interactive: false,
        }).addTo(map);
        const hit = leaflet.polyline(curve, { color: "#000000", weight: 12, opacity: 0 }).addTo(map);
        hit.bindTooltip(`${cityNames[from]} → ${cityNames[to]}`, { sticky: true, className: "travel-route-label" });
        hit.on("mouseover", () => line.setStyle({ color: "#334155", weight: 2 }));
        hit.on("mouseout", () => line.setStyle({ color: "#c4cdd9", weight: 1.2 }));

        const mid = Math.floor(curve.length / 2);
        const before = curve[mid - 1];
        const after = curve[mid + 1];
        const angle = (Math.atan2(after[1] - before[1], after[0] - before[0]) * 180) / Math.PI;
        leaflet.marker(curve[mid], {
          icon: leaflet.divIcon({ html: planeIcon(angle), className: "travel-plane", iconSize: [15, 15], iconAnchor: [7.5, 7.5] }),
          interactive: false, keyboard: false,
        }).addTo(map);
      });

      // India hub with a soft halo so the routes look like they emerge from one point.
      leaflet.circleMarker(flightCities.IND, {
        radius: 12, weight: 0, fillColor: HIGHLIGHT, fillOpacity: 0.12, interactive: false,
      }).addTo(map);
      leaflet.circleMarker(flightCities.IND, {
        radius: 4.5, color: "#ffffff", weight: 2, fillColor: HIGHLIGHT, fillOpacity: 1, interactive: false,
      }).addTo(map);

      const reset = () => {
        Object.values(countryLayers).forEach((layer) => layer.setStyle(visitedStyle));
        visitedPlaces.forEach((place) => {
          if (!place.point || !pointLayers[place.label]) return;
          pointLayers[place.label].setStyle({ radius: 6, fillColor: HIGHLIGHT });
          pointLayers[place.label].closeTooltip();
        });
      };

      const highlight = (index: number) => {
        reset();
        const place = visitedPlaces[index];
        if (place.countryId && countryLayers[place.countryId]) {
          countryLayers[place.countryId].setStyle(activeStyle);
          countryLayers[place.countryId].openTooltip();
        }
        if (place.point && pointLayers[place.label]) {
          pointLayers[place.label].setStyle({ radius: 8, fillColor: HIGHLIGHT_ACTIVE });
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
      const routeBounds = leaflet.latLngBounds(
        flights.flatMap(([from, to]) => flightCurve(flightCities[from], flightCities[to])),
      );
      map.fitBounds(routeBounds, { padding: [16, 24] });
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
    <div className="min-h-screen bg-[#f7f7f2] text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <nav className="container flex items-center justify-end py-4">
          <div className="flex flex-wrap items-center justify-end gap-4 sm:gap-6">
            <Link href="/" className="text-sm transition-colors hover:text-accent">Home</Link>
            <Link href="/publications" className="text-sm transition-colors hover:text-accent">Publications</Link>
            <Link href="/blogs" className="text-sm transition-colors hover:text-accent">Blogs</Link>
            <Link href="/travel" className="text-sm font-semibold text-accent">Life@OOF</Link>
            <Link href="/cv" className="text-sm transition-colors hover:text-accent">CV</Link>
            <a href="#contact" className="text-sm transition-colors hover:text-accent">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="container py-10 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b4532a]">Where I've been</p>
              <h1 className="mt-3 text-4xl font-bold sm:text-5xl">A map of the journey so far</h1>
              <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">Born in India, having lived in the UAE, and fortunate to travel through work. Every conference and layover has added a place, a frame, or a story to remember.</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {visitedPlaces.map((place, index) => (
                  <li key={place.label}><button type="button" onMouseEnter={() => routeApi.current?.highlight(index)} onMouseLeave={() => routeApi.current?.reset()} onFocus={() => routeApi.current?.highlight(index)} onBlur={() => routeApi.current?.reset()} className="inline-flex items-center gap-1.5 rounded-full border border-[#d9ddd3] bg-white px-3 py-1.5 text-xs font-medium transition-colors hover:border-accent focus:border-accent focus:outline-none"><span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />{place.label}</button></li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">Hover a country or a flight path to see the details.</p>
            </div>
            <div ref={mapContainer} style={{ backgroundColor: "#d6ebf5" }} className="travel-map aspect-[2/1] max-h-[500px] w-full overflow-hidden rounded-xl border border-[#d9ddd3] shadow-sm" aria-label="Map of countries I have travelled to" />
          </div>
        </section>

        <section className="border-y border-[#d9ddd3] bg-white py-14 sm:py-20">
          <div className="container">
            <div className="mb-9 flex items-end justify-between gap-4">
              <div><p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#b4532a]"><Camera className="h-4 w-4" aria-hidden="true" />Travel gallery</p><h2 className="mt-3 text-3xl font-bold sm:text-4xl">Frames from the road</h2></div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryPlaces.map((place) => (
                <figure key={place.city} className="group relative aspect-[4/3] overflow-hidden bg-muted">
                  <img src={place.image} alt={`${place.city}, ${place.country}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-5 pb-4 pt-14 text-white"><p className="text-lg font-bold">{place.city}</p><p className="mt-1 text-xs text-white/75">{place.country} · {place.note}</p></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#172b2a] py-14 text-white sm:py-20">
          <div className="container">
            <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div><p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#e9a27f]"><Trophy className="h-4 w-4" aria-hidden="true" />Cricket life</p><h2 className="mt-3 text-3xl font-bold sm:text-4xl">Beyond the boundary</h2></div>
              <p className="flex items-center gap-2 text-sm text-white/60"><MapPin className="h-4 w-4" aria-hidden="true" />Matches, memories, and scores</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {cricketGallery.map((item) => (
                <article key={item.title} className="group border border-white/15 bg-white/5">
                  <div className="aspect-[4/3] overflow-hidden"><img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" /></div>
                  <div className="p-5"><h3 className="text-xl font-bold">{item.title}</h3><p className="mt-2 text-sm text-white/60">{item.note}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <section id="contact" className="scroll-mt-20 bg-muted/30 py-6 sm:py-8"><div className="container text-center"><a href="mailto:saurabh2000.iitkgp@gmail.com" className="text-sm font-semibold text-accent hover:underline">Get in touch</a></div></section>
      <footer className="border-t border-border bg-background"><div className="container py-6"><p className="text-center text-sm text-muted-foreground">© 2026 Saurabh Kumar Pandey. All rights reserved.</p></div></footer>
    </div>
  );
}