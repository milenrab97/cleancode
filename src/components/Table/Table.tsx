import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { columnDef } from "../../contracts/global";

export interface TableProps {
  columnDefs: columnDef[];
  rowData: any[];
  getRowKey(row: any): string;
}

const Table = (props: TableProps) => {
  const { columnDefs, rowData, getRowKey } = props;

  return (
    <table>
      <TableHeader columnDefs={columnDefs} />
      <TableBody rowData={rowData} columnDefs={columnDefs} getRowKey={getRowKey} />
    </table>
  );
};

Table.propTypes = {
  rowData: PropTypes.array.isRequired,
  columnDefs: PropTypes.arrayOf(
    PropTypes.shape({
      headerName: PropTypes.string,
      field: PropTypes.string.isRequired,
      customComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
      customCallback: PropTypes.func
    })
  ),
  getRowKey: PropTypes.func.isRequired
};

export default Table;
