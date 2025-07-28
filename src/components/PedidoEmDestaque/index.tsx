import { LocalDining } from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";

export const PedidoEmDestaque = () => {
  return (
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
  );
};
