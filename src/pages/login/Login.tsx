import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  setLogado: React.Dispatch<React.SetStateAction<boolean>>;
  setTipoUsuario: React.Dispatch<React.SetStateAction<string | null>>;
  logado: boolean;
  tipoUsuario: string | null;
}

function Login({ setLogado, setTipoUsuario, logado, tipoUsuario }: LoginProps) {
  const navigate = useNavigate();

  useEffect(() => {
    if (logado && tipoUsuario === "comum") navigate("/perfil-comum");
    else if (logado && tipoUsuario === "jogadora") navigate("/perfil");
  }, [logado, tipoUsuario]);

  const handleLogin = (tipo: string) => {
    setLogado(true);
    setTipoUsuario(tipo);

    if (tipo === "comum") navigate("/perfil-comum");
    else if (tipo === "jogadora") navigate("/perfil");
  };

  return (
    <section className="flex items-center justify-center py-8">
      <div className="bg-[var(--cor-5)] rounded-2xl p-10 w-full max-w-md shadow-lg">
        <h1 className="text-center text-3xl text-white font-bebas-neue mb-6">
          Faça seu login
        </h1>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-white"
            >
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Digite seu email"
              className="w-full rounded-lg p-2 border border-gray-300"
              required
            />
          </div>

          <div>
            <label
              htmlFor="senha"
              className="block mb-1 text-sm font-medium text-white"
            >
              Senha:
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="••••••••"
              className="w-full rounded-lg p-2 border border-gray-300"
              required
            />
          </div>

          <p className="text-sm text-white">
            Não tem conta?{" "}
            <a
              href="/cadastroinicio"
              className="italic font-semibold underline"
            >
              Se cadastre aqui
            </a>
          </p>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => handleLogin("comum")}
              className="flex-1 text-xl bg-[var(--cor-9)] text-white font-bebas-neue font-bold uppercase rounded-full py-2 hover:bg-purple-700 transition"
            >
              Login Comum
            </button>
            <button
              type="button"
              onClick={() => handleLogin("jogadora")}
              className="flex-1 text-xl bg-[var(--cor-9)] text-white font-bebas-neue font-bold uppercase rounded-full py-2 hover:bg-purple-700 transition"
            >
              Login Jogadora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
