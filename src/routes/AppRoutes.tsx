import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "../pages/Sobre";
import NotFound from "../pages/NotFound";
import { AuthProvider } from "../auth/AuthProvider";
import ProtectedRoute from "../auth/ProtectedRoute";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import { PublicLayout } from "../layouts/PublicLayout";
import { AutenticatedLayout } from "../layouts/AutenticatedLayout";
import { Home } from "../pages/Home";
import { ComprasAnteriores } from "../pages/ComprasAnteriores";
import { MeusDados } from "../pages/MeusDados";
import { Cardapio } from "../pages/Cardapio";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* 🔓 Layout Público */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cardapio" element={<Cardapio />} />
          </Route>

          {/* 🔐 Layout Privado */}
          <Route
            element={
              <ProtectedRoute requiredRole="admin">
                <AutenticatedLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/comprasAnteriores" element={<ComprasAnteriores />} />
            <Route path="/meusDados" element={<MeusDados />} />
          </Route>

          {/* Página não encontrada */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
