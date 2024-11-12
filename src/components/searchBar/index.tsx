import ReactSelect from 'react-select';
import { makes } from '../../utils/constants';
import { FormEvent, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchBar = () => {
  const [params, setParams] = useSearchParams();
  const [make, setMake] = useState<string>(params.get('make') || '');
  const [model, setModel] = useState<string>(params.get('make') || '');
  const options = useMemo(
    () => makes.map((make) => ({ value: make, label: make })),
    []
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setParams({ make, model });
  };

  const selected = {
    label: params.get('make') || '',
    value: params.get('make') || '',
  };

  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      <div className="searchbar__item">
        <ReactSelect
          onChange={(e) => setMake(e!.value)}
          className="w-full text-black"
          options={options}
          placeholder="Choose a Brand..."
          defaultValue={selected}
        />

        <button className="ml-3 sm:hidden" aria-label="search">
          <img src="/search.svg" className="size-10" alt="magnifying glass" />
        </button>
      </div>
      <div className="searchbar__item">
        <label htmlFor="model" className="absolute ml-4">
          <img src="/model-icon.png" width={25} alt="car from front" />
        </label>

        <input
          id="model"
          title="search for specific model"
          type="text"
          className="searchbar__input rounded text-black"
          placeholder="Exp: X5"
          onChange={(e) => setModel(e.target.value)}
          defaultValue={params.get('model') || ''}
        />

        <button className="ml-3" aria-label="search">
          <img src="/search.svg" className="size-10" alt="magnifying glass" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
