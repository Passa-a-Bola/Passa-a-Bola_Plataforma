import { Link } from "react-router-dom"

function CadastroInicio(){
    return (
    <section className="flex items-center justify-center py-20">
      <div className="bg-[var(--cor-5)] rounded-2xl p-10 w-full max-w-md shadow-lg">

        {/* Título */}
        <h1 className="text-center text-3xl text-white font-bebas-neue mb-1"> Cadastro</h1>
        <h3 className="text-center text-white mb-6"> Escolha sua forma de cadastro: </h3>

          {/* Botão */}
          <div className="flex flex-col gap-y-5">
        <Link to="/cadastrojogadora">
          <button
            type="submit" className="w-full text-2xl bg-[var(--cor-9)] text-white font-bebas-neue font-bold uppercase rounded-full py-2 hover:bg-purple-700 transition">
            Jogadora
          </button>
          </Link>

        <Link to="/cadastrocomum">
          <button
            type="submit" className="w-full text-2xl bg-[var(--cor-9)] text-white font-bebas-neue font-bold uppercase rounded-full py-2 hover:bg-purple-700 transition">
            Usuário Comum
          </button>
          </Link>
          </div>
        
      </div>
    </section>
    )
}

export default CadastroInicio