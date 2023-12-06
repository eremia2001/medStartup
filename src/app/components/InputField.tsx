import { ChangeEvent, ReactElement } from 'react';
import { IconType } from 'react-icons';
import { InputFieldConfig } from '../types';
import Select from 'react-select';

function InputField({
  IconComponent,
  placeholder,
  onInputChange,
  inputType,
  value,
  errorMessage,
  name,
  selectOptions,
  handleMedChange,
}) {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: 'none', // Dies entfernt die Border
      boxShadow: 'none', // Dies entfernt den Schatten, der standardmäßig angezeigt wird, wenn die Border entfernt wird
    }),
  };

  return (
    <div className="flex flex-col  items-center justify-center  ">
      <div
        className={`p-2 flex flex-row gap-2 items-center  border-2 border-[#D3E7FF] w-3/4  rounded-lg  select-none   `}
      >
        {IconComponent && (
          <IconComponent color="#6C63FF" size={30} className="" />
        )}
        {inputType === 'select' ? (
          <Select
            onInputChange={(inputValue, { action }) => {
              if (action === 'input-change' && name == 'medication') {
                handleMedChange(inputValue);
              }
            }}
            onChange={(e) => onInputChange(e?.value, name)}
            options={selectOptions}
            placeholder={placeholder}
            classNamePrefix="react-select"
            className="w-full  "
            instanceId={name}
            styles={customStyles}
            value={value ? { value: value, label: `${value}` } : null}
          />
        ) : (
          <input
            type={inputType}
            value={value == 0 ? '' : value}
            {...(inputType === 'number' ? { min: 0 } : {})}
            placeholder={placeholder}
            onChange={(e) => onInputChange(e)}
            className="w-full outline-none"
            name={name}
          />
        )}
      </div>
      <div className="w-3/4 text-left">
        <p className={`${errorMessage ? 'hidden' : 'text-transparent'}`}>
          Unsichtbarer Fehler
        </p>
        <p className="text-error font-medium">{errorMessage}</p>
      </div>
    </div>
  );
}

export default InputField;
