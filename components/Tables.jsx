const Tables = () => {
  return (
    <div className="relative overflow-x-auto  border border-[#ABB7FF] w-11/12 sm:rounded-md">
      <table className="min-w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-900 uppercase bg-[#EDF0FE]">
          <tr>
            <th scope="col" class="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-[#EDF0FE] rounded focus:ring-blue-500"
                />
                <label for="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Patient id
            </th>
            <th scope="col" className="px-6 py-3">
              Patient names
            </th>
            <th scope="col" className="px-6 py-3">
              Diseases
            </th>
            <th scope="col" className="px-6 py-3">
              Transfer_By
            </th>
            <th scope="col" className="px-6 py-3">
              Facility from
            </th>
            <th scope="col" className="px-6 py-3">
              Priority 
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b hover:bg-gray-50 ">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label for="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="p-6 font-medium text-gray-900 whitespace-nowrap"
            >
              0001
            </th>
            <td className="px-6 py-4">John Doe</td>
            <td className="px-6 py-4">HIV</td>
            <td className="px-6 py-4">Dr Jack </td>
            <td className="px-6 py-4">FAISAL</td>
          </tr>
          <tr className="bg-white border-b hover:bg-gray-50 ">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label for="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="p-6 font-medium text-gray-900 whitespace-nowrap"
            >
              0002
            </th>
            <td className="px-6 py-4">Chris M</td>
            <td className="px-6 py-4">Malaria</td>
            <td className="px-6 py-4">Dr Jack </td>
            <td className="px-6 py-4">Zuzu</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default Tables;
