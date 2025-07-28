"use client"

import { useState } from "react"
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Chip,
  Avatar,
  IconButton,
  Paper,
  Divider,
  Link,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import {
  ArrowForward,
  ArrowBack,
  LocalOffer,
  Star,
  Phone,
  LocationOn,
  Email,
  Facebook,
  Instagram,
  WhatsApp,
  Loyalty,
  PersonAdd,
  ShoppingCart,
  Timer,
  LocalDining,
  Favorite,
} from "@mui/icons-material"

interface Promocao {
  id: string
  titulo: string
  descricao: string
  desconto: string
  validade: string
  imagem: string
}

interface ItemCardapio {
  id: string
  nome: string
  descricao: string
  preco: number
  precoOriginal?: number
  imagem: string
  categoria: string
  avaliacao: number
  tempoPrep: string
}

const promocoes: Promocao[] = [
  {
    id: "1",
    titulo: "Combo Família",
    descricao: "4 Burgers + 4 Batatas + 4 Refrigerantes",
    desconto: "30% OFF",
    validade: "Válido até 31/07",
    imagem: "/placeholder.svg?height=300&width=600",
  },
  {
    id: "2",
    titulo: "Happy Hour",
    descricao: "Todos os burgers com desconto especial",
    desconto: "25% OFF",
    validade: "Seg a Sex, 15h às 18h",
    imagem: "/placeholder.svg?height=300&width=600",
  },
  {
    id: "3",
    titulo: "Primeira Compra",
    descricao: "Desconto especial para novos clientes",
    desconto: "20% OFF",
    validade: "Válido por 30 dias",
    imagem: "/placeholder.svg?height=300&width=600",
  },
]

const destaques: ItemCardapio[] = [
  {
    id: "1",
    nome: "Big Burger Especial",
    descricao: "Pão brioche, 2 carnes 180g, queijo cheddar, bacon, alface, tomate",
    preco: 28.9,
    precoOriginal: 32.9,
    imagem: "/placeholder.svg?height=200&width=300",
    categoria: "Burgers",
    avaliacao: 4.8,
    tempoPrep: "15-20 min",
  },
  {
    id: "2",
    nome: "Cheese Bacon Deluxe",
    descricao: "Carne 150g, queijo derretido, bacon crocante, molho especial",
    preco: 24.9,
    imagem: "/placeholder.svg?height=200&width=300",
    categoria: "Burgers",
    avaliacao: 4.7,
    tempoPrep: "12-15 min",
  },
  {
    id: "3",
    nome: "Veggie Supreme",
    descricao: "Hambúrguer vegetal, queijo vegano, rúcula, tomate seco",
    preco: 22.9,
    imagem: "/placeholder.svg?height=200&width=300",
    categoria: "Vegetariano",
    avaliacao: 4.6,
    tempoPrep: "10-12 min",
  },
  {
    id: "4",
    nome: "Batata Rústica",
    descricao: "Batatas especiais com casca, tempero da casa e molhos",
    preco: 16.9,
    imagem: "/placeholder.svg?height=200&width=300",
    categoria: "Acompanhamentos",
    avaliacao: 4.9,
    tempoPrep: "8-10 min",
  },
]

export function Home() {
  const [bannerAtual, setBannerAtual] = useState(0)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const proximoBanner = () => {
    setBannerAtual((prev) => (prev + 1) % promocoes.length)
  }

  const bannerAnterior = () => {
    setBannerAtual((prev) => (prev - 1 + promocoes.length) % promocoes.length)
  }

  return (
    <Box>
      <Container maxWidth="lg">
        {/* Banner Promocional - Carrossel */}
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
                <Typography variant={isMobile ? "h4" : "h2"} gutterBottom fontWeight="bold">
                  {promocoes[bannerAtual].titulo}
                </Typography>
                <Typography variant={isMobile ? "body1" : "h6"} gutterBottom sx={{ mb: 3 }}>
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
            <Box position="absolute" bottom={16} left="50%" sx={{ transform: "translateX(-50%)" }} display="flex" gap={1}>
              {promocoes.map((_, index) => (
                <Box
                  key={index}
                  width={12}
                  height={12}
                  borderRadius="50%"
                  bgcolor={index === bannerAtual ? "white" : "rgba(255,255,255,0.5)"}
                  sx={{ cursor: "pointer" }}
                  onClick={() => setBannerAtual(index)}
                />
              ))}
            </Box>
          </Card>
        </Box>


        {/* Botão Fazer Pedido em Destaque */}
        <Box textAlign="center" mb={6}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              background: "linear-gradient(45deg, #FF6B35 30%, #F7931E 90%)",
              color: "white",
              borderRadius: 3,
            }}
          >
            <Typography variant="h5" gutterBottom fontWeight="bold">
              Está com fome? 🍔
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Faça seu pedido agora e receba em casa quentinho!
            </Typography>
            <Button
              variant="contained"
              size="large"
              startIcon={<LocalDining />}
              sx={{
                bgcolor: "white",
                color: "primary.main",
                px: 4,
                py: 1.5,
                fontSize: "1.2rem",
                fontWeight: "bold",
                "&:hover": { bgcolor: "grey.100" },
              }}
            >
              Fazer Pedido Agora
            </Button>
          </Paper>
        </Box>

        {/* Promoções Ativas */}
        <Box mb={6}>
          <Box display="flex" alignItems="center" mb={3}>
            <LocalOffer color="primary" sx={{ mr: 1 }} />
            <Typography variant="h4" fontWeight="bold">
              Promoções Ativas
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {promocoes.map((promocao) => (
              <Grid size={{ xs: 12, md: 4 }} key={promocao.id}>
                <Card
                  sx={{
                    height: "100%",
                    transition: "transform 0.3s",
                    "&:hover": { transform: "translateY(-4px)" },
                  }}
                >
                  <CardMedia component="img" height="150" image={promocao.imagem} alt={promocao.titulo} />
                  <CardContent>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                      <Typography variant="h6" fontWeight="bold">
                        {promocao.titulo}
                      </Typography>
                      <Chip label={promocao.desconto} color="error" size="small" />
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {promocao.descricao}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: "block" }}>
                      {promocao.validade}
                    </Typography>
                    <Button variant="outlined" fullWidth>
                      Ver Detalhes
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Destaques do Cardápio */}
        <Box mb={6}>
          <Box display="flex" alignItems="center" mb={3}>
            <Star color="primary" sx={{ mr: 1 }} />
            <Typography variant="h4" fontWeight="bold">
              Destaques do Cardápio
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {destaques.map((item) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.id}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.3s",
                    "&:hover": { transform: "translateY(-4px)" },
                  }}
                >
                  <CardMedia component="img" height="200" image={item.imagem} alt={item.nome} />
                  <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <Typography variant="h6" gutterBottom fontWeight="bold">
                      {item.nome}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
                      {item.descricao}
                    </Typography>

                    <Box display="flex" alignItems="center" gap={1} mb={1}>
                      <Star fontSize="small" color="warning" />
                      <Typography variant="body2">{item.avaliacao}</Typography>
                      <Timer fontSize="small" color="action" sx={{ ml: 1 }} />
                      <Typography variant="body2" color="text.secondary">
                        {item.tempoPrep}
                      </Typography>
                    </Box>

                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                      <Box>
                        <Typography variant="h6" color="primary.main" fontWeight="bold">
                          R$ {item.preco.toFixed(2)}
                        </Typography>
                        {item.precoOriginal && (
                          <Typography variant="body2" color="text.secondary" sx={{ textDecoration: "line-through" }}>
                            R$ {item.precoOriginal.toFixed(2)}
                          </Typography>
                        )}
                      </Box>
                      <IconButton color="error">
                        <Favorite />
                      </IconButton>
                    </Box>

                    <Button variant="contained" fullWidth startIcon={<ShoppingCart />}>
                      Pedir
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Programa de Fidelidade */}
        <Box mb={6}>
          <Paper
            elevation={2}
            sx={{
              p: 4,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              borderRadius: 3,
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Box display="flex" alignItems="center" mb={2}>
                  <Loyalty sx={{ mr: 2, fontSize: "2rem" }} />
                  <Typography variant="h4" fontWeight="bold">
                    Programa de Fidelidade
                  </Typography>
                </Box>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Acumule pontos a cada compra e ganhe recompensas incríveis!
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  • 1 ponto a cada R$ 1,00 gasto
                  <br />• 100 pontos = R$ 10,00 de desconto
                  <br />• Ofertas exclusivas para membros
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<PersonAdd />}
                  sx={{
                    bgcolor: "white",
                    color: "primary.main",
                    mr: 2,
                    "&:hover": { bgcolor: "grey.100" },
                  }}
                >
                  Cadastrar-se
                </Button>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box textAlign="center">
                  <Avatar
                    sx={{
                      width: 120,
                      height: 120,
                      bgcolor: "rgba(255,255,255,0.2)",
                      margin: "0 auto",
                      mb: 2,
                    }}
                  >
                    <Loyalty sx={{ fontSize: "3rem" }} />
                  </Avatar>
                  <Typography variant="h6">Indique um amigo</Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Vocês dois ganham R$ 5,00 de desconto!
                  </Typography>
                  <Button variant="outlined" sx={{ color: "white", borderColor: "white" }}>
                    Indicar Amigo
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container >
    </Box >
  )
}
