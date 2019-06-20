import React from "react";
import PropTypes from "prop-types";
import TableRow from "./TableRow";
import { TableProps } from './Table';

const TableBody = (props: TableProps) => {
  const { columnDefs, rowData, getRowKey } = props;

  return (
    <tbody>
      {rowData.map((currentRow: {}) => (
        <TableRow
          key={getRowKey(currentRow)}
          currentRow={currentRow}
          columnDefs={columnDefs}
        />
      ))}
    </tbody>
  );
};

TableBody.propTypes = {
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

export default TableBody;
