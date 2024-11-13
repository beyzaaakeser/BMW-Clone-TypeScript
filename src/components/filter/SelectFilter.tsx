import React from 'react';
import ReactSelect from 'react-select';
import { fuels } from '../../utils/constants';
import { useSearchParams } from 'react-router-dom';

const SelectFilter = () => {
  const [params, setParams] = useSearchParams();

  const fuel = params.get('fuel_type');

  const selected = !fuel ? fuels[0] : fuels.find((i) => i.value === fuel);
  return (
    <div className="flex items-center">
      <label htmlFor="fuel" className="bg-white p-[6px] rounded mr-[2px] text-black">
        Fuel Type:
      </label>
      <ReactSelect
        inputId="fuel"
        options={fuels}
        className="text-black min-w-36 rounded-r"
        defaultValue={selected}
        onChange={(e) => {
          params.set('fuel_type', e!.value.toLowerCase());
          setParams(params);
        }}
      />
    </div>
  );
};

export default SelectFilter;
