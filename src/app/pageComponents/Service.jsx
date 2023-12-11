import React from 'react';
import ServiceItem from '../components/ServiceItem';
import serviceItems from '../data/serviceItems';

const Service = () => {
  return (
    <div>
      <div className="mx-auto text-center mt-20">
        <h1 className=" font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl ">
          Unser <span className="text-primary">Service</span>
        </h1>
        <h2 className="text-2xl  md:text-3xl lg:text-4xl font-bold">
          Ihr Reisegesundheits-Experte
        </h2>
        <p className="text-subline  lg:text-lg ">
          Kernfunktionen: Einfach und Effizient
        </p>
      </div>
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-x-20 gap-y-10  max-w-[1080px] mt-20">
        {serviceItems.map((item) => {
          return (
            <ServiceItem
              key={item}
              title={item.title}
              desc={item.desc}
              icon={item.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Service;
