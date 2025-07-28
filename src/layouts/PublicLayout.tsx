import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Link,
  Divider,
  IconButton,
  Avatar,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import { appConfig } from "../config/appConfig";
import {
  Email,
  Facebook,
  Instagram,
  LocationOn,
  Phone,
  WhatsApp,
} from "@mui/icons-material";
import { pt } from "../utils/static";

export function PublicLayout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <Box
        component="header"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 1rem",
          bgcolor: pt.primary,
          color: "#fff",
          py: 2,
        }}
      >
        <Link href="/" color="warning" underline="hover">
          <Typography variant="h6" color={pt.secondary}>
            {pt.name}
          </Typography>
        </Link>
        <Button
          variant="text"
          size="small"
          startIcon={<Avatar />}
          color="warning"
          href="/dashboard"
        >
          Entrar
        </Button>
      </Box>

      {/* Conteúdo */}
      <Box sx={{ flex: 1 }}>
        <Outlet />
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{ bgcolor: pt.primary, color: pt.secondary, py: 6 }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                {pt.name}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Os melhores hambúrgueres da cidade, feitos com ingredientes
                frescos e muito amor.
              </Typography>
              <Box display="flex" gap={1}>
                <IconButton color="primary" size="small">
                  <Facebook />
                </IconButton>
                <IconButton color="secondary" size="small">
                  <Instagram />
                </IconButton>
                <IconButton color="success" size="small">
                  <WhatsApp />
                </IconButton>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Contato
              </Typography>
              <Box display="flex" alignItems="center" mb={1}>
                <Phone fontSize="small" sx={{ mr: 1 }} />
                <Typography variant="body2">(11) 99999-9999</Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={1}>
                <Email fontSize="small" sx={{ mr: 1 }} />
                <Typography variant="body2">contato@burgerhouse.com</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <LocationOn fontSize="small" sx={{ mr: 1 }} />
                <Typography variant="body2">
                  Rua das Flores, 123 - Centro
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Links Úteis
              </Typography>
              <Box display="flex" flexDirection="column" gap={1}>
                <Link href="/cardapio" color="inherit" underline="hover">
                  Cardápio Completo
                </Link>
                <Link href="#" color="inherit" underline="hover">
                  Promoções
                </Link>
                <Link href="#" color="inherit" underline="hover">
                  Sobre Nós
                </Link>
                <Link href="#" color="inherit" underline="hover">
                  Política de Privacidade
                </Link>
                <Link href="#" color="inherit" underline="hover">
                  Termos de Uso
                </Link>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4, bgcolor: pt.secondary }} />

          <Box textAlign="center">
            <Typography variant="body2">{appConfig.copyright}</Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
