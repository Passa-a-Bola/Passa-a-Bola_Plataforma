import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// imagens (ajuste caminhos se necessário)
import usuarioTeste from "../../assets/usuarioTeste.png";
import leticia from "../../assets/Leticia.jpg";
import iconMais from "../../assets/IconMais.png";

interface ConfiguracaoProps {
  setLogado: (v: boolean) => void;
  setTipoUsuario: (v: string | null) => void;
  tipoUsuario: string | null;
}

const Configuracao: React.FC<ConfiguracaoProps> = ({
  setLogado,
  setTipoUsuario,
  tipoUsuario,
}) => {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [sobre, setSobre] = useState("");
  const [username, setUsername] = useState("");
  const [descricao, setDescricao] = useState("");

  const isJogadora = tipoUsuario === "jogadora";
  const isComum = tipoUsuario === "comum" || tipoUsuario === null;

  return (
    <div style={{ padding: 24, boxSizing: "border-box" }}>
      {/* botão Voltar */}
      <div style={{ display: "flex" }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            backgroundColor: "var(--cor-5)",
            color: "#ffffff",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 18,
            padding: "10px 18px",
            border: "none",
            borderRadius: 12,
            cursor: "pointer",
          }}
        >
          Voltar
        </button>
      </div>

      {/* fotos */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 40,
          marginTop: 32,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <img
            src={isJogadora ? leticia : usuarioTeste}
            alt="Foto de perfil"
            style={{
              width: 140,
              height: 140,
              objectFit: "cover",
              borderRadius: isJogadora ? "50%" : 10,
              display: "block",
              margin: "0 auto",
            }}
          />
          <div
            style={{
              marginTop: 8,
              fontFamily: "'Bebas Neue', sans-serif",
              color: "var(--cor-9)",
              fontSize: 16,
            }}
          >
            Alterar foto de perfil
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <img
            src={iconMais}
            alt="Adicionar avatar"
            style={{
              width: 140,
              height: 140,
              objectFit: "contain",
              borderRadius: 10,
              display: "block",
              margin: "0 auto",
              background: "#fff",
            }}
          />
          <div
            style={{
              marginTop: 8,
              fontFamily: "'Bebas Neue', sans-serif",
              color: "var(--cor-9)",
              fontSize: 16,
            }}
          >
            Adicionar avatar
          </div>
        </div>
      </div>

      {/* CAIXA ROSA com inputs */}
      <div
        style={{
          backgroundColor: "var(--cor-5)",
          borderRadius: 14,
          padding: 24,
          maxWidth: 760,
          margin: "36px auto 40px",
          boxSizing: "border-box",
        }}
      >
        {isComum && (
          <>
            <div style={{ marginBottom: 10 }}>
              <div
                style={{
                  color: "#fff",
                  fontFamily: "'Bebas Neue', sans-serif",
                  marginBottom: 6,
                  fontSize: 18,
                }}
              >
                Nome
              </div>
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite seu nome"
                style={{
                  width: "100%",
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  padding: "10px 12px",
                  border: "none",
                }}
              />
            </div>

            <div style={{ height: 10 }} />

            <div style={{ marginBottom: 10 }}>
              <div
                style={{
                  color: "#fff",
                  fontFamily: "'Bebas Neue', sans-serif",
                  marginBottom: 6,
                  fontSize: 18,
                }}
              >
                E-mail
              </div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                type="email"
                style={{
                  width: "100%",
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  padding: "10px 12px",
                  border: "none",
                }}
              />
            </div>

            <div style={{ height: 10 }} />

            <div>
              <div
                style={{
                  color: "#fff",
                  fontFamily: "'Bebas Neue', sans-serif",
                  marginBottom: 6,
                  fontSize: 18,
                }}
              >
                Sobre mim
              </div>
              <textarea
                value={sobre}
                onChange={(e) => setSobre(e.target.value)}
                rows={3}
                placeholder="Fale um pouco sobre você..."
                style={{
                  width: "100%",
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  padding: 12,
                  border: "none",
                  resize: "vertical",
                }}
              />
            </div>
          </>
        )}

        {isJogadora && (
          <>
            <div style={{ marginBottom: 10 }}>
              <div
                style={{
                  color: "#fff",
                  fontFamily: "'Bebas Neue', sans-serif",
                  marginBottom: 6,
                  fontSize: 18,
                }}
              >
                Nome
              </div>
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome completo"
                style={{
                  width: "100%",
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  padding: "10px 12px",
                  border: "none",
                }}
              />
            </div>

            <div style={{ height: 10 }} />

            <div style={{ marginBottom: 10 }}>
              <div
                style={{
                  color: "#fff",
                  fontFamily: "'Bebas Neue', sans-serif",
                  marginBottom: 6,
                  fontSize: 18,
                }}
              >
                Username
              </div>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Seu username"
                style={{
                  width: "100%",
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  padding: "10px 12px",
                  border: "none",
                }}
              />
            </div>

            <div style={{ height: 10 }} />

            <div style={{ marginBottom: 10 }}>
              <div
                style={{
                  color: "#fff",
                  fontFamily: "'Bebas Neue', sans-serif",
                  marginBottom: 6,
                  fontSize: 18,
                }}
              >
                E-mail
              </div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                type="email"
                style={{
                  width: "100%",
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  padding: "10px 12px",
                  border: "none",
                }}
              />
            </div>

            <div style={{ height: 10 }} />

            <div style={{ marginBottom: 10 }}>
              <div
                style={{
                  color: "#fff",
                  fontFamily: "'Bebas Neue', sans-serif",
                  marginBottom: 6,
                  fontSize: 18,
                }}
              >
                Descrição
              </div>
              <input
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Breve descrição"
                style={{
                  width: "100%",
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  padding: "10px 12px",
                  border: "none",
                }}
              />
            </div>

            <div style={{ height: 10 }} />

            <div style={{ marginBottom: 10 }}>
              <div
                style={{
                  color: "#fff",
                  fontFamily: "'Bebas Neue', sans-serif",
                  marginBottom: 6,
                  fontSize: 18,
                }}
              >
                Sobre mim
              </div>
              <textarea
                value={sobre}
                onChange={(e) => setSobre(e.target.value)}
                rows={6}
                placeholder="Conte mais sobre você..."
                style={{
                  width: "100%",
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  padding: 12,
                  border: "none",
                  resize: "vertical",
                }}
              />
            </div>

            <div style={{ height: 14 }} />

            <input
              type="button"
              value="Mostrar estatísticas"
              style={{
                width: "100%",
                borderRadius: 10,
                padding: "10px 12px",
                border: "none",
                backgroundColor: "#ddd",
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 16,
                cursor: "pointer",
              }}
            />
          </>
        )}
      </div>

      {/* Título Configurações */}
      <h2
        style={{
          textAlign: "center",
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 28,
          color: "#000",
          marginBottom: 16,
        }}
      >
        Configurações
      </h2>

      {/* Segunda caixa rosa */}
      <div
        style={{
          backgroundColor: "var(--cor-5)",
          borderRadius: 14,
          padding: 24,
          maxWidth: 760,
          margin: "0 auto 40px",
          boxSizing: "border-box",
        }}
      >
        {[
          {
            title: "Segurança e conta",
            items: [
              "Alterar senha",
              "Ativar autenticação em duas etapas",
              "Gerenciar sessões ativas",
              "Cancelar conta / excluir perfil",
            ],
          },
          {
            title: "Notificações",
            items: [
              "Ativar/desativar e-mail sobre novas notícias",
              "Ativar/desativar lembrete de jogos salvos",
              "Preferência de canal (e-mail, SMS, app)",
            ],
          },
          {
            title: "Preferências Gerais",
            items: [
              "Idioma do site",
              "Fuso horário (caso use datas/hora em tempo real)",
              "Tema: claro/escuro",
            ],
          },
          {
            title: "Dados de Pagamento",
            items: [
              "Métodos salvos (cartão/boleto/Pix)",
              "Histórico de pagamentos",
              "Emitir 2ª via de boleto ou comprovante",
            ],
          },
        ].map((section, si) => (
          <div key={si} style={{ marginBottom: 24 }}>
            <h3
              style={{
                marginBottom: 10,
                fontSize: 22,
                fontFamily: "'Bebas Neue', sans-serif",
                color: "#000",
              }}
            >
              {section.title}
            </h3>
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: 10,
                padding: 14,
                fontSize: 18,
                fontFamily: "'Bebas Neue', sans-serif",
              }}
            >
              {section.items.map((item, i) => (
                <React.Fragment key={i}>
                  <div
                    style={{
                      padding: "8px 0",
                      cursor: "pointer",
                      transition: "0.3s",
                      borderRadius: 6,
                      fontFamily: "'Bebas Neue', sans-serif",
                    }}
                    onMouseOver={(e: any) =>
                      (e.currentTarget.style.backgroundColor =
                        "rgba(255,192,203,0.3)")
                    }
                    onMouseOut={(e: any) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                  >
                    {item}
                  </div>
                  {i < section.items.length - 1 && (
                    <hr style={{ border: "1px solid black", margin: "6px 0" }} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* mini espaço */}
      <div style={{ height: 20 }} />

      {/* Botão Salvar Alterações */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{
            backgroundColor: "var(--cor-9)",
            color: "#ffffff",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 20,
            padding: "16px 36px",
            border: "none",
            borderRadius: 20,
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e: any) =>
            (e.currentTarget.style.backgroundColor = "rgba(255, 182, 193, 0.9)")
          }
          onMouseOut={(e: any) =>
            (e.currentTarget.style.backgroundColor = "var(--cor-9)")
          }
        >
          Salvar alterações
        </button>
      </div>
    </div>
  );
};

export default Configuracao;
