import type { StatsDisplayProps } from "../../types";

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
  // const StatsDisplay=(props:StatsDisplayProps)=>{}
  stats: { characterCount, wordCount, readingTime },
  showReadingTime = false,
  children,
}) => {
  console.log("showReadingTime", showReadingTime);
  return (
    <div className="w-[50%] bg-white text-black rounded-xl px-5 py-3 text-center gap-6">
      <div className="flex items-baseline justify-between w-full">
        <article className="">
          <h6>Characters</h6>
          <p>{characterCount}</p>
        </article>
        <article className="states-block">
          <h6>Words</h6>
          <p style={{ color: showReadingTime ? "red" : "green" }}>
            {wordCount}
          </p>
        </article>
        <article className="states-block">
          <h6>Reading Time</h6>
          <p>{readingTime}</p>
        </article>
      </div>
      {children}
    </div>
  );
};
