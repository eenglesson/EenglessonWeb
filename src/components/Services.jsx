import React, { useState } from 'react';
import { HiArrowDown } from 'react-icons/hi2';
import { motion, AnimatePresence } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: 40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      type: 'spring',
      stiffness: 60,
      damping: 20,
      delay: 0.2,
    },
  },
};

const services = [
  {
    id: 1,
    title: 'Branding',
    todos: ['Logo Design', 'Rebranding Design', 'Brand Guidelines'],
  },
  {
    id: 2,
    title: 'UX/UI Designs',
    todos: [
      'Figma Design',
      'User Interface Design',
      'Responsive Design',
      'User Experience Testing',
    ],
  },
  {
    id: 3,
    title: 'Motion & Animation',
    todos: ['Animated Design', 'Interactive Websites Design', 'Framer Motion'],
  },
  {
    id: 4,
    title: 'Web Development',
    todos: [
      'Backend Development',
      'Frontend Development',
      'Database Management',
    ],
  },
];

export default function Services() {
  const [activeDiv, setActiveDiv] = useState(null);

  const toggleDiv = (divId) => {
    setActiveDiv(activeDiv === divId ? null : divId);
  };

  return (
    <>
      <section
        variants={fadeInAnimationVariants}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}
        className='flex flex-col 
         gap-8 px-[16px]'
      >
        <motion.h3
          variants={fadeInAnimationVariants}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          className='text-bodyDefault'
        >
          Services
        </motion.h3>
        <aside>
          {services.map((service) => (
            <motion.div
              variants={fadeInAnimationVariants}
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
              key={service.id}
              className='border-b border-grey30 cursor-pointer overflow-hidden py-6'
              onClick={() => toggleDiv(service.id)}
            >
              <div className='flex items-center justify-between'>
                <h3 className=' text-h2 md:text-h1 '>{service.title}</h3>
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: activeDiv === service.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <HiArrowDown size={30} className='' />
                </motion.div>
              </div>
              <AnimatePresence>
                {activeDiv === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <aside className='flex flex-col gap-5 pt-6'>
                      {service.todos.map((todo, index) => (
                        <p key={index} className='text-h3'>
                          {todo}
                        </p>
                      ))}
                    </aside>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </aside>
      </section>
    </>
  );
}
