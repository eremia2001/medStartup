import React from 'react';

const StepForm = ({ children, title, subtitle, specialTitle }) => {
  return (
    <div className="p-10 flex flex-col shadow-2xl">
      <h1 className="text-2xl font-bold mx-auto ">
        {title} <span className="text-primary">{specialTitle}</span>
      </h1>
      <p className="text-subline mx-auto text-sm font-semibold mb-10">
        {subtitle}
      </p>

      {children}
    </div>
  );
};

export default StepForm;
