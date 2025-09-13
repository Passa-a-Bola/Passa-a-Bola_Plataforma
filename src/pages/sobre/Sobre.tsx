import estadio from "../../assets/estadio.png";
import meninas from "../../assets/meninas.png";
import entrevista from "../../assets/entrevista.png";
import sobrenos from "../../assets/sobrenos.png";
import ale from "../../assets/ale.png";
import maluf from "../../assets/maluf.png";
import insta from "../../assets/insta.png";
import youtube from "../../assets/youtube.png";
function Sobre() {
  return (
    <>
      <main className="bg-white text-black">
        <section className="max-w-6xl mx-auto px-4 py-12">

          <h1 className="text-6xl font-bebas-neue mb-4 uppercase">A casa das mulheres no futebol</h1>
          <p className="mb-2">
            O Passa a Bola nasceu como um canal dedicado a dar visibilidade ao futebol feminino e às mulheres que vivem esse esporte dentro e fora das quatro linhas. Começamos com vídeos, entrevistas, 
            cobertura de jogos e histórias que mereciam ser contadas — tudo feito com paixão e propósito.
          </p>
          <p className="mb-2">
            Hoje, demos um passo além: além do canal, agora temos também um site! Um espaço próprio para reunir conteúdo, fortalecer nossa comunidade e expandir ainda mais nossa voz.
          </p>
          <p className="mb-6">
            Nossa proposta é clara: juntar as meninas e transformar o futebol. Queremos ocupar espaços, criar pontes, impulsionar talentos e mostrar que o futebol feminino vai muito além do campo — é resistência, representatividade e revolução.
            Seja bem-vinda. Aqui, a bola está com a gente. E a gente joga junto.
          </p>
          <div className="mb-8">
            <img
              src={estadio}
              alt="Grupo no estádio"
              className="w-full rounded-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <img src={meninas} alt="Imagem 1" className="rounded-lg" />
            <img src={entrevista} alt="Imagem 2" className="rounded-lg" />
            <img src={sobrenos} alt="Imagem 3" className="rounded-lg" />
          </div>

          <div className="mb-12">
            <h2 className="text-4xl font-bebas-neue mb-4">Conheça:</h2>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src={ale}
                alt="Alê Xavier"
                className="w-40 h-40 object-cover rounded-full border-l-8 border-b-2 border-purple-700"
              />
              <div>
                <p className="mb-2">
                  Alê Xavier é jornalista, apresentadora e ex-jogadora de futebol. 
                  Ficou conhecida por seu trabalho no Desimpedidos, onde foi a primeira 
                  mulher do time de apresentadores. Em 2021, cofundou o canal Passa a Bola, focado 
                  em dar visibilidade ao futebol feminino. Com carisma e conhecimento, Alê usa sua 
                  trajetória para transformar o esporte e ampliar o espaço das mulheres no futebol.
                </p>
                <p className="text-4xl text-purple-700 font-bebas-neue">ALÊ XAVIER</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex flex-col md:flex-row-reverse items-center gap-6">
              <img
                src={maluf}
                alt="Luana Maluf"
                className="w-40 h-40 object-cover rounded-full border-l-8 border-b-2 border-purple-700"
              />
              <div>
                <p className="mb-2">
                  Luana Maluf é comentarista esportiva e cofundadora do canal Passa a Bola. 
                  Já atuou na ESPN, Band e hoje comenta jogos no Prime Video. Apaixonada por futebol 
                  feminino, usa sua voz para promover representatividade, debater desigualdades e 
                  fortalecer o esporte para as minas.
                </p>
                <p className=" text-4xl text-purple-700 font-bebas-neue text-right md:text-left">LUANA MALUF</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-bebas-neue mb-6">Acompanhe também:</h2>
            <div className="flex justify-center gap-8">
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <img
                  src={youtube}
                  alt="YouTube"
                  className="w-45 h-40"
                />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img
                  src={insta}
                  alt="Instagram"
                  className="w-45 h-40"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Sobre;
