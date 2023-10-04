"use client";

import React, { useMemo } from "react";

import MOCK_DATA from "../../constants/MOCK_DATA.json";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { COLUMNS } from "./columns";
import Filter from "./Filter";

import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'

const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    prepareRow,
    setGlobalFilter,
    state,
    canNextPage,
    canPreviousPage,
  } = tableInstance;

  const { globalFilter } = state;

  return (
    <>
      <Filter filter={globalFilter} setFilter={setGlobalFilter} />
      <div className="relative overflow-x-auto border border-whiteTheme-purpleAccent rounded-md w-11/12">
        <table
          {...getTableProps()}
          className="w-full text-sm  text-whiteTheme-titleColor"
        >
          <thead className="text-xs uppercase bg-whiteTheme-purpleAccent text-whiteTheme-subtitleColor font-semibold">
            {headerGroups.map((headerGroup, index) => (
              <tr
                key={index}
                {...headerGroup.getHeaderGroupProps()}
                className="p-6"
              >
                <th className="p-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-whiteTheme-purpleAccent border-whiteTheme-purpleAccent rounded focus:ring-whiteTheme-purpleAccent bg-red-500"
                    />
                  </div>
                </th>
                {headerGroup.headers.map((column, index) => (
                  <th
                    key={index}
                    {...column.getHeaderProps()}
                    className="px-6 py-3"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps} className="">
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <tr
                  key={index}
                  {...row.getRowProps()}
                  className="even:bg-gray-50 bg-white border-b text-center border-whiteTheme-pinkAccent "
                >
                  <td class="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-whiteTheme-secondaryColor border-whiteTheme-purpleAccent rounded focus:ring-whiteTheme-purpleAccent bg-red-500"
                      />
                    </div>
                  </td>
                  {row.cells.map((cell, index) => (
                    <td
                      key={index}
                      {...cell.getCellProps}
                      className="px-6 py-1"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="w-11/12 flex justify-between items-center">
        <div className="text-sm text-whiteTheme-subtitleColor">
          Showing 1 to 10 of 57 entries
        </div>
        <div className="flex gap-5 items-center">
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            <AiOutlineLeft />
          </button>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            <AiOutlineRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default BasicTable;
