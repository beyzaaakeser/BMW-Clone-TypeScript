import { CarType } from './../types';

const options = {
  headers: {
    'x-rapidapi-key': '93abac49f1mshf96bc7f455d8f52p1bfff8jsn714e0a7240e5',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
  },
};

type Parameters = {
  limit: number;
  make?: string;
  model?: string;
  fuel_type?: string;
};

export const fetchCars = async ({
  limit,
  make = 'bmw',
  model = '',
  fuel_type = '',
}: Parameters): Promise<CarType[]> => {
  try {
    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?limit=${limit}&make=${make}&model=${model}&fuel_type=${fuel_type}`;

    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error('An error occurred while getting data.');
  }
};
