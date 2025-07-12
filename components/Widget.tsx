import styles from "./Widget.module.css";

type WidgetProps = {
  size: "1x1" | "1x2" | "2x2";
  title: string;
  children?: React.ReactNode;
};

export default function Widget({ size, title, children }: WidgetProps) {
  const base = "rounded-lg p-4 shadow-md h-full w-full flex flex-col";

  const sizeClass =
    size === "1x1"
    ? "aspect-square"      // 1:1 proporció (quadrats)
    : size === "1x2"
    ? "aspect-[1/2]"      // amplada : altura = 1:2
    : size === "2x2"
    ? "aspect-square"      // 2x2 també quadrat però més gran (la graella controla l'amplada)
    : "";

  return (
    <div className={`${styles.widget} ${base} ${sizeClass}`}>
      <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
}
