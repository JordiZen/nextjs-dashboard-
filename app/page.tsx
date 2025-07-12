import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Page() {
  return (
<main className="flex min-h-screen flex-col p-6 bg-[#525B6B]">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-[#3e4755] p-4 md:h-40">
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          Calculadores de Construcció
        </h1>
      </div>

      <div className="mt-6 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-[#3e4755] px-6 py-10 md:w-2/5 md:px-20 shadow-lg">
          <p className="text-xl text-white md:text-2xl md:leading-normal">
            <strong>Benvingut!</strong> Explora un conjunt de calculadores per facilitar càlculs de construcció, materials, superfícies i molt més.
          </p>

          <Link
            href="/construccio"
            className="flex items-center gap-5 self-start rounded-lg bg-[#51F501] px-6 py-3 text-sm font-medium text-black transition hover:brightness-90 md:text-base"
          >
            <span>Entrar a construcció</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>

        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <div className="w-full h-full border-4 border-dashed border-[#76FAF1] rounded-lg flex items-center justify-center text-white text-xl">
            Aquí pots afegir una imatge o animació
          </div>
        </div>
      </div>
    </main>
  );
}
