import "./App.css";
import type { ReactNode } from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

// componentes
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// paginas
import Home from "./pages/comum/home/Home";
import HomeJogadora from "./pages/jogadora/homeJogadora/HomeJogadora";
import Login from "./pages/login/Login";
import Calendario from "./pages/calendario/Calendario";
import Noticias from "./pages/noticias/Noticias";
import PerfilJogadora from "./pages/jogadora/perfilJogadora/PerfilJogadora";
import PerfilComum from "./pages/comum/perfil/PerfilComum";
import Sobre from "./pages/sobre/Sobre";
import CadastroInicio from "./pages/cadastro/CadastroInicio";
import CadastroJogadora from "./pages/cadastro/CadastroJogadora";
import CadastroComum from "./pages/cadastro/CadastroComum";
import FormularioJP from "./pages/formulario/Formulario";
import Contato from "./pages/contato/Contato";
import Materia from "./pages/materia/Materia";
import Resumo from "./pages/resumo/Resumo";
import Aovivo from "./pages/aovivo/Aovivo";

// iniciar a pagina sempre no topo
function ScrollToTop() {
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);
  return null;
}

// validacao de usuario comum ou jogadora
interface PrivateRouteProps {
  tipoUsuario: string | null;
  permitidoPara: string;
  children: ReactNode;
}

function PrivateRoute({
  tipoUsuario,
  permitidoPara,
  children,
}: PrivateRouteProps) {
  if (!tipoUsuario) return <Navigate to="/login" replace />;
  if (tipoUsuario !== permitidoPara) return <Navigate to="/login" replace />;
  return <>{children}</>;
}

function App() {
  const [logado, setLogado] = useState(false);
  const [tipoUsuario, setTipoUsuario] = useState<string | null>(null);

  return (
    <Router>
      <ScrollToTop />
      <Header />

      {/* rota home comum */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* rota home jogadora */}
        <Route
          path="/home-jogadora"
          element={
            <PrivateRoute tipoUsuario={tipoUsuario} permitidoPara="jogadora">
              <HomeJogadora />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <Login
              setLogado={setLogado}
              setTipoUsuario={setTipoUsuario}
              logado={logado}
              tipoUsuario={tipoUsuario}
            />
          }
        />
        <Route path="/cadastrocomum" element={<CadastroComum />} />
        <Route path="/cadastroinicio" element={<CadastroInicio />} />
        <Route path="/cadastrojogadora" element={<CadastroJogadora />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/formulariojp" element={<FormularioJP />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/materia" element={<Materia />} />
        <Route path="/resumo" element={<Resumo />} />
        <Route path="/aovivo" element={<Aovivo />} />

        {/* rota de perfil jogadora */}
        <Route
          path="/perfil"
          element={
            <PrivateRoute tipoUsuario={tipoUsuario} permitidoPara="jogadora">
              <PerfilJogadora
                setLogado={setLogado}
                setTipoUsuario={setTipoUsuario}
              />
            </PrivateRoute>
          }
        />
        {/* rota de perfil comum */}
        <Route
          path="/perfil-comum"
          element={
            <PrivateRoute tipoUsuario={tipoUsuario} permitidoPara="comum">
              <PerfilComum
                setLogado={setLogado}
                setTipoUsuario={setTipoUsuario}
              />
            </PrivateRoute>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
