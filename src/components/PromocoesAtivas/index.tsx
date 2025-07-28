import { LocalOffer } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";

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

export const PromocoesAtivas = ({ promocoes }: PromocoesProps) => {
  return (
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
              <CardMedia
                component="img"
                height="150"
                image={promocao.imagem}
                alt={promocao.titulo}
              />
              <CardContent>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={1}
                >
                  <Typography variant="h6" fontWeight="bold">
                    {promocao.titulo}
                  </Typography>
                  <Chip label={promocao.desconto} color="error" size="small" />
                </Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {promocao.descricao}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ mb: 2, display: "block" }}
                >
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
  );
};
