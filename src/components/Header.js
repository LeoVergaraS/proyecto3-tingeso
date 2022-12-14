import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Container, Toolbar, Typography, Box, Button, Badge, IconButton, Menu } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import pages from "../data/pages";
import { LocalPizza } from "@mui/icons-material";

const Header = ({cart, openCart}) => {

    const [anchorNav, setAnchorNav] = useState(null);

    const handleOpenNavMenu = (event) => { setAnchorNav(event.currentTarget); };
    const handleCloseNavMenu = () => { setAnchorNav(null); };

    return (
        <AppBar position="sticky" style={{ background: "blue" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Responsive Title XL */}
                    <LocalPizza
                        href="/"
                        sx={{
                            //link to main page
                            display: { xs: 'none', md: 'flex' },
                            //pointer
                            cursor: 'pointer'
                        }} />
                    <Typography variant="h5" noWrap
                        component="a"
                        href="/"
                        sx={{
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
                    {/* Responsive XS */}
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left"
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left"
                            }}
                            open={Boolean(anchorNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" }
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.href}
                                    href={page.href}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">{page.text}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/* Responsive Title XS*/}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                        mr: 2,
                        display: { xs: "flex", md: "none" },
                        flexGrow: 1,
                        fontFamily: "monospace",
                        fontWeight: 600,
                        letterSpacing: ".1rem",
                        color: "inherit",
                        textDecoration: "none"
                        }}
                    >
                        PIZZA VALO
                    </Typography>
                    {/* Responsive XL */}
                    <Box sx={{
                        flexGrow: 1,
                        display: { xs: "none", md: "flex" },
                        justifyContent: "center",
                        alignItems: "center",
                        mr: 18
                    }}>
                        {pages.map((page) => (
                        <Button
                            key={page.href}
                            href={page.href}
                            sx={{ my: 2, px: 2,color: "white", display: "block" }}
                        >
                            {page.text}
                        </Button>
                        ))}
                    </Box>
                    
                    <Box>
                        <Badge badgeContent={cart && cart.length} color="secondary">
                            <ShoppingCart sx={{cursor: "pointer"}}onClick={() => openCart()}/>
                        </Badge>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;