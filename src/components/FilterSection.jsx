import { FaPlus, FaMinus } from "react-icons/fa";

const FilterSection = () => {
  return (
    <div
      className="w-full max-w-md text-[16px] space-y-6 p-4 font-normal text-[#6E6E6E] bg-[#F0FFE5]
  "
    >
      <div className="flex justify-between pb-3 mb-4 border-[#A8A8A8] border-b">
        <span className="">Filter</span>
        <button className="uppercase">Clear All</button>
      </div>

      <div className="pb-3  mb-2 border-b border-[#A8A8A8]">
        <div className="flex items-center justify-between cursor-pointer">
          <h3 className="">Types of Plants</h3>
          <FaPlus />
        </div>
      </div>

      <div className="pb-3 mb-2 border-b border-[#A8A8A8]">
        <div className="flex items-center justify-between cursor-pointer">
          <h3>Price</h3>
          <FaPlus />
        </div>
      </div>

      <div className="pb-3 mb-2 border-b border-[#A8A8A8]">
        <div className="flex items-center justify-between cursor-pointer">
          <h3>Nursery</h3>
          <FaPlus />
        </div>
      </div>

      <div className="pb-3 mb-2 border-b border-[#A8A8A8]">
        <div className="flex items-center justify-between cursor-pointer">
          <h3>Ideal Plant Location</h3>
          <FaPlus />
        </div>
      </div>

      <div className="pb-3 mb-2 border-b border-[#A8A8A8]">
        <div className="flex items-center justify-between cursor-pointer">
          <h3>Indoor/Outdoor</h3>
          <FaPlus />
        </div>
      </div>

      <div className="pb-3 mb-2 border-b border-[#A8A8A8]">
        <div className="flex items-center justify-between cursor-pointer">
          <h3>Maintenance</h3>
          <FaPlus />
        </div>
      </div>

      <div className="pb-3 mb-2 border-b border-[#A8A8A8]">
        <div className="flex items-center justify-between cursor-pointer">
          <h3>Plant Size</h3>
          <FaPlus />
        </div>
      </div>

      <div className="pb-3 mb-2 border-b border-[#A8A8A8]">
        <div className="flex items-center justify-between cursor-pointer">
          <h3>Water Schedule</h3>
          <FaPlus />
        </div>
      </div>

      <div className="pb-3 mb-2 border-b border-[#A8A8A8]">
        <div className="flex items-center justify-between cursor-pointer">
          <h3>Color</h3>
          <FaPlus />
        </div>
      </div>

      <div className="pb-3 mb-2 border-b border-[#A8A8A8]">
        <div className="flex items-center justify-between cursor-pointer">
          <h3>Seasonal</h3>
          <FaPlus />
        </div>
      </div>

      <div className="pb-3 mb-2">
        <div className="flex items-center justify-between cursor-pointer">
          <h3>Light Efficient</h3>
          <FaPlus />
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
