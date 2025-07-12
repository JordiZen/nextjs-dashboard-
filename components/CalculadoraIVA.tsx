"use client";
import { useState } from "react";

export default function CalculadoraIVA() {
  const [preu, setPreu] = useState<string | undefined>(undefined);
  const [ivaInclos, setIvaInclos] = useState(true);
  const [resultats, setResultats] = useState<{
    preuSenseIVA: number | null;
    iva: number | null;
    preuAmbIVA: number | null;
  }>({
    preuSenseIVA: null,
    iva: null,
    preuAmbIVA: null,
  });

  const ivaPercent = 0.21;

  const calcular = () => {
    if (!preu) return;

    const valor = parseFloat(preu);
    if (isNaN(valor)) return;

    if (ivaInclos) {
      const preuSenseIVA = valor / (1 + ivaPercent);
      const iva = valor - preuSenseIVA;
      setResultats({ preuSenseIVA, iva, preuAmbIVA: valor });
    } else {
      const iva = valor * ivaPercent;
      const preuAmbIVA = valor + iva;
      setResultats({ preuSenseIVA: valor, iva, preuAmbIVA });
    }
  };

  const refrescar = () => {
    setPreu(undefined);
    setIvaInclos(true);
    setResultats({
      preuSenseIVA: null,
      iva: null,
      preuAmbIVA: null,
    });
  };

  const mostrarResultats =
    resultats.preuSenseIVA !== null ||
    resultats.iva !== null ||
    resultats.preuAmbIVA !== null;

  return (
    
    <div className="flex flex-col gap-1 text-xs text-white">
      <input
        type="number"
        value={preu ?? ""}
        onChange={(e) => {
          const val = e.target.value;
          if (val.length <= 14) setPreu(val === "" ? undefined : val);
        }}
        placeholder="Introdueix l'import"
        className="px-1 py-1 rounded bg-[#2f333d] text-white border border-gray-500 text-xs"
      />

      <div className="flex gap-1 text-xs">
        <label className="flex items-center gap-1">
          <input
            type="radio"
            checked={ivaInclos}
            onChange={() => setIvaInclos(true)}
            className="w-3 h-3"
          />
          IVA inclòs
        </label>
        <label className="flex items-center gap-1">
          <input
            type="radio"
            checked={!ivaInclos}
            onChange={() => setIvaInclos(false)}
            className="w-3 h-3"
          />
          Sense IVA
        </label>
      </div>

      <div className="flex gap-2">
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

      {mostrarResultats && (
        <div className="mt-1 space-y-1">
          <p>
            Preu sense IVA:{" "}
            {resultats.preuSenseIVA !== null
              ? resultats.preuSenseIVA.toFixed(2)
              : "-"}{" "}
            €
          </p>
          <p>
            IVA (21%): {resultats.iva !== null ? resultats.iva.toFixed(2) : "-"} €
          </p>
          <p>
            Preu amb IVA:{" "}
            {resultats.preuAmbIVA !== null
              ? resultats.preuAmbIVA.toFixed(2)
              : "-"}{" "}
            €
          </p>
        </div>
      )}
    </div>
  );
}




