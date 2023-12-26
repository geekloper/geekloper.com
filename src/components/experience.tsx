import { motion } from 'framer-motion';
import experiencesData from '@data/experiences.json';
import { useState } from 'react';

function Experience() {
  const [toggleExperiences, setToggleExperiences] = useState(false);

  const animationVariants = {
    initial: { x: -10, opacity: 0, display: 'none' },
    animate: {
      x: 0,
      opacity: 1,
      display: 'flex',
    },
  };

  return (
    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
      <section className="text-gray-800  dark:text-gray-100 mt-24">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-blue-500 before:bg-blue-500">
                <h3 className="text-3xl font-semibold">Experience</h3>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700 before:bg-blue-100">
                {experiencesData.map((_experience, index: number) => (
                  <motion.div initial="initial" variants={animationVariants} animate={index !== 0 && toggleExperiences === false ? 'initial' : 'animate'} className={'flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue-500 before:bg-blue-500'} key={_experience.id}>
                    <h3 className="text-xl font-semibold tracki">{_experience.title}</h3>
                    <time className="text-xs tracki uppercase dark:text-gray-400">{_experience.date}</time>
                    <p className="mt-3">{_experience.description}</p>
                    <ul className="list-disc mt-3 ml-10">
                      {_experience.tasks.map((_task) => (
                        <li key={_task.id}>{_task.description}</li>
                      ))}
                    </ul>

                    {_experience.link && (
                      <div className="container flex justify-end p-6 mx-auto capitalize dark:text-gray-300">
                        <a href={_experience.link} target="_blank" className="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">
                          + Read more
                        </a>
                      </div>
                    )}

                    {index === 0 && toggleExperiences === false && (
                      <motion.div className="container flex justify-center p-6 mx-auto capitalize dark:text-gray-300" animate={{ y: 10 }} transition={{ repeat: Infinity, type: 'spring', damping: 3, stiffness: 50, restDelta: 0.001 }}>
                        <div>
                          <button onClick={() => setToggleExperiences(!toggleExperiences)} className="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">
                            + Show all experiences
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Experience;
