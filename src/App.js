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
  const loadCart = () => {
    if (localStorage.getItem('carro') === null) {
      return [];
    }
    else {
      let carro = JSON.parse(localStorage.getItem('carro'));
      return carro;
    }
  }

  const [cart, setCart] = useState(loadCart());
  localStorage.setItem('carro', JSON.stringify(cart));
  const [showCart, setShowCart] = useState(false);

  const saveCart = () => {
    localStorage.setItem('carro', JSON.stringify(cart));
  };

  const openCart = () => {
    setShowCart(true);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  const limpiarCarrito = () => {
    setCart([]);
    saveCart();
  }

  const eliminarItem = (id) => {
    let newCart = [];
    for(let i = 0; i < cart.length; i++){
      if(i !== id){
        newCart.push(cart[i]);
      }
    }
    setCart(newCart);
    saveCart();
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
    saveCart();
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
    saveCart();
  };

  const addToCartPersonalizada = (order) => {
    setCart([...cart, order]);
    saveCart();
  };

  return (
    <Layout 
      cart={cart}
      showCart={showCart}
      openCart={openCart}
      closeCart={closeCart}
      cleanCart={limpiarCarrito}
      deleteItem={eliminarItem}
    >
      <Container>
        <Routes>
          <Route path="/" element={<Index/>} exact/>
          <Route path="/menu" element={<Menu addToCart={addToCart} addToCartByS={addToCartBebidaYSalsa}/>} exact/>
          <Route path="/tupizza" element={<Personalizada cart={cart} addToCart={addToCartPersonalizada}/>} exact/>
          <Route path="/pago" element={<Pago cart={cart}/>} exact/>
        </Routes>
      </Container>
    </Layout>
  );
}

export default App;
