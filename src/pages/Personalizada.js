import { CheckBox } from "@mui/icons-material";
import { Avatar, Box, Container, FormControlLabel, Grid, makeStyles, Paper, Radio, RadioGroup, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material"
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

const Personalizada = () => {
    const quesos = [
        {
            id: 0,
            nombre: "Mozzarella",
        },
        {
            id: 1,
            nombre: "Gouda",
        }
    ];
    const carnes = [
        {
            id: 0,
            nombre: "Carne",
        },
        {
            id: 1,
            nombre: "Carne mechada",
        },
        {
            id: 2,
            nombre: "Pepperoni",
        },
        {
            id: 3,
            nombre: "Salchicha",
        },
        {
            id: 4,
            nombre: "Jamón",
        },
        {
            id: 5,
            nombre: "Pollo",
        },
        {
            id: 6,
            nombre: "Tocino",
        }
    ];
    const vegetales = [
        {
            id: 0,
            nombre: "Aceituna",
        },
        {
            id: 1,
            nombre: "Choclo",
        },
        {
            id: 2,
            nombre: "Piña",
        },
        {
            id: 3,
            nombre: "Cebolla",
        },
        {
            id: 4,
            nombre: "Pimiento",
        },
        {
            id: 5,
            nombre: "Tomate",
        },
        {
            id: 6,
            nombre: "Champiñones",
        }];
    
    const cantQueso = [
        {
            id: 0,
            nombre: "Normal",
        },
        {
            id: 1,
            nombre: "Extra",
        },
        {
            id: 2,
            nombre: "Doble",
        }
    ];
    const masas = [
        {
            id: 0,
            nombre: "Normal",
        },
        {
            id: 1,
            nombre: "Delgada",
        }
    ];

    const tamanios = [
        {
            id: 0,
            nombre: "Personal",
        },
        {
            id: 1,
            nombre: "Mediana",
        },
        {
            id: 2,
            nombre: "Familiar",
        }
    ];


    const [detalle, setDetalle] = useState({
        carnes: [],
        vegetales: [],
        queso: quesos[0],
        cantidadQueso: cantQueso[0],
        masa: masas[0],
        tamanio: tamanios[1]
    });

    const handleQueso = (e) => {
        const id = e.target.value;
        detalle.queso = quesos[id];
        setDetalle({ ...detalle });
    };

    const handleCantidadQueso = (e) => {
        const id = e.target.value;
        detalle.cantidadQueso = cantQueso[id];
        setDetalle({ ...detalle });
    };

    const handleMasa = (e) => {
        const id = e.target.value;
        detalle.masa = masas[id];
        setDetalle({ ...detalle });
    };

    const handleTamanio = (e) => {
        const id = e.target.value;
        detalle.tamanio = tamanios[id];
        setDetalle({ ...detalle });
    };

    const handleCarne = (e, nCarnes) => {
        detalle.carnes = nCarnes;
        setDetalle({ ...detalle });
        console.log(detalle.carnes);
    };

    const hanldeVegetales = (e, nVegetales) => {
        detalle.vegetales = nVegetales;
        setDetalle({ ...detalle });
        console.log(detalle.vegetales);
    };


    return (
        <Box
            px={{ xs: 2, sm: 10 }}
            py={{ xs: 5, sm: 7 }}
        >
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={7}>
                        <Typography variant="h5">Ingredientes</Typography>
                        <Paper sx={{ p: 1, mt: 1 }}>
                            <Typography variant="h6">Carnes</Typography>
                            <ToggleButtonGroup
                                value={detalle.carnes}
                                onChange={handleCarne}
                                aria-label="carnes"
                            >
                                {carnes.map((carne, index) => {
                                    return (
                                        <ToggleButton key={index} value={carne.nombre} aria-label={carne.nombre}>
                                            {carne.nombre}
                                        </ToggleButton>
                                    );
                                })}
                            </ToggleButtonGroup>
                        </Paper>
                        <Paper sx={{ p: 1, mt: 1 }}>
                            <Typography variant="h6">Vegetales</Typography>
                            <ToggleButtonGroup
                                value={detalle.vegetales}
                                onChange={hanldeVegetales}
                                aria-label="vegetales"
                            >
                                {vegetales.map((vegetal, index) => {
                                    return (
                                        <ToggleButton key={index} value={vegetal.nombre} aria-label={vegetal.nombre}>
                                            {vegetal.nombre}
                                        </ToggleButton>
                                    );
                                })}
                            </ToggleButtonGroup>
                        </Paper>
                        <Paper sx={{ p: 1, mt: 1 }}>
                            <Typography variant="h6">Queso</Typography>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                {quesos.map((queso, index) => {
                                    return (
                                        <FormControlLabel
                                            key={index}
                                            value={index}
                                            name={queso.nombre}
                                            label={queso.nombre}
                                            control={<Radio />}
                                            checked={index === detalle.queso.id ? true : false}
                                            onChange={handleQueso}
                                        />
                                    )
                                })}
                            </RadioGroup>
                        </Paper>
                        <Paper sx={{ p: 1, mt: 1 }}>
                            <Typography variant="h6">Cantidad queso</Typography>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                {cantQueso.map((cQ, index) => {
                                    return (
                                        <FormControlLabel
                                            key={index}
                                            value={index}
                                            name={cQ.nombre}
                                            label={cQ.nombre}
                                            control={<Radio />}
                                            checked={index === detalle.cantidadQueso.id ? true : false}
                                            onChange={handleCantidadQueso}
                                        />
                                    )
                                })}
                            </RadioGroup>
                        </Paper>
                        <Paper sx={{ p: 1, mt: 1 }}>
                            <Typography variant="h6">Masa</Typography>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                {masas.map((m, index) => {
                                    return (
                                        <FormControlLabel
                                            key={index}
                                            value={index}
                                            name={m.nombre}
                                            label={m.nombre}
                                            control={<Radio />}
                                            checked={index === detalle.masa.id ? true : false}
                                            onChange={handleMasa}
                                        />
                                    )
                                })}
                            </RadioGroup>
                        </Paper>
                        <Paper sx={{ p: 1, mt: 1 }}>
                            <Typography variant="h6">Tamaño</Typography>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                {tamanios.map((t, index) => {
                                    return (
                                        <FormControlLabel
                                            key={index}
                                            value={index}
                                            name={t.nombre}
                                            label={t.nombre}
                                            control={<Radio />}
                                            checked={index === detalle.tamanio.id ? true : false}
                                            onChange={handleTamanio}
                                        />
                                    )
                                })}
                            </RadioGroup>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={5}>
                        <Typography variant="h5">Tu pizza</Typography>
                        <Paper sx={{ p: 1, mt: 1 }}>
                            <Typography variant="h6">Detalle</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>

    );
};

export default Personalizada;