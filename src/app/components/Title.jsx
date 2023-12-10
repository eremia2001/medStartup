import React from 'react';

const Title = ({ title }) => {
  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold ">
      {title}
    </h1>
  );
};

export default Title;
