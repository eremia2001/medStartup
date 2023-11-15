import React from 'react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

const Check = ({ checkName, checked }) => {
  return (
    <div>
      <div className="bg-white rounded-full">
        {checked ? <AiOutlineCheck /> : <AiOutlineClose />}
      </div>
    </div>
  );
};

export default Check;
