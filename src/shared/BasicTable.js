import React, { useCallback, useEffect, useState } from "react";
import { useMemo } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "../components/user/userColumn";
import { getAllUsers } from "../services/AdminService";

const BasicTable = ({ token }) => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = useCallback(async () => {
    const response = await getAllUsers({
      access: token,
    });
    setDataList(response?.data ?? []);
  }, []);

  const columns = useMemo(() => COLUMNS, []);
  const tableInstance = useTable({
    columns,
    data: dataList,
  });
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;
  return (
    <div>
      <table class="table table-bordered table-hover" {...getTableProps()}>
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
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BasicTable;
