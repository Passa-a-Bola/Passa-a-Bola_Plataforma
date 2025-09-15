import { useNavigate } from "react-router-dom";
import brasil from "../../assets/brasil.png";
import espanha from "../../assets/espanha.png";
import br_vs_esp from "../../assets/br_vs_esp.png";


function Resumo() {
    const navigate = useNavigate();

  function handleBack() {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate("/noticias");
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-6">
        <button
            onClick={handleBack}
            aria-label="Voltar"
            className="self-start inline-flex items-center gap-2 px-3 py-2 bg-[var(--cor-9)] backdrop-blur rounded-md shadow hover:opacity-95 transition mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M12.293 16.293a1 1 0 0 1-1.414 0L4.586 10l6.293-6.293a1 1 0 0 1 1.414 1.414L7.414 10l4.879 4.879a1 1 0 0 1 0 1.414z" clipRule="evenodd" />
            </svg>
            <span className="font-bebas-neue text-sm text-white">Voltar</span>
        </button>

      <h1 className="text-6xl font-bebas-neue mb-8 text-center">OLIMPÍADAS PARIS 2024</h1>

      <div className="flex items-center justify-center gap-6 mb-4">
        <div className="flex flex-col items-center">
          <img
            src={brasil}
            alt="Brasil"
            className="w-30 h-20 rounded-full"
          />
        </div>

        <div className="text-5xl font-bebas-neue flex items-center gap-10">
          <span>1</span>
          <span>X</span>
          <span>2</span>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={espanha}
            alt="Espanha"
            className="w-30 h-20 rounded-full"
          />
        </div>
      </div>

      <div className="bg-gray-300 text-black text-3xl px-12 py-2 font-bebas-neue mb-6 mt-6">
        ENCERRADO
      </div>
      <div className="mb-6">
        <img
          src={br_vs_esp}
          alt="Resumo do jogo"
          className=" shadow-md w-full max-w-3xl"
        />
      </div>

      <section className="max-w-3xl bg-white rounded-xl shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold text-center mb-6">RESUMO DO JOGO</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-2">PRIMEIRO TEMPO</h3>
            <p className="text-gray-700 mb-2">
                O duelo entre Brasil e Espanha começou muito equilibrado, com as duas 
                seleções buscando o ataque desde os primeiros minutos. A Espanha abriu o 
                placar aos 23 minutos, em uma finalização de fora da área que pegou a 
                goleira brasileira de surpresa. O Brasil respondeu com boas jogadas pelas 
                laterais, mas esbarrou na defesa sólida das espanholas.
            </p>
            <p className="text-gray-700">
                Mesmo pressionando nos minutos finais da primeira etapa, a equipe 
                brasileira não conseguiu criar chances claras de gol, terminando o primeiro 
                tempo em 1 a 0 para a Espanha. A Espanha, por sua vez, conseguiu controlar 
                a posse de bola e explorar contra-ataques para manter a vantagem.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">ETAPA FINAL</h3>
            <p className="text-gray-700 mb-2">
                No segundo tempo, o Brasil voltou mais ofensivo, pressionando 
                alto e tentando empatar. Aos 57 minutos, a seleção brasileira 
                conseguiu igualar o placar após cobrança de escanteio que resultou em gol, 
                contando com um desvio da zaga espanhola. A torcida apoiava, mas a equipe 
                precisava manter a atenção defensiva.
            </p>
            <p className="text-gray-700">
                A Espanha não se abateu e respondeu aos 72 minutos com um contra-ataque
                rápido, finalizando com precisão e colocando o placar em 2 a 1. O Brasil
                ainda criou algumas oportunidades nos minutos finais, mas a defesa
                espanhola conseguiu segurar a vitória, encerrando o jogo com a Espanha como vencedora.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">TABELA E AGENDA</h3>
            <p className="text-gray-700 mb-2">
                Resultado: Espanha 2 x 1 Brasil
            </p>
            <p className="text-gray-700">
                Próximos jogos do Brasil (feminino):

                Dia 20/09: Brasil x Alemanha

                Dia 25/09: Brasil x Argentina

                Próximos jogos da Espanha (feminino):

                Dia 21/09: Espanha x Itália

                Dia 26/09: Espanha x França
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Resumo;
