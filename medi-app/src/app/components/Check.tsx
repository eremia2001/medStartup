import React from 'react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

const Check = ({ medName, checked }) => {
  return (
    <div className="flex flex-row gap-2">
      <div
        className={`bg-white rounded-full  ${
          checked ? 'text-succsess' : 'text-[#D63031]'
        } w-6 h-6 px-0.5 flex items-center justify-center`}
      >
        {checked ? (
          <AiOutlineCheck className="w-full h-full " />
        ) : (
          <AiOutlineClose className="w-full " />
        )}
      </div>
      <p className="text-white font-semibold">{medName}</p>
    </div>
  );
};

export default Check;
