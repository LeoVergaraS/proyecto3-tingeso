import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import slider from "../data/slider";

const Imagenes = () => {
    return (
        <Carousel sx={{ mt: 2, mb: 2 }}>
            {slider.map(item => <Item key={item.id} item={item} />)}
        </Carousel>
    );
};

export default Imagenes;
