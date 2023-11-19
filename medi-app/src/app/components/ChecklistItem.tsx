import React from 'react';

const ChecklistItem = ({ text }) => {
  return (
    <div className="flex flex-row  gap-3 w-fit ">
      <div className=" rounded-full border border-subline w-6 h-6"></div>
      <span>{text}</span>
    </div>
  );
};

export default ChecklistItem;
