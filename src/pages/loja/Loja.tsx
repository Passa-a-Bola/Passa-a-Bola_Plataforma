import { useState } from "react";

function Lojinha() {
  const [categoria, setCategoria] = useState<string>("tudo");

  const produtos = [
    { id: 1, nome: "Camiseta Flamengo", categoria: "roupa", preco: 79.99, img: "https://via.placeholder.com/300x200?text=Camiseta+Flamengo" },
    { id: 2, nome: "Chuteira Nike", categoria: "chuteira", preco: 249.99, img: "https://via.placeholder.com/300x200?text=Chuteira+Nike" },
    { id: 3, nome: "Bola de Futebol", categoria: "bola", preco: 59.99, img: "https://via.placeholder.com/300x200?text=Bola+de+Futebol" },
    { id: 4, nome: "Camiseta Fluminense", categoria: "roupa", preco: 79.99, img: "https://via.placeholder.com/300x200?text=Camiseta+Fluminense" },
    { id: 5, nome: "Chuteira Adidas", categoria: "chuteira", preco: 229.99, img: "https://via.placeholder.com/300x200?text=Chuteira+Adidas" },
    { id: 6, nome: "Bola Oficial", categoria: "bola", preco: 69.99, img: "https://via.placeholder.com/300x200?text=Bola+Oficial" }
  ];

  const produtosFiltrados = categoria === "tudo" ? produtos : produtos.filter(p => p.categoria === categoria);

  return (
    <div className="py-6 px-8">
      {/* Filtros de Categoria */}
      <div className="flex gap-6 justify-center mb-8">
        <button
          onClick={() => setCategoria("tudo")}
          className={`px-4 py-2 text-sm font-semibold rounded-lg ${categoria === "tudo" ? "bg-red-600 text-white" : "bg-gray-200 text-gray-800"}`}
        >
          Tudo
        </button>
        <button
          onClick={() => setCategoria("roupa")}
          className={`px-4 py-2 text-sm font-semibold rounded-lg ${categoria === "roupa" ? "bg-red-600 text-white" : "bg-gray-200 text-gray-800"}`}
        >
          Roupas
        </button>
        <button
          onClick={() => setCategoria("chuteira")}
          className={`px-4 py-2 text-sm font-semibold rounded-lg ${categoria === "chuteira" ? "bg-red-600 text-white" : "bg-gray-200 text-gray-800"}`}
        >
          Chuteiras
        </button>
        <button
          onClick={() => setCategoria("bola")}
          className={`px-4 py-2 text-sm font-semibold rounded-lg ${categoria === "bola" ? "bg-red-600 text-white" : "bg-gray-200 text-gray-800"}`}
        >
          Bolas
        </button>
      </div>

      {/* Produtos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {produtosFiltrados.map((produto) => (
          <div key={produto.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={produto.img} alt={produto.nome} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{produto.nome}</h3>
              <p className="text-xl font-bold text-red-600">R${produto.preco.toFixed(2)}</p>
              <button className="mt-4 bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition">
                Comprar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lojinha;
