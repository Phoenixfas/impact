import AboutSection from "./AboutSection";
import Blog from "./Blog";
import HeroBg from "./HeroBg";
import HeroContent from "./HeroContent";
import ServicesSection from "./ServicesSection";
import WhyUs from "./WhyUs";


export default function Home() {
  return (
    <div className="w-full min-h-[150vh] relative">
      <HeroBg />
      <HeroContent />
      <AboutSection />
      <ServicesSection />
      <WhyUs />
      <Blog />
    </div>
  );
}
