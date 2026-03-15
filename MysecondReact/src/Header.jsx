import brandLogo from "./assets/brand_logo.png";
const Header = () => {
  return (
    <>
      <div className="px-10 flex justify-between items-center shadow">
        <div className="p-4">
          <img src={brandLogo} alt="Brand logo" />
        </div>
        <ul className="flex items-center gap-5">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
        <button className="bg-red-600 text-white py-3 px-5 rounded">
          Login
        </button>
      </div>
    </>
  );
};
export default Header;
