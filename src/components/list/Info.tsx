import { motion } from 'framer-motion';
import { CarType } from '../../types';

const Field = ({ img, text }: { img: string; text: string }) => {
  return (
    <motion.div
      initial={{ translateY: 50, opacity: 0.3 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      className="flex-center flex-col"
    >
      <img src={img} width={25} alt="icon" />
      <p>{text}</p>
    </motion.div>
  );
};

const Info = ({ car }: { car: CarType }) => {
  const transmission = car.transmission === 'a' ? 'Automatic' : 'Manuel';
  const drive =
    car.drive === 'fwd'
      ? 'Front-Wheel Drive'
      : car.drive === 'rwd'
      ? 'Rear-Wheel Drive'
      : car.drive === 'awd'
      ? 'All-Wheel Drive'
      : 'Four-Wheel Drive';

  return (
    <div className="flex w-full justify-between capitalize">
      <Field img="/steering-wheel.svg" text={transmission} />
      <Field img="/tire.svg" text={drive} />
      <Field img="/gas.svg" text={car.fuel_type} />
    </div>
  );
};

export default Info;
