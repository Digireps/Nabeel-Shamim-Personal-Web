import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const IntroductionSection = React.lazy(() => import("@/components/IntroductionSection"));
const InvestmentsSection = React.lazy(() => import("@/components/InvestmentsSection"));
const StatsSection = React.lazy(() => import("@/components/StatsSection"));
const PressSection = React.lazy(() => import("@/components/PressSection"));
const BoardSeatsSection = React.lazy(() => import("@/components/BoardSeatsSection"));
const TestimonialsSection = React.lazy(() => import("@/components/TestimonialsSection"));
const GallerySection = React.lazy(() => import("@/components/GallerySection"));
const ContactSection = React.lazy(() => import("@/components/ContactSection"));
const Footer = React.lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <IntroductionSection />
          <InvestmentsSection />
          <StatsSection />
          <PressSection />
          <BoardSeatsSection />
          <TestimonialsSection />
          <GallerySection />
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
