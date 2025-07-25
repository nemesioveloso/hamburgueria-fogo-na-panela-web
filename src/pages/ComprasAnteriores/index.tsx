import { Box, Container, Typography } from "@mui/material";
import { CardsUltimasCompras } from "../../components/CardsUltimasCompras";

export const ComprasAnteriores = () => {
  return (
    <Box>
      <Container>
        <Typography mb={2} mt={-2} variant="h4" component="h1" gutterBottom fontWeight="bold">
          Compras Anteriores
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2}>
          Visualize suas compras anteriores.
        </Typography>
      </Container>
      <CardsUltimasCompras />
    </Box>
  );
};
