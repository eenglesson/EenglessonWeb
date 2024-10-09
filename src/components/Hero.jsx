import React from 'react';
import Button from './Buttons/Button';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: 40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      type: 'spring',
      stiffness: 60, // Controls the stiffness of the spring
      damping: 20,
    },
  },
};
// mt-[200px]
export default function Hero() {
  return (
    <>
      <section className='flex flex-col gap-[64px] px-[16px]'>
        <motion.p
          variants={fadeInAnimationVariants}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          className='text-bodySmall sm:text-bodyDefault'
        >
          Creative Solutions · Software Engineer
        </motion.p>
        <motion.h1
          variants={fadeInAnimationVariants}
          initial='initial'
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.3,
              delay: 0.2, // Delay for h1 element
              type: 'spring', // Using spring, but with adjustments
              stiffness: 60, // Higher stiffness for less "bouncy" motion
              damping: 20, // Increase damping to avoid bounce at the end
            },
          }}
          viewport={{ once: true }}
          className='text-h2 md:text-h1 lg:text-display max-w-[1100px]'
        >
          Unleash the potential of your digital presence with Englesson. Let's
          build captivating{' '}
          <span className='text-dark50'>
            and responsive websites that turn visions into reality.
          </span>
        </motion.h1>
        <motion.div
          variants={fadeInAnimationVariants}
          initial='initial'
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.3,
              delay: 0.3, // Delay for h1 element
              type: 'spring',
              stiffness: 60,
              damping: 20,
            },
          }}
          viewport={{ once: true }}
        >
          <Button text={'Contact Me'} arrow big />
        </motion.div>
      </section>
    </>
  );
}
