import camisa1 from "../../assets/Camisa1.png";
import { useNavigate } from "react-router-dom";

function Produto() {
  const produto = {
    id: 1,
    nome: "Camiseta Oficial Passa a Bola",
    preco: 79.99,
    descricao: "A camiseta oficial do Passa a Bola. Confortável, estilosa e perfeita para mostrar seu amor pelo futebol!",
    img: camisa1,
  };
     const navigate = useNavigate();

  function handleBack() {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate("/loja");
    }
  }

  return (
    <>
      <button
            onClick={handleBack}
            aria-label="Voltar"
            className="self-start inline-flex items-center gap-2 px-3 py-2 bg-[var(--cor-9)] backdrop-blur rounded-md shadow hover:opacity-95 transition m-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M12.293 16.293a1 1 0 0 1-1.414 0L4.586 10l6.293-6.293a1 1 0 0 1 1.414 1.414L7.414 10l4.879 4.879a1 1 0 0 1 0 1.414z" clipRule="evenodd" />
            </svg>
            <span className="font-bebas-neue text-sm text-white">Voltar</span>
        </button>
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="flex justify-center">
          <img
            src={produto.img}
            alt={produto.nome}
            className="rounded-lg shadow-lg max-h-96 object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{produto.nome}</h1>
          <p className="text-gray-700 mb-4">{produto.descricao}</p>
          <p className="text-2xl font-bold text-[var(--cor-5)] mb-6">
            R$ {produto.preco.toFixed(2)}
          </p>
          <button className="bg-[var(--cor-5)] text-white px-6 py-3 rounded-lg text-lg hover:bg-[var(--cor-8)] transition">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Produto;
