import usuarioTeste from "../../../assets/usuarioTeste.png";
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
    <div className="my-4">
      {/* Barra de pesquisa */}
      <div className="flex justify-end mb-9">
        <input
          type="text"
          placeholder="Pesquisar jogadoras"
          className="w-45 px-9 py-3 rounded-full font-bebas-neue placeholder-white border border-white focus:outline-none bg-[var(--cor-9)] text-white"
        />
      </div>
      {/* Faixa rosa no topo */}
      <div className="w-full flex items-center justify-between bg-[var(--cor-5)] p-6 pl-12 min-h-64 rounded-lg shadow-lg">
        <div className="flex items-center">
          <img
            src={usuarioTeste}
            alt="Foto da jogadora"
            className="max-w-40 max-h-40 rounded-full mr-8 ml-10"
          />
          <div className="flex flex-col justify-center ml-6">
            <h2 className="branco font-bebas-neue-tit text-5xl">Nome da Jogadora</h2>
            <p className="branco mt-2 font-normal text-lg">username</p>
            <p className="branco mt-2 font-bebas-neue-sub text-lg">
              jogadora@email.com
            </p>
            <button className="mt-4 px-6 py-3 rounded-full bg-[var(--cor-9)] branco font-bebas-neue-sub font-bold hover:opacity-90 transition">
              Editar Perfil
            </button>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="px-10 py-3 rounded-full bg-[var(--cor-9)] text-white text-2xl font-bebas-neue font-bold hover:opacity-90 transition"
        >
          Sair
        </button>
      </div>

      {/* Caixas rosa claro abaixo da faixa */}
      <div className="flex justify-between mt-20 mb-20 px-10 gap-16">
        {/* Caixa 1 */}
        <div className="bg-[var(--cor-6)] w-2/3 h-auto min-h-48 rounded-xl shadow-lg flex flex-col p-6 text-white font-bebas-neue text-xl">
          <h3 className="text-[var(--cor-9)] font-bebas-neue-tit text-2xl">Descrição</h3>
          <div className="mt-2 flex flex-col gap-1">
            <p>Olá, sou a (Usuario)</p>
            <p>Idade:</p>
            <p>Posição:</p>
            <p>Cidade:</p>
          </div>
        </div>

        {/* Caixa 2 */}
        <div className="bg-[var(--cor-6)] w-2/3 h-auto min-h-48 rounded-xl shadow-lg flex flex-col p-6 text-white font-bebas-neue text-xl">
          <h3 className="text-[var(--cor-9)] font-bebas-neue-tit text-2xl">Sobre mim</h3>
          <p className="mt-2">
            (Texto das informações sobre o usuário)
          </p>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="mt-6 flex justify-center">
        <div className="bg-[var(--cor-6)] rounded-2xl px-12 py-11 w-4/5 shadow-lg text-center">
          <h3 className="text-[var(--cor-9)] text-2xl font-bebas-neue font-bold">
            Estatísticas
          </h3>
          <div className="flex justify-center gap-20">
            {/* Lado esquerdo */}
            <div className="flex flex-col gap-2 font-bebas-neue">
              <h4 className="text-[var(--cor-5)] font-bebas-neue-tit text-x2">Temporada 2025</h4>
              <p>Meia-atacante</p>
              <p>10 jogos disputados</p>
              <p>11 gols marcados</p>
              <p>15 assistências</p>
            </div>

            {/* Lado direito */}
            <div className="flex flex-col gap-2 font-bebas-neue">
              <h4 className="text-[var(--cor-5)] font-bebas-neue-tit text-x2">Estilo de jogo</h4>
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
