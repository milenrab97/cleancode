import React from "react";
import PropTypes from "prop-types";
import { columnDef } from "../../contracts/global";

export interface TableRowProps {
  currentRow: any;
  columnDefs: columnDef[];
}

class TableRow extends React.PureComponent<TableRowProps, {}> {
  static propTypes = {};

  render() {
    const { currentRow, columnDefs } = this.props;

    return (
      <tr>
        {columnDefs.map(
          (
            {
              field,
              customComponent: CustomComponent,
              customCallback = () => { }
            },
            ind: number
          ) => (
              <td key={ind}>
                {CustomComponent !== undefined ? (
                  <CustomComponent
                    row={currentRow}
                    value={currentRow[field]}
                    customCallback={customCallback}
                  />
                ) : (
                    currentRow[field]
                  )}
              </td>
            )
        )}
      </tr>
    );
  }
}

TableRow.propTypes = {
  currentRow: PropTypes.object.isRequired,
  columnDefs: PropTypes.arrayOf(
    PropTypes.shape({
      headerName: PropTypes.string,
      field: PropTypes.string.isRequired,
      customComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
      customCallback: PropTypes.func
    })
  )
};

export default TableRow;
