import { ShoppingCart } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

const SalsaCard = ({ salsa }) => {
    return (
        <Card sx={{ width: 325, marginLeft: 3, marginBottom: 3 }}>
            <CardMedia component="img" height="140" image={salsa.imagen}></CardMedia>
            <CardContent>
                <Typography>{salsa.nombre}</Typography>
                <Typography variant="subtitle3" color={"text.secondary"}>{salsa.descripcion}</Typography>
                {/*falta los tamaños y los precios */}
            </CardContent>
            <CardActions>
                <Button color="success" size="small">Modificar</Button>
                <Button endIcon={<ShoppingCart/>} size="small"> Añadir</Button>
            </CardActions>
        </Card>
    );
};

export default SalsaCard;