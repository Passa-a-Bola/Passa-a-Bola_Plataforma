import { useEffect, useState } from "react";

function Ligas() {
  const [ligas, setLigas] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://v3.football.api-sports.io/leagues", {
      method: "GET",
      headers: {
        "x-apisports-key": "4965650756d7c2f29ce6e87767de834a"
      }
    })
      .then(res => res.json())
      .then(data => setLigas(data.response))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen p-6 m-6">
        <h1 className="text-4xl font-bebas-neue mb-6 text-center">Área informativa</h1>
        <hr className="m-6"/>
      <h2 className="text-2xl font-bold mb-6 text-center">
        Ligas de Futebol
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ligas.slice(0, 20).map((liga, i) => (
          <div
            key={i}
            className="bg-gray-300 rounded-2xl shadow-md p-4 flex flex-col items-center hover:scale-105 transition"
          >
            <img
              src={liga.league.logo}
              alt={liga.league.name}
              className="w-16 h-16 mb-3"
            />
            <h2 className="text-lg font-semibold">{liga.league.name}</h2>
            <p className="text-sm text-gray-400">{liga.country.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ligas;
