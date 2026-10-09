import React from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import MobileDrawer from "@/components/MobileDrawer";
import Hero from "@/components/Hero";
import BrandMarquee from "@/components/BrandMarquee";
import Features from "@/components/Features";
import Courses from "@/components/Courses";
import MockTestCalculator from "@/components/MockTestCalculator";
import AbroadStudy from "@/components/AbroadStudy";
import SuccessStories from "@/components/SuccessStories";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import ConsultancySection from "@/components/ConsultancySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ConsultancyModal from "@/components/ConsultancyModal";
import ToastContainer from "@/components/ToastContainer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <MobileDrawer />

      <main>
        <Hero />
        <BrandMarquee />
        <Features />
        <Courses />
        <MockTestCalculator />
        <AbroadStudy />
        <SuccessStories />
        <About />
        <Testimonials />
        <Faq />
        <ConsultancySection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingActions />
      <ConsultancyModal />
      <ToastContainer />
    </>
  );
}
