import "./Footer.css"
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
            <li><a href="#" className="underline">Instagram</a></li>
            <li><a href="#" className="underline">YouTube</a></li>
            <li><a href="#" className="underline">X</a></li>
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
          <h3 className="font-bebas-neue-sub">CONTATO</h3>
          <a href="mailto:passaabola@contato.com" className="underline">passaabola@contato.com</a>
        </div>

        <div className="md:flex md:justify-end items-end mt-4 md:mt-0">
          <span className="text-sm">COPYRIGHT © Passa a Bola</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer