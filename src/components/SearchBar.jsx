
import { FiSearch } from "react-icons/fi";
import img91 from "../assets/image91.png";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center max-w-[500px] mx-auto mb-10 border-b-2">
      <FiSearch color="#838383" className="text-3xl" aria-label="Search Icon" />
      <input
        type="text"
        placeholder="Search for plants..."
        className="w-full max-w-lg p-3 focus:outline-none"
        aria-label="Search Plant"
      />
      <img src={img91} alt="Logo" className="w-10 ml-4 -mb-4" />
    </div>
  );
};

export default SearchBar;
