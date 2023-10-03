import React from "react";

const Step1 = ({ formData, setFormData, nextStep }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div>
      <h2 className="pb-4 text-base">Patients Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-y-1 gap-x-5 ">
          <div class="mb-3">
            <label className="block mb-2 text-lg font-medium text-gray-700">
              <span className="text-red-500">*</span>First Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Patient FirstName"
              className="border border-[#ABB7FF] text-black  text-sm rounded-md block w-full p-2.5 focus:outline-none"
            />
          </div>
          <div class="mb-3">
            <label className="block mb-2 text-lg font-medium text-gray-700">
              <span className="text-red-500">*</span>Last Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Patient Lastname"
              className="border border-[#ABB7FF] text-black  text-sm rounded-md block w-full p-2.5 focus:outline-none"
            />
          </div>
          <div class="mb-3">
            <label className="block mb-2 text-lg font-medium text-gray-700">
              <span className="text-red-500">*</span>Date of Birth
            </label>
            <input
              type="date"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Date of birth"
              className="border border-[#ABB7FF] text-black  text-sm rounded-md block w-full p-2.5 focus:outline-none"
            />
          </div>
          <div class="mb-3">
            <label className="block mb-2 text-lg font-medium text-gray-700">
              <span className="text-red-500">*</span>Gender
            </label>
            <select
              id="countries"
              className="border border-[#ABB7FF] text-black  text-sm rounded-md block w-full p-2.5 focus:outline-none"
            >
              <option selected>Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div class="mb-3">
            <label className="block mb-2 text-lg font-medium text-gray-700">
              <span className="text-red-500">*</span>Number
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Patient phone number"
              className="border border-[#ABB7FF] text-black  text-sm rounded-md block w-full p-2.5 focus:outline-none"
            />
          </div>
          <div class="mb-3">
            <label className="block mb-2 text-lg font-medium text-gray-700">
              <span className="text-red-500">*</span>District
            </label>
            <select
              id="countries"
              className="border border-[#ABB7FF] text-black  text-sm rounded-md block w-full p-2.5 focus:outline-none"
            >
              <option selected>District</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div class="mb-3">
            <label className="block mb-2 text-lg font-medium text-gray-700">
              <span className="text-red-500">*</span>Sector
            </label>
            <select
              id="countries"
              className="border border-[#ABB7FF] text-black  text-sm rounded-md block w-full p-2.5 focus:outline-none"
            >
              <option selected>Sector</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div class="mb-3">
            <label className="block mb-2 text-lg font-medium text-gray-700">
              <span className="text-red-500">*</span>Village
            </label>
            <select
              id="countries"
              className="border border-[#ABB7FF] text-black  text-sm rounded-md block w-full p-2.5 focus:outline-none"
            >
              <option selected>Village</option>
              <option value="male">Kicukiro</option>
              <option value="female">Kakak</option>
            </select>
          </div>
        </div>
        <div>
          <h2 className="py-4 text-lg text-whiteTheme-primaryColor font-semibold">
            Guardin Information
          </h2>
          <div className="grid grid-cols-3 gap-x-5 py-4">
            <div class="mb-3">
              <label className="block mb-2 text-lg font-medium text-gray-700">
                <span className="text-red-500">*</span>Names
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Guardian names"
                className="border border-[#ABB7FF] text-black  text-sm rounded-md block w-full p-2.5 focus:outline-none"
              />
            </div>
            <div class="mb-3">
            <label className="block mb-2 text-lg font-medium text-gray-700">
              <span className="text-red-500">*</span>Phone Number
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Patient phone number"
              className="border border-[#ABB7FF] text-black  text-sm rounded-md block w-full p-2.5 focus:outline-none"
            />
          </div>
          <div class="mb-3">
            <label className="block mb-2 text-lg font-medium text-gray-700">
              <span className="text-red-500">*</span>Relation
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Relation"
              className="border border-[#ABB7FF] text-black  text-sm rounded-md block w-full p-2.5 focus:outline-none"
            />
          </div>
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

export default Step1;
