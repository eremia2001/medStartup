import React, { useState } from 'react';
import ChecklistItem from './ChecklistItem';

const Checklist = ({ items }) => {
  return (
    <div className=" flex flex-col gap-2  mx-auto">
      {items.map((item, index) => (
        <ChecklistItem key={index} text={item.name} />
      ))}
    </div>
  );
};

export default Checklist;
