"use client";
import { useState } from "react";

export default function CalculadoraMetresQuadrats() {
  const [amplada, setAmplada] = useState<string | undefined>(undefined);
  const [llargada, setLlargada] = useState<string | undefined>(undefined);
  const [resultat, setResultat] = useState<number | null>(null);

  const calcular = () => {
    if (!amplada || !llargada) return;

    const a = parseFloat(amplada.replace(",", "."));
    const l = parseFloat(llargada.replace(",", "."));

    if (isNaN(a) || isNaN(l)) return;

    setResultat(a * l);
  };

  const refrescar = () => {
    setAmplada(undefined);
    setLlargada(undefined);
    setResultat(null);
  };

  return (
    <div className="flex flex-col gap-1 text-xs text-white w-[200px] h-[200px] bg-[#3E4755] p-2 rounded-xl shadow overflow-y-auto">
      <input
        type="number"
        value={amplada ?? ""}
        onChange={(e) => {
          const val = e.target.value;
          if (val.length <= 10) setAmplada(val === "" ? undefined : val);
        }}
        placeholder="Amplada (m)"
        className="px-1 py-1 rounded bg-[#2f333d] text-white border border-gray-500 text-xs"
      />
      <input
        type="number"
        value={llargada ?? ""}
        onChange={(e) => {
          const val = e.target.value;
          if (val.length <= 10) setLlargada(val === "" ? undefined : val);
        }}
        placeholder="Llargada (m)"
        className="px-1 py-1 rounded bg-[#2f333d] text-white border border-gray-500 text-xs"
      />

      <div className="flex gap-1 mt-0.5">
        <button
          onClick={calcular}
          className="bg-green-500 hover:bg-green-400 text-black px-2 py-1 rounded text-xs"
        >
          Calcular
        </button>
        <button
          onClick={refrescar}
          className="bg-gray-600 hover:bg-gray-500 text-white px-2 py-1 rounded text-xs"
        >
          Refrescar
        </button>
      </div>

      {resultat !== null && (
        <div className="mt-1">
          <p className="text-xs">
            Superfície: <strong>{resultat.toFixed(2)}</strong> m²
          </p>
        </div>
      )}
    </div>
  );
}

