import { ShoppingCart } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, Dialog, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material"
import React from "react";

const PizzaCard = ({ pizza }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <div>
        <Card sx={{ width: 325, marginLeft: 3, marginBottom: 3 }}>
            <CardMedia component="img" height="140" image={pizza.imagen}></CardMedia>
            <CardContent>
                <Typography>{pizza.nombre}</Typography>
                <Typography variant="subtitle3" color={"text.secondary"}>{pizza.descripcion}</Typography>
                {/*falta los tamaños y los precios */}
            </CardContent>
            <CardActions>
                <Button color="success" size="small" onClick={handleClickOpen}>Modificar</Button>
                <Button endIcon={<ShoppingCart/>} size="small"> Añadir</Button>
            </CardActions>
        </Card>
        <Dialog open={open}>
            <DialogTitle> Pizza {pizza.nombre}</DialogTitle>
            <DialogContent>
                <DialogContentText>Tamaño</DialogContentText>
            </DialogContent>
        </Dialog>
        </div>
    );
};

export default PizzaCard;