import Hero from "./components/Hero";
import TravelCategories from "./components/TravelCategories";
import FeaturedTrips from "./components/FeaturedTrips";

export default function Home() {
  return (
    <div className="p-4">
      <Hero />
      <FeaturedTrips />
      <TravelCategories />
    </div>
  );
}   