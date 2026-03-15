import Country from "./Country";
import { use, useState } from "react";

function Countries({ data }) {
  const [visitedCountry, setVisitedCountry] = useState([]);
  const countVisitedCountry = (country) => {
    const newVistedCountry = [...visitedCountry, country];
    setVisitedCountry(newVistedCountry);
  };
  const CountryData = use(data);
  const countries = CountryData.countries;

  return (
    <>
      <h1 className="text-4xl text-center mt-10">All Countries</h1>
      <h1 className="text-2xl text-center mt-10">{visitedCountry.length}</h1>

      <div className="grid grid-cols-3 gap-3 w-10/12 mx-auto py-10">
        {countries.map((country) => (
          <Country
            countVisitedCountry={countVisitedCountry}
            key={country.ccn3.ccn3}
            country={country}
          />
        ))}
      </div>
    </>
  );
}

export default Countries;
