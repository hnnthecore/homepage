import { useState } from "react";
import BadgeSection from "./components/BadgeSection/BadgeSection";
import Footer from "./components/Footer/Footer";
import ContactSection from "./components/ContactSection/ContactSection";
import HeroSection from "./components/HeroSection/HeroSection";
import { Box } from "@mui/material";
function App() {
  return (
    <>
      {" "}
      <Box
        sx={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
      >
        <HeroSection />
      </Box>
      <BadgeSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
