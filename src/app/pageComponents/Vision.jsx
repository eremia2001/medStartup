/* eslint-disable react/display-name */
import React, { useState, forwardRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import plane from '../assets/airplane.jpg';
import VisionItem from '../components/VisionItem';
import StoryItem from '../components/StoryItem';
import visionItems from '../data/visionItems';
import { motion, AnimatePresence } from 'framer-motion';

const Vision = forwardRef(({ inView }, ref) => {
  return (
    <div>
      <div className="mx-auto text-center mt-20">
        <h1 className=" font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl ">
          Unsere <span className="text-primary">Vision</span>
        </h1>
        <h2 className="text-2xl  md:text-3xl lg:text-4xl font-bold">
          Warum wir tun was wir tun
        </h2>
        <p className="text-subline  lg:text-lg ">
          Eine Welt ohne Reisegrenzen für Ihre Gesundheit{' '}
        </p>
      </div>
      {visionItems.map((item, index) => {
        return (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 * index, duration: 0.6 }}
            ref={ref}
          >
            <VisionItem
              imageFirst={index % 2 === 1}
              title={item.title}
              desc={item.desc}
              icon={item.icon}
            />
          </motion.div>
        );
      })}
    </div>
  );
});

export default Vision;
