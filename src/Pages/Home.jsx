import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Service";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
// --- Components ---

export default function App() {
  return (
    <div className="font-sans antialiased text-slate-950 scroll-smooth bg-white selection:bg-blue-600 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <CTA />
      <Footer />
    </div>
  );
}
