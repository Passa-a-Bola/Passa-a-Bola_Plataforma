import usuarioTeste from '../../assets/usuarioTeste.png';

function Perfil() {
  return (
    <div className="my-4">
      <div className="w-full flex items-center justify-between bg-[var(--cor-7)] p-6 pl-12 min-h-64 rounded-lg shadow-lg">
        <div className="flex items-center">
          <img 
            src={usuarioTeste} 
            alt="Foto do usuário" 
            className="w-60 h-60 rounded-full object-cover mr-8 ml-10"/>

          <div className="flex flex-col justify-center ml-6">
            <h2 className="text-white text-4xl font-bebas-neue">Nome do Usuário</h2>
            <p className="text-white text-2xl mt-2 font-bebas-neue">usuario@email.com</p>
            <button 
              className="mt-4 px-6 py-3 rounded-full bg-[var(--cor-9)] text-white text-2xl font-bebas-neue font-bold hover:opacity-90 transition">
              Editar Perfil
            </button>
          </div>
        </div>

        <button 
          className="px-10 py-3 rounded-full bg-[var(--cor-9)] text-white text-2xl font-bebas-neue font-bold hover:opacity-90 transition">
          Sair
        </button>
      </div>
      
      <div className="mt-6 flex justify-center">
        <div className="bg-[var(--cor-9)] rounded-2xl px-12 py-10 w-3/4 shadow-lg text-center">
          <h3 className="text-white text-2xl font-bebas-neue font-bold">Sobre mim</h3>
          <p className="text-white text-base mt-2 font-normal">
            Esse usuário não adicionou ainda
          </p>
        </div>
      </div>

      <div className="mt-12 px-12">
        <h3 className="text-black text-4xl font-bebas-neue font-bold">
          Seus jogos salvos:
        </h3>
      </div>

      <div className="mt-4 px-12 flex flex-col md:flex-row justify-between gap-6">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="bg-[var(--cor-1)] rounded-lg flex-1 h-64 relative p-4 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 bg-[var(--cor-9)] rounded-bl-2xl rounded-tr-2xl px-9 py-2 z-10">
              <span className="text-white text-base font-bebas-neue font-bold">
                Campeonato
              </span>
            </div>

            <div className="absolute top-4 -left-10 transform -rotate-45 bg-[var(--cor-4)] px-10 py-1 shadow-md">
              <span className="text-white text-sm font-bebas-neue font-bold tracking-wider">
                Ao Vivo!
              </span>
            </div>

            <div className="flex items-center flex-1 mt-6">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                  <span className="font-bebas-neue font-bold text-lg">Time 1</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                  <span className="font-bebas-neue font-bold text-lg">Time 2</span>
                </div>
              </div>

              <div className="flex-1 flex justify-center items-center text-3xl font-bebas-neue font-bold">
                X
              </div>

              <div className="flex flex-col justify-center items-center space-y-12 mr-2">
                <span className="text-2xl font-bebas-neue font-bold">0</span>
                <span className="text-2xl font-bebas-neue font-bold">0</span>
              </div>
            </div>

            <div className="w-full">
              <hr className="border-t border-gray-400 mb-2 mt-2" />
              <p className="text-center text-black text-xl font-bebas-neue font-bold">
                Acompanhe aqui!
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Perfil;
