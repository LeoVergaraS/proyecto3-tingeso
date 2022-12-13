import { ShoppingCart } from "@mui/icons-material";
import { FormControl, InputLabel, Select, Button, Card, CardActions, CardContent, CardMedia, MenuItem, Typography, TextField } from "@mui/material"
import { useState } from "react";

const PizzaCard = ({ pizza, addToCart }) => {

    const [qty, setQty] = useState(1);
    const handleQty = (event) => {
        let newQty = parseInt(event.target.value);
        setQty(newQty);

        let indice = pizza.sizes.indexOf(size);
        let precio = pizza.precios[indice];
        handlePrecio(precio, newQty);
    };

    const [size, setSize] = useState(pizza.sizes[1]);
    const handleChange = (event) => {
        let tamanio = event.target.value;
        let indice = pizza.sizes.indexOf(tamanio);
        setSize(tamanio);

        let precio = pizza.precios[indice];
        handlePrecio(precio, qty);
    };

    const [precio, setPrecio] = useState(pizza.precios[1]);
    const handlePrecio = (precio, cantidad) => {
        let precioNuevo = precio * cantidad;
        setPrecio(precioNuevo);
    };

    const generarOrder = () => {    
        let order = {
            "id": pizza.id,
            "nombre": pizza.nombre,
            "imagen": pizza.imagen,
            "descripcion": pizza.descripcion,
            "tamanio": size,
            "cantidad": qty,
            "precio": precio
        };
        addToCart(order);
    };

    return (
        <div>
            <Card sx={{ width: 325, marginLeft: 3, marginBottom: 3 }}>
                <CardMedia component="img" height="140" image={pizza.imagen}></CardMedia>
                <CardContent>
                    <Typography>{pizza.nombre}</Typography>
                    <Typography variant="subtitle3" color={"text.secondary"}>{pizza.descripcion}</Typography>
                    <FormControl size="small" fullWidth sx={{ mt: 2 }}>
                        <InputLabel id="demo-simple-select-label">Tamaño</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={size}
                            label="Tamaño"
                            onChange={handleChange}
                            defaultValue={pizza.sizes[1]}
                        >
                            <MenuItem value={pizza.sizes[0]}> {pizza.sizes[0]}-{pizza.precios[0]} </MenuItem>
                            <MenuItem value={pizza.sizes[1]}> {pizza.sizes[1]}-{pizza.precios[1]} </MenuItem>
                            <MenuItem value={pizza.sizes[2]}> {pizza.sizes[2]}-{pizza.precios[2]} </MenuItem>
                        </Select>
                    </FormControl>
                    <TextField sx={{ mt: 2 }}
                        id="pizza-cantidad"
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
                    <Button endIcon={<ShoppingCart />} fullWidth size="small" onClick={generarOrder}> Añadir</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default PizzaCard;