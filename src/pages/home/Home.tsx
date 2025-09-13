import paulistao from "../../assets/paulistao.png";
import Partida from '../../components/partida/Partida';
import trofeu from '../../assets/taca.png'

function Home() {
  return (
    <div className="mx-10 my-5">
      <div className="flex items-stretch flex-col md:flex-row items-center my-6"  style={{
  boxShadow: " rgba(0, 0, 0, 0.45) 0px 25px 20px -20px"
}}>
        <img src={paulistao} alt="Jogadoras do Corinthians comemorando no Paulistão Feminino" className="md:w-1/2 object-cover max-h-60" 
        />

        <div className="w-full flex flex-col roxo-bg justify-center p-4 space-y-1">
            <img src={trofeu} alt="logo passa a bola" className="max-w-12"/>
          <p className="font-bebas-neue-tit md:text-left ">ACOMPANHE O PAULISTÃO FEMININO AQUI!</p>
          <p className="font-inter">Saiba todas as atualizações, futuras partidas e times classificados do campeonato </p>
        </div>
      </div>
      <p className="font-inter">Acompanhe as próximas partidas do futebol feminino!</p>
      <div className='flex flex-wrap mt-2 justify-between'>
        <Partida/>
        <Partida/>
        <Partida/>
      </div>
    </div>
  );
}

export default Home;
