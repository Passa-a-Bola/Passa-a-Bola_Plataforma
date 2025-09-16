function Aovivo() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      {/* Botão Voltar */}
      <div className="w-full max-w-2xl p-2">
        <button className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm hover:bg-pink-600">
          VOLTAR
        </button>
      </div>

      {/* Título */}
      <h1 className="text-xl font-bold text-center mt-2">
        BRASILEIRÃO FEMININO SÉRIE A 2024
      </h1>

      {/* AO VIVO */}
      <div className="bg-red-600 text-white px-6 py-2 rounded-md mt-2">
        AO VIVO
      </div>

      {/* Imagem de Transmissão */}
      <div className="relative mt-4 w-full max-w-2xl">
        <img
          src="https://via.placeholder.com/600x250"
          alt="Transmissão ao vivo"
          className="rounded-lg w-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h2 className="text-2xl font-bold">TRANSMISSÃO AO VIVO</h2>
          <p className="text-sm">Clique para assistir</p>
        </div>
      </div>

      {/* Placar */}
      <div className="mt-6 text-center">
        <p className="text-sm font-semibold">Placar Atual <span className="text-green-600">91'</span></p>
        <div className="flex items-center justify-center gap-6 mt-2">
          {/* Fluminense */}
          <div className="text-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/8/88/Fluminense_FC_crest.png"
              alt="Fluminense"
              className="w-14 mx-auto"
            />
            <p className="font-bold">FLUMINENSE</p>
            <p className="text-xs">Letícia Silva Amador 20'</p>
          </div>

          {/* Placar */}
          <div className="text-2xl font-bold">1 X 2</div>

          {/* Flamengo */}
          <div className="text-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.png"
              alt="Flamengo"
              className="w-14 mx-auto"
            />
            <p className="font-bold">FLAMENGO</p>
            <p className="text-xs">
              Cristiane 10' <br /> Fernanda Caroline da Silva 83'
            </p>
          </div>
        </div>
      </div>

      {/* Botões Linha do tempo e Escalação */}
      <div className="flex justify-center gap-2 mt-4">
        <button className="bg-green-500 text-white px-4 py-1 rounded-md text-sm font-semibold">
          LINHA DO TEMPO
        </button>
        <button className="bg-gray-200 px-4 py-1 rounded-md text-sm font-semibold">
          ESCALAÇÃO
        </button>
      </div>

      {/* Eventos */}
      <div className="w-full max-w-2xl mt-6 space-y-4">
        {/* Substituição */}
        <div className="border rounded-lg p-3 shadow-sm">
          <p className="font-bold">SUBSTITUIÇÃO</p>
          <div className="flex justify-between items-center text-sm mt-1">
            <p>
              <span className="text-green-600">↑ ENTROU </span>Letícia Oliveira Silva
              <br />
              <span className="text-red-600">↓ SAIU </span>Jennifer Becker
            </p>
            <p className="font-bold">82'</p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.png"
              alt="Flamengo"
              className="w-6"
            />
          </div>
        </div>

        {/* Cartão Amarelo */}
        <div className="border-l-4 border-yellow-500 bg-gray-100 rounded-lg p-3 shadow-sm">
          <p className="font-bold">CARTÃO AMARELO</p>
          <div className="flex justify-between items-center text-sm mt-1">
            <p>Letícia Oliveira Silva <br /> Flamengo</p>
            <p className="font-bold">71'</p>
          </div>
        </div>

        {/* Cartão Vermelho */}
        <div className="border-l-4 border-red-600 bg-gray-100 rounded-lg p-3 shadow-sm">
          <p className="font-bold">CARTÃO VERMELHO</p>
          <div className="flex justify-between items-center text-sm mt-1">
            <p>Bruna Cotrim Martins <br /> Fluminense</p>
            <p className="font-bold">54'</p>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/8/88/Fluminense_FC_crest.png"
              alt="Fluminense"
              className="w-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aovivo;
