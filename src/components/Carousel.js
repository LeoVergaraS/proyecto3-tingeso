import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import slider from "../data/slider";

const Imagenes = () => {
    return(
        <Carousel sx={{mt: 5, mb: 5}}>
            {slider.map(item => <Item key={item.id} item={item} />)}
        </Carousel>
    );
};

export default Imagenes;
