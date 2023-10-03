import React from "react";

const step1 = () => {
  return (
    <div>
      <h2 className="py-6 text-base text-whiteTheme-primaryColor">
        Main facilities details
      </h2>
      <form action="" className="w-10/12">
        <div className="grid grid-cols-2 gap-y-2 gap-x-5 ">
          <div class="mb-3">
            <label className="block mb-2 text-base font-medium text-gray-700">
              Facility name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter Facility name"
              className="border border-whiteTheme-purpleAccent text-black  text-sm rounded-md block w-full p-2.5 focus:outline-none"
            />
          </div>
          <div class="mb-3">
            <label className="block mb-2 text-base font-medium text-gray-700">
              Facility type
            </label>
            <select
              id="countries"
              className="border border-whiteTheme-purpleAccent text-black  text-sm rounded-md block w-full p-2.5 focus:outline-none"
            >
              <option selected>Facility type</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div class="mb-3">
            <label className="block mb-2 text-base font-medium text-gray-700">
              District
            </label>
            <select
              id="countries"
              className="border border-whiteTheme-purpleAccent text-black  text-sm rounded-md block w-full p-2.5 focus:outline-none"
            >
              <option selected>Facility type</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div class="mb-3">
            <label className="block mb-2 text-base font-medium text-gray-700">
              Sector
            </label>
            <select
              id="countries"
              className="border border-whiteTheme-purpleAccent text-black  text-sm rounded-md block w-full p-2.5 focus:outline-none"
            >
              <option selected>Facility type</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div class="mb-3">
            <label className="block mb-2 text-base font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter Facility name"
              className="border border-whiteTheme-purpleAccent text-black  text-sm rounded-md block w-full p-2.5 focus:outline-none"
            />
          </div>
          <div class="mb-3">
            <label className="block mb-2 text-base font-medium text-gray-700">
              Rank
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter Facility name"
              className="border border-whiteTheme-purpleAccent text-black  text-sm rounded-md block w-full p-2.5 focus:outline-none"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-whiteTheme-primaryColor text-white rounded-md px-16 py-2"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default step1;
