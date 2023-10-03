"use client";
import { useMemo } from "react";
import { useTable } from "react-table";
import MOCK_DATA from "../../constants/MOCK_DATA.json";
import { COLUMNS } from "./columns";
import Filter from "./Filter";

export const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const tableInstance = useTable({
    columns: columns,
    data: data,
  });

  const { getTableBodyProps, getTableProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className="w-11/12">
      {/* <Filter /> */}
      <table {...getTableProps()} className="min-w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-900 uppercase bg-[#EDF0FE]">
          {headerGroups.map((headerGroup, index) => (
            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <th key={index} {...column.getHeaderProps()} className="p-4">{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr key={row.id} {...row.getRowProps()} className="">
                {row.cells.map((cell, index) => (
                  <td key={index} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};
