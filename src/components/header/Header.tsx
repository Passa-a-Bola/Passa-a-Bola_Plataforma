import Headerbg from "../../assets/header-background.png";
import Notificacao from "../../assets/Notificacao.png";

import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Lojinha from "../../assets/loja.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header mb-6 relative h-16 sm:h-28 md:h-full">
      <Link to="/">
        <img
          src={Headerbg}
          alt="Imagem de fundo do header"
          className="w-full h-full object-cover"
        />
      </Link>


      <div className="absolute right-3 top-3 sm:right-4 sm:top-4 md:right-6 md:top-6">
        <Link to="/notificacao">
        <img
          src={Notificacao}
          alt="Ícone de notificação"
          className="w-10 h-10 sm:w-9 sm:h-9 md:w-10 md:h-10"
          />
          </Link>
        </div>

      <div className="absolute left-3 top-3 sm:left-4 sm:top-4 md:left-6 md:top-6">
        <Link to="/loja">
        <img
          src={Lojinha}
          alt="Ícone de loja"
          className="w-10 h-10 sm:w-9 sm:h-9 md:w-10 md:h-10"
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
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl transition-transform duration-300">
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <div className={`rosa-bg font-bebas-neue md:hidden flex flex-col items-center space-y-2 overflow-hidden transition-all duration-500 ease-in-out transform ${
          isOpen ? "max-h-40 translate-y-0 py-2" : "max-h-0 -translate-y-4 py-0"
        }`}
        >
          <Link to="/calendario" className="underline">Calendário</Link>
          <Link to="/noticias" className="underline">Notícias</Link>
          <Link to="/sobre" className="underline">Sobre nós</Link>
          <Link to="/perfil" className="underline">Perfil</Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
