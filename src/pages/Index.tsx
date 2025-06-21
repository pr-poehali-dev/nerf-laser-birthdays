import HeroSection from "@/components/HeroSection";
import PackagesSection from "@/components/PackagesSection";
import GallerySection from "@/components/GallerySection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-game-dark">
      <HeroSection />
      <PackagesSection />
      <GallerySection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
