import { useState } from "react";
const Country = ({ country, countVisitedCountry }) => {
  const [visited, setViseded] = useState(false);
  const handleVisted = (country) => {
    setViseded(!visited);
    countVisitedCountry(country);
  };
  return (
    <div className="border-2 border-amber-300 rounded p-4 flex flex-col justify-center items-center gap-5">
      <p className="text-2xl">{country.name.common}</p>
      <img src={country.flags.flags.png} alt="" />
      <button
        onClick={() => {
          handleVisted(country);
        }}
        className={`font-bold rounded-2xl py-3 px-4 text-white ${visited ? "bg-green-500" : "bg-amber-600"}`}
      >
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
