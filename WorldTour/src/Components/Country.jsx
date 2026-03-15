const Country = ({ country }) => {
  console.log(country.flags.flags.png);
  return (
    <div className="border-2 border-amber-300 rounded p-4 flex flex-col justify-center items-center gap-5">
      <p className="text-2xl">{country.name.common}</p>
      <img src={country.flags.flags.png} alt="" />
      <button>Visited</button>
    </div>
  );
};

export default Country;
