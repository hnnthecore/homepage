import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ContactButtons from "../ContactButtons/ContactButtons";

function ContactSection() {
  return (
    <Box
      sx={{
        bgcolor: "#f8f8f8",
        color: "#333",
        py: 3,
        px: 2,
        textAlign: "center",
        borderTop: "1px solid #e0e0e0",
      }}
    >
    <ContactButtons /> 
    </Box>
  );
}

export default ContactSection;
