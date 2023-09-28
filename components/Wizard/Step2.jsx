import React from "react";

const Step2 = ({ formData, setFormData, prevStep, submitForm }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <div>
      <h2 className="pb-4 text-base">Patients allocation</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-x-10 py-4">
          <div class="mb-3">
            <label className="block mb-2 text-lg font-medium text-gray-700">
              <span className="text-red-500">*</span>Departments
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
          <div class="mb-3">
            <label className="block mb-2 text-lg font-medium text-gray-700">
              <span className="text-red-500">*</span>Priority_Type
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
        <button
          type="submit"
          className="bg-[#1E2F97] text-white rounded-md px-10 py-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Step2;
