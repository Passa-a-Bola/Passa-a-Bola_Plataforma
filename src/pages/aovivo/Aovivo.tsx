import { useNavigate } from "react-router-dom";
import { useState } from "react";

import gravacaoaovivo from "../../assets/gravacaoaovivo.mp4";
import flamengoicon from "../../assets/flamengoicon.png";
import fluminenseicon from "../../assets/fluminenseicon.png";

function Aovivo() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"linha" | "escalacao">("linha");

  function handleBack() {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate("/noticias");
    }
  }

  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      {/* Botão voltar */}
      <button
        onClick={handleBack}
        aria-label="Voltar"
        className="self-start inline-flex items-center gap-2 px-3 py-2 bg-[var(--cor-9)] backdrop-blur rounded-md shadow hover:opacity-95 transition m-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12.293 16.293a1 1 0 0 1-1.414 0L4.586 10l6.293-6.293a1 1 0 0 1 1.414 1.414L7.414 10l4.879 4.879a1 1 0 0 1 0 1.414z"
            clipRule="evenodd"
          />
        </svg>
        <span className="font-bebas-neue text-sm text-white">Voltar</span>
      </button>

      {/* Título e status */}
      <h1 className="text-5xl font-bebas-neue text-center mt-2 mb-4">
        BRASILEIRÃO FEMININO SÉRIE A 2024
      </h1>
      <div className="bg-red-600 text-white px-12 py-1 mt-2 font-bebas-neue text-3xl">
        AO VIVO
      </div>

      {/* Vídeo */}
      <div className="relative mt-8 w-full max-w-2xl">
        <video className="w-full h-full rounded-lg shadow-lg" controls>
          <source src={gravacaoaovivo} type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>
      </div>

      {/* Placar */}
      <div className="mt-6 mb-9 text-center">
        <p className="text-xl font-semibold mb-4">
          Placar Atual <span className="text-green-600">91'</span>
        </p>
        <div className="flex items-center justify-center gap-9 mt-2">
          {/* Fluminense */}
          <div className="text-center">
            <img src={fluminenseicon} alt="Fluminense" className="w-20 mx-auto" />
            <p className="font-bold">FLUMINENSE</p>
            <p className="text-xs">Letícia Silva Amador 20'</p>
          </div>

          <div className="text-5xl font-bebas-neue">1 X 2</div>

          {/* Flamengo */}
          <div className="text-center">
            <img src={flamengoicon} alt="Flamengo" className="w-20 mx-auto" />
            <p className="font-bold">FLAMENGO</p>
            <p className="text-xs">
              Cristiane 10' <br /> Fernanda Caroline da Silva 83'
            </p>
          </div>
        </div>
      </div>

      {/* Botões de navegação (tabs) */}
      <div className="flex justify-center gap-6 mt-5 mb-5">
        <button
          onClick={() => setActiveTab("linha")}
          className={`px-4 py-2 text-xl font-bebas-neue rounded transition ${
            activeTab === "linha"
              ? "bg-green-600 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          LINHA DO TEMPO
        </button>
        <button
          onClick={() => setActiveTab("escalacao")}
          className={`px-4 py-2 text-xl font-bebas-neue rounded transition ${
            activeTab === "escalacao"
              ? "bg-green-600 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          ESCALAÇÃO
        </button>
      </div>

      {/* Conteúdo Condicional */}
      <div className="w-full max-w-2xl mt-6 space-y-4 mb-9">
        {activeTab === "linha" && (
          <>
            {/* Substituição */}
            <div className="border rounded-lg p-3 shadow-sm bg-gray-300">
              <p className="font-bold">SUBSTITUIÇÃO</p>
              <div className="flex justify-between items-center text-sm mt-1">
                <p>
                  <span className="text-green-600">↑ ENTROU </span>Letícia Oliveira Silva
                  <br />
                  <span className="text-red-600">↓ SAIU </span>Jennifer Becker
                </p>
                <p className="font-bold">82'</p>
                <img src={flamengoicon} alt="Flamengo" className="w-6" />
              </div>
            </div>

            {/* Cartão amarelo */}
            <div className="border-l-4 border-yellow-500 bg-gray-300 rounded-lg p-3 shadow-sm">
              <p className="font-bold">CARTÃO AMARELO</p>
              <div className="flex justify-between items-center text-sm mt-1">
                <p>Letícia Oliveira Silva <br /> Flamengo</p>
                <p className="font-bold">71'</p>
                <img src={flamengoicon} alt="Flamengo" className="w-6" />
              </div>
            </div>

            {/* Cartão vermelho */}
            <div className="border-l-4 border-red-600 bg-gray-300 rounded-lg p-3 shadow-sm">
              <p className="font-bold">CARTÃO VERMELHO</p>
              <div className="flex justify-between items-center text-sm mt-1">
                <p>Bruna Cotrim Martins <br /> Fluminense</p>
                <p className="font-bold">54'</p>
                <img src={fluminenseicon} alt="Fluminense" className="w-6" />
              </div>
            </div>
          </>
        )}

        {activeTab === "escalacao" && (
          <>
            {/* Fluminense */}
            <div className="bg-gray-300 p-5 rounded-lg shadow">
              <h2 className="text-4xl font-bebas-neue text-center mb-4">FLUMINENSE</h2>

              <div className="mb-4">
                <h3 className="text-lg font-semibold underline mb-2">Titulares</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>1 - Amanda (Goleira)</li>
                  <li>2 - Letícia Silva Amador</li>
                  <li>3 - Bruna Cotrim Martins</li>
                  <li>4 - Aline Gomes</li>
                  <li>5 - Camila Santos</li>
                  <li>6 - Mariana Oliveira</li>
                  <li>7 - Vitória Costa</li>
                  <li>8 - Jéssica Rodrigues</li>
                  <li>9 - Rafaela Souza</li>
                  <li>10 - Luana Fernandes</li>
                  <li>11 - Bianca Lima</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold underline mb-2">Reservas</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>12 - Carolina Duarte (Goleira)</li>
                  <li>13 - Fernanda Melo</li>
                  <li>14 - Júlia Rocha</li>
                  <li>15 - Letícia Oliveira Silva</li>
                  <li>16 - Marina Lopes</li>
                  <li>17 - Nicole Martins</li>
                  <li>18 - Tainá Ribeiro</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-300 p-5 rounded-lg shadow">
              <h2 className="text-4xl font-bebas-neue text-center mb-4">FLAMENGO</h2>

              <div className="mb-4">
                <h3 className="text-lg font-semibold underline mb-2">Titulares</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>1 - Juliana Alves (Goleira)</li>
                  <li>2 - Fernanda Caroline da Silva</li>
                  <li>3 - Patrícia Souza</li>
                  <li>4 - Raquel Mendes</li>
                  <li>5 - Isabela Fernandes</li>
                  <li>6 - Natália Gomes</li>
                  <li>7 - Gabriela Rocha</li>
                  <li>8 - Camila Ferreira</li>
                  <li>9 - Cristiane</li>
                  <li>10 - Adriana Silva</li>
                  <li>11 - Roberta Lima</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold underline mb-2">Reservas</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>12 - Sabrina Costa (Goleira)</li>
                  <li>13 - Paula Menezes</li>
                  <li>14 - Daniela Amorim</li>
                  <li>15 - Larissa Duarte</li>
                  <li>16 - Juliane Cardoso</li>
                  <li>17 - Viviane Martins</li>
                  <li>18 - Yasmin Oliveira</li>
                </ul>
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default Aovivo;
