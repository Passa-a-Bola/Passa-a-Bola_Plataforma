function Login() {
  return (
    <section className="flex items-center justify-center py-8">
      <div className="bg-[var(--cor-5)] rounded-2xl p-10 w-full max-w-md shadow-lg">

        {/* Título */}
        <h1 className="text-center text-3xl text-white font-bebas-neue mb-6"> Faça seu login</h1>
        <form className="space-y-4">

        {/*Email*/}
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-white">Email:</label>
            <input type="text" id="email" name="email" placeholder="Digite seu email" className="w-full rounded-lg p-2 border border-gray-300" required/>
          </div>

          {/* Senha */}
          <div>
            <label htmlFor="senha" className="block mb-1 text-sm font-medium text-white"> Senha: </label>
            <input type="password" id="senha" name="senha" placeholder="••••••••" className="w-full rounded-lg p-2 border border-gray-300" required/>
          </div>

          {/* Link cadastro */}
          <p className="text-sm text-white">
            Não tem conta?{" "}
            <a href="/cadastroinicio" className="italic font-semibold underline">
              Se cadastre aqui
            </a>
          </p>

          {/* Botão */}
          <button
            type="submit" className="w-full text-2xl bg-[var(--cor-9)] text-white font-bebas-neue font-bold uppercase rounded-full py-2 hover:bg-purple-700 transition">
            Concluído
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;


