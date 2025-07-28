import { Loyalty, PersonAdd } from "@mui/icons-material";
import { Avatar, Box, Button, Grid, Paper, Typography } from "@mui/material";

export const ProgramaFidelidade = () => {
  return (
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
              <Button
                variant="outlined"
                sx={{ color: "white", borderColor: "white" }}
              >
                Indicar Amigo
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};
