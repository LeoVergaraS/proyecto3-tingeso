import { Box, Container, Grid } from "@mui/material";

const Footer = () => {
    return (
        <footer>
            <Box
                px={{xs: 2, sm:10}}
                py={{xs: 5, sm: 7}}
                bgcolor="text.secondary"
                color="white"
            >
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={4}>
                            a
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            b
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            c
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    );
};

export default Footer;