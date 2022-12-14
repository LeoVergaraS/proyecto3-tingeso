import { Box, Button, Container, FormControlLabel, Grid, Paper, Radio, RadioGroup, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material"
import { useState } from "react";

const Personalizada = ({cart, addToCart}) => {
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
            precio: 0,
        },
        {
            id: 1,
            nombre: "Extra",
            precio: 500,
        },
        {
            id: 2,
            nombre: "Doble",
            precio: 1000,
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
            precio: 7000,
        },
        {
            id: 1,
            nombre: "Mediana",
            precio: 10000,
        },
        {
            id: 2,
            nombre: "Familiar",
            precio: 12000,
        }
    ];

    const [total, setTotal] = useState(10000);
    const handleTotal = () => {
        let cantCarnes = detalle.carnes.length;
        let cantVegetales = detalle.vegetales.length;
        let base = detalle.tamanio.precio;
        let cantQueso = detalle.cantidadQueso.precio;
        let precio = base + cantQueso + (cantCarnes * 700 + cantVegetales * 500);
        setTotal(precio);
    };

    

    const [detalle, setDetalle] = useState({
        carnes: [],
        vegetales: [],
        queso: quesos[0],
        cantidadQueso: cantQueso[0],
        masa: masas[0],
        tamanio: tamanios[1]
    });

    const generarDescripcion = () => {
        let carnes = "";
        let vegetales = "";
        let descripcion = "Ingredientes:"+ " Masa "+detalle.masa.nombre + ", Queso " + detalle.queso.nombre +"-"+detalle.cantidadQueso.nombre;
        if(detalle.vegetales.length > 0){
            vegetales = vegetales + ","
            vegetales = vegetales + detalle.vegetales.map((vegetal) => " "+vegetal);
        }
        if(detalle.carnes.length > 0){
            carnes = carnes + ","
            carnes = carnes + detalle.carnes.map((carne) => " "+carne);
        }
        return descripcion+carnes+vegetales;
    };

    const handleQueso = (e) => {
        const id = e.target.value;
        detalle.queso = quesos[id];
        setDetalle({ ...detalle });
    };

    const handleCantidadQueso = (e) => {
        const id = e.target.value;
        detalle.cantidadQueso = cantQueso[id];
        setDetalle({ ...detalle });

        handleTotal();
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

        handleTotal();
    };

    const handleCarne = (e, nCarnes) => {
        detalle.carnes = nCarnes;
        setDetalle({ ...detalle });
        handleTotal();
    };

    const hanldeVegetales = (e, nVegetales) => {
        detalle.vegetales = nVegetales;
        setDetalle({ ...detalle });
        handleTotal();
    };

    

    const generarOrder = () => {  
        console.log(generarDescripcion());
        let order = {
            "id": cart.length,
            "nombre": "TU PIZZA",
            "imagen": "https://cdn.tictuk.com/29ee7b0d-dc6d-0cc0-d2c6-479518774e5d/859107ed-ad95-2b27-f830-b0c0f5f42723.jpeg?a=cd37fbcc-8f6c-296f-7e2c-51933b994885",
            "descripcion": generarDescripcion(),
            "tamanio": detalle.tamanio.nombre,
            "cantidad": 1,
            "precio": total
        };
        addToCart(order);
    };

    const detallesInfo = () => {
        return (
            <Box>
                <Typography variant="h6">Tamaño: </Typography>
                <Typography variant="subtitle2"> {detalle.tamanio.nombre}</Typography>
                <Typography variant="h6">Masa: </Typography>
                <Typography variant="subtitle2"> {detalle.masa.nombre}</Typography>
                <Typography variant="h6">Queso: </Typography>
                <Typography variant="subtitle2">{detalle.queso.nombre}</Typography>
                <Typography variant="h6">Cantidad de queso: </Typography>
                <Typography variant="subtitle2">{detalle.cantidadQueso.nombre}</Typography>
                <Typography variant="h6">Carnes: </Typography>
                <Typography variant="subtitle2">{detalle.carnes.map((carne) => "+" + carne + " ")}</Typography>
                <Typography variant="h6">Vegetales: </Typography>
                <Typography variant="subtitle2">{detalle.vegetales.map((vegetal) => "+" + vegetal + " ")}</Typography>
            </Box>
        );
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
                        <Paper sx={{ p: 1, mt: 1, boxShadow: "0 0 2.5px 0 #000000" }}>
                            <Typography variant="h6">Carnes</Typography>
                            <Typography variant="subtitle2">+<b>$700</b> por cada uno</Typography>
                            <ToggleButtonGroup
                                value={detalle.carnes}
                                onChange={handleCarne}
                                aria-label="carnes"
                                sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', itemsAlign: 'center' }}
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
                        <Paper sx={{ p: 1, mt: 1, boxShadow: "0 0 2.5px 0 #000000"  }}>
                            <Typography variant="h6">Vegetales</Typography>
                            <Typography variant="subtitle2">+<b>$500</b> por cada uno</Typography>
                            <ToggleButtonGroup
                                value={detalle.vegetales}
                                onChange={hanldeVegetales}
                                aria-label="vegetales"
                                sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', itemsAlign: 'center' }}
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
                        <Paper sx={{ p: 1, mt: 1, boxShadow: "0 0 2.5px 0 #000000"  }}>
                            <Typography variant="h6">Queso</Typography>
                            <Typography variant="subtitle2">Elige un tipo de queso</Typography>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', itemsAlign: 'center' }}
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
                        <Paper sx={{ p: 1, mt: 1, boxShadow: "0 0 2.5px 0 #000000"  }}>
                            <Typography variant="h6">Cantidad queso</Typography>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', itemsAlign: 'center' }}
                            >
                                {cantQueso.map((cQ, index) => {
                                    return (
                                        <FormControlLabel
                                            key={index}
                                            value={index}
                                            name={cQ.nombre}
                                            label={cQ.nombre + "-$" + cQ.precio}
                                            control={<Radio />}
                                            checked={index === detalle.cantidadQueso.id ? true : false}
                                            onChange={handleCantidadQueso}
                                        />
                                    )
                                })}
                            </RadioGroup>
                        </Paper>
                        <Paper sx={{ p: 1, mt: 1, boxShadow: "0 0 2.5px 0 #000000"  }}>
                            <Typography variant="h6">Masa</Typography>
                            <Typography variant="subtitle2">Elige un tipo de masa</Typography>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', itemsAlign: 'center' }}
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
                        <Paper sx={{ p: 1, mt: 1, boxShadow: "0 0 2.5px 0 #000000"  }}>
                            <Typography variant="h6">Tamaño</Typography>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', itemsAlign: 'center' }}
                            >
                                {tamanios.map((t, index) => {
                                    return (
                                        <FormControlLabel
                                            key={index}
                                            value={index}
                                            name={t.nombre}
                                            label={t.nombre + "-$" + t.precio}
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
                        <Paper sx={{ p: 1, mt: 1, boxShadow: "0 0 2.5px 0 #000000" }}>
                            <Typography variant="h6">Detalle</Typography>
                            {detallesInfo()}
                            <hr></hr>
                            <Box
                                sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', itemsAlign: 'center' }}
                            >
                                <Typography variant="h5" sx={{ mt: 1 }}>Total: $<b>{total}</b></Typography>
                            </Box>
                            <Button
                                variant="contained"
                                sx={{ mt: 1, width: "100%" }}
                                size="small"
                                onClick={generarOrder}
                            >
                                Agregar al carrito
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>

    );
};

export default Personalizada;