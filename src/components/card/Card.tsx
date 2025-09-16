import React from "react";

interface CardProps {
  numero: string;
  posicao: string;
  fotoTime: string;
  bandeira: string;
  alturaPeso: string;
  sm: string;
  wf: string;
  nomeJogadora: string;
  fotoJogadora: string;
}

export default function Card({
  numero,
  posicao,
  fotoTime,
  bandeira,
  alturaPeso,
  sm,
  wf,
  nomeJogadora,
  fotoJogadora,
}: CardProps) {
  return (
    <div className="flex bg-[var(--cor-6)] rounded-2xl shadow-lg w-72 h-[340px]">
      {/* Faixa lateral rosa mais escura */}
      <div className="bg-[var(--cor-5)] w-20 flex flex-col items-center justify-start py-4 rounded-l-2xl">
        <span className="text-white text-3xl font-bebas-neue font-bold">{numero}</span>
        <span className="text-white text-2xl font-bebas-neue font-semibold">{posicao}</span>

        <img src={fotoTime} alt="Time" className="w-10 h-10 mt-4" />
        <img src={bandeira} alt="Bandeira" className="w-10 h-7 mt-3" />

        <span className="text-white text-lg mt-6 font-bebas-neue">{alturaPeso}</span>
        <span className="text-white text-lg mt-2 font-bebas-neue">{sm}</span>
        <span className="text-white text-lg mt-2 font-bebas-neue">{wf}</span>
      </div>

      {/* Parte principal (rosa claro) */}
      <div className="flex-1 flex items-end justify-center relative bg-[var(--cor-6)] rounded-r-2xl">
        {/* Foto da jogadora atrás da caixa roxa */}
        <img
          src={fotoJogadora}
          alt={nomeJogadora}
          className="absolute bottom-28 w-48 h-auto object-contain z-0"
        />

        {/* Caixa roxa menor */}
        <div className="bg-[var(--cor-9)] text-white rounded-xl p-3 w-44 text-center mb-2 relative z-10">
          <h4 className="text-2xl font-bebas-neue font-bold">{nomeJogadora}</h4>
          <div className="mt-3 text-lg leading-7 font-bebas-neue">
            <p>99 PAC &nbsp;&nbsp;&nbsp; 89 DRI</p>
            <p>89 SHO &nbsp;&nbsp;&nbsp; 99 DEF</p>
            <p>90 PAS &nbsp;&nbsp;&nbsp; 87 PHY</p>
          </div>
        </div>
      </div>
    </div>
  );
}
