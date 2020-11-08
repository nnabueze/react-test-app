import React from "react";
import { useMemo } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "../components/user/userColumn";

const BasicTable = ({ passedData }) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => passedData, []);
  const tableInstance = useTable({
    columns,
    data,
  });
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default BasicTable;
