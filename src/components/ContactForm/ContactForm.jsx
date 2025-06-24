import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lxdhrcv", // Replace with your EmailJS service ID
        "template_rwi8uas", // Replace with your EmailJS template ID
        form.current,
        "xDSNgxyExSE8_JJM9" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully! ✅");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message ❌: " + error.text);
        }
      );
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        component="form"
        ref={form}
        onSubmit={sendEmail}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          backgroundColor: "#1a1a1a",
          padding: 3,
          borderRadius: 2,
          width: { xs: "90%", md: "30%" },
          color: "white",
          my: 4,
          mx: 1,
        }}
      >
        <Typography variant="h4" sx={{ color: "white", textAlign: "center" }}>
          Contact Me
        </Typography>

        <TextField
          name="user_name"
          label="Name"
          variant="outlined"
          required
          fullWidth
          InputLabelProps={{ style: { color: "white" } }}
          InputProps={{ style: { color: "white" } }}
        />
        <TextField
          name="user_email"
          type="email"
          label="Email"
          variant="outlined"
          required
          fullWidth
          InputLabelProps={{ style: { color: "white" } }}
          InputProps={{ style: { color: "white" } }}
        />
        <TextField
          name="message"
          label="Message"
          multiline
          rows={6}
          variant="outlined"
          required
          fullWidth
          InputLabelProps={{ style: { color: "white" } }}
          InputProps={{ style: { color: "white" } }}
        />
        <Button type="submit" variant="contained" sx={{ bgcolor: "#00d8e6" }}>
          Send
        </Button>
      </Box>
    </Box>
  );
}

export default ContactForm;
