import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
// import VideoSection from "@/components/VideoSection";
import Features from "./components/Features";
import Demo from "./components/Demo";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

// Asosiy sahifa - barcha bo'limlar shu yerda yig'iladi
export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Clients />
      {/* <VideoSection /> */}
      <Features />
      <Demo />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}

