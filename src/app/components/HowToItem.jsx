import React from 'react';

const HowToComponent = ({ step, title, desc }) => {
  return (
    <div className="flex flex-col gap-2 max-w-[300px]">
      <div className="w-full border"></div>
      <p className="font-semibold text-secondary">Schritt {step} </p>
      <h1 className="font-bold text-2xl ">{title}</h1>
      <p className="text-subline text-sm">{desc}</p>
    </div>
  );
};

export default HowToComponent;
