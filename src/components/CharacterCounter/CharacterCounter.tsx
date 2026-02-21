import { useState } from "react";
import type { CharacterCounterProps } from "../../types";
import { StatsDisplay } from "../StatsDisplay/StatsDisplay";
import { TextInput } from "../TextInput/TextInput";

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
  minWords = 0,
  maxWords = 0,
  targetReadingTime = 0,
}) => {
  const [textInput, setTextInput] = useState<string>("");

  const onTextChange = (data: string) => {
    setTextInput(data);
  };

  console.log("targetReadingTime", targetReadingTime);

  return (
    <>
      <TextInput
        placeholder="Start Typing your content here"
        onTextChange={onTextChange}
        initialValue={textInput}
      />
      <StatsDisplay
        stats={{
          characterCount: textInput.length,
          readingTime: textInput.length
            ? +(textInput.split(" ").length / 3 / 60).toFixed(2)
            : 0,
          wordCount: textInput.trim()
            ? textInput.trim().split(/\s+/).length
            : 0,
        }}
        showReadingTime
        isTextValid={
          textInput.split(" ").length < minWords ||
          textInput.split(" ").length > maxWords
        }
      >
        <div>
          <p>
            Min: {minWords} | Max: {maxWords}
          </p>
        </div>
      </StatsDisplay>
    </>
  );
};
