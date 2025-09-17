import { useState } from "react";
import { Link } from "react-router-dom";
import camisa1 from "../../assets/Camisa1.png"
import camisa2 from "../../assets/camisa2.png"
import chuteira1 from "../../assets/chuteira1.png"
import chuteira2 from "../../assets/chuteira2.png"
import bolaloja from "../../assets/bolaloja.png"
import bolaloja2 from "../../assets/bolaloja2.png"
import passaabola from "../../assets/passaabola.png"

function Lojinha() {
  const [categoria, setCategoria] = useState<string>("tudo");

  const produtos = [
    { id: 1, nome: "Camiseta Oficial Passa a bola", categoria: "roupa", preco: 79.99, img: camisa1 },
    { id: 2, nome: "Chuteira branca Passa a bola", categoria: "chuteira", preco: 249.99, img: chuteira1 },
    { id: 3, nome: "Bola de Futebol", categoria: "bola", preco: 59.99, img: bolaloja },
    { id: 4, nome: "Camiseta secundária Passa a bola", categoria: "roupa", preco: 79.99, img: camisa2 },
    { id: 5, nome: "Chuteira preta Passa a bola", categoria: "chuteira", preco: 229.99, img: chuteira2},
    { id: 6, nome: "Bola Oficial", categoria: "bola", preco: 69.99, img: bolaloja2}
  ];

  const produtosFiltrados = categoria === "tudo" ? produtos : produtos.filter(p => p.categoria === categoria);

  return (
    <>
          <div className="mx-10 my-5">
        <div
          className="flex items-stretch flex-col md:flex-row items-center my-6"
          style={{ boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px" }}
        >
          <div className="w-full flex flex-col bg-[var(--cor-5)] justify-center p-4 space-y-1">
            <h2
              className="font-bebas-neue-tit md:text-left text-white"
              style={{ fontSize: "4rem", lineHeight: "1" }}
            >
              CONHEÇA A NOSSA LOJA!
            </h2>

            <p className="font-bebas-neue-tit text-white">
                Os melhores produtos do futebol com a cara do PassaBola: camisas, chuteiras e muito mais.
            </p>
          </div>
          <img
            src={passaabola}
            alt="Meninas do passa a bola banner"
            className="md:w-1/2 object-cover max-h-60"
          />
        </div>
      </div>

    <div className="py-6 px-8">

      <div className="flex gap-6 justify-center mb-8">
        <button
          onClick={() => setCategoria("tudo")}
          className={`px-4 py-2 text-sm rounded-lg ${categoria === "tudo" ? "bg-[var(--cor-8)] text-white" : "bg-gray-200 text-gray-800"}`}
        >
          Tudo
        </button>
        <button
          onClick={() => setCategoria("roupa")}
          className={`px-4 py-2 text-sm rounded-lg ${categoria === "roupa" ? "bg-[var(--cor-8)] text-white" : "bg-gray-200 text-gray-800"}`}
        >
          Roupas
        </button>
        <button
          onClick={() => setCategoria("chuteira")}
          className={`px-4 py-2 text-sm rounded-lg ${categoria === "chuteira" ? "bg-[var(--cor-8)] text-white" : "bg-gray-200 text-gray-800"}`}
        >
          Chuteiras
        </button>
        <button
          onClick={() => setCategoria("bola")}
          className={`px-4 py-2 text-sm rounded-lg ${categoria === "bola" ? "bg-[var(--cor-8)] text-white" : "bg-gray-200 text-gray-800"}`}
        >
          Bolas
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {produtosFiltrados.map((produto) => (
          <div key={produto.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={produto.img} alt={produto.nome} className="w-full h-52 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{produto.nome}</h3>
              <p className="text-xl font-bold">R${produto.preco.toFixed(2)}</p>
              <Link to={`/produto/${produto.id}`}>
                <button className="mt-4 bg-[var(--cor-5)] text-white py-2 px-6 rounded-lg hover:bg-[var(--cor-8)] transition">
                  Comprar
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Lojinha;
