import React from 'react';

const StepForm = ({ children }) => {
  return (
    <div className="p-10 flex flex-col shadow-2xl">
      <h1 className="text-2xl font-bold mx-auto ">
        1.Formular <span className="text-primary">herunterladen</span>
      </h1>
      <p className="text-subline mx-auto text-sm font-semibold mb-10">
        Beginnen Sie mit dem ersten Schritt zur Vorbereitung Ihrer Medikamente
      </p>

      {children}
    </div>
  );
};

export default StepForm;
