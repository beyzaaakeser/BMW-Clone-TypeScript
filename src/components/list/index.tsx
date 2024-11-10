import React, { useEffect, useState } from 'react';
import { fetchCars } from '../../utils/fetchCars';
import { CarType } from '../../types';
const List = () => {
  const [cars, setCars] = useState<CarType[] | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    fetchCars()
      .then((data) => setCars(data))
      .catch(() => setIsError(true));
  }, []);

  return <div>List</div>;
};

export default List;
