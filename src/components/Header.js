import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Container, Toolbar, Typography, Box, Button, Badge } from "@mui/material";
import pages from "../data/pages";

const Header = () => {
    return (
        <AppBar position="static" style={{background: "blue"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h5"
                    >
                        Header
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {xs: "none", md: "flex"},
                            justifyContent: "center",
                            alignItems: "center",
                            mr: 20
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page.href}
                                href={page.href}
                                sx={{
                                    my: 2,
                                    px: 2,
                                    color: "white",
                                    display: "block",
                                }}
                            >
                                {page.text}
                            </Button>
                        ))}
                    </Box>
                    <Box>
                        <Badge badgeContent={0} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;