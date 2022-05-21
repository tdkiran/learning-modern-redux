import React from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  decrement,
  increment,
  reset,
  setCount,
} from "./features/counter/counter-slice";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();
    const count = Number(event?.currentTarget?.value);
    dispatch(setCount(count));
  }
  return (
    <div className="App">
      <header className="App-header">Counter</header>
      <main>
        <button type="button" onClick={() => dispatch(increment())}>
          Add
        </button>
        <button type="button" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button type="button" onClick={() => dispatch(reset())}>
          Reset
        </button>
        <div>
          <input type="number" value={count} onChange={handleChange} />
        </div>
        count is: {count}
      </main>
    </div>
  );
}

export default App;
