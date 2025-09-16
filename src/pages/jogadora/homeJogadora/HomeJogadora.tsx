import { Link } from "react-router-dom";

import container from "../../../assets/container2.png";
import bola from "../../../assets/bola.png";
import calendario from "../../../assets/calendario.png";
import formulario from "../../../assets/formulario.png";
import atencao from "../../../assets/atencao.png";

function HomeJogadora() {
  return (
      <div className="px-10 py-5 branco-bg">
      <div className="flex items-stretch flex-col md:flex-row items-center my-6"
        style={{ boxShadow: " rgba(0, 0, 0, 0.45) 0px 25px 20px -20px" }}>
        <img src={container}
          alt="Jogadoras da seleção feminina do Brasil comemorando"
          className="md:w-1/2 object-cover max-h-64"/>
        <div className="w-full flex flex-col roxo-bg justify-center p-4 space-y-1">
          <img src={bola} alt="ícone bola de futebol" className="md:w-1/2 object-cover max-w-12"/>
          <p className="font-bebas-neue-tit md:text-left ">Se torne uma jogadora profissional</p>
          <p className="font-inter max-w-9124 text-wrap">Dê os primeiros passos da sua carreira com a gente! Aqui no Passa a Bola, você tem acesso a peneiras, partidas, dicas de como crescer e apoio da nossa equipe</p>
          <div>
            <Link to="/formulario" className="botao rosa-bg py-1 px-4 rounded-full font-inter font-bold my-3 shadow-lg">Preencha aqui para participar →</Link>
          </div>
        </div>
      </div>

      <div className="font-inter flex-col flex justify-center items-center my-12">
        <p className="font-bebas-neue-tit roxo my-4">cresca començando por aqui</p>
        <div className="flex flex-col md:flex-row gap-4">
             <Link to="/calendario" className="flex flex-1 flex-col justify-center items-center text-center bg-white rounded-lg shadow-lg p-5 saltar">
                <img src={calendario} alt="ícone de calendário" className="max-w-12"/>
                <p className="font-bold rosa">Participe dos eventos</p>
                <p className="">Sempre que puder, <span className="bg-rose-200 px-3 rounded-full">se inscreva nas peneiras</span>, campeonatos e partidas divulgados aqui</p>
            </Link>
             <Link to="/formulario" className="flex flex-1 flex-col justify-center items-center text-center bg-white rounded-lg shadow-lg p-5 saltar" >
                <img src={formulario} alt="ícone de formulário" className="max-w-12"/>
                <p className="font-bold rosa">Preencha o formulário</p>
                <p className="">A única forma de participar dos eventos que organizamos e oferecemos aqui é, primeiramente, preencher o <span className="bg-rose-200 px-3 rounded-full">formulário da jogadora</span></p>
            </Link>
            <Link to="/noticias" className="flex flex-1 flex-col justify-center items-center text-center bg-white rounded-lg shadow-lg p-5 saltar" >


                <img src={atencao} alt="ícone de atenção" className="max-w-12"/>
                <p className="font-bold rosa">Fique atenta</p>
                <p className="">É sempre bom <span className="bg-rose-200 px-3 rounded-full">se manter atualizada</span> sobre todas as notícias e eventos que postamos aqui no site!</p>
            </Link>

        </div>
      </div>
    </div>
  );
}

export default HomeJogadora;
