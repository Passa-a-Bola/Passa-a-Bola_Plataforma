import { Link } from "react-router-dom";

import Card from "../../../components/card/Card";
import RealMadrid from "../../../assets/RealMadrid.png";
import NY from "../../../assets/NY.png";
import SPFC from "../../../assets/SPFC.png";
import BrasilMini from "../../../assets/BrasilMini.png";
import Antonia from "../../../assets/Antonia.png";
import Bruninha from "../../../assets/Bruninha.png";
import BrunaCalderan from "../../../assets/BrunaCalderan.png";

import container from "../../../assets/container2.png";
import bola from "../../../assets/bola.png";
import calendario from "../../../assets/calendario.png";
import formulario from "../../../assets/formulario.png";
import atencao from "../../../assets/atencao.png";

function HomeJogadora() {
  return (
    <div className="px-10 py-5 branco-bg">
      <div className="flex items-stretch flex-col md:flex-row items-center mt-6"
           style={{ boxShadow: " rgba(0, 0, 0, 0.45) 0px 25px 20px -20px" }}>
        <img
          src={container}
          alt="Jogadoras da seleção feminina do Brasil comemorando"
          className="md:w-1/2 object-cover max-h-64"
        />
        <div className="w-full flex flex-col roxo-bg justify-center p-4 space-y-1">
          <img
            src={bola}
            alt="ícone bola de futebol"
            className="md:w-1/2 object-cover max-w-12"
          />
          <p className="font-bebas-neue-tit md:text-left ">e torne uma jogadora profissional</p>
          <p className="font-inter max-w-9124 text-wrap">Dê os primeiros passos da sua carreira com a gente! Aqui no Passa a Bola, você tem acesso a peneiras, partidas, dicas de como crescer e apoio da nossa equipe</p>
          <div>
            <Link to="/formulario" className="botao rosa-bg py-1 px-4 rounded-full font-inter font-bold my-3 shadow-lg">
              Preencha aqui para participar →
            </Link>
          </div>
        </div>
      </div>

      <div className="font-inter flex-col flex justify-center items-center my-16">
        <p className="font-bebas-neue-tit roxo my-4">cresca començando por aqui</p>
        <div className="flex flex-col md:flex-row gap-4">
          <Link to="/calendario" className="flex flex-1 flex-col justify-center items-center text-center bg-white rounded-lg shadow-lg p-5 saltar">
            <img
              src={calendario}
              alt="ícone de calendário"
              className="max-w-12"
            />
            <p className="font-bold rosa">Participe dos eventos</p>
            <p className="">Sempre que puder, <span className="bg-rose-200 px-3 rounded-full">se inscreva nas peneiras,</span> campeonatos e partidas divulgados aqui</p>
          </Link>
          <Link to="/formulario" className="flex flex-1 flex-col justify-center items-center text-center bg-white rounded-lg shadow-lg p-5 saltar">
            <img
              src={formulario}
              alt="ícone de formulário"
              className="max-w-12"
            />
            <p className="font-bold rosa">Preencha o formulário</p>
            <p className="">A única forma de participar dos eventos que organizamos e oferecemos aqui é, primeiramente, preencher o <span className="bg-rose-200 px-3 rounded-full">
                formulário da jogadora
              </span>
            </p>
          </Link>
          <Link
            to="/noticias"
            className="flex flex-1 flex-col justify-center items-center text-center bg-white rounded-lg shadow-lg p-5 saltar"
          >
            <img src={atencao} alt="ícone de atenção" className="max-w-12" />
            <p className="font-bold rosa">Fique atenta</p>
            <p className="">
              É sempre bom <span className="bg-rose-200 px-3 rounded-full">se manter atualizada</span>sobre todas as notícias e eventos que postamos aqui no site!</p>
          </Link>
        </div>
        <div className="my-6">
          <Link to="/formulario" className="botao verde-bg py-1 px-4 rounded-full font-inter font-bold my-3 shadow-lg">Preencher o formulário →</Link>
        </div>
        <p className="font-bebas-neue-tit roxo mt-12">JOGADORAS EM DESTAQUE</p>
        <p className="font-inter">Veja as jogadoras que brilharam esse mês!</p>
        <div className="mt-4 flex justify-center gap-20 flex-wrap max-w-[1200px] mx-auto">
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
        <p className="font-bebas-neue-tit roxo mt-16">MURAL DE OPORTUNIDADES</p>
        <p className="font-inter">
          ⚠️ atenção! preencha o formulário e crie seu perfil profissional para
          acessar o mural
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col justify-center items-center text-center rosa-bg rounded-2xl saltar shadow-lg px-6 py-2 max-w-64 font-inter my-4">
            <p> Time Sub-20 em Belo Horizonte procura zagueira</p>
            <hr className="w-full border-t branco my-3" />
            <p>saiba mais </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center rosa-bg rounded-2xl saltar shadow-lg px-6 py-2 max-w-64 font-inter my-4">
            <p>Seleção regional em Brasília para torneio estadual! Formulário
              disponível até 20/06</p>
            <hr className="w-full border-t branco my-3" />
            <p>saiba mais </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center rosa-bg rounded-2xl saltar shadow-lg px-6 py-2 max-w-64 font-inter my-4">
            <p>Equipe feminina Sub-17 em São Paulo busca goleira para campeonato
              escolar</p>
            <hr className="w-full border-t branco my-3" />
            <p>saiba mais </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center rosa-bg rounded-2xl saltar shadow-lg px-6 py-2 max-w-64 font-inter my-4">
            <p>Peneira aberta em Curitiba para atacantes interessadas em integrar
              projeto social</p>
            <hr className="w-full border-t branco my-3" />
            <p>saiba mais </p>
          </div>
        </div>
        
        <p className="font-bebas-neue-tit roxo mt-16">
  PRÓXIMAS SELETIVAS / CAMPEONATOS PROFISSIONAIS
</p>
<p className="font-inter">
  ⚠️ atenção! preencha o formulário e crie seu perfil profissional para acessar as seletivas
</p>

<div className="flex flex-col md:flex-row gap-4">
  <div className="flex flex-col text-center rounded-2xl saltar shadow-lg max-w-64 font-inter my-4 overflow-hidden">
    <div className="verde-bg font-bebas-neue-tit branco w-full py-2 font-bold">
      PAB - ENCONTRO
    </div>
    <div className="verde-claro-bg flex flex-col justify-center items-center px-6 py-4">
      <p>São Paulo, SP</p>
      <p>50 Vagas</p>
      <p>A partir de 16 anos</p>
      <button className="mt-3 px-4 py-1 rounded-lg bg-branco text-verde font-semibold hover:opacity-80 transition">
        Saiba Mais
      </button>
    </div>
  </div>

  <div className="flex flex-col text-center rounded-2xl saltar shadow-lg max-w-64 font-inter my-4 overflow-hidden">
    <div className="verde-bg font-bebas-neue-tit branco w-full py-2 font-bold">
      COPA REGIONAL
    </div>
    <div className="verde-claro-bg flex flex-col justify-center items-center px-6 py-4">
      <p> Belo Horizonte, MG</p>
      <p> 80 Vagas</p>
      <p> A partir de 15 anos</p>
      <button className="mt-3 px-4 py-1 rounded-lg bg-branco text-verde font-semibold hover:opacity-80 transition">
        Saiba Mais
      </button>
    </div>
  </div>

  <div className="flex flex-col text-center rounded-2xl saltar shadow-lg max-w-64 font-inter my-4 overflow-hidden">
    <div className="verde-bg font-bebas-neue-tit branco w-full py-2 font-bold">
      TORNEIO NACIONAL
    </div>
    <div className="verde-claro-bg flex flex-col justify-center items-center px-6 py-4">
      <p> Curitiba, PR</p>
      <p> 100 Vagas</p>
      <p> A partir de 17 anos</p>
      <button className="mt-3 px-4 py-1 rounded-lg bg-branco text-verde font-semibold hover:opacity-80 transition">
        Saiba Mais
      </button>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}

export default HomeJogadora;
