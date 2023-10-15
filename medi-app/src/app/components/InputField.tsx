import { ChangeEvent, ReactElement } from "react";
import { IconType } from "react-icons";
import { InputFieldConfig } from "../types";
import Select from "react-select";

function InputField({
  IconComponent,
  placeholder,
  onInputChange,
  inputType,
  value,
  errorMessage,
  className,
  name,
  addingError,
  selectOptions,
}) {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "none", // Dies entfernt die Border
      boxShadow: "none", // Dies entfernt den Schatten, der standardmäßig angezeigt wird, wenn die Border entfernt wird
    }),
  };

  const defaultValue = { value: "Kanada", label: "Kanada" };

  return (
    <div className={`${className}`}>
      <div
        className={`p-2 flex flex-row gap-2 items-center border-2 border-[#D3E7FF] rounded-lg mt-10 w-[300px] select-none `}
      >
        {IconComponent && <IconComponent color="#6C63FF" size={30} />}
        {inputType === "select" ? (
          <Select
            onChange={(e) => onInputChange(e?.value, name)}
            options={selectOptions}
            placeholder={placeholder}
            classNamePrefix="react-select"
            className="w-full "
            instanceId={name}
            styles={customStyles}
            value={value ? { value: value, label: `${value}` } : null}
          />
        ) : (
          <input
            type={inputType}
            value={value}
            {...(inputType === "number" ? { min: 0 } : {})}
            placeholder={placeholder}
            onChange={(e) => onInputChange(e)}
            className="w-full outline-none"
            name={name}
          />
        )}
      </div>
      {errorMessage ? (
        <p className="text-error font-medium ">{errorMessage}</p>
      ) : (
        ""
      )}
      {addingError ? (
        <p className="text-error font-medium ">{addingError}</p>
      ) : (
        ""
      )}
    </div>
  );
}

export default InputField;
