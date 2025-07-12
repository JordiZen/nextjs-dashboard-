// components/SquareMeterCalculator.tsx

'use client';

import { useState } from 'react';

export default function SquareMeterCalculator() {
  const [width, setWidth] = useState('');
  const [length, setLength] = useState('');

  const area = parseFloat(width) * parseFloat(length);

  return (
    <div className="w-[200px] h-[200px] p-2 bg-white shadow rounded-2xl flex flex-col justify-between text-sm">
      <h2 className="text-center font-bold">Calculadora m²</h2>

      <div className="flex flex-col gap-1">
        <input
          type="number"
          placeholder="Amplada (m)"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          className="border rounded px-2 py-1 text-xs"
        />
        <input
          type="number"
          placeholder="Llargada (m)"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="border rounded px-2 py-1 text-xs"
        />
      </div>

      <div className="text-center font-medium mt-2">
        {width && length && !isNaN(area) ? (
          <>
            Superfície: <span className="font-bold">{area.toFixed(2)} m²</span>
          </>
        ) : (
          <span>Introdueix valors</span>
        )}
      </div>
    </div>
  );
}
