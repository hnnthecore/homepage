import React, { useEffect } from "react";
import "./HeroSection.css";
import { Box, Typography, Button } from "@mui/material";

// Assumes particles.js and stats.js are loaded globally (via script tags in index.html)

export default function HeroSection2() {
  function downloadCV() {
    const link = document.createElement("a");
    link.href =
      "https://raw.githubusercontent.com/hnnthecore/cv-latex/main/Lebenslauf_Gurdeep_Kumar.pdf";
    link.download = "Lebenslauf_Gurdeep_Kumar.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  useEffect(() => {
    // Init particles.js
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 150,
            density: {
              enable: true,
              value_area: 600,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
          },
          size: {
            value: 3,
            random: true,
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1,
              },
            },
            push: {
              particles_nb: 4,
            },
          },
        },
        retina_detect: true,
      });
    }

    // OPTIONAL: cleanup function (clears particles if component unmounts)
    return () => {
      if (window.pJSDom && window.pJSDom.length) {
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
        window.pJSDom = [];
      }
    };
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Partikel-Hintergrund */}
      <Box
        id="particles-js"
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />

      {/* Zentrierter Text */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "#fff", // weiße Schrift auf dunklem Hintergrund
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 600,
            marginBottom: 1,
            marginTop: "-30px",
            fontSize: { xs: "32px", md: "55px" },
          }}
        >
          Hi, I'm Gurdeep👋
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 400,
            marginBottom: 3,
            fontSize: { xs: "18px", md: "25px" },
          }}
        >
          I really like networks.
        </Typography>
        <Button
          size="large"
          onClick={() => downloadCV()}
          variant="contained"
          sx={{
            backgroundColor: "#00d8e6",
            color: "white",
            mt: 2,
            fontWeight: 700,
          }}
        >
          Download CV
        </Button>
      </Box>
    </Box>
  );
}
