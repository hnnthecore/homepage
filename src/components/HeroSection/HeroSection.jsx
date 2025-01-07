import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./HeroSection.css";

function HeroSection() {
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
          background: "linear-gradient(135deg, #ad0a0a,rgb(108, 47, 221))",
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
