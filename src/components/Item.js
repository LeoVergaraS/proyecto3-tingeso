import { Paper } from "@mui/material";

const Item = ({ item }) => {
    return (
        <Paper 
            sx={{display: "flex",justifyContent: "center",alignItem: "center", flexDirection: "column"}}
        >
            <img src={item.image} alt={item.title} style={{ marginLeft: "190px", width: "750px", height: "480px",display: "flex", justifyContent: "center", alignItem: "center" }} />
            <a href={item.href} style={{textDecoration: "none"}}><h2 style={{display: "flex", justifyContent: "center", alignItem: "center"}}>{item.title}</h2></a>
            
        </Paper>
    );
};

export default Item;