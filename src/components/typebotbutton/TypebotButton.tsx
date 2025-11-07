import React, { useState, useRef, useEffect } from "react";

const TypebotButton = () => {
  const [open, setOpen] = useState(false);
  const [rolling, setRolling] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [buttonClick, setButtonClick] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleClick = () => {
    
    //anima o botão ao clicar
    setButtonClick(true);
    setTimeout(() => setButtonClick(false), 300);

    setRolling(true);

    //confete explode no timing do "gol"
    setTimeout(() => setShowConfetti(true), 1200);
    setTimeout(() => setShowConfetti(false), 2500);

    //abre o chat com um delayzinho
    setTimeout(() => setOpen(true), 1200);

    //encerra a animação da bola
    setTimeout(() => setRolling(false), 2000);
  };

  return (
    <>
      {/* botão flutuante */}
      <button
        onClick={handleClick}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "#9900ff",
          fontSize: "28px",
          border: "3px solid #9900ff",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: buttonClick ? "scale(1.3) rotate(-10deg)" : "scale(1)",
          transition: "transform 0.2s ease",
          zIndex: 9999,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        ⚽
      </button>

      {/* camada especial pro gol */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 999999, 
        }}
      >
        {/* bola rolando */}
        {rolling && (
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              right: "20px",
            }}
          >
            <div
              className="rolling-ball" 
              style={{
                fontSize: "60px",
                display: "inline-block",
                filter: "drop-shadow(0 5px 5px rgba(0,0,0,0.4))",
                animation: "rollLeft 2s ease-in-out forwards",
              }}
            >
              ⚽
            </div>

            {/* 🎊 confete no canto esquerdo */}
            {showConfetti && (
              <div
                style={{
                  position: "absolute",
                  bottom: "40px",
                  left: "-90vw",
                  width: "0",
                  height: "0",
                  overflow: "visible",
                }}
              >
                {[...Array(80)].map((_, i) => {
                  const angle = Math.random() * 360;
                  const distance = 80 + Math.random() * 120;
                  const x = Math.cos((angle * Math.PI) / 180) * distance;
                  const y = Math.sin((angle * Math.PI) / 180) * distance;

                  return (
                    <span
                      key={i}
                      style={{
                        position: "absolute",
                        left: "0",
                        top: "0",
                        width: "10px",
                        height: "18px",
                        backgroundColor: [
                          "#ff4d4f",
                          "#ffd700",
                          "#00c3ff",
                          "#00ff99",
                          "#9900ff",
                        ][i % 5],
                        borderRadius: "2px",
                        opacity: 0.9,
                        transform: `rotate(${Math.random() * 360}deg)`,
                        animation: `explode 1s ease-out forwards`,
                        animationDelay: `${Math.random() * 0.1}s`,
                        "--x": `${x}px`,
                        "--y": `${-y}px`,
                      } as React.CSSProperties}
                    />
                  );
                })}

                <style>{`
                  @keyframes explode {
                    0% {
                      transform: translate(0, 0) scale(1) rotate(0deg);
                      opacity: 1;
                    }
                    100% {
                      transform: translate(var(--x), var(--y)) scale(0.9) rotate(720deg);
                      opacity: 0;
                    }
                  }
                `}</style>
              </div>
            )}

            <style>{`
       @keyframes rollLeft {
    0% {
      transform: translateX(0) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateX(-120vw) rotate(-1800deg);
      opacity: 1;
    }
  }

  /* 📱 mobile: bola rola mais rápido */
  @media (max-width: 768px) {
    .rolling-ball {
      animation: rollLeft 1.3s ease-in-out forwards !important; /* antes 2s → agora 1.3s */
    }
  }
            `}</style>
          </div>
        )}
      </div>

      {/* modal do chat */}
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10000,
            animation: "fadeIn 0.4s ease forwards",
          }}
        >
          <div
            ref={modalRef} 
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              width: "90%",
              maxWidth: "600px",
              height: "80%",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
              animation: "slideUp 0.5s ease-out forwards",
            }}
          >
            <button
              onClick={() => setOpen(false)}
              style={{
                position: "absolute",
                top: "8px",
                right: "8px",
                background: "#ff4d4f",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "4px 8px",
                cursor: "pointer",
                zIndex: 10,
                marginBottom: "8px"
              }}
            >
              ✕
            </button>

            <iframe
              src="https://typebot.co/passa-a-bola-s5yu65e"
              title="Chat IA"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />

            <style>{`
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }

              @keyframes slideUp {
                from { transform: translateY(50px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
              }
            `}</style>
          </div>
        </div>
      )}
    </>
  );
};

export default TypebotButton;
