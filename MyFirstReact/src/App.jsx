import { useState } from "react";
import "./App.css";
import Button from "./Button";
function App() {
  let [bgColor, setBgColor] = useState("");
  return (
    <>
      <div className="colorBox" style={{ backgroundColor: bgColor }}>
        <Button btnClick={() => setBgColor("red")} color={"Red"} />
        <Button btnClick={() => setBgColor("green")} color={"Green"} />
        <Button btnClick={() => setBgColor("yellow")} color={"Yellow"} />
      </div>
    </>
  );
}

export default App;
