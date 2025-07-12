"use client";


import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-[220px] bg-[#3a404d] text-white p-4 shadow-lg h-screen flex flex-col gap-4 border-r-4 border-[#2b2f38]">
      <h2 className="text-xl font-bold mb-4">Menú</h2>
      
      <Link
        href="/"
        className="bg-[#FA6E3B] text-black font-semibold px-4 py-2 rounded hover:brightness-90 transition"
      >
        Inici
      </Link>

      <Link
        href="/construccio"
        className="bg-[#51F501] text-black font-semibold px-4 py-2 rounded hover:brightness-90 transition"
      >
        Construcció
      </Link>

      <Link
        href="/negocis"
        className="bg-[#76FAF1] text-black font-semibold px-4 py-2 rounded hover:brightness-90 transition"
      >
        Negocis
      </Link>
    </aside>
  );
}
