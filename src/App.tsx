import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Calendario from './pages/calendario/Calendario';
import Noticias from './pages/noticias/Noticias';
import Perfil from './pages/perfil/Perfil';
import Sobre from './pages/sobre/Sobre';
import CadastroInicio from './pages/cadastro/CadastroInicio';
import CadastroJogadora from './pages/cadastro/CadastroJogadora';
import CadastroComum from './pages/cadastro/CadastroComum';
import FormularioJP from './pages/formulario/Formulario';
import Contato from './pages/contato/Contato';


function App() {

const [logado, setLogado] = useState(false);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrocomum" element={<CadastroComum/>} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/noticias" element={<Noticias />} />
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
    
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
