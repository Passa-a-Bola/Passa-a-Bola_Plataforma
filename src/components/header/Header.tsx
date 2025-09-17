import Headerbg from "../../assets/header-background.png";
import Notificacao from "../../assets/Notificacao.png";

import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Lojinha from "../../assets/loja.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header relative">
      <Link to="/">
        <img
          src={Headerbg}
          alt="Imagem de fundo do header"
          className="w-full h-full object-cover"
        />
      </Link>


      <div className="absolute top-4 right-4 m-6">
        <Link to="/notificacao">
        <img
          src={Notificacao}
          alt="Ícone de notificação"

      <div className="absolute top-4 left-4 m-6">
        <Link to="/loja">
        <img
          src={Lojinha}
          alt="Ícone de loja"
          className="w-10 h-10"
          />
          </Link>
      </div>

      <nav>
        <div className="navbar rosa-bg font-bebas-neue-sub flex justify-center items-center py-1 shadow-xl">
          {/* Navbar Desktop */}
          <div className="hidden md:flex space-x-16">
            <Link to="/calendario" className="underline">Calendário</Link>
            <Link to="/noticias" className="underline">Notícias</Link>
            <Link to="/sobre" className="underline">Sobre nós</Link>
            <Link to="/perfil" className="underline">Perfil</Link>
          </div>

          {/* Hamburger Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? "X" : "☰"}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="rosa-bg font-bebas-neue items-center md:hidden flex flex-col space-y-2">
            <Link to="/calendario" className="underline">Calendário</Link>
            <Link to="/noticias" className="underline">Notícias</Link>
            <Link to="/sobre" className="underline">Sobre nós</Link>
            <Link to="/perfil" className="underline">Perfil</Link>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;