import { useEffect, useState, useRef } from "react";
import passaabola from "../../assets/passaabola.png";
import Partida from "../../components/partida/Partida";
import Partida2tipo from "../../components/partida/Partida2tipo";
import { partidasMockadas } from "../../components/partida/mockPartida"

function Calendario() {
  const days = Array.from({ length: 31 }, (_, i) => (1 + i).toString());

  const [startIndex, setStartIndex] = useState<number>(0);
  const [visibleCount, setVisibleCount] = useState<number>(9);
  const [selectedDay, setSelectedDay] = useState<string>("1");
  const [currentMonth, setCurrentMonth] = useState<string>("");
  const [currentYear, setCurrentYear] = useState<number>(2025);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const getMonthName = (monthIndex: number) => {
    const months = [
      "janeiro", "fevereiro", "março", "abril", "maio", "junho",
      "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];
    return months[monthIndex];
  };

  // Data atual
  useEffect(() => {
    const today = new Date();
    const todayDay = today.getDate().toString();
    const month = getMonthName(today.getMonth());
    const year = today.getFullYear();

    setSelectedDay(todayDay);
    setCurrentMonth(month);
    setCurrentYear(year);
  }, []);

  // Responsividade
  useEffect(() => {
    const updateVisible = () => {
      const w = window.innerWidth;
      const newCount = w >= 1024 ? 11 : w >= 768 ? 9 : 7;
      setVisibleCount(newCount);
      setIsMobile(w < 768);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  // Navegação entre dias
  useEffect(() => {
    if (!selectedDay || !visibleCount) return;
    const todayIndex = parseInt(selectedDay) - 1;
    const middleOffset = Math.floor(visibleCount / 2);

    if (todayIndex <= middleOffset) {
      setStartIndex(0);
    } else if (todayIndex >= days.length - middleOffset) {
      setStartIndex(days.length - visibleCount);
    } else {
      setStartIndex(todayIndex - middleOffset);
    }
  }, [visibleCount, selectedDay, days.length]);

  const endIndex = Math.min(startIndex + visibleCount, days.length);
  const visibleDays = days.slice(startIndex, endIndex);

  const canPrev = startIndex > 0;
  const canNext = startIndex + visibleCount < days.length;

  const handlePrev = () => canPrev && setStartIndex((s) => Math.max(0, s - 1));
  const handleNext = () =>
    canNext && setStartIndex((s) => Math.min(days.length - visibleCount, s + 1));

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const child = container.children[index] as HTMLElement;
      if (child) {
        child.scrollIntoView({ behavior: "smooth", inline: "center" });
      }
    }
  };

  useEffect(() => {
    scrollToIndex(parseInt(selectedDay) - 1);
  }, [selectedDay]);

  const formattedDate = `${selectedDay.padStart(2, "0")} de ${currentMonth}`;

  // Filtra partidas pelo dia selecionado
  const partidasDoDia = partidasMockadas.filter(
    (p) => p.dia === parseInt(selectedDay)
  );

  return (
    <>
      <div className="font-inter mx-4 md:mx-10 my-4 md:my-5 justify-center flex flex-col">
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
              Está interessada em jogar em campeonatos e peneiras? Faça seu
              cadastro como jogadora.
            </p>
          </div>
          <img
            src={passaabola}
            alt="Meninas do passa a bola banner"
            className="md:w-1/2 object-cover max-h-60"
          />
        </div>

      {/* Cabeçalho e dias */}
      <div className="">
        <h1 className="text-3xl font-bebas-neue-tit mb-2">CALENDÁRIO</h1>
        <p className="text-gray-600 mb-6">
          Saiba as datas e horários dos jogos aqui
        </p>

        <h1 className="text-2xs font-bold text-center text-white p-4">
          <span className="bg-[var(--cor-8)] px-4 py-1 rounded capitalize">
            {currentMonth} - {currentYear}
          </span>
        </h1>

        {/* Slider de dias */}
        <div className="flex items-center justify-center gap-2">
          {!isMobile && (
            <button
              onClick={handlePrev}
              disabled={!canPrev}
              aria-label="Previous days"
              className={`p-2 rounded-full transition ${
                canPrev ? "hover:bg-gray-100" : "opacity-40 cursor-not-allowed"
              }`}
            >
              ◀
            </button>
          )}

          <div
            ref={scrollRef}
            className={`flex overflow-x-auto gap-3 py-2 scroll-smooth snap-x snap-mandatory ${
              isMobile ? "w-full" : "w-[600px]"
            } scrollbar-hide`}
          >
            {visibleDays.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                aria-pressed={selectedDay === day}
                className={`w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center font-semibold transition-all duration-200 snap-center ${
                  selectedDay === day
                    ? "bg-[var(--cor-10)] text-white shadow-lg scale-110"
                    : "bg-[var(--cor-5)] text-white hover:bg-gray-300"
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {!isMobile && (
            <button
              onClick={handleNext}
              disabled={!canNext}
              aria-label="Next days"
              className={`p-2 rounded-full transition ${
                canNext ? "hover:bg-gray-100" : "opacity-40 cursor-not-allowed"
              }`}
            >
              ▶
            </button>
          )}
        </div>

        <p className="text-center text-sm text-gray-500 mt-3">
          Dia selecionado:{" "}
          <span className="font-medium capitalize">{formattedDate}</span>
        </p>
      </div>

      {/* Renderiza partidas mocadas do dia */}
      <div className="flex flex-wrap justify-center gap-6">
        {partidasDoDia.length > 0 ? (
          partidasDoDia.map((partida) => (
            <Partida
              key={partida.id}
              campeonato={partida.campeonato}
              horario={partida.horario}
              status={partida.status}
              timeA={partida.timeA}
              timeB={partida.timeB}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center w-full">
            Nenhuma partida neste dia.
          </p>
        )}
      </div>

      <hr className="my-10" />

      <h2 className="text-lg font-bebas-neue-tit">
        Jogos que você não pode perder
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        <Partida2tipo />
        <Partida2tipo />
        <Partida2tipo />
      </div>
      </div>
    </>
  );
}

export default Calendario;
