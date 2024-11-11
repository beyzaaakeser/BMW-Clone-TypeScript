import React, { useEffect, useState } from 'react';
import { fetchCars } from '../../utils/fetchCars';
import { CarType } from '../../types';
import Warning from './Warning';
import Card from './Card';
import Button from '../button';

const List = () => {
  const [cars, setCars] = useState<CarType[] | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(5);

  useEffect(() => {
    fetchCars({limit})
      .then((data) => setCars(data))
      .catch(() => setIsError(true));
  }, [limit]);

 

  return (
    <div className="padding-x max-width">
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

            <div className="w-full flex-center py-10">
              {limit < 31 && (
                <Button
                  title="Explore More"
                  handleClick={() => setLimit(limit + 5)}
                />
              )}
            </div>
          </section>
        )
      )}
    </div>
  );
};

export default List;
