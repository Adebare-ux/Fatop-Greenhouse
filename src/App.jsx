import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import CropExpertise from "./components/CropExpertise";
import PricingTable from "./components/PricingTable";
import Scheduler from "./components/Scheduler";
import LeadMagnet from "./components/LeadMagnet";
import Footer from "./components/Footer";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <CropExpertise />
        <PricingTable />
        <Scheduler />
        <section id="lead">
          <LeadMagnet />
        </section>
      </main>
      <Footer />
    </>
  );
}
