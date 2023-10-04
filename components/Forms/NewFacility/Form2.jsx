import React, { useState } from "react";

const Form2 = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  return (
    <form action="" className="w-10/12 py-5">
      <div className="grid grid-cols-2 gap-y-2 gap-x-5 ">
        <div class="mb-3">
          <label className="block mb-2 text-base font-medium text-gray-700">
            Contacts
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
            Email
          </label>
          <input
            type="email"
            name="name"
            required
            placeholder="Enter Facility name"
            className="border border-whiteTheme-purpleAccent text-black  text-sm rounded-md block w-full p-2.5 focus:outline-none"
          />
        </div>

        <div className="mb-3 col-span-2">
          {/* Hidden input field for file upload */}
          <label className="block mb-2 text-base font-medium text-gray-700">
            Facility thunbail
          </label>
          <div className="border border-whiteTheme-purpleAccent text-black  text-sm rounded-md block w-full px-2.5 py-4 focus:outline-none">
            <input
              type="file"
              id="file-upload"
              className="hidden"
              onChange={handleFileChange}
            />

            {/* Custom button to trigger file upload */}
            <label
              htmlFor="file-upload"
              className="px-4 py-2 bg-whiteTheme-secondaryColor text-black cursor-pointer hover:bg-whiteTheme-primaryColor rounded-md"
            >
              Upload image
            </label>

            {/* Display the selected file name (optional) */}
            <span className="ml-2">{selectedFile && selectedFile.name}</span>
          </div>
        </div>
        <div class="mb-3 col-span-2">
          <label className="block mb-2 text-base font-medium text-gray-700">
            About
          </label>
          <textarea
            name=""
            placeholder="About facility"
            cols="30"
            rows="6"
            className="w-full border border-whiteTheme-purpleAccent rounded-md focus:outline-none p-2.5 text-whiteTheme-titleColor"
          ></textarea>
        </div>
      </div>
      <div className="pt-5">
        <button
          type="submit"
          className="bg-whiteTheme-primaryColor text-white rounded-md px-16 p-2"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Form2;
