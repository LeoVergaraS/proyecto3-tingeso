import { AppBar, Box, Button, Container, Grid, Typography } from "@mui/material";
import PizzaCard from "../components/PizzaCard";
import BebidaCard from "../components/BebidaCard";
import SalsaCard from "../components/SalsaCard";
import pizzas from "../data/pizzas";
import bebidas from "../data/bebidas";
import salsas from "../data/salsas";

const Menu = ({ addToCart, addToCartByS }) => {
    return (
        <div>
            <AppBar sx={{
                mt: 8,
                backgroundColor: 'transparent',
                boxShadow: 'none',
            }}>
                <Box
                    sx={{
                        flexGrow: 1,
                        display: { xs: 'flex', md: 'flex' },
                        justifyContent: 'right',
                        alignItems: 'center',
                    }}
                >
                    <Button
                        href="#pizzas"
                        sx={{
                            my: 2, px: 2, color: "black", display: "block",
                            backgroundColor: '#FFF',
                            mx: 2,
                            border: '1px solid #008000',
                            boxShadow: '0 0 10px 0 #000000',
                            borderRadius: '15px',
                            '&:hover': {
                                backgroundColor: '#B5B2B2',
                            },
                        }}
                    >
                        Pizzas
                    </Button>
                    <Button
                        href="#bebidas"
                        sx={{
                            my: 2, px: 2, color: "black", display: "block",
                            backgroundColor: '#FFF',
                            border: '1px solid 	#008000',
                            boxShadow: '0 0 10px 0 #000000',
                            borderRadius: '15px',
                            '&:hover': {
                                backgroundColor: '#B5B2B2',
                            },
                        }}
                    >
                        Bebidas
                    </Button>
                    <Button
                        href="#salsas"
                        sx={{
                            my: 2, px: 2, color: "black", display: "block",
                            mx: 2,
                            backgroundColor: '#FFF',
                            border: '1px solid 	#008000',
                            boxShadow: '0 0 10px 0 #000000',
                            borderRadius: '15px',
                            '&:hover': {
                                backgroundColor: '#B5B2B2',
                            },
                        }}
                    >
                        Salsas
                    </Button>
                </Box>
            </AppBar>
            <Box sx={{ mt: 4 }}>
                <Container maxWidth="lg">
                    <Typography variant="h5" sx={{ ml: 7 }}>Menú</Typography>
                    <Box id="pizzas">
                        <hr />
                        <Typography variant="h6" sx={{ ml: 7 }}>Pizzas</Typography>
                        <Grid
                            container
                            justifyContent={"center"}
                            sx={{ margin: "20px 4px 10px 4px" }}
                        >
                            {pizzas.map((pizza, index) => {
                                return (
                                    <PizzaCard key={index} pizza={pizza} addToCart={addToCart} />
                                );
                            })}
                        </Grid>
                    </Box>
                    <Box id="bebidas">
                        <hr />
                        <Typography variant="h6" sx={{ ml: 7 }}>Bebidas</Typography>
                        <Grid
                            container
                            justifyContent={"center"}
                            sx={{ margin: "20px 4px 10px 4px" }}
                        >
                            {bebidas.map((bebida, index) => {
                                return (
                                    <BebidaCard key={index} bebida={bebida} addToCart={addToCartByS} />
                                );
                            })}
                        </Grid>
                    </Box>
                    <Box id="salsas">
                        <hr />
                        <Typography variant="h6" sx={{ ml: 7 }}>Salsas</Typography>
                        <Grid
                            container
                            justifyContent={"center"}
                            sx={{ margin: "20px 4px 10px 4px" }}
                        >
                            {salsas.map((salsa, index) => {
                                return (
                                    <SalsaCard key={index} salsa={salsa} addToCart={addToCartByS} />
                                );
                            })}
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </div>
    );
};

export default Menu;