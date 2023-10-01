"use client"
import { useMemo } from "react";
import { useTable } from "react-table";
import MOCK_DATA from "../../constants/MOCK_DATA.json";
import { COLUMNS } from "./columns";

export const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const tableInstance = useTable({
    columns: columns,
    data: data,
  });

  const {getTableBodyProps, getTableProps, headerGroups, rows, prepareRow} = tableInstance

  return (
    <table {...getTableProps()}>
      <thead>
        {/* {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getFooterGroupProps()}>
                {headerGroup.headers.map( column => (
                    <th key={column.id} {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
            </tr>
        ))} */}
      </thead>
      <tbody {...getTableBodyProps()}>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};