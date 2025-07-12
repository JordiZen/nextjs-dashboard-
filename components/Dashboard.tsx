"use client";

import { Responsive, WidthProvider } from "react-grid-layout";
import Widget from "@/components/Widget";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Dashboard() {
  const layout = [
    { i: "1", x: 0, y: 0, w: 1, h: 1, static: true }, // 1x1
    { i: "2", x: 1, y: 0, w: 1, h: 2, static: true }, // 1x2
    { i: "3", x: 2, y: 0, w: 2, h: 2, static: true }, // 2x2
    { i: "4", x: 0, y: 1, w: 1, h: 1, static: true }, // 1x1
  ];

  return (
    <div className="p-6 min-h-screen bg-[#525B6B]">
      <h1 className="text-3xl font-bold text-white text-center mb-8">Calculadores</h1>

      <ResponsiveGridLayout
        className="layout"
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768 }}
        cols={{ lg: 6, md: 4, sm: 2 }}
        rowHeight={200}
        margin={[20, 20]} // separació horitzontal i vertical
        isResizable={false}
        isDraggable={false}
      >
        <div key="1">
          <Widget size="1x1" title="IVA" />
        </div>
        <div key="2">
          <Widget size="1x2" title="Descompte" />
        </div>
        <div key="3">
          <Widget size="2x2" title="Beneficis" />
        </div>
        <div key="4">
          <Widget size="1x1" title="Nou Widget" />
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
    </div>
  );
}

