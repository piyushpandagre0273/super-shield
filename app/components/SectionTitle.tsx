import Pill from "./Pill";

export default function SectionTitle({
  kicker,
  title,
  desc,
}: {
  kicker?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mx-auto max-w-4xl text-center px-4">
      {kicker ? (
        <div className="mb-4 flex justify-center">
          <Pill>{kicker}</Pill>
        </div>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl leading-tight">
        {title}
      </h2>
      {desc ? (
        <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg max-w-2xl mx-auto">
          {desc}
        </p>
      ) : null}
    </div>
  );
}

