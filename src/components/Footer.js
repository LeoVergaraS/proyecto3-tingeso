import { Box, Container, Grid, Link } from "@mui/material";
import { LocalPizza } from "@mui/icons-material";
import { Typography } from "@mui/material";

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
                        <LocalPizza
                        href="/"
                        sx={{
                            //link to main page
                            display: { xs: 'none', md: 'flex' },
                            mr: 2,
                            //pointer
                            cursor: 'pointer'
                        }} />
                    <Typography variant="h5" noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 600,
                            letterSpacing: ".1rem",
                            color: "inherit",
                            textDecoration: "none"
                        }}
                    >
                        PIZZA VALO
                    </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box sx={{mb: 1}}>Pizza Valo</Box>
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
                        <Box sx={{mb: 1}}>Ayuda</Box>
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