import { Avatar, Box, Drawer, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Carro = ({ closeCart, show, cart }) => {

    const [total, setTotal] = useState(0);
    const getTotal = () => {
        let total = 0;
        if(cart.length > 0){
            total = cart.reduce((acc, order) => {return acc + order.precio}, 0);
        }
        setTotal(total);
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
                    sx={{ pt: 2, pb: 2, pl: 2, pr:2 }}
                    justifyContent={"space-between"}>
                    <Avatar src={order.imagen} sx={{ mr: 2 }} />
                    <Box display="flex" flexDirection={"column"} sx={{ mr: 2 }} >
                        <Typography>{order.nombre}</Typography>
                        <Typography variant="subtitle2">{order.descripcion}</Typography>
                        <Typography variant="subtitle2">Tamaño: {order.tamanio}</Typography>
                        <Typography variant="subtitle2">Cantidad: {order.cantidad}</Typography>
                    </Box>
                    <Typography variant="h5" justifyContent={"end"}>${order.precio}</Typography>
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
                <Typography variant="h5" sx={{mb: 1}}>Tu pedido</Typography>
                <Paper>
                    {cartContent}
                </Paper>
                <Typography variant="h5" sx={{mt: 2}}>Total: $<b>{total}</b></Typography>
            </Box>
        </Drawer>
    );
};

export default Carro;