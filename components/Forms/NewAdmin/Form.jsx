import React from 'react'

const Form = () => {
    return (
        <form action="" className="w-10/12 py-5">
        <div className="grid grid-cols-2 gap-y-2 gap-x-5 ">
          <div class="mb-3">
            <label className="block mb-2 text-base font-medium text-gray-700">
              First name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter First Name"
              className="border border-whiteTheme-purpleAccent text-black  text-sm rounded-md block w-full p-2.5 focus:outline-none"
            />
          </div>
          <div class="mb-3">
            <label className="block mb-2 text-base font-medium text-gray-700">
              Last name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter Last name"
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
              placeholder="Enter Email"
              className="border border-whiteTheme-purpleAccent text-black  text-sm rounded-md block w-full p-2.5 focus:outline-none"
            />
          </div>
          <div class="mb-3">
            <label className="block mb-2 text-base font-medium text-gray-700">
              NID
            </label>
            <input
              type="text"
              name="number"
              required
              placeholder="Enter National ID"
              className="border border-whiteTheme-purpleAccent text-black  text-sm rounded-md block w-full p-2.5 focus:outline-none"
            />
          </div>
          <div class="mb-3">
            <label className="block mb-2 text-base font-medium text-gray-700">
              Role type
            </label>
            <select
              id="countries"
              className="border border-whiteTheme-purpleAccent text-black  text-sm rounded-md block w-full p-2.5 focus:outline-none"
            >
              <option selected>Role type</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          
          <div class="mb-3">
            <label className="block mb-2 text-base font-medium text-gray-700">
              Contact
            </label>
            <input
              type="number"
              name="name"
              required
              placeholder="Enter contact"
              className="border border-whiteTheme-purpleAccent text-black  text-sm rounded-md block w-full p-2.5 focus:outline-none"
            />
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
    )
}

export default Form
