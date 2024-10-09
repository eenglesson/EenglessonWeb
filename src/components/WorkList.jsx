import React from 'react';
import WorkBig from './WorkBig';
import WorkSmall from './WorkSmall';
import PencilImg from '../assets/pens.webp';
import fintechImage from '../assets/fintech.jpg';
import sofaImg from '../assets/sofa.webp';
import sunImg from '../assets/sun.jpg';
import tagsImg from '../assets/tags.png';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      type: 'spring',
      stiffness: 60, // Controls the stiffness of the spring
      damping: 20,
      delay: 0,
    },
  },
};

export default function WorkList() {
  const workItems = [
    {
      imageSrc: sofaImg,
      title: 'Booking Corp.',
      description: 'Fintech Dello Banking App',
    },
    {
      imageSrc: PencilImg,
      title: 'Transport Inc.',
      description: 'Logistics and Transport Solutions',
    },
    {
      imageSrc: PencilImg,
      title: 'Media Tech.',
      description: 'Innovative Media Solutions',
    },
    {
      imageSrc: sofaImg,
      title: 'Retailer Pro.',
      description: 'E-Commerce Solutions',
    },
  ];
  return (
    <>
      <section className='flex w-full flex-col gap-20 '>
        <motion.div
          variants={fadeInAnimationVariants}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
        >
          <WorkBig />
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-[64px] md:gap-y-[32px] md:gap-[16px]'>
          {workItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInAnimationVariants}
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
            >
              <WorkSmall imageSrc={item.imageSrc} title={item.title} />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
