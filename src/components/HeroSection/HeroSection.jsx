import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./HeroSection.css";
import Heroimg from "../../assets/developer.svg"

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
          flexDirection: "row",
          background: "linear-gradient(135deg, #ad0a0a,rgb(108, 47, 221))",
          color: "white",
        }}
      >
      <Box sx={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          }}>
        <Typography variant="h1" gutterBottom>
          Hey, I'm Gurdeep
        </Typography>
        <Typography variant="h6" gutterBottom>
          And I like computers!
        </Typography>
      </Box>
      <Box sx={{
          width: "50%",display: "flex",
          justifyContent: "center",
          alignItems: "center",}}>
        <Box
      component="img"
      sx={{
        height: 400,               // Height of the image
        width: "auto",                // Width of the image
        borderRadius: "8px",       // Optional rounded corners
        objectFit: "cover",        // Ensures image fills the box nicely
      }}
      src={Heroimg}
      alt="Example Image"
    />
      </Box>
      </Box>
    </>
  );
}

export default HeroSection;
