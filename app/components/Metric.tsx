export default function Metric({
  name,
  meaning,
}: {
  name: string;
  meaning: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      <div className="flex items-center justify-between">
        <div className="text-base font-semibold text-white">{name}</div>
        <span className="text-xs text-white/60">Tech Metric</span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-white/70">{meaning}</p>
    </div>
  );
}

