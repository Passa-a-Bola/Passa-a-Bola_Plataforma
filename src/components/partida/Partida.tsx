import { Link } from "react-router-dom";

interface Time {
  nome: string;
  imagem: string;
  gols: string | number;
}

interface PartidaProps {
  campeonato: string;
  horario: string;
  status: string;
  timeA: Time;
  timeB: Time;
}

function Partida({ campeonato, horario, status, timeA, timeB }: PartidaProps) {
  return (
  <div className="w-80 font-inter rounded-2xl border cinza-claro-bg overflow-hidden">
      <div className="flex justify-between items-center">
        <span className="italic pl-6">{campeonato} <span>{horario}</span></span>
        <span className={`px-5 rounded-full font-bebas-neue-sub text-white
    ${
      status === "ENCERRADO"
        ? "bg-gray-500"
        : status === "AGORA"
        ? "verde-bg"
        : "rosa-bg"
    }`}>{status}</span>
      </div>

      <div className="px-4 py-2 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={timeA.imagem} alt={timeA.nome} className="w-12 h-12 object-contain" />
            <span>{timeA.nome}</span>
          </div>
          <span className="font-bebas-neue-tit">{timeA.gols}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={timeB.imagem} alt={timeB.nome} className="w-12 h-12 object-contain" />
            <span>{timeB.nome}</span>
          </div>
          <span className="font-bebas-neue-tit">{timeB.gols}</span>
        </div>
      </div>
      <div className="border-t px-4 py-2 text-center">
        <Link to="/resumo" className="underline font-bebas-neue-sub preto">SAIBA O QUE ROLOU →</Link>
      </div>
    </div>
  )
}

export default Partida