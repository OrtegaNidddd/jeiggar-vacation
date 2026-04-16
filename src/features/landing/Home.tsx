import Hero from "./components/Hero";
import TravelCategories from "./components/TravelCategories";
import FeaturedTrips from "./components/FeaturedTrips";
import Carousel from "./components/Carousel";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <div data-aos="fade-up" className="p-4">
      <Hero />
      <FeaturedTrips />
      <Carousel />
      <TravelCategories />
      <CTA />
    </div>
  );
}   