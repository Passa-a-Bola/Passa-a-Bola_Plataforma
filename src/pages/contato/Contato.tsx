function Contato() {
  return (
       <div className="p-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-4xl font-bebas-neue font-bold text-black">CONTATO</h1>
        <p className="mt-2 text-sm text-gray-700 max-w-2xl mx-auto font-inter">
          Entre em contato com a gente! <br />
          Seu email será importante para te atualizarmos.</p>
      </div>

      <section className="flex items-center justify-center">
        <div className="bg-[var(--cor-9)] rounded-2xl p-10 w-full max-w-md shadow-lg">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium text-white"> Nome: </label>
              <input type="name" id="name" name="name" placeholder="Digite seu nome" className="w-full rounded-lg p-2 border border-gray-300" required/>
            </div>

             <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-white"> Email: </label>
              <input type="text" id="email" name="email" placeholder="Digite seu email" className="w-full rounded-lg p-2 border border-gray-300" required/>
            </div>

             <div>
              <label htmlFor="assunto" className="block mb-1 text-sm font-medium text-white"> Assunto: </label>
              <input type="text" id="assunto" name="assunto" placeholder="Digite o assunto" className="w-full rounded-lg p-2 border border-gray-300" required/>
            </div>

            <div>
              <label htmlFor="mensagem" className="block mb-1 text-sm font-medium text-white"> Digite sua mensagem: </label>
             <textarea className="w-full rounded-lg p-2 border border-gray-300"></textarea>
            </div>

            {/* Botão */}
            <button type="submit" className="w-full text-2xl bg-[var(--cor-5)] text-white font-bebas-neue font-bold uppercase rounded-full py-2 hover:bg-purple-700 transition"> Enviar </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contato;
