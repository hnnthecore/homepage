import { useState } from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import BadgeSection from "./components/BadgeSection/BadgeSection";
import Footer from "./components/Footer/Footer";
import ContactSection from "./components/ContactSection/ContactSection";

function App() {
  return (
    <>
      <HeroSection />

      <BadgeSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
