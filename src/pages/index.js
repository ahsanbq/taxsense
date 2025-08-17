import Layout from "../components/layout/Layout";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import WhoWeAreSection from "../components/home/WhoWeAreSection";
import PricingPlansSection from "../components/home/PricingPlansSection";
import ClientsSection from "../components/home/ClientsSection";
import FAQSection from "../components/home/FAQSection";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <WhoWeAreSection />
      <PricingPlansSection />
      <ClientsSection />
      <FAQSection />
    </Layout>
  );
}
