import IconRed from "../../assets/IconRed.png";

function Notificacao() {
  return (
    <div className="mt-12 px-12 mb-12 animate-slide-down">
      <h3 className="text-black text-4xl font-bebas-neue font-bold">
        Notificações
      </h3>
      {/* Linha preta fina abaixo do título */}
      <hr className="border-t-1 border-black w-full my-7" />

      {/* Container com espaçamento */}
      <div className="flex flex-col gap-4">
        {/* Notificação 1 */}
        <div className="flex items-center gap-4 bg-[var(--cor-9)] rounded-lg p-4 
                        hover:bg-[#b280d1] transition-colors duration-300 cursor-pointer">
          <img src={IconRed} alt="Ícone" className="w-14 h-14" />
          <div>
            <h4 className="text-white font-bold text-lg">
              SOBRE O JOGO QUE VOCÊ SALVOU!
            </h4>
            <p className="text-white text-sm">
              Saiu a escala do Campeonato Feminino de 2025.
            </p>
          </div>
        </div>

        {/* Notificação 2 */}
        <div className="flex items-center gap-4 bg-[var(--cor-9)] rounded-lg p-4 
                        hover:bg-[#b280d1] transition-colors duration-300 cursor-pointer">
          <img src={IconRed} alt="Ícone" className="w-14 h-14" />
          <div>
            <h4 className="text-white font-bold text-lg">FOI ADIADO :(</h4>
            <p className="text-white text-sm">
              O jogo que você salvou COPA PAB 2025 foi adiado para o dia 29/10,
              veja no calendário depois. Qualquer atualização te avisaremos. ;)
            </p>
          </div>
        </div>

        {/* Notificação 3 */}
        <div className="flex items-center gap-4 bg-[var(--cor-9)] rounded-lg p-4 
                        hover:bg-[#b280d1] transition-colors duration-300 cursor-pointer">
          <img src={IconRed} alt="Ícone" className="w-14 h-14" />
          <div>
            <h4 className="text-white font-bold text-lg">ESTÁ AO VIVO!</h4>
            <p className="text-white text-sm">
              Paulistão Feminino AO VIVO aqui no Passa a Bola!
            </p>
          </div>
        </div>

        {/* Notificação 4 */}
        <div className="flex items-center gap-4 bg-[var(--cor-9)] rounded-lg p-4 
                        hover:bg-[#b280d1] transition-colors duration-300 cursor-pointer">
          <img src={IconRed} alt="Ícone" className="w-14 h-14" />
          <div>
            <h4 className="text-white font-bold text-lg">
              VOCÊ PRECISA SALVAR ESSE JOGO!
            </h4>
            <p className="text-white text-sm">
              O Paulistão Feminino será transmitido com cobertura EXCLUSIVA. Não
              perca a data e SALVE JÁ!
            </p>
          </div>
        </div>

        {/* Notificação 5 */}
        <div className="flex items-center gap-4 bg-[var(--cor-9)] rounded-lg p-4 
                        hover:bg-[#b280d1] transition-colors duration-300 cursor-pointer">
          <img src={IconRed} alt="Ícone" className="w-14 h-14" />
          <div>
            <h4 className="text-white font-bold text-lg">PERDEU ALGUM JOGO?</h4>
            <p className="text-white text-sm">
              Não se preocupe, você consegue acessar como foi o jogo.
            </p>
          </div>
        </div>

        {/* Notificação 6 */}
        <div className="flex items-center gap-4 bg-[var(--cor-9)] rounded-lg p-4 
                        hover:bg-[#b280d1] transition-colors duration-300 cursor-pointer">
          <img src={IconRed} alt="Ícone" className="w-14 h-14" />
          <div>
            <h4 className="text-white font-bold text-lg">
              MUITO OBRIGADO PELO CADASTRO!
            </h4>
            <p className="text-white text-sm">
              Agradecemos por fazer parte da nossa equipe! São pessoas como você
              que dão visibilidade ao futebol feminino.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notificacao;
