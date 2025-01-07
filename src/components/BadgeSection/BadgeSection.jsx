import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "@mui/material";

function BadgeSection() {
  const certifications = [
    {
      year: 2024,
      name: "CompTIA A+",
      provider: "CompTIA",
      imageUrl:
        "https://images.credly.com/size/340x340/images/63482325-a0d6-4f64-ae75-f5f33922c7d0/CompTIA_A_2Bce.png",
      id: "cert-2024-comptia-a-plus",
      url: "https://www.credly.com/badges/c57982df-e42e-46f1-b37d-e2e8d17c88fa/public_url",
    },
    {
      year: 2024,
      name: "CompTIA ITF+",
      provider: "CompTIA",
      imageUrl:
        "https://images.credly.com/size/340x340/images/5e719e46-faf2-40c9-ad49-3b11e6e6cb34/image.png",
      id: "cert-2024-comptia-itf-plus",
      url: "",
    },
    {
      year: 2023,
      name: "Advance Networking",
      provider: "Craw Security",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_JBDHYnpo1OwvO0XZbm-50ivg4r43K1Cm7w&s",
      id: "cert-2023-advance-networking",
      url: "",
    },
    {
      year: 2023,
      name: "Linux Essential",
      provider: "Craw Security",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_JBDHYnpo1OwvO0XZbm-50ivg4r43K1Cm7w&s",
      id: "cert-2023-linux-essential",
      url: "",
    },
    {
      year: 2023,
      name: "Certified Ethical Hacker",
      provider: "EC-Council",
      imageUrl:
        "https://images.credly.com/size/340x340/images/8170ce74-d9e7-410a-9647-4aec58d2ba9d/59d3f2fde5f547a5a44f5d7deddeb10d-01.png",
      id: "cert-2023-ceh",
      url: "",
    },
    {
      year: 2023,
      name: "CompTIA Security+",
      provider: "CompTIA",
      imageUrl:
        "https://images.credly.com/size/340x340/images/74790a75-8451-400a-8536-92d792c5184a/CompTIA_Security_2Bce.png",
      id: "cert-2023-comptia-security-plus",
      url: "",
    },
  ];

  return (
    <>
      <Box
        sx={{
          height: "fit-content",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem 2rem 1.5rem 2rem",
          gap: 3,
          marginTop: "5rem",
          marginBottom: "5rem",
        }}
      >
        {certifications.map((cert, index) => (
          <Link
            index={index}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textDecoration: "none" }}
          >
            <Card
              sx={{
                width: { xs: "60vw", md: 215 },
                height: 280, // Set consistent height
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: 1,
                boxShadow:
                  "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={cert.imageUrl}
                alt="badge"
                sx={{
                  objectFit: "contain",
                  backgroundColor: "transparent",
                  padding: "1rem",
                }}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {cert.name}
                </Typography>
                <Typography
                  component="div"
                  sx={{ color: "text.secondary", fontSize: 14 }}
                >
                  Issued by {cert.provider}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        ))}
      </Box>
    </>
  );
}

export default BadgeSection;
