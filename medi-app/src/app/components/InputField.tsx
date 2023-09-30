import { ChangeEvent, ReactElement } from 'react';
import { IconType } from 'react-icons';
import {InputFieldConfig} from '../types'

function InputField({ IconComponent, placeholder, onInputChange } : InputFieldConfig) {
  return (
    <div className='p-2 flex flex-row gap-2 items-center border-2 border-[#D3E7FF] rounded-lg mt-10 max-w-[350px] select-none'>
      {IconComponent && <IconComponent  color='#6C63FF' size={30}/>}
      <input type='text' placeholder={placeholder} onChange={onInputChange} className='w-full outline-none' />
    </div>
  );
}

export default InputField;
