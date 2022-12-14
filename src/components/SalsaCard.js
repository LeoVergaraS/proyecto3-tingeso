import { ShoppingCart } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, TextField, Typography } from "@mui/material"
import { useState } from "react";

const SalsaCard = ({ salsa, addToCart }) => {
    const [qty, setQty] = useState(1);
    const handleQty = (event) => {
        let newQty = parseInt(event.target.value);
        setQty(newQty);
        
        handlePrecio(salsa.precio, newQty);
    };

    const [precio, setPrecio] = useState(salsa.precio);
    const handlePrecio = (precio, cantidad) => {
        let precioNuevo = precio * cantidad;
        setPrecio(precioNuevo);
    };

    const generarOrder = () => {
        let order = {
            "id": salsa.id,
            "nombre": salsa.nombre,
            "imagen": salsa.imagen,
            "descripcion": salsa.descripcion,
            "cantidad": qty,
            "precio": precio
        };
        addToCart(order);
    };

    return (
        <Card sx={{ width: 325, marginLeft: 3, marginBottom: 3 , boxShadow: "0 0 5px 0 #000000",'&:hover': {
            boxShadow: "0 0 10px 0 #000000"
        },}}>
            <CardMedia component="img" height="140" image={salsa.imagen}></CardMedia>
            <CardContent>
                <Typography>{salsa.nombre}</Typography>
                <Typography variant="subtitle3" color={"text.secondary"}>{salsa.descripcion}</Typography>
                <TextField sx={{ mt: 2 }}
                        id="salsa-cantidad"
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
                <Button endIcon={<ShoppingCart/>} sx={{"&:hover": {backgroundColor: "#1976d2", color: "white"}}} fullWidth onClick={generarOrder} size="small"> Añadir</Button>
            </CardActions>
        </Card>
    );
};

export default SalsaCard;