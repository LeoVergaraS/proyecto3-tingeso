import { Paper } from "@mui/material";

const Item = ({ item }) => {
    return (
        <Paper>
            <img src={item.image} alt={item.title} style={{ width: "100%", height: "65vh" }} />
            <h2 style={{display: "flex", justifyContent: "center", alignItem: "center"}}>{item.title}</h2>
        </Paper>
    );
};

export default Item;