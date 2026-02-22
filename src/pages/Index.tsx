import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoSection from "@/components/LogoSection";
import Gallery from "@/components/Gallery";
import Categories from "@/components/Categories";
import HeadlightBanner from "@/components/HeadlightBanner";
import SteeringWheelsShop from "@/components/SteeringWheelsShop";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <LogoSection />
      <Categories />
      <HeadlightBanner />
      <Gallery />
      <SteeringWheelsShop />
      <Footer />
    </div>
  );
};

export default Index;
