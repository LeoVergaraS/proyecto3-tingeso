import { ShoppingCart } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, TextField, Typography } from "@mui/material";
import { useState } from "react";

const BebidaCard = ({ bebida, addToCart }) => {
    const [qty, setQty] = useState(1);
    const handleQty = (event) => {
        let newQty = parseInt(event.target.value);
        setQty(newQty);

        handlePrecio(bebida.precio, newQty);
    };

    const [precio, setPrecio] = useState(bebida.precio);
    const handlePrecio = (precio, cantidad) => {
        let precioNuevo = precio * cantidad;
        setPrecio(precioNuevo);
    };

    const generarOrder = () => {
        let order = {
            "id": bebida.id,
            "nombre": bebida.nombre,
            "imagen": bebida.imagen,
            "descripcion": bebida.descripcion,
            "cantidad": qty,
            "precio": precio
        };
        addToCart(order);
    };

    return (
        <Card sx={{ width: 325, marginLeft: 3, marginBottom: 3 }}>
            <CardMedia component="img" height="140" image={bebida.imagen}></CardMedia>
            <CardContent>
                <Typography>{bebida.nombre}</Typography>
                <Typography variant="subtitle3" color={"text.secondary"}>{bebida.descripcion}</Typography>
                <TextField sx={{ mt: 2 }}
                    id="bebida-cantidad"
                    type="number"
                    label="Cantidad"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{ min: 1, max: 50, value: qty }}
                    fullWidth
                    size="small"
                    onChange={handleQty}
                />
                <p>Precio: <b>{precio}</b></p>
            </CardContent>
            <CardActions>
                <Button fullWidth endIcon={<ShoppingCart />} size="small" onClick={generarOrder}> Añadir</Button>
            </CardActions>
        </Card>
    );
};

export default BebidaCard;