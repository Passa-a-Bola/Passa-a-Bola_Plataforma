import "./Footer.css"
import { Link } from "react-router-dom"
import icon from "../../assets/icon_logo.png"

function Footer(){
  return (
		<footer className="roxo-bg font-inter-text px-12 py-6">
			<div className="flex items-center space-x-2 mb-4">
				<img src={icon} alt="logo passa a bola"/>
				<p className="font-bebas-neue-tit">Passa a Bola</p>
			</div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bebas-neue-sub">NOS SIGA EM OUTRAS REDES</h3>
          <ul className="space-y-1">
            <li><a href="https://www.instagram.com/passaabola/" target="_blank" className="underline">Instagram</a></li>
            <li><a href="https://www.youtube.com/@passabola" target="_blank" className="underline">YouTube</a></li>
            <li><a href="https://x.com/passaabola" target="_blank" className="underline">X</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bebas-neue-sub">PÁGINAS</h3>
          <ul className="space-y-1">
            <li><a href="#" className="underline">Calendário de jogos</a></li>
            <li><a href="#" className="underline">Sobre nós</a></li>
            <li><a href="#" className="underline">Notícias</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bebas-neue-sub">Fale com a gente!</h3>
          <Link to="/contato" className="underline">Contato</Link>
        </div>

        <div className="md:flex md:justify-end items-end mt-4 md:mt-0">
          <span className="text-sm">COPYRIGHT © Passa a Bola</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer