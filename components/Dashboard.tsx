"use client";

import { Responsive, WidthProvider } from "react-grid-layout";
import Widget from "@/components/Widget";
import CalculadoraPladur from "@/components/CalculadoraPladur";
import CalculadoraIVA from "@/components/CalculadoraIVA";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Dashboard() {
  const layout = [
    { i: "1", x: 0, y: 0, w: 1, h: 1, static: true },
    { i: "3", x: 0, y: 1, w: 1, h: 1, static: true },
    { i: "4", x: 1, y: 0, w: 1, h: 2, static: true },
    { i: "5", x: 2, y: 0, w: 2, h: 2, static: true },
    { i: "6", x: 0, y: 2, w: 2, h: 2, static: true },
    { i: "7", x: 2, y: 2, w: 1, h: 2, static: true },
    { i: "8", x: 3, y: 2, w: 1, h: 1, static: true },
    { i: "9", x: 3, y: 3, w: 1, h: 1, static: true },
  ];

  return (
    <main className="min-h-screen bg-[#525B6B] p-6">
      <h1 className="text-3xl font-bold text-white text-center mb-8">Negocis</h1>

      <ResponsiveGridLayout
        className="layout"
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768 }}
        cols={{ lg: 6, md: 4, sm: 2 }}
        rowHeight={240}
        margin={[20, 20]}
        isResizable={false}
        isDraggable={false}
      >
        <div key="1">
          <Widget size="1x1" title="Calculador IVA">
            <CalculadoraIVA />
          </Widget>
        </div>
        <div key="3">
          <Widget size="1x1" title="2">...</Widget>
        </div>
        <div key="4">
          <Widget size="1x2" title="Calculadora Pladur">
            <CalculadoraPladur />
          </Widget>
        </div>
        <div key="5">
          <Widget size="2x2" title="Totxanes">...</Widget>
        </div>
        <div key="6">
          <Widget size="2x2" title="Totxanes">...</Widget>
        </div>
        <div key="7">
          <Widget size="1x2" title="Totxanes">...</Widget>
        </div>
        <div key="8">
          <Widget size="1x1" title="Grava2">...</Widget>
        </div>
        <div key="9">
          <Widget size="1x1" title="Grava2">...</Widget>
        </div>
      </ResponsiveGridLayout>

      <style jsx>{`
        .layout {
          background-image:
            linear-gradient(#444 1px, transparent 1px),
            linear-gradient(90deg, #444 1px, transparent 1px);
          background-size: 200px 200px;
        }
      `}</style>
    </main>
  );
}