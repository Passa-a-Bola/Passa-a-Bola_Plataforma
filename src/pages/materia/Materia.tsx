import copaamerica from "../../assets/copaamerica.png";
import dudinha from "../../assets/dudinha.png";
import parceria from "../../assets/parceria.png";
import { useNavigate } from "react-router-dom";

function Materia() {
    const navigate = useNavigate();

  function handleBack() {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate("/noticias");
    }
  }

  return (
    <>
      <main className="bg-white text-black">
        <section className="max-w-4xl mx-auto px-4 py-12">
            <button
                onClick={handleBack}
                aria-label="Voltar"
                className="inline-flex items-center gap-2 px-3 py-2 bg-[var(--cor-9)] backdrop-blur rounded-md shadow hover:opacity-95 transition mb-6"
                >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.293 16.293a1 1 0 0 1-1.414 0L4.586 10l6.293-6.293a1 1 0 0 1 1.414 1.414L7.414 10l4.879 4.879a1 1 0 0 1 0 1.414z" clipRule="evenodd" />
                </svg>
                <span className="font-bebas-neue text-sm text-white">Voltar</span>
            </button>

          <h1 className="text-4xl md:text-5xl font-bebas-neue mb-6 uppercase">
            Em Natal, Antonia Silva comemora convocação para a Copa América
          </h1>

          <p className="mb-4 text-lg">
            Medalhista olímpica é convocada por Arthur Elias. Defensora do Real
            Madrid recebe título de Cidadã Natalense em sessão solene na Câmara
            dos Vereadores.
          </p>

          <div className="text-sm text-gray-600 mb-8">
            <p>Por Augusto César Gomes — Natal</p>
            <p>09/06/2023 | 17h16</p>
          </div>

          <div className="mb-8">
            <img
              src={copaamerica}
              alt="Antonia Silva em homenagem em Natal"
              className="w-full rounded-lg shadow"
            />
            <p className="text-sm text-gray-500 mt-2">
              Jogadora da seleção brasileira e do Real Madrid, a defensora
              Antonia Silva recebe o título de Cidadã Natalense. Foto: Divulgação
            </p>
          </div>

          <article className="space-y-4 mb-12">
            <p>
              Nascida em Riacho de Santana, no Alto Oeste do Rio Grande do Norte,
              Antonia agradeceu a homenagem e destacou a importância do momento.
            </p>
            <p>
              A defensora do Real Madrid, de 29 anos, já disputou duas Copas do
              Mundo, uma Olimpíada e foi convocada para a Copa América, que
              acontece em julho. Antonia ressaltou seu orgulho em representar o RN
              e o Brasil.
            </p>
            <p>
              “É um momento muito especial para mim. Carrego sempre comigo minhas
              raízes, minha família e o povo potiguar”, disse Antonia, emocionada.
            </p>
            <p>
              Durante a sessão solene, a jogadora recebeu homenagens de
              autoridades locais, além de mensagens de carinho de torcedores e
              fãs. A defensora também falou sobre a importância do esporte na
              transformação social.
            </p>
          </article>

          <section>
            <h2 className="text-3xl font-bebas-neue mb-6">Veja Mais</h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="flex gap-4 items-start">
                <img
                  src={dudinha}
                  alt="Dudinha em campo"
                  className="w-36 h-24 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-semibold">
                    Elogiada por Marta e Formiga, conheça Dudinha, destaque do
                    Brasil contra o Japão
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Jovem atacante brilhou na vitória da Seleção.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <img
                  src={parceria}
                  alt="Jogadoras ex-Corinthians"
                  className="w-36 h-24 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-semibold">
                    “Parceria de Sucesso”: Dupla Ex-Corinthians fortalece relação
                    e lidera a seleção feminina
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Arthur Elias cita confiança mútua como diferencial.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default Materia;
