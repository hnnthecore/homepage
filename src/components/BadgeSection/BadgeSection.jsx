import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "@mui/material";
import myimage from "../../assets/react.svg";

function BadgeSection() {
  const certifications = [
    {
      year: 2024,
      name: "CompTIA A+",
      provider: "CompTIA",
      imageUrl:
        "https://images.credly.com/size/340x340/images/f6d62c5d-1e1d-4de6-92ee-8dc8c80b1c7b/blob",
      id: "cert-2024-comptia-a-plus",
      url: "https://www.credly.com/badges/c57982df-e42e-46f1-b37d-e2e8d17c88fa/public_url",
    },
    {
      year: 2024,
      name: "CompTIA ITF+",
      provider: "CompTIA",
      imageUrl:
        "https://images.credly.com/size/340x340/images/a49be93a-34ff-4224-996c-b2c976a5dc9d/blob",
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
        "https://aspen.eccouncil.org/Content/Badges/TrainedBadges/CEH_9582F3793CA1.png",
      id: "cert-2023-ceh",
      url: "",
    },
    {
      year: 2023,
      name: "CompTIA Security+",
      provider: "CompTIA",
      imageUrl: "./security_plus.png",
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
          marginTop: "5px",
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
