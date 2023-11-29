import React from 'react';

const StepForm = ({ children, title, subtitle, specialTitle }) => {
  return (
    <div className="p-10 flex flex-col shadow-2xl">
      <h1 className="text-[22px] sm:text-2xl   font-bold mx-auto text-center ">
        {title} <span className="text-primary">{specialTitle}</span>
      </h1>
      <p className="text-subline mx-auto text-sm md:text-base xl:text-lg font-semibold mb-10  text-center">
        {subtitle}
      </p>

      {children}
    </div>
  );
};

export default StepForm;
