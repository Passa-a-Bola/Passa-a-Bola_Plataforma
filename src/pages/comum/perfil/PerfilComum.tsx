import usuarioTeste from "../../../assets/usuarioTeste.png";
import Partida from "../../../components/partida/Partida";
import { Link } from "react-router-dom";
import dudinha from "../../../assets/dudinha.png";
import parceria from "../../../assets/parceria.png";

import Card from "../../../components/card/Card";

import RealMadrid from "../../../assets/RealMadrid.png";
import NY from "../../../assets/NY.png";
import SPFC from "../../../assets/SPFC.png";
import BrasilMini from "../../../assets/BrasilMini.png";
import Antonia from "../../../assets/Antonia.png";
import Bruninha from "../../../assets/Bruninha.png";
import BrunaCalderan from "../../../assets/BrunaCalderan.png";

interface PerfilProps {
  setLogado: React.Dispatch<React.SetStateAction<boolean>>;
  setTipoUsuario: React.Dispatch<React.SetStateAction<string | null>>;
}

function PerfilComum({ setLogado, setTipoUsuario }: PerfilProps) {
  const handleLogout = () => {
    setLogado(false);
    setTipoUsuario(null);
  };

  return (
    <div className="m-4">
      {/* Header do Perfil */}
      <div className="w-full flex flex-col md:flex-row items-center md:items-center justify-between bg-[var(--cor-7)] p-6 pl-6 md:pl-12 min-h-64 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center md:items-center">
          <img
            alt="Foto do usuário"
            className="max-w-32 max-h-32 rounded-full mx-auto md:mx-0 md:mr-8 mb-4 md:mb-0"
            src="/src/assets/usuarioTeste.png"
          />
          <div className="flex flex-col justify-center ml-0 md:ml-6 text-center md:text-left">
            <h2 className="preto font-bebas-neue-tit">Nome do Usuário</h2>
            <p className="preto mt-2 font-bebas-neue-sub">usuario@email.com</p>
            <button className="mt-4 px-6 py-3 rounded-full bg-[var(--cor-9)] branco font-bebas-neue-sub font-bold hover:opacity-90 transition">
              Editar Perfil
            </button>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="mt-6 md:mt-0 px-10 py-3 rounded-full bg-[var(--cor-9)] text-white text-2xl font-bebas-neue font-bold hover:opacity-90 transition"
        >
          Sair
        </button>
      </div>

      {/* Sobre mim */}
      <div className="mt-6 flex justify-center px-6">
        <div className="bg-[var(--cor-9)] rounded-2xl px-6 md:px-12 py-10 w-full md:w-3/4 shadow-lg text-center">
          <h3 className="text-white text-2xl font-bebas-neue font-bold">
            Sobre mim
          </h3>
          <p className="text-white text-base mt-2 font-normal">
            Esse usuário não adicionou ainda
          </p>
        </div>
      </div>

      {/* Jogos salvos */}
      <div className="mt-12 px-6 md:px-12">
        <h3 className="text-black text-4xl font-bebas-neue font-bold">
          Seus jogos salvos:
        </h3>
      </div>

      <div className="mt-4 px-6 md:px-12 flex flex-col md:flex-row justify-between gap-6">
        <Partida />
        <Partida />
        <Partida />
      </div>

      {/* Time favorito */}
      <div className="mt-12 px-6 md:px-12">
        <h3 className="text-purple-600 text-4xl font-bebas-neue font-bold">
          Seu time favorito: Time X
        </h3>
      </div>

      {/* Notícias */}
      <div className="mt-12 px-6 md:px-12">
        <h3 className="text-black text-4xl font-bebas-neue font-bold">Notícias</h3>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card Dudinha */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 bg-[var(--cor-5)] shadow-md overflow-hidden rounded-lg">
            <img
              src={dudinha}
              alt="Notícia"
              className="w-full md:w-48 h-40 object-cover ml-0 md:ml-2 rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
            />
            <div className="p-4 text-center md:text-left">
              <Link
                to="/materia"
                className="hover:text-white transition-colors duration-300 text-2xl block"
              >
                Elogiada por Marta e Formiga: Conheça Dudinha
              </Link>
              <p className="text-sm text-white mt-2">
                Jogadora do São Paulo marcou dois dos três gols na vitória da Seleção contra as japonesas
              </p>
            </div>
          </div>

          {/* Card Parceria */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 bg-[var(--cor-5)] shadow-md overflow-hidden rounded-lg">
            <img
              src={parceria}
              alt="Notícia"
              className="w-full md:w-48 h-40 object-cover ml-0 md:ml-2 rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
            />
            <div className="p-4 text-center md:text-left">
              <Link
                to="/materia"
                className="hover:text-white transition-colors duration-300 text-2xl block"
              >
                “Parceria de Sucesso”: Dupla Ex-Corinthians fortalece relação
              </Link>
              <p className="text-sm text-white mt-2">
                Arthur Elias e Cris Gambaré trocam experiências há dez anos e buscam evoluir o futebol feminino
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Jogos */}
      <div className="mt-12 px-6 md:px-12">
        <h3 className="text-black text-4xl font-bebas-neue font-bold">Jogos</h3>
      </div>

      <div className="mt-4 px-6 md:px-12 flex flex-col md:flex-row justify-between gap-6">
        <Partida />
        <Partida />
        <Partida />
      </div>

      {/* Jogadoras Favoritas */}
      <div className="mt-12 px-6 md:px-12">
        <h3 className="text-black text-4xl font-bebas-neue font-bold">
          Jogadoras Favoritas
        </h3>

        <div className="mt-4 flex justify-center gap-10 md:gap-20 flex-wrap max-w-[1200px] mx-auto">
          <Card
            numero="99"
            posicao="RB"
            fotoTime={RealMadrid}
            bandeira={BrasilMini}
            alturaPeso="H/M"
            sm="2.SM"
            wf="3.WF"
            nomeJogadora="Antônia"
            fotoJogadora={Antonia}
          />
          <Card
            numero="99"
            posicao="RB"
            fotoTime={NY}
            bandeira={BrasilMini}
            alturaPeso="H/M"
            sm="2.SM"
            wf="3.WF"
            nomeJogadora="Bruninha"
            fotoJogadora={Bruninha}
          />
          <Card
            numero="99"
            posicao="RB"
            fotoTime={SPFC}
            bandeira={BrasilMini}
            alturaPeso="H/M"
            sm="2.SM"
            wf="3.WF"
            nomeJogadora="Bruna Calderan"
            fotoJogadora={BrunaCalderan}
          />
        </div>
      </div>
    </div>
  );
}

export default PerfilComum;
