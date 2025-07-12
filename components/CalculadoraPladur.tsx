"use client";

import { useState } from "react";

export default function CalculadoraPladur() {
  const [ml, setMl] = useState("");
  const [h, setH] = useState("");
  const [tabic, setTabic] = useState("senzill");
  const [separacio, setSeparacio] = useState("0.4");
  const [placaAlcada, setPlacaAlcada] = useState("2.5"); // Nova: mida de placa
  const [resultats, setResultats] = useState<any>(null);

  const calcular = () => {
    const mlNum = parseFloat(ml);
    const hNum = parseFloat(h);
    const tipus = tabic === "senzill" ? 1 : 2;
    const sep = parseFloat(separacio);
    const alcadaPlaca = parseFloat(placaAlcada);

    if (isNaN(mlNum) || isNaN(hNum) || isNaN(alcadaPlaca)) return;

    const superficie = mlNum * hNum * tipus;

    const areaPlaca = 1.2 * alcadaPlaca;
    const plaques = Math.ceil(superficie / areaPlaca);
    const muntants = Math.ceil(mlNum / sep) + 1;
    const canals = Math.ceil(mlNum / 3);
    const pasta = Math.ceil(superficie * 0.25);
    const cinta = Math.ceil(superficie * 0.5);
    const tornillos = Math.ceil(superficie * 25);

    setResultats({
      superficie,
      plaques,
      muntants,
      canals,
      pasta,
      cinta,
      tornillos,
    });
  };

  const reset = () => {
    setMl("");
    setH("");
    setTabic("senzill");
    setSeparacio("0.4");
    setPlacaAlcada("2.5");
    setResultats(null);
  };

  return (
    <div className="flex flex-col gap-2 text-xs text-white">
      <input
        type="number"
        placeholder="Metres lineals (ml)"
        value={ml}
        onChange={(e) => setMl(e.target.value)}
        className="px-2 py-1 rounded bg-[#2f333d] border border-gray-500"
      />

      <input
        type="number"
        placeholder="Alçada (m)"
        value={h}
        onChange={(e) => setH(e.target.value)}
        className="px-2 py-1 rounded bg-[#2f333d] border border-gray-500"
      />

      <span className="text-lg font-bold">Mida de la placa</span>
      <select
        value={placaAlcada}
        onChange={(e) => setPlacaAlcada(e.target.value)}
        className="px-2 py-1 rounded bg-[#2f333d] border border-gray-500"
      >
        <option value="2">2 m</option>
        <option value="2.5">2,5 m</option>
        <option value="3">3 m</option>
      </select>

      <span className="text-lg font-bold">Tipus de tabic</span>
      <div className="flex gap-2">
        <label className="flex items-center gap-1">
          <input
            type="radio"
            value="senzill"
            checked={tabic === "senzill"}
            onChange={() => setTabic("senzill")}
            className="w-3 h-3"
          />
          Senzill
        </label>
        <label className="flex items-center gap-1">
          <input
            type="radio"
            value="doble"
            checked={tabic === "doble"}
            onChange={() => setTabic("doble")}
            className="w-3 h-3"
          />
          Doble
        </label>
      </div>

      <span className="text-lg font-bold">Separació dels muntants</span>
      <div className="flex gap-2">
        <label className="flex items-center gap-1">
          <input
            type="radio"
            value="0.4"
            checked={separacio === "0.4"}
            onChange={() => setSeparacio("0.4")}
            className="w-3 h-3"
          />
          40 cm
        </label>
        <label className="flex items-center gap-1">
          <input
            type="radio"
            value="0.6"
            checked={separacio === "0.6"}
            onChange={() => setSeparacio("0.6")}
            className="w-3 h-3"
          />
          60 cm
        </label>
      </div>

      <div className="flex gap-2 mt-2">
        <button
          onClick={calcular}
          className="bg-green-500 hover:bg-green-400 text-black px-2 py-1 rounded"
        >
          Calcular
        </button>
        <button
          onClick={reset}
          className="bg-gray-500 hover:bg-gray-400 text-white px-2 py-1 rounded"
        >
          Reiniciar
        </button>
      </div>

      {resultats && (
        <div className="mt-2 text-xs">
          <p>📐 Superfície: {resultats.superficie} m²</p>
          <p>🧱 Plaques de pladur: {resultats.plaques}</p>
          <p>🪛 Muntants: {resultats.muntants}</p>
          <p>📏 Canals superiors/inferiors: {resultats.canals} + {resultats.canals}</p>
          <p>🪣 Pasta de juntes: {resultats.pasta} kg</p>
          <p>📎 Cinta: {resultats.cinta} m</p>
          <p>🔩 Cargols: {resultats.tornillos}</p>
        </div>
      )}
    </div>
  );
}


