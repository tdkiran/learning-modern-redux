import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { increment } from "./features/counter/counter-slice";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Counter</p>
        <button type="button" onClick={() => dispatch(increment)}>
          Add
        </button>
        count is: {count}
      </header>
    </div>
  );
}

export default App;
