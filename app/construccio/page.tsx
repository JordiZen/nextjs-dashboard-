// src/app/construccio/page.tsx
import DashboardConstruccio from "@/components/DashboardConstruccio";

export default function ConstruccioPage() {
  return (
    <main className="min-h-screen bg-[#525B6B] p-6">
      <h1 className="text-3xl font-bold text-white text-center mb-8">Construcció</h1>
      <DashboardConstruccio />
    </main>
  );
}
