import React from "react";
import { Box, IconButton, Typography, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";


const ContactButtons = ({
  color = "black",
  showLabel = false,
  flexDirection = "row",
  iconShadow = false,
}) => {
  // Declare iconStyle properly
  const iconStyle = {
    fontSize: showLabel
      ? { xs: "20px", md: "25px" }
      : { xs: "25px", md: "35px" },
    filter: iconShadow ? "drop-shadow(4px 4px 8px #000)" : "none",
  };

  const contacts = [
    {
      label: "LinkedIn",
      icon: <LinkedInIcon sx={iconStyle} />,
      url: "https://linkedin.com/in/hnnthecore",
    },
    {
      label: "GitHub",
      icon: <GitHubIcon sx={iconStyle} />,
      url: "https://github.com/hnnthecore",
    },
    {
      label: "Email",
      icon: <EmailIcon sx={iconStyle} />,
      url: `mailto:rapa.n@live.it`,
    },
    {
      label: "WhatsApp",
      icon: <WhatsAppIcon sx={iconStyle} />,
      url: "https://wa.me/41779932804",
    },
    /* {
      label: contact.discord.label,
      icon: <FaDiscord />,
      url: contact.discord.url,
    },
    {
      label: contact.location.label,
      icon: <LocationOn />,
      url: contact.location.url,
    }, */
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: flexDirection,
        justifyContent: "center",
        gap: flexDirection === "row" ? 3 : 0,
      }}
    >
      {contacts.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <IconButton
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color,
            }}
          >
            {item.icon}
          </IconButton>
          {showLabel && (
            <Link
              href={item.url}
              target="_blank"
              sx={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Typography
                variant="body1"
                sx={{ color: "white", fontSize: { xs: "14px", md: "16px" } }}
              >
                {item.label}
              </Typography>
            </Link>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default ContactButtons;
