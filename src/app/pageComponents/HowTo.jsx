/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import HowToItem from '../components/HowToItem';
import howToData from '../data/howToData';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HowTo = forwardRef(({ inView }, ref) => {
  return (
    <div
      className="flex flex-row justify-center gap-20 flex-wrap  text-center mt-40 lg:mt-20  shadow-md p-10 bg-gray-200"
      ref={ref}
    >
      {howToData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 * index, duration: 0.5 }}
        >
          <HowToItem
            key={1}
            step={index + 1}
            title={item.title}
            desc={item.desc}
          />
        </motion.div>
      ))}
    </div>
  );
});

export default HowTo;
