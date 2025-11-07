import { Link }    from "react-router-dom";
import paulistao   from "../../../assets/paulistao.png"
import Partida     from '../../../components/partida/Partida';
import trofeu      from '../../../assets/taca.png'
import copaamerica from "../../../assets/copaamerica.png";
import flamengo    from "../../../assets/flamengo.png";
import amadora     from "../../../assets/amadora.jpeg";
import bola        from "../../../assets/bola.png";

function Home() {
  return (
    <div className="mx-4 md:mx-10 my-4 md:my-5 justify-center flex flex-col">
      <Link to="/calendario" className="flex items-stretch flex-col md:flex-row items-center my-6"
           style={{boxShadow: " rgba(0, 0, 0, 0.45) 0px 25px 20px -20px"}}>
        <img src={paulistao} alt="Jogadoras do Corinthians comemorando no Paulistão Feminino" className="md:w-1/2 object-cover max-h-60"/>

        <div className="w-full flex flex-col roxo-bg justify-center p-4 space-y-1">
            <img src={trofeu} alt="ícone de taça troféu" className="max-w-12"/>
          <p className="font-bebas-neue-tit md:text-left ">ACOMPANHE O PAULISTÃO FEMININO AQUI!</p>
          <p className="font-inter">Saiba todas as atualizações, futuras partidas e times classificados do campeonato </p>
        </div>
      </Link>
      <p className="font-inter">Acompanhe as próximas partidas do futebol feminino!</p>
      <div className='flex flex-wrap justify-center gap-4 mt-2'>
        <Partida/>
        <Partida/>
        <Partida/>
      </div>

        <div className="flex items-stretch flex-col md:flex-row items-center mt-6"
           style={{ boxShadow: " rgba(0, 0, 0, 0.45) 0px 25px 20px -20px" }}>
        <img
          src={amadora}
          alt="Jogadoras da seleção feminina do Brasil comemorando"
          className="md:w-1/2 object-cover max-h-64"
        />
        <div className="w-full flex flex-col magenta-bg justify-center p-4 space-y-1">
          <img
            src={bola}
            alt="ícone bola de futebol"
            className="md:w-1/2 object-cover max-w-12"
          />
          <p className="font-bebas-neue-tit md:text-left ">Se torne uma jogadora profissional</p>
          <p className="font-inter max-w-9124 text-wrap">Dê os primeiros passos da sua carreira com a gente! Aqui no Passa a Bola, você tem acesso a peneiras, partidas, dicas de como crescer e apoio da nossa equipe</p>
          <div>
            <Link to="/cadastro" className="botao py-1 px-4 rounded-full font-inter font-bold my-3 shadow-lg">
              Cadastre sua conta de jogadora →
            </Link>
          </div>
        </div>
      </div>
    <section className="my-10 font-inter">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Principais Notícias</h2>

      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4 border-b border-gray-300 pb-4">
          <img
            src={copaamerica}
            alt="Antonia Silva convocada"
            className="w-full md:w-56 h-36 object-cover"
          />
          <div className="flex-1">
            <Link to="/materia" className="text-lg md:text-xl font-semibold hover:underline">Em Natal, Antonia Silva comemora convocação para a Copa América</Link>
            <p className="text-sm text-gray-700 mt-1">Medalhista olímpica é convocada por Arthur Elias. Defensora do Real Madrid recebe título de Cidadã Natalense em sessão solene na Arena das Dunas</p>
            <p className="text-xs text-gray-500 mt-2">09/06/2025 18h18</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 border-b border-gray-300 pb-4">
          <img
            src={flamengo}
            alt="Flamengo vive bom momento"
            className="w-full md:w-56 h-36 object-cover"
          />
          <div className="flex-1">
            <Link to="/materia" className="text-lg md:text-xl font-semibold hover:underline">
              Flamengo vive bom momento no Brasileirão Feminino com nova treinadora e consegue classificação
            </Link>
            <p className="text-sm text-gray-700 mt-1">
              Rubro-Negro está em sexto no campeonato e busca melhorar posição
            </p>
            <p className="text-xs text-gray-500 mt-2">09/06/2025 17h12</p>
          </div>
        </div>
      </div>
  </section>
    </div>
  );
}

export default Home;
