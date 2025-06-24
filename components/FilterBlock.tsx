type Props = {
  label: string;
  options: string[];
  selected: string;
  onChange: (value: string) => void;
};

export default function FilterBlock({ label, options, selected, onChange }: Props) {
  return (
    <div className="flex flex-col space-y-1">
      <label className="font-semibold">{label}</label>
      <select
        className="border rounded px-2 py-1"
        value={selected}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">All</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
