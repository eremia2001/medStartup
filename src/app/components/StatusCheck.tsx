import React from 'react';
import {
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineExclamation,
} from 'react-icons/ai';

const Check = ({ medName, checkStatus }) => {
  let icon;
  let divStyle =
    'rounded-full w-6 h-6 px-0.5 flex items-center justify-center ';

  switch (checkStatus) {
    case 'rot':
      icon = <AiOutlineClose className="w-full h-full text-white" />;
      divStyle += ' bg-[#D63031]';
      break;
    case 'grün':
      icon = <AiOutlineCheck className="w-full h-full text-white" />;
      divStyle += ' bg-[#0F8852]';
      break;
    case 'gelb':
      icon = null; // Kein Icon für gelb
      divStyle += '  border  bg-[#F4B34B]';
      break;
    case 'orange':
      icon = (
        <AiOutlineExclamation className="w-full h-full text-black font-bold" />
      );
      divStyle += '  border  bg-[#F4B34B] ';
      break;
    default:
      // Standardfall oder unbekannter Status
      icon = null;
      divStyle += ' ';
  }

  return (
    <div className="flex flex-row gap-3 ">
      <div className={`${divStyle}`}>{icon}</div>
      <p className="text-black font-medium">{medName}</p>
    </div>
  );
};

export default Check;
