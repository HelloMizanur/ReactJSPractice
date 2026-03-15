import Country from "./Country";
import { use } from "react";

function Countries({ data }) {
  const CountryData = use(data);
  const countries = CountryData.countries;

  return (
    <>
      <h1 className="text-4xl text-center mt-10">All Countries</h1>
      <div className="grid grid-cols-3 gap-3 w-10/12 mx-auto py-10">
        {countries.map((country) => (
          <Country key={country.ccn3.ccn3} country={country} />
        ))}
      </div>
    </>
  );
}

export default Countries;
