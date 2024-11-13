import Images from './Images';
import { CarType } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  car: CarType;
  isOpen: boolean;
  close: () => void;
}

const Modal = ({ car, isOpen, close }: Props) => {

  return (
    <AnimatePresence>
     { isOpen && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-20 
      backdrop-blur grid place-items-center"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.25 }}
          exit={{ scale: 0.5, opacity: 0 }}
          className="bg-white relative p-6 max-w-lg max-h-[98vh] rounded-2xl 
        flex flex-col gap-5 shadow-xl overflow-auto"
        >
          <button
             aria-label="close modal"
            onClick={close}
            className="cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full"
          >
            <img src="/close.svg" alt="X" />
          </button>
          <Images car={car} />

          {Object.entries(car).map(([key, value], index) => (
            <p key={index} className="flex justify-between capitalize border-b">
              <span>{key.split('_').join(' ')}</span>
              <span className="font-semibold">{value}</span>
            </p>
          ))}
        </motion.div>
      </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
