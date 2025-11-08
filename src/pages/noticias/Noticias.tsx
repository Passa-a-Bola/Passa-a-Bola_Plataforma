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

      {/* blocos principais */}
      <div className="grid md:grid-cols-2 gap-6">
        {[ 
          {
            img: copaamerica,
            title: "Antonia Silva comemora convocação para a Copa América",
            text: "Medalhista olímpica é convocada por Arthur Elias. Defensora do Real Madrid recebe título de Cidadã Natalense.",
          },
          {
            img: flamengo,
            title: "Flamengo vive bom momento no Brasileirão Feminino",
            text: "Rubro-Negro está em sexto no campeonato e busca melhorar posição.",
          },
          {
            img: dudinha,
            title: "Elogiada por Marta e Formiga: Conheça Dudinha",
            text: "Jogadora do São Paulo marcou dois dos três gols na vitória da Seleção contra as japonesas.",
          },
          {
            img: parceria,
            title: "“Parceria de Sucesso”: Dupla Ex-Corinthians fortalece relação",
            text: "Arthur Elias e Cris Gambaré trocam experiências há dez anos e buscam evoluir o futebol feminino.",
          },
        ].map((n, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row items-center gap-4 bg-gray-300 shadow-md overflow-hidden rounded-lg"
          >
            <div className="flex-shrink-0 w-full sm:w-1/2 h-48 flex justify-center items-center bg-white">
              <img
                src={n.img}
                alt="Notícia"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 text-center sm:text-left">
              <Link
                to="/materia"
                className="font-bebas-neue text-2xl block hover:underline"
              >
                {n.title}
              </Link>
              <p className="text-xs">{n.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* banner */}
      <div className="mt-10 bg-gray-300 shadow-md overflow-hidden rounded-lg">
        <img
          src={iape}
          alt="Banner"
          className="w-full h-60 object-cover"
        />
        <div className="p-4">
          <Link
            to="/materia"
            className="font-bebas-neue text-2xl block hover:underline"
          >
            IAPE é eliminado pelo Doce Mel na Copa do Brasil Feminina
          </Link>
          <p className="text-xs">
            Time maranhense abre placar com Sirlane no primeiro tempo, mas sofre virada do time adversário com goleada.
          </p>
        </div>
      </div>

      {/* seção "podem te interessar" */}
      <h2 className="mt-12 mb-6 text-2xl font-bold">Podem te interessar</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {[ 
          {
            img: copaamerica,
            title: "Antonia Silva comemora convocação para a Copa América",
            text: "Medalhista olímpica é convocada por Arthur Elias.",
          },
          {
            img: flamengo,
            title: "Flamengo vive bom momento no Brasileirão Feminino",
            text: "Rubro-Negro busca melhorar posição no campeonato.",
          },
          {
            img: parceria,
            title: "“Parceria de Sucesso”: Dupla Ex-Corinthians fortalece relação",
            text: "Arthur Elias e Cris Gambaré evoluem o futebol feminino.",
          },
        ].map((n, i) => (
          <div
            key={i}
            className="bg-gray-300 shadow-md overflow-hidden rounded-lg"
          >
            <img
              src={n.img}
              alt="Notícia"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <Link
                to="/materia"
                className="font-bebas-neue text-2xl block hover:underline"
              >
                {n.title}
              </Link>
              <p className="text-xs">{n.text}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Noticias;
