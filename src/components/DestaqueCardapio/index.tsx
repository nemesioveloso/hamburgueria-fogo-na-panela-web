import { Favorite, ShoppingCart, Star, Timer } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

interface ItemCardapio {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  precoOriginal?: number;
  imagem: string;
  categoria: string;
  avaliacao: number;
  tempoPrep: string;
}
interface DestaqueCardapioProps {
  destaques: ItemCardapio[];
}
export const DestaqueCardapio = ({ destaques }: DestaqueCardapioProps) => {
  return (
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
              <CardMedia
                component="img"
                height="200"
                image={item.imagem}
                alt={item.nome}
              />
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  {item.nome}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2, flexGrow: 1 }}
                >
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

                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={2}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      color="primary.main"
                      fontWeight="bold"
                    >
                      R$ {item.preco.toFixed(2)}
                    </Typography>
                    {item.precoOriginal && (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ textDecoration: "line-through" }}
                      >
                        R$ {item.precoOriginal.toFixed(2)}
                      </Typography>
                    )}
                  </Box>
                  <IconButton color="error">
                    <Favorite />
                  </IconButton>
                </Box>

                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<ShoppingCart />}
                >
                  Pedir
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
