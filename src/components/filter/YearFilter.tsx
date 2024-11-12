import React, { FormEvent, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const YearFilter = () => {
  const [params, setParams] = useSearchParams();
  const [year, setYear] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    params.set('year', year);

    setParams(params);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center  items-center">
      <label
        htmlFor="year"
        className="ml-6 bg-white p-[6px] rounded-l  text-black"
      >
        Year:
      </label>
      <input
        id="year"
        title="search for specific year"
        type="number"
        className="w-[100px] py-[6px] px-2 rounded-r  shadow text-black"
        placeholder="Exp: 2023"
        onChange={(e) => setYear(e.target.value)}
      />

      <button aria-label="search year" className="ml-1">
        <img src="/right-arrow.svg" alt="right arrow" />
      </button>
    </form>
  );
};

export default YearFilter;
