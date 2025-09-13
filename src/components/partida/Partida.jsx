import juventude from "../../assets/juventude.png"
import gremio from "../../assets/gremio.png"

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
      <hr class="border-t border-black preto-bg"/>
      <div className="border-t px-4 py-2 text-center">
        <a href="#" className="underline font-bebas-neue-sub preto">SAIBA O QUE ROLOU →</a>
      </div>
    </div>
  )
}

export default Partida