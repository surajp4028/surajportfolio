"use client";
import dynamic from "next/dynamic";
import type { GlobeConfig } from "@/components/ui/globe";

const World = dynamic(
  () => import("@/components/ui/globe").then((m) => m.World),
  { ssr: false },
);

const globeConfig: GlobeConfig = {
  pointSize: 4,
  globeColor: "#062056",
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  emissive: "#062056",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)",
  ambientLight: "#38bdf8",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 28.6139, lng: 77.209 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

const colors = ["#06b6d4", "#3b82f6", "#6366f1", "#d946ef"];
const delhi = { lat: 28.6139, lng: 77.209 };
const cities = [
  { lat: 51.5072, lng: -0.1276 }, // London
  { lat: 40.7128, lng: -74.006 }, // New York
  { lat: 25.2048, lng: 55.2708 }, // Dubai
  { lat: 1.3521, lng: 103.8198 }, // Singapore
  { lat: -33.8688, lng: 151.2093 }, // Sydney
  { lat: 43.6532, lng: -79.3832 }, // Toronto
  { lat: 35.6762, lng: 139.6503 }, // Tokyo
  { lat: 52.52, lng: 13.405 }, // Berlin
  { lat: 37.7749, lng: -122.4194 }, // San Francisco
  { lat: 19.076, lng: 72.8777 }, // Mumbai
  { lat: 12.9716, lng: 77.5946 }, // Bengaluru
  { lat: -1.2921, lng: 36.8219 }, // Nairobi
];

const arcs = cities.map((c, i) => ({
  order: (i % 6) + 1,
  startLat: delhi.lat,
  startLng: delhi.lng,
  endLat: c.lat,
  endLng: c.lng,
  arcAlt: 0.15 + (i % 4) * 0.1,
  color: colors[i % colors.length],
}));

export function GlobeView() {
  return <World data={arcs} globeConfig={globeConfig} />;
}
