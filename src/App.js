import { Container } from '@mui/material';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Index from './pages/Index';
import Menu from './pages/Menu';
import Pago from './pages/Pago';
import Personalizada from './pages/Personalizada';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const openCart = () => {
    setShowCart(true);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  const limpirarCarrito = () => {
    setCart([]);
  }

  const eliminarItem = (id) => {
    let newCart = [];
    for(let i = 0; i < cart.length; i++){
      if(i !== id){
        newCart.push(cart[i]);
      }
    }
    setCart(newCart);
  }

  const addToCart = (order) => {
    let cartIndex = cart.findIndex(item => (
      item.id === order.id &&
      item.tamanio === order.tamanio &&
      item.nombre === order.nombre ));
    let item = cart[cartIndex];
    if (item) {
      item.cantidad += order.cantidad;
      item.precio += order.precio;
      setCart(cart);
    }else{
      setCart([...cart, order]);
    }
  };

  const addToCartBebidaYSalsa = (order) => {
    let cartIndex = cart.findIndex(item => (
      item.id === order.id &&
      item.nombre === order.nombre));
    let item = cart[cartIndex];
    if (item) {
      item.cantidad += order.cantidad;
      item.precio += order.precio;
      setCart(cart);
    }else{
      setCart([...cart, order]);
    }
  }

  return (
    <Layout 
      cart={cart}
      showCart={showCart}
      openCart={openCart}
      closeCart={closeCart}
      cleanCart={limpirarCarrito}
      deleteItem={eliminarItem}
    >
      <Container>
        <Routes>
          <Route path="/" element={<Index/>} exact/>
          <Route path="/menu" element={<Menu addToCart={addToCart} addToCartByS={addToCartBebidaYSalsa}/>} exact/>
          <Route path="/tupizza" element={<Personalizada />} exact/>
          <Route path="/pago" element={<Pago addToCart={addToCart} addToCartByS={addToCartBebidaYSalsa}/>} exact/>
        </Routes>
      </Container>
    </Layout>
  );
}

export default App;
