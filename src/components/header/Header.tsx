import Headerbg from "../../assets/header-backgorund.png"
import "./Header.css"

function Header(){
    return (
        <div className="header">
          <img src={Headerbg} alt="Imagem de fundo do header, tom roxo com as meninas no meio"/>
        </div>
    )
}

export default Header