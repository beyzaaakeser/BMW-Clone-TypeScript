import React, { useEffect, useState } from 'react';
import { fetchCars } from '../../utils/fetchCars';
import { CarType } from '../../types';
import Warning from './Warning';
import Card from './Card';

const List = () => {
  const [cars, setCars] = useState<CarType[] | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    fetchCars()
      .then((data) => setCars(data))
      .catch(() => setIsError(true));
  }, []);

  return (
    <div className='padding-x max-width'>
      {!cars ? (
        <Warning>Loading...</Warning>
      ) : isError ? (
        <Warning>An error occurred</Warning>
      ) : cars.length < 1 ? (
        <Warning>No results were found matching the search criteria.</Warning>
      ) : (
        cars.length >= 1 && (
          <section>
            <div className="home__cars-wrapper">
              {cars.map((car, i) => (
                <Card car={car} key={i} />
              ))}
            </div>
          </section>
        )
      )}
    </div>
  );
};

export default List;
