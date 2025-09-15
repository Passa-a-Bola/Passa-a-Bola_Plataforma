import juventude from "../../assets/juventude.png"
import gremio from "../../assets/gremio.png"
import { Link } from "react-router-dom";

function Partida(){
  return (
  <div className="w-80 rounded-2xl border cinza-claro-bg overflow-hidden">
      <div className="flex justify-between items-center">
        <span className="italic pl-6">Semifinal <span>17:00</span></span>
        <span className="px-5 rounded-full font-bebas-neue-sub rosa-bg">CONCLUIDO</span>
      </div>

      <div className="px-4 py-2 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={juventude} alt="Juventude" className="w-12 h-12" />
            <span>Juventude</span>
          </div>
          <span className="font-bebas-neue-tit">0</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={gremio} alt="Grêmio" className="w-12 h-12" />
            <span>Grêmio</span>
          </div>
          <span className="font-bebas-neue-tit">0</span>
        </div>
      </div>
      <hr className="border-t border-gray-400 mb-2 mt-2"/>
      <div className="border-t px-4 py-2 text-center">
        <Link to="/resumo" className="underline font-bebas-neue-sub preto">SAIBA O QUE ROLOU →</Link>
      </div>
    </div>
  )
}

export default Partida