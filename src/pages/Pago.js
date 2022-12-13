import { FormControl, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const Pago = ({addToCart, addToCartByS}) => {

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
        <Box>
            <Typography variant="h4">Pago</Typography>
            <Typography variant="h6">Datos de envío</Typography>
            <FormControl sx={{display: "inline-block"}}>
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
                    id="apellido"
                    type="text"
                    label="Apellido"
                    name="apellido"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={datos.apellido}
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
                    label="Dirección"
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
                    
        </Box>
    );
};

export default Pago;