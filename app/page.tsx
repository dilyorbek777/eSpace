import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import InfoTracker from "@/components/info-tracker";
import Missions from "@/components/missions";
import Vehicles from "@/components/vehicles";
import Tour from "@/components/tour";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <InfoTracker />
      <Missions />
      <Vehicles />
      <Tour />
      <Contact />
      <Footer />
    </div>
  );
}
