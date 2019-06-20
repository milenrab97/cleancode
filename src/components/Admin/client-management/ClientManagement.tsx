import React from "react";
import AddClientModal from "./AddClientModal";
import Table from "../../Table/Table";
import { FaPlusCircle } from "react-icons/fa";
import RemoveClientButton from "./RemoveClientButton";
import { columnDef, Client } from "../../../contracts/global";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestClientsData } from "../../../actions/admin";
import { clientsSelector } from "../../../reducers/clients";
import PropTypes from "prop-types";

export interface ClientManagementState {
  modalShow: boolean;
  columnDefs: columnDef[];
}

export interface ClientManagementProps {
  clients: Client[];
  requestClientsData(): void;
}

class ClientManagement extends React.PureComponent<
  ClientManagementProps,
  ClientManagementState
> {
  static propTypes = {};

  constructor(props: ClientManagementProps) {
    super(props);

    this.state = {
      modalShow: false,
      columnDefs: [
        {
          headerName: "First Name",
          field: "firstName"
        },
        {
          headerName: "Last Name",
          field: "lastName"
        },
        {
          headerName: "Funds",
          field: "funds"
        },
        {
          headerName: "Remove",
          field: "id",
          customComponent: RemoveClientButton
        }
      ]
    };
  }

  componentDidMount() {
    this.props.requestClientsData();
  }

  addClientModalOnClose = () => {
    this.setState({ modalShow: false });
  };

  showAddClientModal = () => {
    this.setState({ modalShow: true });
  };

  getTableRowKey = (row: Client) => row.id;

  render() {
    const { columnDefs, modalShow } = this.state;
    const { clients } = this.props;

    return (
      <div className="spacer">
        <div className="aboveTable">
          <FaPlusCircle
            className="clickable"
            style={{ fontSize: "30px" }}
            onClick={this.showAddClientModal}
          />
          <AddClientModal
            show={modalShow}
            onHide={this.addClientModalOnClose}
          />
        </div>
        <Table
          columnDefs={columnDefs}
          rowData={clients}
          getRowKey={this.getTableRowKey}
        />
      </div>
    );
  }
}

ClientManagement.propTypes = {
  clients: PropTypes.array,
  requestClientsData: PropTypes.func
};

const mapStateToProps = (state: any) => ({ clients: clientsSelector(state) });

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ requestClientsData }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientManagement);
