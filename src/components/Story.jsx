import React from 'react';
import Button from './Buttons/Button';
import { motion, AnimatePresence } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: 60,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      type: 'spring',
      stiffness: 60, // Controls the stiffness of the spring
      damping: 20,
      delay: 0.2,
    },
  },
};

export default function Story() {
  return (
    <>
      <section className='flex px-[16px] flex-col gap-[64px] items-start justify-between w-full lg:gap-[64px] lg:flex-row'>
        <div className='flex w-fit flex-shrink-0'>
          <motion.h3
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='text-bodyDefault '
          >
            Our Story
          </motion.h3>
        </div>
        <motion.aside
          variants={fadeInAnimationVariants}
          initial='initial'
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.3,
              delay: 0.3, // Delay for h1 element
              type: 'spring', // Using spring, but with adjustments
              stiffness: 60, // Higher stiffness for less "bouncy" motion
              damping: 20, // Increase damping to avoid bounce at the end
            },
          }}
          viewport={{ once: true }}
          className='flex flex-col max-w-[1000px]'
        >
          <p className='text-h2 md:text-h1 lg:text-display'>
            See how we've turned ideas into reality. Dive into the stories of{' '}
            <span className='text-dark50'>
              successful product designs that make a difference.
            </span>
          </p>
        </motion.aside>
        <motion.div
          variants={fadeInAnimationVariants}
          initial='initial'
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.3,
              delay: 0.4, // Delay for h1 element
              type: 'spring', // Using spring, but with adjustments
              stiffness: 60, // Higher stiffness for less "bouncy" motion
              damping: 20, // Increase damping to avoid bounce at the end
            },
          }}
          viewport={{ once: true }}
          className='flex-shrink-0'
        >
          <Button arrow big text={'Our Work'} grey />
        </motion.div>
      </section>
    </>
  );
}
