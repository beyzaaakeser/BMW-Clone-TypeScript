import ReactSelect from 'react-select';
import { makes } from '../../utils/constants';
import { FormEvent, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchBar = () => {
  const [params, setParams] = useSearchParams();
  const [make, setMake] = useState<string>('');
  const [model, setModel] = useState<string>('');
  const options = useMemo(
    () => makes.map((make) => ({ value: make, label: make })),
    []
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setParams({ make: make.toLowerCase(), model: model.toLowerCase() });
  };

  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      <div className="searchbar__item">
        <ReactSelect
          onChange={(e) => setMake(e!.value)}
          className="w-full text-black"
          options={options}
          placeholder="Choose a Brand..."
        />

        <button className="ml-3 sm:hidden">
          <img src="/search.svg" className="size-10" />
        </button>
      </div>
      <div className="searchbar__item">
        <img src="/model-icon.png" width={25} className="absolute ml-4" />
        <input
          type="text"
          className="searchbar__input rounded text-black"
          placeholder="Exp: X5"
          onChange={(e) => setModel(e.target.value)}
        />
        <button className="ml-3">
          <img src="/search.svg" className="size-10" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
