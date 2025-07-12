import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Calculadores",
  description: "Projecte Next.js per càlculs de construcció",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ca">
      <body className="bg-[#525B6B] text-white">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
