import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Line } from 'rc-progress';

const Demo = ({ formList, formNumber }) => {
  return (
    <div className=" flex flex-col justify-center items-center    mt-20 lg:mt-24 ">
      <AnimatePresence mode="wait">
        <motion.div
          className="mx-auto  w-full  "
          key={formNumber}
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
        >
          {formList[formNumber - 1]}
        </motion.div>
      </AnimatePresence>
      <Line
        percent={(formNumber / formList.length) * 100}
        strokeWidth={1}
        strokeColor="#6C63FF"
        className="max-w-[1080px] mx-auto "
      />
    </div>
  );
};

export default Demo;
