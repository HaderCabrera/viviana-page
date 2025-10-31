import Services from "@/components/Cards/ServiceComponente";
import { AccordionDemo } from "@/components/QuestionsComponent";
import InfiniteSliderBasic from "@/components/SectionInfinity/MotionInfinity";
import HeroSection from "@/components/Sections/HeroSection";
import ServicesGrid from "@/components/Sections/ServicesGrid";
import MidCTA from "@/components/Sections/MidCTA";
import WhyUsGrid from "@/components/Sections/WhyUsGrid";
import FinalStats from "@/components/Sections/FinalStats";
import ContactSection from "@/components/Sections/ContactSection";
import Footer from "@/components/Sections/Footer";

export default function Home() {
  return (
 <main className="overflow-x-hidden">
      <HeroSection />
      <ServicesGrid />
      <MidCTA />
      <WhyUsGrid />
      <FinalStats />
      <ContactSection />
      <Footer />
    </main>
  );
}
