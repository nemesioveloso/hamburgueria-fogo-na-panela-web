import { useState, useMemo } from "react"
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
    TextField,
    InputAdornment,
    Tabs,
    Tab,
    Badge,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    IconButton,
    Divider,
    Paper,
    Fab,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    FormControlLabel,
    Checkbox,
    FormGroup,
    Slider,
} from "@mui/material"
import {
    Search,
    Add,
    Remove,
    ShoppingCart,
    FilterList,
    Close,
    Delete,
    LocalOffer,
    Star,
    Timer,
    Compost,
} from "@mui/icons-material"

interface ItemCardapio {
    id: string
    nome: string
    descricao: string
    preco: number
    precoOriginal?: number
    imagem: string
    categoria: string
    preferencias: string[]
    avaliacao: number
    tempoPrep: string
    disponivel: boolean
}

interface ItemCarrinho {
    item: ItemCardapio
    quantidade: number
    observacoes?: string
}

const itensCardapio: ItemCardapio[] = [
    {
        id: "1",
        nome: "Big Burger Especial",
        descricao: "Pão brioche, 2 carnes 180g, queijo cheddar, bacon, alface, tomate, molho especial",
        preco: 28.9,
        precoOriginal: 32.9,
        imagem: "/placeholder.svg?height=200&width=300&text=Big+Burger",
        categoria: "hamburguer",
        preferencias: ["artesanal"],
        avaliacao: 4.8,
        tempoPrep: "15-20 min",
        disponivel: true,
    },
    {
        id: "2",
        nome: "Cheese Bacon Deluxe",
        descricao: "Carne 150g, queijo derretido, bacon crocante, molho barbecue",
        preco: 24.9,
        imagem: "/placeholder.svg?height=200&width=300&text=Cheese+Bacon",
        categoria: "hamburguer",
        preferencias: ["artesanal"],
        avaliacao: 4.7,
        tempoPrep: "12-15 min",
        disponivel: true,
    },
    {
        id: "3",
        nome: "Veggie Supreme",
        descricao: "Hambúrguer vegetal, queijo vegano, rúcula, tomate seco, molho tahine",
        preco: 22.9,
        imagem: "/placeholder.svg?height=200&width=300&text=Veggie+Supreme",
        categoria: "hamburguer",
        preferencias: ["vegano", "vegetariano"],
        avaliacao: 4.6,
        tempoPrep: "10-12 min",
        disponivel: true,
    },
    {
        id: "4",
        nome: "Frango Crispy",
        descricao: "Peito de frango empanado, alface, tomate, molho ranch",
        preco: 21.9,
        imagem: "/placeholder.svg?height=200&width=300&text=Frango+Crispy",
        categoria: "hamburguer",
        preferencias: ["artesanal"],
        avaliacao: 4.5,
        tempoPrep: "12-15 min",
        disponivel: true,
    },
    {
        id: "5",
        nome: "Batata Rústica",
        descricao: "Batatas especiais com casca, tempero da casa e molhos variados",
        preco: 16.9,
        imagem: "/placeholder.svg?height=200&width=300&text=Batata+Rustica",
        categoria: "acompanhamento",
        preferencias: ["vegetariano"],
        avaliacao: 4.9,
        tempoPrep: "8-10 min",
        disponivel: true,
    },
    {
        id: "6",
        nome: "Onion Rings",
        descricao: "Anéis de cebola empanados e crocantes com molho especial",
        preco: 14.9,
        imagem: "/placeholder.svg?height=200&width=300&text=Onion+Rings",
        categoria: "acompanhamento",
        preferencias: ["vegetariano"],
        avaliacao: 4.4,
        tempoPrep: "6-8 min",
        disponivel: true,
    },
    {
        id: "7",
        nome: "Coca-Cola 350ml",
        descricao: "Refrigerante gelado",
        preco: 5.0,
        imagem: "/placeholder.svg?height=200&width=300&text=Coca+Cola",
        categoria: "bebida",
        preferencias: [],
        avaliacao: 4.2,
        tempoPrep: "Imediato",
        disponivel: true,
    },
    {
        id: "8",
        nome: "Suco Natural Laranja",
        descricao: "Suco de laranja natural, sem conservantes",
        preco: 8.0,
        imagem: "/placeholder.svg?height=200&width=300&text=Suco+Laranja",
        categoria: "bebida",
        preferencias: ["natural", "vegano"],
        avaliacao: 4.7,
        tempoPrep: "2-3 min",
        disponivel: true,
    },
    {
        id: "9",
        nome: "Milkshake Chocolate",
        descricao: "Milkshake cremoso de chocolate com chantilly",
        preco: 12.9,
        imagem: "/placeholder.svg?height=200&width=300&text=Milkshake",
        categoria: "bebida",
        preferencias: ["artesanal"],
        avaliacao: 4.8,
        tempoPrep: "3-5 min",
        disponivel: true,
    },
    {
        id: "10",
        nome: "Brownie com Sorvete",
        descricao: "Brownie quente com sorvete de baunilha e calda de chocolate",
        preco: 15.9,
        imagem: "/placeholder.svg?height=200&width=300&text=Brownie",
        categoria: "sobremesa",
        preferencias: ["artesanal"],
        avaliacao: 4.9,
        tempoPrep: "5-7 min",
        disponivel: true,
    },
]

const categorias = [
    { id: "todos", nome: "Todos", icon: "🍽️" },
    { id: "hamburguer", nome: "Hambúrgueres", icon: "🍔" },
    { id: "acompanhamento", nome: "Acompanhamentos", icon: "🍟" },
    { id: "bebida", nome: "Bebidas", icon: "🥤" },
    { id: "sobremesa", nome: "Sobremesas", icon: "🍰" },
]

const preferenciasDisponiveis = [
    { id: "vegano", nome: "Vegano", icon: <Compost /> },
    { id: "vegetariano", nome: "Vegetariano", icon: <Compost /> },
    { id: "artesanal", nome: "Artesanal", icon: <Star /> },
    { id: "natural", nome: "Natural", icon: <Compost /> },
]

export function Cardapio() {
    const [categoriaAtiva, setCategoriaAtiva] = useState("todos")
    const [termoPesquisa, setTermoPesquisa] = useState("")
    const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([])
    const [carrinhoAberto, setCarrinhoAberto] = useState(false)
    const [filtrosAbertos, setFiltrosAbertos] = useState(false)
    const [preferenciasFilter, setPreferenciasFilter] = useState<string[]>([])
    const [faixaPreco, setFaixaPreco] = useState<number[]>([0, 50])

    // Filtrar itens
    const itensFiltrados = useMemo(() => {
        return itensCardapio.filter((item) => {
            // Filtro por categoria
            if (categoriaAtiva !== "todos" && item.categoria !== categoriaAtiva) return false

            // Filtro por pesquisa
            if (termoPesquisa && !item.nome.toLowerCase().includes(termoPesquisa.toLowerCase())) return false

            // Filtro por preferências
            if (preferenciasFilter.length > 0) {
                const hasPreference = preferenciasFilter.some((pref) => item.preferencias.includes(pref))
                if (!hasPreference) return false
            }

            // Filtro por preço
            if (item.preco < faixaPreco[0] || item.preco > faixaPreco[1]) return false

            return true
        })
    }, [categoriaAtiva, termoPesquisa, preferenciasFilter, faixaPreco])

    // Funções do carrinho
    const adicionarAoCarrinho = (item: ItemCardapio) => {
        setCarrinho((prev) => {
            const itemExistente = prev.find((i) => i.item.id === item.id)
            if (itemExistente) {
                return prev.map((i) => (i.item.id === item.id ? { ...i, quantidade: i.quantidade + 1 } : i))
            }
            return [...prev, { item, quantidade: 1 }]
        })
    }

    const removerDoCarrinho = (itemId: string) => {
        setCarrinho((prev) => {
            const itemExistente = prev.find((i) => i.item.id === itemId)
            if (itemExistente && itemExistente.quantidade > 1) {
                return prev.map((i) => (i.item.id === itemId ? { ...i, quantidade: i.quantidade - 1 } : i))
            }
            return prev.filter((i) => i.item.id !== itemId)
        })
    }

    const removerItemCompleto = (itemId: string) => {
        setCarrinho((prev) => prev.filter((i) => i.item.id !== itemId))
    }

    const totalCarrinho = carrinho.reduce((total, item) => total + item.item.preco * item.quantidade, 0)
    const quantidadeTotal = carrinho.reduce((total, item) => total + item.quantidade, 0)

    const handlePreferenceChange = (preferencia: string) => {
        setPreferenciasFilter((prev) =>
            prev.includes(preferencia) ? prev.filter((p) => p !== preferencia) : [...prev, preferencia],
        )
    }

    return (
        <Box>
            <Container maxWidth="lg" sx={{ py: 4 }}>
                {/* Header */}
                <Box mb={4}>
                    <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
                        Cardápio
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Escolha seus pratos favoritos e monte seu pedido
                    </Typography>
                </Box>

                {/* Barra de Pesquisa e Filtros */}
                <Box mb={4}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid size={{ xs: 12, sm: 8 }}>
                            <TextField
                                fullWidth
                                placeholder="Pesquisar pratos..."
                                value={termoPesquisa}
                                onChange={(e) => setTermoPesquisa(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Search />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 4 }}>
                            <Button
                                variant="outlined"
                                startIcon={<FilterList />}
                                onClick={() => setFiltrosAbertos(true)}
                                fullWidth
                                sx={{ height: 56 }}
                            >
                                Filtros
                            </Button>
                        </Grid>
                    </Grid>
                </Box>

                {/* Tabs de Categorias */}
                <Box mb={4}>
                    <Tabs
                        value={categoriaAtiva}
                        onChange={(_, newValue) => setCategoriaAtiva(newValue)}
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        {categorias.map((categoria) => (
                            <Tab
                                key={categoria.id}
                                value={categoria.id}
                                label={
                                    <Box display="flex" alignItems="center" gap={1}>
                                        <span>{categoria.icon}</span>
                                        {categoria.nome}
                                    </Box>
                                }
                            />
                        ))}
                    </Tabs>
                </Box>

                {/* Lista de Itens */}
                <Grid container spacing={3}>
                    {itensFiltrados.map((item) => (
                        <Grid size={{ xs: 12, sm: 8, md: 4 }} key={item.id}>
                            <Card
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    transition: "transform 0.3s",
                                    "&:hover": { transform: "translateY(-4px)" },
                                    opacity: item.disponivel ? 1 : 0.6,
                                }}
                            >
                                <CardMedia component="img" height="200" image={item.imagem} alt={item.nome} />
                                <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                                    <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={1}>
                                        <Typography variant="h6" gutterBottom fontWeight="bold">
                                            {item.nome}
                                        </Typography>
                                        {item.precoOriginal && <Chip label={<LocalOffer fontSize="small" />} color="error" size="small" />}
                                    </Box>

                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
                                        {item.descricao}
                                    </Typography>

                                    {/* Preferências */}
                                    {item.preferencias.length > 0 && (
                                        <Box display="flex" gap={0.5} mb={2} flexWrap="wrap">
                                            {item.preferencias.map((pref) => (
                                                <Chip key={pref} label={pref} size="small" variant="outlined" />
                                            ))}
                                        </Box>
                                    )}

                                    {/* Avaliação e Tempo */}
                                    <Box display="flex" alignItems="center" gap={2} mb={2}>
                                        <Box display="flex" alignItems="center" gap={0.5}>
                                            <Star fontSize="small" color="warning" />
                                            <Typography variant="body2">{item.avaliacao}</Typography>
                                        </Box>
                                        <Box display="flex" alignItems="center" gap={0.5}>
                                            <Timer fontSize="small" color="action" />
                                            <Typography variant="body2" color="text.secondary">
                                                {item.tempoPrep}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    {/* Preço e Botão */}
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
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
                                        <Button
                                            variant="contained"
                                            startIcon={<Add />}
                                            onClick={() => adicionarAoCarrinho(item)}
                                            disabled={!item.disponivel}
                                        >
                                            Adicionar
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {itensFiltrados.length === 0 && (
                    <Box textAlign="center" py={8}>
                        <Typography variant="h6" color="text.secondary" gutterBottom>
                            Nenhum item encontrado
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Tente ajustar os filtros ou pesquisar por outro termo
                        </Typography>
                    </Box>
                )}
            </Container>

            {/* Botão Flutuante do Carrinho */}
            {quantidadeTotal > 0 && (
                <Fab
                    color="primary"
                    sx={{
                        position: "fixed",
                        bottom: 24,
                        right: 24,
                        zIndex: 1000,
                    }}
                    onClick={() => setCarrinhoAberto(true)}
                >
                    <Badge badgeContent={quantidadeTotal} color="error">
                        <ShoppingCart />
                    </Badge>
                </Fab>
            )}

            {/* Drawer do Carrinho */}
            <Drawer anchor="right" open={carrinhoAberto} onClose={() => setCarrinhoAberto(false)}>
                <Box sx={{ width: 400, p: 2 }}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                        <Typography variant="h6" fontWeight="bold">
                            Seu Pedido
                        </Typography>
                        <IconButton onClick={() => setCarrinhoAberto(false)}>
                            <Close />
                        </IconButton>
                    </Box>

                    <Divider sx={{ mb: 2 }} />

                    {carrinho.length === 0 ? (
                        <Box textAlign="center" py={4}>
                            <Typography variant="body1" color="text.secondary">
                                Seu carrinho está vazio
                            </Typography>
                        </Box>
                    ) : (
                        <>
                            <List>
                                {carrinho.map((itemCarrinho) => (
                                    <ListItem key={itemCarrinho.item.id} sx={{ px: 0 }}>
                                        <ListItemAvatar>
                                            <Avatar src={itemCarrinho.item.imagem} alt={itemCarrinho.item.nome} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={itemCarrinho.item.nome}
                                            secondary={`R$ ${itemCarrinho.item.preco.toFixed(2)}`}
                                        />
                                        <Box display="flex" alignItems="center" gap={1}>
                                            <IconButton size="small" onClick={() => removerDoCarrinho(itemCarrinho.item.id)}>
                                                <Remove />
                                            </IconButton>
                                            <Typography>{itemCarrinho.quantidade}</Typography>
                                            <IconButton size="small" onClick={() => adicionarAoCarrinho(itemCarrinho.item)}>
                                                <Add />
                                            </IconButton>
                                            <IconButton size="small" onClick={() => removerItemCompleto(itemCarrinho.item.id)} color="error">
                                                <Delete />
                                            </IconButton>
                                        </Box>
                                    </ListItem>
                                ))}
                            </List>

                            <Divider sx={{ my: 2 }} />

                            <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <Typography variant="h6" fontWeight="bold">
                                        Total:
                                    </Typography>
                                    <Typography variant="h6" color="primary.main" fontWeight="bold">
                                        R$ {totalCarrinho.toFixed(2)}
                                    </Typography>
                                </Box>
                            </Paper>

                            <Button variant="contained" fullWidth size="large" sx={{ mb: 1 }}>
                                Finalizar Pedido
                            </Button>
                            <Button variant="outlined" fullWidth onClick={() => setCarrinhoAberto(false)}>
                                Continuar Comprando
                            </Button>
                        </>
                    )}
                </Box>
            </Drawer>

            {/* Dialog de Filtros */}
            <Dialog open={filtrosAbertos} onClose={() => setFiltrosAbertos(false)} maxWidth="sm" fullWidth>
                <DialogTitle>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        Filtros
                        <IconButton onClick={() => setFiltrosAbertos(false)}>
                            <Close />
                        </IconButton>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <Box mb={3}>
                        <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                            Preferências
                        </Typography>
                        <FormGroup>
                            {preferenciasDisponiveis.map((pref) => (
                                <FormControlLabel
                                    key={pref.id}
                                    control={
                                        <Checkbox
                                            checked={preferenciasFilter.includes(pref.id)}
                                            onChange={() => handlePreferenceChange(pref.id)}
                                        />
                                    }
                                    label={
                                        <Box display="flex" alignItems="center" gap={1}>
                                            {pref.icon}
                                            {pref.nome}
                                        </Box>
                                    }
                                />
                            ))}
                        </FormGroup>
                    </Box>

                    <Box mb={3}>
                        <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                            Faixa de Preço
                        </Typography>
                        <Slider
                            value={faixaPreco}
                            onChange={(_, newValue) => setFaixaPreco(newValue as number[])}
                            valueLabelDisplay="auto"
                            min={0}
                            max={50}
                            step={1}
                            marks={[
                                { value: 0, label: "R$ 0" },
                                { value: 25, label: "R$ 25" },
                                { value: 50, label: "R$ 50+" },
                            ]}
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {
                            setPreferenciasFilter([])
                            setFaixaPreco([0, 50])
                        }}
                    >
                        Limpar Filtros
                    </Button>
                    <Button variant="contained" onClick={() => setFiltrosAbertos(false)}>
                        Aplicar
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}
