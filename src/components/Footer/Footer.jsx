import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Footer() {
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
      <Typography variant="body2" component="p">
        © {new Date().getFullYear()} Itswisskumar.ch All rights reserved.
      </Typography>
      <Typography variant="body2" component="p" sx={{ mt: 1 }}>
        Designed with love using Material-UI.
      </Typography>
    </Box>
  );
}

export default Footer;
