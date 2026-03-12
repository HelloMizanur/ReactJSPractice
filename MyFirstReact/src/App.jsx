import { useState } from "react";
import "./App.css";

import Button from "./Button";
function App() {
  let [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <Button onBtnClick={() => setCount(count - 1)} sign={"-"} />
      <Button onBtnClick={() => setCount(count + 1)} sign={"+"} />
    </>
  );
}

export default App;
