import { CarType } from '../../types';
import Info from './Info';
type Props = {
  car: CarType;
};

const Card = ({ car }: Props) => {
  return (
    <div className="car-card">
      <h2 className="car-card__content-title">
        {car.make} {car.model}
      </h2>

      <div className="flex mt-6 text-[19px]">
        <span className="font-semibold">₺</span>
        <span className="text-[32px]">
          {Math.round(Math.random() * 6000) + 1500}
        </span>
        <span className="font-semibold self-end">/day</span>
      </div>

      <div className="w-full">
        <img src="/hero.png" className="w-full h-full object-contain" alt="" />
      </div>

      <div className="w-full">
        <Info car={car} />
      </div>
    </div>
  );
};

export default Card;
