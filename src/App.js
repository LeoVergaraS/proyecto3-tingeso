import { Container } from '@mui/material';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Index from './pages/Index';
import Menu from './pages/Menu';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const openCart = () => {
    setShowCart(true);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  const addToCart = (order) => {
    let cartIndex = cart.findIndex(item => (
      item.id === order.id &&
      item.tamanio === order.tamanio ));
    let item = cart[cartIndex];
    if (item) {
      item.cantidad += order.cantidad;
      item.precio += order.precio;
      setCart(cart);
    }else{
      setCart([...cart, order]);
    }
  };

  return (
    <Layout 
      cart={cart}
      showCart={showCart}
      openCart={openCart}
      closeCart={closeCart}
    >
      <Container>
        <Routes>
          <Route path="/" element={<Index/>} exact/>
          <Route path="/menu" element={<Menu addToCart={addToCart}/>} exact/>
        </Routes>
      </Container>
    </Layout>
  );
}

export default App;
