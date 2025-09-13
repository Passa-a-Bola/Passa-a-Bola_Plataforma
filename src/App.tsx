import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import Calendario from './pages/calendario/Calendario';
import Noticias from './pages/noticias/Noticias';
import Perfil from './pages/perfil/Perfil';
import Sobre from './pages/sobre/Sobre';
import Materia from './pages/materia/Materia';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/noticias" element={<Noticias />}>
          <Route path="materia" element={<Materia/>} />
        </Route>
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
