import type { StatsDisplayProps } from "../../types";

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats: { characterCount, wordCount, readingTime },
  showReadingTime = false,
  isTextValid = false,
  children,
}) => {
  return (
    <div className="sm:w-[50%] w-[90%] bg-white text-black rounded-xl px-5 py-3 text-center gap-6">
      <div className="flex items-baseline justify-between w-full flex-col sm:flex-row gap-5 sm:gap-0 mb-4">
        <article className="flex flex-col items-start justify-start sm:items-center gap-2 sm:gap-0">
          <h6>Characters</h6>
          <p>{characterCount}</p>
        </article>
        <article className="flex flex-col items-start justify-start sm:items-center">
          <h6>Words</h6>
          <p style={{ color: isTextValid ? "red" : "green" }}>{wordCount}</p>
        </article>
        {showReadingTime ? (
          <article className="flex flex-col items-start justify-start sm:items-center">
            <h6>Reading Time</h6>
            <p>{readingTime}</p>
          </article>
        ) : null}
      </div>
      {children}
    </div>
  );
};
