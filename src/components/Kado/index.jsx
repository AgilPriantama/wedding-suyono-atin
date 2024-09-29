import { parentVariants, transition } from "@/animation/transition";
import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import TextMask from "../TextMask";

/**
 * Text variant
 */
const textVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition,
  },
  exit: {
    opacity: 0,
  },
};


/**
 *
 * @returns React.ReactElement
 */
const Kado = () => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("6699 0102 9272 536");
    alert("Text copied to clipboard!");
  };
  const salam = "Kado Pernikahan";
  const words =
    "Tanpa mengurangi rasa hormat, bagi Anda yang ingin memberikan tanda kasih untuk kami, dapat melalui:";

  return (
    <Box
      sx={{
        py: 15,
        backgroundColor: "text.secondary",
      }}
    >
      <Container>
        <Typography
          variant="h3"
          component="div"
          sx={{
            textAlign: "center",
            fontSize: {
              md: "3em",
              xs: "2em",
            },
          }}
        >
          {salam.split(" ").map((text, key) => (
            <TextMask key={key} variants={textVariants}>
              {text}
            </TextMask>
          ))}
        </Typography>

        <Typography
          variant="h6"
          component="div"
          sx={{ textAlign: "center", mt: 5, mb: 2 }}
        >
          {words.split(" ").map((text, key) => (
            <TextMask key={key} variants={textVariants}>
              {text}
            </TextMask>
          ))}
        </Typography>
        <Box
          title="Kado"
          sx={{
            width: "100%",
            height: 350,
            border: 1, // Visible border
            borderColor: "divider",
            borderRadius: 1,
            backgroundColor: "white",
            overflow: "hidden", // Handle content overflow
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img
            src="/assets/images/kado/BRI.webp" // Replace with your image URL
            alt="Kado"
            style={{
              height: "150px",
              objectFit: "cover",
              marginBottom: "16px",
            }}
          />
          <Typography variant="h4" component="div" color="text.secondary" sx={{ marginBottom: 2 }}>
            Suyono
          </Typography>
          <Typography variant="h4" component="div" color="text.secondary" sx={{ marginBottom: 2 }}>
            6699 0102 9272 536
          </Typography>
          <Button
          variant="contained"
          onClick={copyToClipboard}
          sx={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#3f51b5', // Custom color (e.g., blue)
            color: '#fff',
            borderRadius: '8px',
            textTransform: 'none', // Prevent text from being uppercase
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s, box-shadow 0.3s',
            '&:hover': {
              backgroundColor: '#303f9f', // Slightly darker shade for hover
              boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.2)', // Stronger shadow on hover
            },
          }}
        >
          Salin
        </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Kado;
