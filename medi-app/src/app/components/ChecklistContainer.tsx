import React, { useState } from 'react';
import ChecklistItem from './ChecklistItem';
import Checklist from './Checkliste';

const ChecklistContainer = ({ items }) => {
  return (
    <div className="p-5   bg-white rounded-lg shadow-2xl flex flex-col justify-center ">
      <h2 className="text-2xl font-bold mx-auto  mb-4">Checkliste</h2>
      <Checklist items={items} />
    </div>
  );
};

export default ChecklistContainer;
