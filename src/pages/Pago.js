import { FormControl, TextField, Typography, Grid, Container, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const Pago = ({ addToCart, addToCartByS }) => {

    const [datos, setDatos] = useState({
        "nombre": "",
        "apellido": "",
        "email": "",
        "direccion": "",
    });

    const [datosTarjeta, setDatosTarjeta] = useState({
        "numero": "",
        "nombre": "",
        "fecha": "",
        "cvv": "",
    });

    const handleChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value,
        });
        console.log(datos);
    };

    const handleChangeTarjeta = (e) => {
        setDatosTarjeta({
            ...datosTarjeta,
            [e.target.name]: e.target.value,
        });
        console.log(datosTarjeta);
    };

    return (
        <Box
            px={{ xs: 2, sm: 10 }}
            py={{ xs: 5, sm: 7 }}
        >
            <Typography sx={{ml: 3}} variant="h4">Pago</Typography>
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={7}>
                        <Paper  sx={{ p: 1, mt: 1 }}>
                            <Typography variant="h6">Datos de envío</Typography>
                            <FormControl sx={{ display: "inline-block" }}>
                                <TextField sx={{ mt: 2 }}
                                    id="nombre"
                                    type="text"
                                    label="Nombre"
                                    name="nombre"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={datos.nombre}
                                    fullWidth
                                    size="small"
                                    onChange={handleChange}
                                />
                                <TextField sx={{ mt: 2 }}
                                    id="email"
                                    type="email"
                                    label="Correo electrónico"
                                    name="email"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={datos.email}
                                    fullWidth
                                    size="small"
                                    onChange={handleChange}
                                />
                                <TextField sx={{ mt: 2 }}
                                    id="direccion"
                                    type="text"
                                    label={<PhoneAndroidIcon/>}
                                    name="direccion"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={datos.direccion}
                                    fullWidth
                                    size="small"
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={5}>
                        <Typography variant="h6">Datos de la tarjeta</Typography>
                    </Grid>
                </Grid>
            </Container>



        </Box>
    );
};

export default Pago;