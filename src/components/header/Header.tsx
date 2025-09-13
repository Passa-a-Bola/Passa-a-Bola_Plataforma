import Headerbg from "../../assets/header-background.png"
import "./Header.css"
import { useState } from "react";

function Header(){  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <img src={Headerbg} alt="imagem de header menians do passa a bola fundo roxo" />
      <nav>
        <div className="navbar rosa-bg font-bebas-neue-sub flex justify-center items-center py-1 shadow-xl">
          {/*navbar desktop*/}
          <div className="hidden md:flex space-x-16">
            <a href="#" className="underline">Calendário</a>
            <a href="#" className="underline">Notícias</a>
            <a href="#" className="underline">Sobre nós</a>
            <a href="#" className="underline">Perfil</a>
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
            <a href="#" className="underline">Calendário</a>
            <a href="#" className="underline">Notícias</a>
            <a href="#" className="underline">Sobre nós</a>
            <a href="#" className="underline">Perfil</a>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header