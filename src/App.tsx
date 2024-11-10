import { ChangeEvent, MouseEvent, useRef, useState } from 'react';
import Display from './Display';

const App = () => {
  const [count, setCount] = useState<number>(0);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const handleChange = (e: ChangeEvent) => {
    console.log(e);
  };
  const handleClick = (e: MouseEvent) => {
    console.log(e)
  };
  return (
    <div>
      <h1 ref={titleRef}>Selamlar</h1>
      <input onChange={handleChange} />
      <button onClick={handleClick}>-</button>
      <Display count={count} />
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default App;
