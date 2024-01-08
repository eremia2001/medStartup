import React from 'react';
import { IoDocumentText } from 'react-icons/io5';

const ServiceItem = ({ title, desc, icon: Icon }) => {
  return (
    <div className="flex flex-col gap-2  items-center text-center p-14 sm:p-10 shadow-md rounded-2xl hover:scale-105 duration-200 ">
      <Icon size={30} className="text-secondary" />
      <h1 className="font-semibold text-xl"> {title}</h1>
      <p className="text-sm text-subline">{desc}</p>
    </div>
  );
};

export default ServiceItem;
