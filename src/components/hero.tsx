import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-5 space-y-8">
      <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
        <div className="max-w-3xl text-left mx-auto">
          <p className="block font-medium text-gray-800 dark:text-white text-4xl sm:text-5xl md:text-5xl lg:text-7xl">
            Hi, <br /> I'm Abdellah
          </p>
        </div>
      </motion.div>
      <div className="max-w-3xl text-left mx-auto">
        <TypeAnimation className="text-lg text-gray-700 dark:text-gray-400 text-2xl" sequence={[400, 'Devops Engineer', 400, 'Cloud Engineer']} speed={70} wrapper="span" repeat={Infinity}></TypeAnimation>
      </div>
      <div className="max-w-3xl text-left mx-auto">
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.44 }}>
          <p className="text-gray-800 dark:text-gray-300 max-w-[85rem] mx-auto px-4 space-y-8">As a teenager, I started exploring the world of coding as a hobby, and now I'm living the dream as a DevOps and Cloud Engineer at Capgemini.</p>
        </motion.div>
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
          <p className="text-gray-800 dark:text-gray-300 max-w-[85rem] mx-auto px-4 my-4">With 7 years of experience in the industry, I specialize in Cloud-Native app development, implementing DevOps strategies, and designing Cloud Solutions. I'm passionate about using my skills to help businesses optimize their Cloud infrastructure and achieve their goals.</p>
        </motion.div>
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }}>
          <p className="text-gray-800 dark:text-gray-300 max-w-[85rem] mx-auto px-4 my-4">Let's connect and explore how we can work together to create innovative solutions.</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
