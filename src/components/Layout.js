import Header from './Header';
import Footer from './Footer';
import Carro from './Carro';

const Layout = ({ children, cart, showCart, openCart, closeCart, cleanCart, deleteItem }) => {
    return (
        <>
            <Header openCart={openCart} cart={cart}/>
            <main>{children}</main>
            <Footer />
            <Carro cart={cart} show={showCart} closeCart={closeCart} clean={cleanCart} deleteI={deleteItem}/>
        </>
    );
};

export default Layout;