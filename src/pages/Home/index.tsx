import { Container, Box } from "@mui/material";
import { BannerPromocional } from "../../components/BannerPromocional";
import { PedidoEmDestaque } from "../../components/PedidoEmDestaque";
import { PromocoesAtivas } from "../../components/PromocoesAtivas";
import { DestaqueCardapio } from "../../components/DestaqueCardapio";
import { ProgramaFidelidade } from "../../components/ProgramaFidelidade";
import BannerFull from "../../components/BannerFull";

interface Promocao {
  id: string;
  titulo: string;
  descricao: string;
  desconto: string;
  validade: string;
  imagem: string;
}

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
];

const destaques: ItemCardapio[] = [
  {
    id: "1",
    nome: "Big Burger Especial",
    descricao:
      "Pão brioche, 2 carnes 180g, queijo cheddar, bacon, alface, tomate",
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
];

export function Home() {
  return (
    <Box>
      <BannerFull />
      <Container maxWidth="lg">
        {/* Banner Promocional - Carrossel */}
        <BannerPromocional promocoes={promocoes} />

        {/* Botão Fazer Pedido em Destaque */}
        <PedidoEmDestaque />

        {/* Promoções Ativas */}
        <PromocoesAtivas promocoes={promocoes} />

        {/* Destaques do Cardápio */}
        <DestaqueCardapio destaques={destaques} />

        {/* Programa de Fidelidade */}
        <ProgramaFidelidade />
      </Container>
    </Box>
  );
}
