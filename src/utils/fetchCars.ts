import { CarType } from './../types';

const options = {
  headers: {
    'x-rapidapi-key': '93abac49f1mshf96bc7f455d8f52p1bfff8jsn714e0a7240e5',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
  },
};

type Parameters = {
  limit:number
}

export const fetchCars = async ({limit}:Parameters): Promise<CarType[]> => {
  try {
    const url =
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=BMW&limit=${limit}`;

    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error('An error occurred while getting data.');
  }
};
