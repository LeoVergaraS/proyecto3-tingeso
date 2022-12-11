import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Index from './pages/Index';
import Menu from './pages/Menu';

function App() {
  return (
    <Layout>
      <Container>
        <Routes>
          <Route path="/" element={<Index/>} exact/>
          <Route path="/menu" element={<Menu />} exact/>
        </Routes>
      </Container>
    </Layout>
  );
}

export default App;
