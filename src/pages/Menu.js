import { AppBar, Box, Button, Container, Grid, Typography } from "@mui/material";
import PizzaCard from "../components/PizzaCard";
import BebidaCard from "../components/BebidaCard";
import SalsaCard from "../components/SalsaCard";
import ElevateAppBar from "../components/NavbarE";
import pizzas from "../data/pizzas";
import bebidas from "../data/bebidas";
import salsas from "../data/salsas";

const Menu = ({ addToCart, addToCartByS }) => {
    return (
        <div>
            <AppBar sx={{
                mt: 8,
                //without background
                backgroundColor: 'transparent',
                //without shadow
                boxShadow: 'none',
                //appbar only in the left
            }}>
                <Box
                    sx={{
                        flexGrow: 1,
                        display: { xs: 'none', md: 'flex', },
                        //without background

                    }}
                >
                    <Button
                        /* go to pizzas smooth scroll*/
                        href="#pizzas"
                        sx={{
                            my: 2, px: 2, color: "white", display: "block",
                            //background color
                            backgroundColor: '#8b0000',
                            //smooth scroll to the section
                            scrollBehavior: 'smooth',
                            //scroll just up the section

                            //space between buttons
                            mx: 2,
                            //buttons at the left
                            float: 'left',
                            //shadow of the button
                            boxShadow: '0 0 10px 0 #000000',
                            '&:hover': {
                                //slight pink
                                backgroundColor: '#ff5c8e',
                            },
                        }}
                    >
                        Pizzas
                    </Button>
                    <Button
                        /* go to bebestibles smooth scroll*/
                        href="#bebestibles"
                        sx={{
                            my: 2, px: 2, color: "white", display: "block",
                            backgroundColor: '#8b0000',
                            //shadow of the button
                            boxShadow: '0 0 10px 0 #000000',
                            //hover color
                            '&:hover': {
                                //slight pink
                                backgroundColor: '#ff5c8e',
                            },
                        }}
                    >
                        Bebestibles
                    </Button>
                    <Button
                        /* go to salsas smooth scroll*/
                        href="#salsas"
                        sx={{
                            my: 2, px: 2, color: "white", display: "block",
                            mx: 2,
                            backgroundColor: '#8b0000',
                            //shadow of the button
                            boxShadow: '0 0 10px 0 #000000',
                            //hover color
                            '&:hover': {
                                //slight pink
                                backgroundColor: '#ff5c8e',
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
                    <hr id="pizzas"></hr>
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
                    <hr id="bebidas"></hr>
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
                    <hr id="salsas"></hr>
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
                </Container>
            </Box>
        </div>
    );
};

export default Menu;