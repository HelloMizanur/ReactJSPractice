import { useState } from "react";
import "./App.css";
import Card from "./Card";
function App() {
  let [name, setName] = useState("");
  let [job, setJob] = useState("");
  return (
    <>
      <p>Name:</p>
      <input
        type="text"
        value={name}
        placeholder="Your Name"
        onChange={(e) => {
          setName(e.target.value.toUpperCase());
        }}
      />
      <p>Job:</p>
      <input
        value={job}
        type="text"
        placeholder="Your Job"
        onChange={(e) => {
          setJob(e.target.value);
        }}
      />
      <Card name={name} job={job} />
      <button
        onClick={() => {
          (setJob(""), setName(""));
        }}
      >
        Reset
      </button>
    </>
  );
}

export default App;
