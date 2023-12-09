import React from 'react';
import StatusCheck from './StatusCheck';
import { BsTrash } from 'react-icons/bs';
import { getStatus } from '../utils/utils';

const Status = ({ medList, apiResult, deleteMed }) => {
  return (
    <div className="flex flex-col py-5 px-10 shadow-2xl w-full md:w-[35vw] lg:w-[30vw] xl:w-[400px]">
      <h1 className="font-bold text-2xl mx-auto">Status</h1>
      <div className="flex flex-col gap-2 mt-5">
        {medList.map((med, index) => (
          <div key={med.name} className="flex flex-row  justify-between">
            <StatusCheck
              medName={med.name}
              checkStatus={getStatus(apiResult, med.name)}
            />
            <BsTrash
              className=" mx-3 cursor-pointer text-lg md:text-xl lg:text-xl text-secondary hover:scale-125 duration-200"
              onClick={() => deleteMed(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Status;
