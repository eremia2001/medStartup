import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { motion } from 'framer-motion';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const arrowVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };
  const textVariants = {
    open: { opacity: 1, height: 'auto' },
    closed: { opacity: 0, height: 0 },
  };

  return (
    <div
      className="flex flex-col gap-4 select-none cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-semibold text-lg sm:text-xl ">{question}</h1>
        <motion.div
          animate={isOpen ? 'open' : 'closed'}
          variants={arrowVariants}
          transition={{ duration: 0.3 }}
        >
          <MdKeyboardArrowDown size={30} className="cursor-pointer" />
        </motion.div>
      </div>
      <motion.div
        animate={isOpen ? 'open' : 'closed'}
        variants={textVariants}
        transition={{ duration: 0.3 }}
        initial="closed"
        style={{ overflow: 'hidden' }}
      >
        <p className="text-subline text-sm sm:text-lg">{answer}</p>
      </motion.div>
      <div className="w-full border border-[#D9D9D9]"></div>
    </div>
  );
};

export default FAQItem;
