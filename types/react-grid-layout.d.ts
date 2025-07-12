declare module "react-grid-layout" {
  import * as React from "react";

  export interface Layout {
    i: string;
    x: number;
    y: number;
    w: number;
    h: number;
    minW?: number;
    maxW?: number;
    minH?: number;
    maxH?: number;
    static?: boolean;
    isDraggable?: boolean;
    isResizable?: boolean;
  }

  export interface ResponsiveProps {
    className?: string;
    style?: React.CSSProperties;
    layouts: { [key: string]: Layout[] };
    cols?: { [key: string]: number };
    breakpoints?: { [key: string]: number };
    rowHeight?: number;
    width?: number;
    isDraggable?: boolean;
    isResizable?: boolean;
    onLayoutChange?: (layout: Layout[], layouts: { [key: string]: Layout[] }) => void;
    children?: React.ReactNode;
  }

  export const Responsive: React.ComponentType<ResponsiveProps>;
  export function WidthProvider(component: any): any;
}
