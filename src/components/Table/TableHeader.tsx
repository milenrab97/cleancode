import React from "react";
import PropTypes from "prop-types";
import { columnDef } from "../../contracts/table";

export interface TableHeaderProps {
  columnDefs: columnDef[];
}

const TableHeader = (props: TableHeaderProps) => {
  const { columnDefs } = props;

  return (
    <thead>
      <tr>
        {columnDefs.map(({ headerName }, ind: number) => (
          <th key={ind}>{headerName}</th>
        ))}
      </tr>
    </thead>
  );
};

TableHeader.propTypes = {
  columnDefs: PropTypes.arrayOf(
    PropTypes.shape({
      headerName: PropTypes.string,
      field: PropTypes.string.isRequired,
      customComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
      customCallback: PropTypes.func
    })
  )
};

export default TableHeader;
