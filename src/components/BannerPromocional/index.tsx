import { ArrowBack, ArrowForward, ShoppingCart } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Chip,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";

interface Promocao {
  id: string;
  titulo: string;
  descricao: string;
  desconto: string;
  validade: string;
  imagem: string;
}

interface PromocoesProps {
  promocoes: Promocao[];
}

export const BannerPromocional = ({ promocoes }: PromocoesProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [bannerAtual, setBannerAtual] = useState(0);

  const proximoBanner = () => {
    setBannerAtual((prev) => (prev + 1) % promocoes.length);
  };

  const bannerAnterior = () => {
    setBannerAtual((prev) => (prev - 1 + promocoes.length) % promocoes.length);
  };

  return (
    <Box position="relative" mb={4}>
      <Card sx={{ borderRadius: 0 }}>
        <CardMedia
          component="img"
          height={isMobile ? "250" : "400"}
          image={promocoes[bannerAtual].imagem}
          alt={promocoes[bannerAtual].titulo}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            background: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))",
          }}
        >
          <Box textAlign="center" color="white">
            <Chip
              label={promocoes[bannerAtual].desconto}
              color="error"
              size="small"
              sx={{ mb: 2, fontSize: "1.2rem", fontWeight: "bold" }}
            />
            <Typography
              variant={isMobile ? "h4" : "h2"}
              gutterBottom
              fontWeight="bold"
            >
              {promocoes[bannerAtual].titulo}
            </Typography>
            <Typography
              variant={isMobile ? "body1" : "h6"}
              gutterBottom
              sx={{ mb: 3 }}
            >
              {promocoes[bannerAtual].descricao}
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, opacity: 0.9 }}>
              {promocoes[bannerAtual].validade}
            </Typography>
            <Button
              variant="contained"
              size="large"
              startIcon={<ShoppingCart />}
              sx={{
                bgcolor: "primary.main",
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                fontWeight: "bold",
              }}
            >
              Aproveitar Oferta
            </Button>
          </Box>
        </Box>

        {/* Controles do Carrossel */}
        <IconButton
          onClick={bannerAnterior}
          sx={{
            position: "absolute",
            left: 16,
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: "rgba(255,255,255,0.8)",
            "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
          }}
        >
          <ArrowBack />
        </IconButton>
        <IconButton
          onClick={proximoBanner}
          sx={{
            position: "absolute",
            right: 16,
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: "rgba(255,255,255,0.8)",
            "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
          }}
        >
          <ArrowForward />
        </IconButton>

        {/* Indicadores */}
        <Box
          position="absolute"
          bottom={16}
          left="50%"
          sx={{ transform: "translateX(-50%)" }}
          display="flex"
          gap={1}
        >
          {promocoes.map((_, index) => (
            <Box
              key={index}
              width={12}
              height={12}
              borderRadius="50%"
              bgcolor={
                index === bannerAtual ? "white" : "rgba(255,255,255,0.5)"
              }
              sx={{ cursor: "pointer" }}
              onClick={() => setBannerAtual(index)}
            />
          ))}
        </Box>
      </Card>
    </Box>
  );
};
