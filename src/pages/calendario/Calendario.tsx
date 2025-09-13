import React, { useEffect, useState } from "react";
import passaabola from "../../assets/passaabola.png";

function Calendario(): JSX.Element {

    const days = Array.from({ length: 31 }, (_, i) => (1 + i).toString());
    const [startIndex, setStartIndex] = useState<number>(0);
    const [visibleCount, setVisibleCount] = useState<number>(9);
    const [selectedDay, setSelectedDay] = useState<string>("23");


    useEffect(() => {
        const updateVisible = () => {
        const w = window.innerWidth;
        const newCount = w >= 1024 ? 11 : w >= 768 ? 9 : 7;
        setVisibleCount(newCount);
        setStartIndex((s) => Math.min(s, Math.max(0, days.length - newCount)));
        };

        updateVisible();
        window.addEventListener("resize", updateVisible);
        return () => window.removeEventListener("resize", updateVisible);
    }, [days.length]);

    const endIndex = Math.min(startIndex + visibleCount, days.length);
    const visibleDays = days.slice(startIndex, endIndex);

    const canPrev = startIndex > 0;
    const canNext = startIndex + visibleCount < days.length;

    const handlePrev = () => {
        if (!canPrev) return;
        setStartIndex((s) => Math.max(0, s - 1));
    };

    const handleNext = () => {
        if (!canNext) return;
        setStartIndex((s) => Math.min(days.length - visibleCount, s + 1));
    };

    return (
    <>
      <div className="mx-10 my-5">
        <div
          className="flex items-stretch flex-col md:flex-row items-center my-6"
          style={{ boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px" }}
        >
          <div className="w-full flex flex-col bg-[var(--cor-5)] justify-center p-4 space-y-1">
            <h2
              className="font-bebas-neue-tit md:text-left text-white"
              style={{ fontSize: "4rem", lineHeight: "1" }}
            >
              JOGUE COM A GENTE!
            </h2>

            <p className="font-bebas-neue-tit text-white">
              está interessada em jogar em campeonatos e peneiras? Faça seu
              cadastro como jogadora
            </p>
          </div>
          <img
            src={passaabola}
            alt="Meninas do passa a bola banner"
            className="md:w-1/2 object-cover max-h-60"
          />
        </div>
      </div>

      <div className="px-6 mb-10">
        <h1 className="text-3xl font-bebas-neue-tit mb-2">CALENDÁRIO</h1>
        <p className="text-gray-600 mb-6">
          Saiba as datas e horários dos jogos aqui
        </p>

        <div className="flex items-center justify-center">
          <button
            onClick={handlePrev}
            disabled={!canPrev}
            aria-label="Previous days"
            className={`p-2 rounded-full transition ${
              canPrev ? "hover:bg-gray-100" : "opacity-40 cursor-not-allowed"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="mx-4 flex gap-3 flex-wrap">
            {visibleDays.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                aria-pressed={selectedDay === day}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-shadow ${
                  selectedDay === day
                    ? "bg-[var(--cor-10)] text-white shadow-md"
                    : "bg-[var(--cor-5)] text-white hover:bg-gray-300"
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={!canNext}
            aria-label="Next days"
            className={`p-2 rounded-full transition ${
              canNext ? "hover:bg-gray-100" : "opacity-40 cursor-not-allowed"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-3">
          Dia selecionado: <span className="font-medium">{selectedDay}</span>
        </p>
      </div>
    </>
  );
}

export default Calendario;
