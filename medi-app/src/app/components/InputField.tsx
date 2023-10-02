import { ChangeEvent, ReactElement } from "react";
import { IconType } from "react-icons";
import { InputFieldConfig } from "../types";

function InputField({
  IconComponent,
  placeholder,
  onInputChange,
  inputType,
  value,
  errorMessage,
  className,
}) {
  return (
    <div>
      <div
        className={`p-2 flex flex-row gap-2 items-center border-2 border-[#D3E7FF] rounded-lg mt-10 max-w-[350px] select-none ${className}`}
      >
        {IconComponent && <IconComponent color="#6C63FF" size={30} />}
        <input
          type={inputType}
          value={value}
          {...(inputType === "number" ? { min: 0 } : {})}
          placeholder={placeholder}
          onChange={onInputChange}
          className="w-full outline-none"
        />
      </div>
      {errorMessage ? (
        <p className="text-error font-medium">{errorMessage}</p>
      ) : (
        ""
      )}
    </div>
  );
}

export default InputField;
