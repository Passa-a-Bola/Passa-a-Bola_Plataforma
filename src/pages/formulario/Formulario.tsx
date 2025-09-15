function FormularioJP() {
    return (
        <section className="flex items-center justify-center py-8">
            <div className="bg-[var(--cor-5)] rounded-2xl p-10 w-full max-w-2xl shadow-lg">
                <h1 className="text-center text-3xl text-white font-bebas-neue mb-1"> Seja uma jogadora profissional</h1>
                <form className="space-y-6">
                    <div>
                        <h3 className="text-lg font-bold text-white">1. Posição principal em campo</h3>
                        <label className="block text-white">
                            <input type="radio" name="posicao" className="mr-2" /> Goleira
                        </label>
                        <label className="block text-white">
                            <input type="radio" name="posicao" className="mr-2" /> Zagueira
                        </label>
                        <label className="block text-white">
                            <input type="radio" name="posicao" className="mr-2" /> Lateral
                        </label>
                        <label className="block text-white">
                            <input type="radio" name="posicao" className="mr-2" /> Volante
                        </label>
                        <label className="block text-white">
                            <input type="radio" name="posicao" className="mr-2" /> Meia
                        </label>
                        <label className="block text-white">
                            <input type="radio" name="posicao" className="mr-2" /> Atacante
                        </label>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white">2. Pé dominante</h3>
                        <label className="block text-white">
                            <input type="radio" name="pe" className="mr-2" /> Direito
                        </label>
                        <label className="block text-white">
                            <input type="radio" name="pe" className="mr-2" /> Esquerdo
                        </label>
                        <label className="block text-white">
                            <input type="radio" name="pe" className="mr-2" /> Ambos
                        </label>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-white">3. Condição física atual</h3>
                        <label className="block text-white">
                            <input type="radio" name="condicao" className="mr-2" /> Em treinamento regular
                        </label>
                        <label className="block text-white">
                            <input type="radio" name="condicao" className="mr-2" /> Inativa, mas pretendo retornar
                        </label>
                        <label className="block text-white">
                            <input type="radio" name="condicao" className="mr-2" /> Em recuperação de lesão
                        </label>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-white">4. Experiência esportiva</h3>
                        <label className="block text-sm text-white">Clubes/times anteriores:</label>
                        <input type="text" className="w-full rounded-lg p-2 border border-gray-300" />

                        <label className="block text-sm text-white mt-2">Competições que já disputou:</label>
                        <input type="text" className="w-full rounded-lg p-2 border border-gray-300" />

                        <label className="block text-sm text-white mt-2">Premiações:</label>
                        <input type="text" className="w-full rounded-lg p-2 border border-gray-300" />
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-white">5. Estatísticas básicas</h3>
                        <div className="bg-white rounded-lg p-4 border border-gray-300 h-32">
                            <p className="text-gray-700 text-sm">
                                Dados retirados automaticamente do seu histórico com Passa a Bola
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-white">
                            6. Por que você quer se tornar jogadora profissional?
                        </h3>
                        <textarea className="w-full rounded-lg p-2 border border-gray-300"></textarea>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-white">7. Objetivos atuais como atleta</h3>
                        <label className="block text-white">
                            <input type="checkbox" name="objetivos" className="mr-2" /> Participar de peneiras
                        </label>
                        <label className="block text-white">
                            <input type="checkbox" name="objetivos" className="mr-2" /> Entrar em um clube profissional
                        </label>
                        <label className="block text-white">
                            <input type="checkbox" name="objetivos" className="mr-2" /> Ser convocada para seleções regionais/estaduais
                        </label>
                        <label className="block text-white mt-1">
                            <input type="checkbox" name="objetivos" className="mr-2" /> Outra:
                            <input type="text" className="ml-2 rounded-lg p-1 border border-gray-300" />
                        </label>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-white">
                            8. Está disponível para viajar para jogar?
                        </h3>
                        <label className="block text-white">
                            <input type="radio" name="viajar" className="mr-2" /> Sim
                        </label>
                        <label className="block text-white">
                            <input type="radio" name="viajar" className="mr-2" /> Sim, com autorização dos pais
                        </label>
                        <label className="block text-white">
                            <input type="radio" name="viajar" className="mr-2" /> Não
                        </label>
                    </div>

                    <label htmlFor="termo" className="block mb-1 text-sm font-medium text-white">
                        Termo de responsabilidade:
                    </label>
                    <div className="bg-white p-3 rounded-md text-sm text-gray-700 max-h-32 overflow-y-auto border">
                        <p> Você declara estar ciente de que:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>É responsável pelas informações fornecidas.</li>
                            <li>Se compromete a utilizar a plataforma de forma ética.</li>
                            <li>Autoriza o uso dos dados conforme a política de privacidade.</li>
                        </ul>
                        <p className="mt-2 font-semibold">Você deve aceitar este termo para prosseguir.</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="termo" className="w-4 h-4" required />
                        <label htmlFor="termo" className="text-white text-sm">
                            Li e aceito o termo de responsabilidade
                        </label>
                    </div>

                    {/* Botão */}
                    <button type="submit" className="w-full text-2xl bg-[var(--cor-9)] text-white font-bebas-neue font-bold uppercase rounded-full py-2 hover:bg-purple-700 transition"> Concluído
                    </button>
                </form>
            </div>
        </section>
    )
}

export default FormularioJP;
