import React, { useState } from 'react';

const ChecklistItem = ({ text }) => (
  <div className="flex flex-row  gap-3 w-fit ">
    <div className=" rounded-full border border-subline w-6 h-6"></div>
    <span>{text}</span>
  </div>
);

const Checklist = ({ items }) => {
  return (
    <div className="p-5   bg-white rounded-lg shadow-2xl flex flex-col justify-center ">
      <h2 className="text-2xl font-bold mx-auto  mb-4">Checkliste</h2>
      <div className=" flex flex-col gap-2  mx-auto">
        {items.map((item, index) => (
          <ChecklistItem
            key={index}
            text={item.text}
            isChecked={item.isChecked}
          />
        ))}
      </div>
    </div>
  );
};

export default Checklist;
