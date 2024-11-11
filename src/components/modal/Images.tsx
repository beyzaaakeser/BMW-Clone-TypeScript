import React from 'react';
import { CarType } from '../../types';
import generateImage from '../../utils/generateImage';

const Images = ({ car }: { car: CarType }) => {
  return (
    <div className="flex-1 flex-col gap-3">
      <div className="w-full h-40 bg-pattern bg-center rounded-lg">
        <img
          src={generateImage(car)}
          className="h-full mx-auto object-contain"
        />
      </div>

      <div className="flex gap-3 my-3">
        <div className="rounded flex-1 flex relative h-24 bg-primary-blue-100">
          <img
            src={generateImage(car, '29')}
            className="mx-auto object-contain min-w-[146px]"
          />
        </div>

        <div className="rounded flex-1 flex relative h-24 bg-primary-blue-100">
          <img
            src={generateImage(car, '33')}
            className="mx-auto object-contain min-w-[146px]"
          />
        </div>

        <div className="rounded flex-1 flex relative h-24 bg-primary-blue-100">
          <img
            src={generateImage(car, '13')}
            className="mx-auto object-contain min-w-[146px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Images;
