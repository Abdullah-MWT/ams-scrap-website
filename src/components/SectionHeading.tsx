type SectionHeadingProps = {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-4 ${
        align === "center" ? "items-center text-center" : ""
      }`}
    >
      {kicker ? (
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
          {kicker}
        </span>
      ) : null}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
