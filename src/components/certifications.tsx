import { motion } from 'framer-motion';
import Certification from './certification';
import certificationsData from '@data/certfications.json';

function Certifications() {
  return (
    <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}>
      <section className="text-gray-800  dark:text-gray-100 mt-24">
        <div className="container justify-center max-w-5xl px-4 py-12 mx-auto">
          <div className="text-center mb-14 before:justify-center before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-auto before:dark:bg-blue-500 before:bg-blue-500">
            <h3 className="text-3xl font-semibold">Certification</h3>
          </div>
          <div className="flex gap-8 flex-wrap justify-center">
            {certificationsData.map((_cert, index) => (
              <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.06 }} key={_cert.id}>
                <Certification key={_cert.id} imgPath={_cert.image} credential_link={_cert.credential_link}>
                  {_cert.title}
                </Certification>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Certifications;
