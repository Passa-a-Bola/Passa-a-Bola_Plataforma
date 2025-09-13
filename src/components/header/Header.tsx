import Headerbg from "../../assets/header-background.png"
import "./Header.css"
import { Link } from "react-router-dom";
import { useState } from "react";

function Header(){  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <Link to="/">
        <img src={Headerbg} alt="imagem de header menians do passa a bola fundo roxo" />
      </Link>
      <nav>
        <div className="navbar rosa-bg font-bebas-neue-sub flex justify-center items-center py-1 shadow-xl">
          {/*navbar desktop*/}
          <div className="hidden md:flex space-x-16">
            <Link to="/calendario" className="underline">Calendário</Link>
            <Link to="/noticias" className="underline">Notícias</Link>
            <Link to="/sobre" className="underline">Sobre nós</Link>
            <Link to="/perfil" className="underline">Perfil</Link>
          </div>

          {/*hamburger mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? "X" : "☰"}
            </button>
          </div>
        </div>

        {/* menu mobile */}
        {isOpen && (
          <div className=" rosa-bg font-bebas-neue items-center md:hidden flex flex-col space-y-2 ">
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

export default Header