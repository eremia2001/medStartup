import React, { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { motion } from 'framer-motion';

const ChecklistItem = ({ text }) => {
  const [isChecked, setIsCheked] = useState(false);
  const variants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };
  return (
    <div className="flex flex-row  gap-3 w-fit ">
      <div
        className=" rounded-full border border-subline w-6 h-6 flex justify-center items-center cursor-pointer hover:scale-110 duration-200 "
        onClick={() => setIsCheked(!isChecked)}
      >
        <motion.div
          initial="hidden"
          animate={isChecked ? 'visible' : 'hidden'}
          variants={variants}
          exit="hidden"
        >
          <AiOutlineCheck className="text-succsess text-xl" />
        </motion.div>
      </div>

      <span>{text}</span>
    </div>
  );
};

export default ChecklistItem;
