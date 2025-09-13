import copaamerica from "../../assets/copaamerica.png";
import flamengo from "../../assets/flamengo.png";
import dudinha from "../../assets/dudinha.png";
import parceria from "../../assets/parceria.png";
import iape from "../../assets/iape.jpg";
import { Link } from "react-router-dom";

function Noticias() {
  return (
    <main className="min-h-screen px-4 md:px-12 lg:px-24 py-8 font-inter">
      <h1 className="text-5xl font-bebas-neue mb-6">NOTÍCIAS</h1>

      <div className="flex justify-end mb-8">
        <input
          type="text"
          placeholder="Pesquisa..."
          className="px-4 py-2 rounded-full font-bebas-neue placeholder-white  border-white w-64 focus:outline-none bg-[var(--cor-9)] text-white"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-[var(--cor-5)] shadow-md overflow-hidden">
          <img src={copaamerica} alt="Notícia" className="w-full h-40 object-cover" />
          <div className="p-4">
            <Link to="/materias" className="underline">Antonia Silva comemora convocação para a Copa América</Link>
            <p className="text-sm text-white">Medalhista olímpica é convocada por Arthur Elias. Defensora do Real Madrid recebe título de Cidadã Natalense </p>
          </div>
        </div>

        <div className="bg-[var(--cor-5)] shadow-md overflow-hidden">
          <img src={flamengo} alt="Notícia" className="w-full h-40 object-cover" />
          <div className="p-4">
            <Link to="/materias" className="underline">Flamengo vive bom momento no Brasileirão Feminino</Link>
            <p className="text-sm text-white">Rubro-Negro está em sexto no campeonato e busca melhorar posição</p>
          </div>
        </div>

        <div className="bg-[var(--cor-5)] shadow-md overflow-hidden">
          <img src={dudinha} alt="Notícia" className="w-full h-40 object-cover" />
          <div className="p-4">
            <Link to="/materias" className="underline">Elogiada por Marta e Formiga: Conheça Dudinha</Link>
            <p className="text-sm text-white">Jogadora do São Paulo marcou dois dos três gols na vitória da Seleção contra as japonesas</p>
          </div>
        </div>

        <div className="bg-[var(--cor-5)] shadow-md overflow-hidden">
          <img src={parceria} alt="Notícia" className="w-full h-40 object-cover" />
          <div className="p-4">
            <Link to="/materias" className="underline">“Parceria de Sucesso”: Dupla Ex- Corinthians fortalece relação</Link>
            <h2 className="font-semibold"></h2>
            <p className="text-sm text-white">Arthur Elias e Cris Gambaré trocam experiências há dez anos e buscam evoluir o futebol feminino</p>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-[var(--cor-5)] shadow-md overflow-hidden">
        <img src={iape} alt="Banner" className="w-full h-56 object-cover" />
        <div className="p-6">
          <Link to="/materias" className="underline">IAPE é eliminado pelo Doce Mel na Copa do Brasil Feminina</Link>
          <p className="text-sm text-white">
            Time maranhense abre placar com Sirlane no primeiro tempo, mas sofre virada do time adversário com goleada.
          </p>
        </div>
      </div>

      <h2 className="mt-12 mb-6 text-2xl font-bold">Podem te interessar</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-[var(--cor-5)] shadow-md overflow-hidden">
          <img src={copaamerica} alt="Notícia" className="w-full h-32 object-cover" />
          <div className="p-4">
            <Link to="/materias" className="underline">Antonia Silva comemora convocação para a Copa América</Link>
            <p className="text-sm text-white">Medalhista olímpica é convocada por Arthur Elias. Defensora do Real Madrid recebe título de Cidadã Natalense </p>
          </div>
        </div>

        <div className="bg-[var(--cor-5)] shadow-md overflow-hidden">
          <img src={flamengo} alt="Notícia" className="w-full h-32 object-cover" />
          <div className="p-4">
            <Link to="/materias" className="underline">Flamengo vive bom momento no Brasileirão Feminino</Link>
            <p className="text-sm text-white">Rubro-Negro está em sexto no campeonato e busca melhorar posição</p>
          </div>
        </div>

        <div className="bg-[var(--cor-5)] shadow-md overflow-hidden">
          <img src={parceria} alt="Notícia" className="w-full h-32 object-cover" />
          <div className="p-4">
            <Link to="/materias" className="underline">“Parceria de Sucesso”: Dupla Ex- Corinthians fortalece relação</Link>
            <p className="text-sm text-white">Arthur Elias e Cris Gambaré trocam experiências há dez anos e buscam evoluir o futebol feminino</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Noticias;