import usuarioTeste from "../../../assets/Leticia.jpg";
import Partida from "../../../components/partida/Partida";

interface PerfilProps {
  setLogado: React.Dispatch<React.SetStateAction<boolean>>;
  setTipoUsuario: React.Dispatch<React.SetStateAction<string | null>>;
}

function PerfilJogadora({ setLogado, setTipoUsuario }: PerfilProps) {
  const handleLogout = () => {
    setLogado(false);
    setTipoUsuario(null);
  };

  return (
    <div className="m-4">
      {/* Faixa rosa no topo */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between bg-[var(--cor-5)] p-6 pl-6 md:pl-12 min-h-64 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex justify-center mb-4">
            <img
              src={usuarioTeste}
              alt="src/assets/Leticia.png"
              className="max-w-40 max-h-40 rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center ml-0 md:ml-6 text-center md:text-left">
            <h2 className="branco font-bebas-neue-tit text-5xl">LETICIA</h2>
            <p className="branco mt-2 font-normal text-lg">leticia1824</p>
            <p className="branco mt-2 font-bebas-neue-sub text-lg"></p>
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

      {/* Caixas rosa claro abaixo da faixa */}
      <div className="flex flex-col md:flex-row justify-between mt-20 mb-20 px-6 md:px-10 gap-8 md:gap-16">
        {/* Caixa 1 */}
        <div className="rosa-bg w-full md:w-2/3 h-auto min-h-48 rounded-xl shadow-lg flex flex-col p-6 text-white font-bebas-neue text-xl">
          <h3 className="text-[var(--cor-9)] font-bebas-neue-tit text-2xl">Descrição</h3>
          <div className="mt-2 flex flex-col cinza-escuro gap-1">
            <p>Olá, sou a Leticia</p>
            <p>Idade: 17</p>
            <p>Posição: MEIA</p>
            <p>Cidade: BELO HORIZONTE (MG)</p>
          </div>
        </div>

        {/* Caixa 2 */}
        <div className="rosa-bg w-full md:w-2/3 h-auto min-h-48 rounded-xl shadow-lg flex flex-col p-6 text-white font-bebas-neue text-xl">
          <h3 className="text-[var(--cor-9)] font-inter cinza-escuro">
            Sou apaixonada por futebol ⚽💙. Não importa se é jogando, assistindo ou comentando cada lance — o futebol faz parte de quem eu sou. Grito gol com o coração, vibro com cada partida e acredito que o futebol vai muito além do campo: é emoção, superação e união. Um dia ainda quero viver de perto esse mundo que tanto amo!
          </h3>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="mt-6 flex justify-center">
        <div className="rosa-bg rounded-2xl px-12 py-11 w-4/5 shadow-lg text-center">
          <h3 className="text-[var(--cor-9)] text-2xl font-bebas-neue font-bold">
            Estatísticas
          </h3>
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-20 mt-6">
            {/* Lado esquerdo */}
            <div className="flex flex-col gap-2 font-bebas-neue w-full md:w-auto text-left">
              <h4 className="preto font-bebas-neue-tit text-x2 font-bold">Temporada 2025</h4>
              <p>📍meia-atacante</p>
              <p>⚽ 10 jogos disputados</p>
              <p>🥅 11 gols marcados</p>
              <p>🎯 15 assistências</p>
            </div>

            {/* Lado direito */}
            <div className="flex flex-col gap-2 font-bebas-neue w-full md:w-auto text-left">
              <h4 className="preto font-bebas-neue-tit text-x2 font-bold">Estilo de jogo</h4>
              <p>Visão de jogo apurada</p>
              <p>Passes entrelinhas</p>
              <p>Finalização de média distância</p>
              <p>Liderança e leitura tática</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerfilJogadora;
