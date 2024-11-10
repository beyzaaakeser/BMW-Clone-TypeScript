import { motion } from 'framer-motion';
import Button from '../button';

const Hero = () => {
  return (
    <div className="hero">
      <div className="pt-12 padding-x flex-1 max-h-[920px]">
        <h1 className="hero__title ">Feel the Freedom, Start the Journey</h1>
        <p className="hero__subtitle">
          Are you ready for an unforgettable journey with gold standard service?
          You can make every moment special by crowning your car rental
          experience with Gold Options.
        </p>

        <Button title="Explore Cars" designs="mt-10" />
      </div>
      <div className="flex justify-center">
        <motion.img
          initial={{ translateX: 200, scale: 0.7 }}
          animate={{ translateX: 0, scale: 1 }}
          transition={{ duration: 1 }}
          src="/hero.png"
          alt="gray-bmw"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
