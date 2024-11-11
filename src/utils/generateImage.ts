import { CarType } from '../types';

const generateImage = (car: CarType, angle?: string): string => {
  const url = new URL('https://cdn.imagin.studio/getimage?');

  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', car.make);
  url.searchParams.append('modelFamily', car.model);
  url.searchParams.append('zoomType', "fullscreen");

  if(angle){
    url.searchParams.append('angle', angle);
  }
  return url.href;
};

export default generateImage;
