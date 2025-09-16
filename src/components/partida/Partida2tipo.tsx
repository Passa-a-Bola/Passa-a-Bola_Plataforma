import juventude from "../../assets/juventude.png"
import gremio from "../../assets/gremio.png"
import { Link } from "react-router-dom";

function PartidaAoVivo() {
  return (
    <div className=" w-80 h-52 rounded-2xl border cinza-claro-bg">
      <div className="relative font-bebas-neue">
        <span className="absolute top-2 bg-red-600 text-white text-xl px-7 py-0.7 transform -rotate-12">
          AO VIVO!
        </span>
        <span className="absolute top-2 right-2 bg-purple-500 text-white px-3 py-1 rounded-full">
          Campeonato
        </span>
      </div>

      <div className="px-6 py-6  space-y-3 mt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={juventude} alt="Juventude" className="w-12 h-12" />
            <span>Juventude</span>
          </div>
          <span className="text-xl font-bebas-neue">0</span>
        </div>

        <div className="flex items-center justify-between ">
          <div className="flex items-center space-x-2">
            <img src={gremio} alt="Grêmio" className="w-12 h-12" />
            <span>Grêmio</span>
          </div>
          <span className="text-xl font-bebas-neue">0</span>
        </div>
      </div>

      <hr className="border-t border-gray-400" />

      <div className="px-4 py-3 text-center">
        <Link
          to="/aovivo"
          className="underline font-bebas-neue-sub preto"
        >
          ACOMPANHE AQUI!
        </Link>
      </div>
    </div>
  );
}

export default PartidaAoVivo;
