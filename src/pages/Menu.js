import { Box, Container, Grid, Typography } from "@mui/material";
import PizzaCard from "../components/PizzaCard";
import BebidaCard from "../components/BebidaCard";
import SalsaCard from "../components/SalsaCard";
import ElevateAppBar from "../components/NavbarE";
import pizzas from "../data/pizzas";
import bebidas from "../data/bebidas";
import salsas from "../data/salsas";

const Menu = ({addToCart, addToCartByS}) => {
    return (
        
        <div>
            <ElevateAppBar />
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
                                <PizzaCard key={index} pizza={pizza} addToCart={addToCart}/>
                            );
                        })}
                    </Grid>
                    <hr id="bebidas"></hr>
                    <Typography  variant="h6" sx={{ ml: 7 }}>Bebidas</Typography>
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