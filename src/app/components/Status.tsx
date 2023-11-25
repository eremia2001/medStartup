import React from 'react';
import StatusCheck from './StatusCheck';
import { BsTrash } from 'react-icons/bs';

const Status = ({ medList, apiResult, deleteMed }) => {
  function getStatus(medName) {
    const isRot = apiResult.find((element) => {
      return element.name == medName && element.status == 'rot';
    });
    const isGelb = apiResult.find((element) => {
      return element.name == medName && element.status == 'gelb';
    });
    const isOrange = apiResult.find((element) => {
      return element.name == medName && element.status == 'orange';
    });
    if (isRot) {
      return 'rot';
    } else if (isGelb) {
      return 'gelb';
    } else if (isOrange) {
      return 'orange';
    } else {
      return 'grün';
    }
  }
  return (
    <div className="flex flex-col py-5 px-10 shadow-2xl">
      <h1 className="font-bold text-2xl mx-auto">Status</h1>
      <div className="flex flex-col gap-2 mt-5">
        {medList.map((med, index) => (
          <div key={med.name} className="flex flex-row  justify-between">
            <StatusCheck medName={med.name} checkStatus={getStatus(med.name)} />
            <BsTrash
              className=" mx-3 cursor-pointer text-lg md:text-xl lg:text-xl text-secondary "
              onClick={() => deleteMed(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Status;
