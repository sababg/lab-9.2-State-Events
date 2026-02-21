// components/TextInput/TextInput.tsx
import React from "react";
import type { TextInputProps } from "../../types";
import "./TextInput.css";

export const TextInput: React.FC<TextInputProps> = ({
  onTextChange,
  placeholder = "Start typing...",
  initialValue = "",
}) => {
  return (
    <div className=" w-[50%] flex items-center justify-center">
      <div className="w-full ">
        <textarea
          className="w-full bg-white rounded-xl text-black placeholder:text-gray-800 p-5 outline-0"
          placeholder={placeholder}
          defaultValue={initialValue}
          onChange={(e) => onTextChange(e.target.value)}
          rows={6}
        />
      </div>
    </div>
  );
};
