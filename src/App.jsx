import { useState } from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import BadgeSection from "./components/BadgeSection/BadgeSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <HeroSection />

      <BadgeSection />
      <Footer />
    </>
  );
}

export default App;
