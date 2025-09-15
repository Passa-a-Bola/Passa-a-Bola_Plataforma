import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import Calendario from './pages/calendario/Calendario';
import Noticias from './pages/noticias/Noticias';
import Perfil from './pages/perfil/Perfil';
import Sobre from './pages/sobre/Sobre';
import CadastroInicio from './pages/cadastro/CadastroInicio';
import CadastroJogadora from './pages/cadastro/CadastroJogadora';
import CadastroComum from './pages/cadastro/CadastroComum';
import FormularioJP from './pages/formulario/Formulario';
import Contato from './pages/contato/Contato';
import Materia from './pages/materia/Materia';
import Resumo from './pages/resumo/Resumo';


function App() {
  const [logado, setLogado] = useState(false);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/noticias" element={<Noticias/>}/>
        <Route path="/cadastroinicio" element={<CadastroInicio/>}/>
        <Route path="/cadastrojogadora" element={<CadastroJogadora/>}/>
        <Route
          path="/perfil"
          element={
            logado ? <Perfil /> : <Navigate to="/login" replace />
          }
        />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/formulariojp" element={<FormularioJP/>}/>
        <Route path="/contato" element={<Contato/>}/>
        <Route path="/materia" element={<Materia/>} /> 
        <Route path="/resumo" element={<Resumo/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;