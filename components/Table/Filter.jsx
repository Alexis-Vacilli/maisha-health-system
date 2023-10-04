"use client"
import { AiOutlineSearch } from "react-icons/ai";

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="flex justify-between items-center w-11/12 py-6 border-b-2 border-whiteTheme-purpleAccent">
      <div className="flex items-center justify-between border border-whiteTheme-lightBlueAccent py-2 px-4 rounded-lg">
        <input
          type="text"
          placeholder="search"
          className="focus:outline-none"
          value={filter || ''}  
          onChange={(e) => setFilter(e.target.value)} 
        />
        <AiOutlineSearch />
      </div>
      <div className="flex gap-5">
        <select
          id="countries"
          className="border border-whiteTheme-lightBlueAccent  text-sm rounded-md block w-full p-2.5 focus:outline-none"
        >
          <option selected>Facility type</option>
          <option value="male">Kicukiro</option>
          <option value="female">Kakak</option>
        </select>
        <button className="border border-whiteTheme-greenColor py-2 px-5 text-whiteTheme-greenColor rounded-md">
          Excel
        </button>
        <button className="border border-whiteTheme-orangeAccent py-2 px-5 text-whiteTheme-orangeAccent rounded-md">
          PDF
        </button>
      </div>
    </div>
  );
};

export default Filter;
