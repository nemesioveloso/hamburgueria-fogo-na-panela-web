"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Chip,
  IconButton,
  Fade,
  Slide,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  PlayArrow,
  ShoppingCart,
  LocalDining,
  Star,
  LocalOffer,
  Phone,
  KeyboardArrowDown,
} from "@mui/icons-material";

const frasesDinamicas = [
  "Os Melhores Hambúrgueres da Cidade",
  "Sabor Artesanal em Cada Mordida",
  "Ingredientes Frescos, Sabor Incomparável",
  "Tradição e Inovação no Seu Prato",
];

export default function BannerFull() {
  const [fraseAtual, setFraseAtual] = useState(0);
  const [mostrarStats, setMostrarStats] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const interval = setInterval(() => {
      setFraseAtual((prev) => (prev + 1) % frasesDinamicas.length);
    }, 3000);

    const timer = setTimeout(() => {
      setMostrarStats(true);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        height: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        marginBottom: "1rem",
        background: `
          linear-gradient(135deg, 
            rgba(255, 107, 53, 0.9) 0%, 
            rgba(247, 147, 30, 0.9) 50%, 
            rgba(255, 87, 34, 0.9) 100%
          ),
          url('/placeholder.svg?height=1080&width=1920&text=Hamburgueria+Background')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Elementos Decorativos Flutuantes */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "10%",
          animation: "float 6s ease-in-out infinite",
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-20px)" },
          },
        }}
      >
        <LocalDining
          sx={{
            fontSize: "4rem",
            color: "rgba(255,255,255,0.1)",
            transform: "rotate(-15deg)",
          }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "20%",
          right: "15%",
          animation: "float 8s ease-in-out infinite reverse",
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-30px)" },
          },
        }}
      >
        <Star
          sx={{
            fontSize: "3rem",
            color: "rgba(255,255,255,0.1)",
            transform: "rotate(25deg)",
          }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: "15%",
          left: "20%",
          animation: "float 7s ease-in-out infinite",
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-25px)" },
          },
        }}
      >
        <LocalOffer
          sx={{
            fontSize: "3.5rem",
            color: "rgba(255,255,255,0.1)",
            transform: "rotate(-30deg)",
          }}
        />
      </Box>

      {/* Conteúdo Principal */}
      <Container maxWidth="lg" sx={{ textAlign: "center", zIndex: 2 }}>
        <Fade in timeout={1000}>
          <Box>
            {/* Logo/Nome da Marca */}
            <Box mb={2}>
              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255,255,255,0.9)",
                  fontWeight: "300",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                Bem-vindo à
              </Typography>
            </Box>

            <Typography
              variant={isMobile ? "h2" : "h1"}
              component="h1"
              sx={{
                fontWeight: "900",
                color: "white",
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                mb: 2,
                fontSize: {
                  xs: "2.2rem",
                  sm: "3rem",
                  md: "4rem",
                  lg: "5rem",
                },
                lineHeight: 1.1,
              }}
            >
              FOGO
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(45deg, #FF0000, #FF4500, #FF6347)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                NA
              </Box>
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(45deg, #FFD700, #FFA500)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                PANELA
              </Box>
            </Typography>

            {/* Frase Dinâmica */}
            <Box
              height={isMobile ? "60px" : "80px"}
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb={4}
            >
              <Fade in key={fraseAtual} timeout={800}>
                <Typography
                  variant={isMobile ? "h5" : "h4"}
                  sx={{
                    color: "white",
                    fontWeight: "400",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                    maxWidth: "800px",
                  }}
                >
                  {frasesDinamicas[fraseAtual]}
                </Typography>
              </Fade>
            </Box>

            {/* Estatísticas */}
            <Slide direction="up" in={mostrarStats} timeout={1000}>
              <Grid
                container
                spacing={4}
                justifyContent="center"
                sx={{ mb: 6 }}
              >
                <Grid size={{ xs: 6, sm: 3 }}>
                  <Box textAlign="center">
                    <Typography variant="h3" fontWeight="bold" color="white">
                      500+
                    </Typography>
                    <Typography variant="body1" color="rgba(255,255,255,0.8)">
                      Clientes Felizes
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 6, sm: 3 }}>
                  <Box textAlign="center">
                    <Typography variant="h3" fontWeight="bold" color="white">
                      4.9
                    </Typography>
                    <Typography variant="body1" color="rgba(255,255,255,0.8)">
                      Avaliação
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 6, sm: 3 }}>
                  <Box textAlign="center">
                    <Typography variant="h3" fontWeight="bold" color="white">
                      15min
                    </Typography>
                    <Typography variant="body1" color="rgba(255,255,255,0.8)">
                      Entrega Média
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 6, sm: 3 }}>
                  <Box textAlign="center">
                    <Typography variant="h3" fontWeight="bold" color="white">
                      6/7
                    </Typography>
                    <Typography variant="body1" color="rgba(255,255,255,0.8)">
                      Funcionamento
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Slide>

            {/* Ofertas Especiais */}
            <Box mb={6} px={2}>
              <Chip
                label={
                  <Box
                    component="span"
                    sx={{
                      display: "block",
                      whiteSpace: "normal",
                      textAlign: "center",
                      fontSize: {
                        xs: "0.9rem",
                        sm: "1rem",
                        md: "1.1rem",
                      },
                    }}
                  >
                    🔥 OFERTA ESPECIAL: 30% OFF no primeiro pedido!
                  </Box>
                }
                sx={{
                  bgcolor: "rgba(255,255,255,0.2)",
                  color: "white",
                  py: 3,
                  px: 2,
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  animation: "pulse 2s infinite",
                  maxWidth: "100%", // impede overflow
                  "@keyframes pulse": {
                    "0%": { transform: "scale(1)" },
                    "50%": { transform: "scale(1.05)" },
                    "100%": { transform: "scale(1)" },
                  },
                }}
              />
            </Box>

            {/* Botões de Ação */}
            <Box display="flex" gap={3} justifyContent="center" flexWrap="wrap">
              <Button
                variant="contained"
                size="large"
                startIcon={<ShoppingCart />}
                sx={{
                  bgcolor: "white",
                  color: "primary.main",
                  px: 4,
                  py: 2,
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  borderRadius: "50px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "grey.100",
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
                  },
                }}
              >
                Fazer Pedido
              </Button>

              <Button
                variant="outlined"
                size="large"
                startIcon={<PlayArrow />}
                sx={{
                  color: "white",
                  borderColor: "white",
                  px: 4,
                  py: 2,
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  borderRadius: "50px",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.1)",
                    borderColor: "white",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Ver Cardápio
              </Button>

              <Button
                variant="outlined"
                size="large"
                startIcon={<Phone />}
                sx={{
                  color: "white",
                  borderColor: "white",
                  px: 4,
                  py: 2,
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  borderRadius: "50px",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.1)",
                    borderColor: "white",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                (11) 99999-9999
              </Button>
            </Box>
          </Box>
        </Fade>
      </Container>

      {/* Indicador de Scroll */}
      <Box
        position="absolute"
        bottom={30}
        left="50%"
        sx={{
          transform: "translateX(-50%)",
          animation: "bounce 2s infinite",
          "@keyframes bounce": {
            "0%, 20%, 50%, 80%, 100%": {
              transform: "translateX(-50%) translateY(0)",
            },
            "40%": { transform: "translateX(-50%) translateY(-10px)" },
            "60%": { transform: "translateX(-50%) translateY(-5px)" },
          },
        }}
      >
        <IconButton
          onClick={scrollToContent}
          sx={{
            color: "white",
            bgcolor: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            "&:hover": {
              bgcolor: "rgba(255,255,255,0.2)",
            },
          }}
        >
          <KeyboardArrowDown />
        </IconButton>
      </Box>

      {/* Overlay para melhor legibilidade */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        sx={{
          background: "rgba(0,0,0,0.2)",
          zIndex: 1,
        }}
      />
    </Box>
  );
}
