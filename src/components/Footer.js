import { Box, Container, Grid, Link } from "@mui/material";
import logov2 from "../data/images/logov2.jpeg";

const Footer = () => {
    return (
        <footer>
            <Box
                px={{ xs: 2, sm: 10 }}
                py={{ xs: 5, sm: 7 }}
                bgcolor="text.secondary"
                color="white"
            >
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Pizza Valo</Box>
                            <Box>
                                <Link color="inherit" href="/menu">
                                    Menú
                                </Link>
                            </Box>
                            <Box>
                                <Link color="inherit" href="/tupizza">
                                    Arma tu pizza
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Ayuda</Box>
                        <Box>
                            <Link color="inherit" href="/">
                                Contacto
                            </Link>
                        </Box>
                        <Box>
                            <Link color="inherit" href="/">
                                Preguntas
                            </Link>
                        </Box>
                        <Box>
                            <Link color="inherit" href="/">
                                Despacho
                            </Link>
                        </Box>
                    </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    );
};

export default Footer;