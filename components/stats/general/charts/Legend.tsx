interface LegendItem {
  color: string;
  label: string;
}

interface LegendProps {
  items: LegendItem[];
}

export default function Legend({ items }: LegendProps) {
  return (
    <div className="flex gap-6 mb-6">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded"
            style={{ backgroundColor: item.color }}
          />
          <span className="text-xs font-semibold text-gray-500">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
