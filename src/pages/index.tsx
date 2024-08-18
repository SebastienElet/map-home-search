import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/map/views/ViewMap"), {
  ssr: false,
});

// TODO: import react leaflet CSS

const heatmapData = [
  { latitude: 1.12345, longitude: -3.4567, value: 10 },
  { latitude: 1.2345, longitude: -5.678, value: 20 },
  // ...more data points
];

export default function Home() {
  return (
    <main className="">
      <Map data={heatmapData} />
    </main>
  );
}
