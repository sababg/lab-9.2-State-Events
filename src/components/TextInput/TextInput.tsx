// components/TextInput/TextInput.tsx
import React, { useState } from "react";
import type { TextInputProps } from "../../types";
import "./TextInput.css";

export const TextInput: React.FC<TextInputProps> = ({
  onTextChange,
  placeholder = "Start typing...",
  initialValue = "",
}) => {
  const [value, setValue] = useState<string>(initialValue);

  return (
    <div className="sm:w-[50%] w-[90%] flex items-center justify-center">
      <div className="w-full ">
        <textarea
          className="w-full bg-white rounded-xl text-black placeholder:text-gray-800 p-5 outline-0"
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onTextChange(e.target.value);
          }}
          rows={6}
        />
      </div>
    </div>
  );
};
