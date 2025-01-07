import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./HeroSection.css";

function HeroSection() {
  const IMG_URL =
    "https://static.vecteezy.com/system/resources/previews/011/550/522/non_2x/glowing-smooth-gradient-website-template-banner-header-or-sidebar-graphic-blurred-blue-abstract-background-with-neon-pleasant-colors-free-photo.jpg";
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundImage: `url(${IMG_URL})`,
          color: "white",
        }}
      >
        <Typography variant="h1" gutterBottom>
          Hey, I'm Gurdeep
        </Typography>
        <Typography variant="h6" gutterBottom>
          And I like computers!
        </Typography>
      </Box>
    </>
  );
}

export default HeroSection;
