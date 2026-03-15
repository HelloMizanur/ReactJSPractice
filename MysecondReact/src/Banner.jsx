import bannerLogo from "./assets/shoe_image.png";
const Banner = () => {
  return (
    <>
      <div className="p-12 grid grid-cols-2">
        <div className="">
          <h1 className="text-7xl pb-5">YOUR FEET DESERVE THE BEST</h1>
          <h3 className="py-5 text-2xl">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </h3>
          <div className="space-x-2">
            <button className="bg-red-600 text-white py-3 px-5 rounded">
              Shope Now
            </button>
            <button className="border py-3 px-5 rounded">Catagory</button>
          </div>
        </div>
        <div>
          <img src={bannerLogo} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
