import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";

export default function ElevateAppBar(props) {
    const sections = [
        { title: 'Pizzas', url: '#pizzas' },
        { title: 'Bebidas', url: '#bebidas' },
        { title: 'Salsas', url: '#salsas' },
    ];

    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                <Box sx={{
                        flexGrow: 1,
                        display: { xs: "flex", md: "flex" },
                        justifyContent: "center",
                        alignItems: "center",
                        mr: 20
                    }}>

                        {sections.map((section) => (
                        <Button
                            key={section.url}
                            href={section.url}
                            sx={{ my: 2, px: 2,color: "white", display: "block" }}
                        >
                            {section.title}
                        </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}