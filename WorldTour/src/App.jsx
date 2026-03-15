import "./App.css";
import React, { Suspense } from "react";
import Countries from "./Components/Countries";
const loadCountries = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  const data = res.json();
  return data;
};
function App() {
  const data = loadCountries();
  return (
    <>
      <Suspense fallback={"Data Loading"}>
        <Countries data={data} />
      </Suspense>
    </>
  );
}

export default App;
