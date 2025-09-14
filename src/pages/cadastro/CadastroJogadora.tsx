function CadastroJogadora() {
    return (
        <section className="flex items-center justify-center py-8">
            <div className="bg-[var(--cor-5)] rounded-2xl p-10 w-full max-w-md shadow-lg">

                <h1 className="text-center text-3xl text-white font-bebas-neue mb-1"> Faça seu cadastro: </h1>
                <h2 className="text-center text-xl  text-white font-bebas-neue mb-6"> Jogadora </h2>

                <form className="space-y-4">

                    <div>
                        <label htmlFor="name" className="block mb-1 text-sm font-medium text-white">Nome:</label>
                        <input type="text" id="name" name="name" placeholder="Digite seu nome" className="w-full rounded-lg p-2 border border-gray-300" required />
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-1 text-sm font-medium text-white">Email:</label>
                        <input type="text" id="email" name="email" placeholder="Digite seu email" className="w-full rounded-lg p-2 border border-gray-300" required />
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-1 text-sm font-medium text-white">Confirme seu email: :</label>
                        <input type="text" id="email" name="email" placeholder="Digite seu email" className="w-full rounded-lg p-2 border border-gray-300" required />
                    </div>

                    <div>
                        <label htmlFor="senha" className="block mb-1 text-sm font-medium text-white"> Senha: </label>
                        <input type="password" id="senha" name="senha" placeholder="••••••••" className="w-full rounded-lg p-2 border border-gray-300" required />
                    </div>

                    <div>
                        <label htmlFor="senha" className="block mb-1 text-sm font-medium text-white"> Confirme sua senha: </label>
                        <input type="password" id="senha" name="senha" placeholder="••••••••" className="w-full rounded-lg p-2 border border-gray-300" required />
                    </div>

                    
                    <div>
                        <label htmlFor="telefone" className="block mb-1 text-sm font-medium text-white"> Telefone: </label>
                        <input type="number" id="telefone" name="telefone" placeholder="0000-0000" className="w-full rounded-lg p-2 border border-gray-300" required />
                    </div>

                    
                    <div>
                        <label htmlFor="nacionalidade" className="block mb-1 text-sm font-medium text-white"> CPF: </label>
                        <input type="number" id="cpf" name="cpf" placeholder="000.000.000-00" className="w-full rounded-lg p-2 border border-gray-300" required />
                    </div>

                    
                    <div>
                        <label htmlFor="nacionalidade" className="block mb-1 text-sm font-medium text-white"> Nacionalidade: </label>
                        <input type="text" id="nacionalidade" name="nacionalidade" placeholder="exemplo: (Brasileira)" className="w-full rounded-lg p-2 border border-gray-300" required />
                    </div>

                    <div>
                        <label htmlFor="data_nascimento" className="block mb-1 text-sm font-medium text-white"> Data de nascimento: </label>
                        <input type="date" id="data_nascimento" name="data_nascimento" placeholder="00/00/0000" className="w-full rounded-lg p-2 border border-gray-300" required />
                    </div>

                
                    <label htmlFor="termo" className="block mb-1 text-sm font-medium text-white"> Termo de responsabilidade: </label>
                    <div className="bg-white p-3 rounded-md text-sm text-gray-700 max-h-32 overflow-y-auto border">
                        <p>
                            Ao criar sua conta, você declara estar ciente de que:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>É responsável pelas informações fornecidas.</li>
                            <li>Se compromete a utilizar a plataforma de forma ética.</li>
                            <li>Autoriza o uso dos dados conforme a política de privacidade.</li>
                        </ul>
                        <p className="mt-2 font-semibold">
                            Você deve aceitar este termo para prosseguir.
                        </p>
                    </div>

              
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="termo"
                            className="w-4 h-4"
                            required
                        />
                        <label htmlFor="termo" className="text-white text-sm">
                            Li e aceito o termo de responsabilidade
                        </label>
                    </div>


                    {/* Botão */}
                    <button
                        type="submit" className="w-full text-2xl bg-[var(--cor-9)] text-white font-bebas-neue font-bold uppercase rounded-full py-2 hover:bg-purple-700 transition">
                        Concluído
                    </button>
                </form>
            </div>
        </section>
    )
}

export default CadastroJogadora