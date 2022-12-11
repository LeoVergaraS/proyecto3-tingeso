import Header from './Header';
import Footer from './Footer';
import Carro from './Carro';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
            <Carro/>
        </>
    );
};

export default Layout;