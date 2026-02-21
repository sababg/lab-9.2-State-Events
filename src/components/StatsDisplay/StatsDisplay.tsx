import type { StatsDisplayProps } from "../../types";

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
  // const StatsDisplay=(props:StatsDisplayProps)=>{}
  stats: { characterCount, wordCount, readingTime },
  showReadingTime = false,
  children,
}) => {
  console.log("showReadingTime", showReadingTime);
  return (
    <div className="sm:w-[50%] w-[90%] bg-white text-black rounded-xl px-5 py-3 text-center gap-6">
      <div className="flex items-baseline justify-between w-full flex-col sm:flex-row gap-5 sm:gap-0 mb-4">
        <article className="flex flex-col items-start justify-start sm:items-center gap-2 sm:gap-0">
          <h6>Characters</h6>
          <p>{characterCount}</p>
        </article>
        <article className="flex flex-col items-start justify-start sm:items-center">
          <h6>Words</h6>
          <p style={{ color: showReadingTime ? "red" : "green" }}>
            {wordCount}
          </p>
        </article>
        <article className="flex flex-col items-start justify-start sm:items-center">
          <h6>Reading Time</h6>
          <p>{readingTime}</p>
        </article>
      </div>
      {children}
    </div>
  );
};
