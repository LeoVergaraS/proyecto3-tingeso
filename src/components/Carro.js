import { Avatar, Box, Button, Drawer, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import pizzas from "../data/pizzas";
import CloseIcon from '@mui/icons-material/Close';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

const Carro = ({ closeCart, show, cart, clean, deleteI }) => {

    const guardarCarro = () => {
        localStorage.setItem('carro', JSON.stringify(cart));
        window.location.href = "/pago";
    };

    const [total, setTotal] = useState(0);
    const getTotal = () => {
        let total = 0;
        if (cart.length > 0) {
            total = cart.reduce((acc, order) => { return acc + order.precio }, 0);
        }
        setTotal(total);
    };

    const buscarProducto = (order) => {
        let pizzaIndex = pizzas.findIndex(item => (
            item.id === order.id &&
            item.nombre === order.nombre
        ));
        if (pizzaIndex >= 0 || order.nombre === "Tu pizza") {
            return (<Typography variant="subtitle2">Tamaño: {order.tamanio}</Typography>);
        }
    };

    const carroVacio = () => {
        if (cart.length === 0) {
            return (
                <Paper sx={{ mt: 2, p: 2, textAlign: "center" }}>
                    <Typography variant="h5" sx={{ mt: 2 }}>Tu carro está vacío</Typography>
                    <ProductionQuantityLimitsIcon sx={{
                        mt: 1,
                        // bigger icon
                        fontSize: 75,
                    }} />
                </Paper>

            );
        } else {
            return (
                <Box
                    sx={{ p: 4 }}
                    display="flex"
                    justifyContent={"center"}
                    flexDirection="column"
                    alignItems="center">
                    <Paper>
                        {cartContent}
                    </Paper>
                    <Typography variant="h5" sx={{ mt: 2 }}>Total: $<b>{total}</b></Typography>
                    <Button onClick={guardarCarro}
                    fullWidth 
                    size="small"
                    sx={{fontSize: "150%", 
                    "&:hover": {backgroundColor: "#1976d2", color: "white"}}}
                    >Pagar</Button>
                </Box>
            );
        }
    };


    useEffect(() => {
        getTotal();
    });

    const cartContent = cart.map((order, index) => {
        return (
            <Box key={index}>
                <Box
                    display="flex"
                    alignItems="start"
                    sx={{ pt: 2, pb: 2, pl: 2, pr: 2 }}
                    justifyContent={"space-between"}>
                    <Avatar src={order.imagen} sx={{ mr: 2, justifyContent: "center" }} />
                    <Box display="flex" flexDirection={"column"} sx={{ mr: 2 }} >
                        <Typography>{order.nombre}</Typography>
                        <Typography variant="subtitle2">{order.descripcion}</Typography>
                        {buscarProducto(order)}
                        <Typography variant="subtitle2">Cantidad: {order.cantidad}</Typography>
                    </Box>
                    <Box display="flex" flexDirection={"column"}>
                        <Typography variant="h5" justifyContent={"end"}>${order.precio}</Typography>
                        <CloseIcon sx={{ ml: 7, cursor: "pointer", color: "#DF5537" }} onClick={() => deleteI(index)} />
                    </Box>
                </Box>
            </Box>
        );
    });

    return (
        <Drawer
            open={show}
            anchor="right"
            onClose={() => closeCart()}
            PaperProps={{
                sx: {
                    width: 350,
                    background: "#E8E8E8",
                    
                }
            }}
        >
            <Box
                sx={{ p: 4 }}
                display="flex"
                justifyContent={"center"}
                flexDirection="column"
                alignItems="center"
            >
                <Typography variant="h5" sx={{ mb: 1 }}>Tu pedido <CloseIcon sx={{ mt: 1, cursor: "pointer", color: "#DF5537"  }} onClick={() => clean()} /></Typography>
                {cart.length === 0 ? carroVacio() : carroVacio()}
            </Box>
        </Drawer>
    );
};

export default Carro;