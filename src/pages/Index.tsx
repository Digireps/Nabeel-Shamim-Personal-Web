import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const IntroductionSection = React.lazy(() => import("@/components/IntroductionSection"));
const InvestmentsSection = React.lazy(() => import("@/components/InvestmentsSection"));
const StatsSection = React.lazy(() => import("@/components/StatsSection"));
const PressSection = React.lazy(() => import("@/components/PressSection"));
const BoardSeatsSection = React.lazy(() => import("@/components/BoardSeatsSection"));
const PublishedBooksSection = React.lazy(() => import("@/components/PublishedBooksSection"));
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
        <Suspense fallback={<div className="min-h-[500px] bg-background" />}>
          <IntroductionSection />
        </Suspense>
        <Suspense fallback={<div className="min-h-[600px] bg-[#FBFBFD]" />}>
          <InvestmentsSection />
        </Suspense>
        <Suspense fallback={<div className="min-h-[300px] bg-white" />}>
          <StatsSection />
        </Suspense>
        <Suspense fallback={<div className="min-h-[800px] bg-[#050505]" />}>
          <PressSection />
        </Suspense>
        <Suspense fallback={<div className="min-h-[500px] bg-white" />}>
          <PublishedBooksSection />
        </Suspense>
        <Suspense fallback={<div className="min-h-[700px] bg-white" />}>
          <BoardSeatsSection />
        </Suspense>
        <Suspense fallback={<div className="min-h-[600px] bg-[#FBFBFD]" />}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={<div className="min-h-[600px] bg-white" />}>
          <GallerySection />
        </Suspense>
        <Suspense fallback={<div className="min-h-[700px] bg-zinc-950" />}>
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
