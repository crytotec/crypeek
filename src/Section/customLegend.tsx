import type { LegendProps } from "recharts";

interface CustomLegendProps extends LegendProps {
  payload?: {
    value: string;
    type: string;
    color?: string;
    stroke?: string;
    id?: string;
  }[];
}

function CustomLegend({ payload }: CustomLegendProps) {
  return (
    <div className="flex justify-end">
      <ul className="flex gap-4 list-none p-0 m-0">
        {payload?.map((entry, index) => {
          const color = entry.color || entry.stroke || "white";
          return (
            <li
              key={`item-${index}`}
              className="flex items-center gap-1 font-bold text-sm"
            >
              <span
                className="w-3 h-3 inline-block rounded-full"
                style={{ backgroundColor: color }}
              />
              <span style={{ color }}>{entry.value}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CustomLegend;
