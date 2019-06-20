import React from "react";
import { Button } from "react-bootstrap";
import DeleteClientModal from "./DeleteClientModal";
import PropTypes from "prop-types";
import { Client } from "../../../contracts/global";

export interface RemoveClientButtonState {
  deleteModalShow: boolean;
}

export interface RemoveClientButtonProps {
  value: string;
  row: Client;
}

class RemoveClientButton extends React.PureComponent<
  RemoveClientButtonProps,
  RemoveClientButtonState
> {
  static propTypes = {};

  constructor(props: RemoveClientButtonProps) {
    super(props);
    this.state = {
      deleteModalShow: false
    };
  }

  deleteModalOnClose = () => {
    this.setState({ deleteModalShow: false });
  };

  showDeleteClientModal = () => {
    this.setState({
      deleteModalShow: true
    });
  };

  render() {
    const { deleteModalShow } = this.state;
    const {
      row: { id }
    } = this.props;

    return (
      <div>
        <DeleteClientModal
          clientId={id}
          onHide={this.deleteModalOnClose}
          show={deleteModalShow}
        />
        <Button size="sm" value="limit" onClick={this.showDeleteClientModal}>
          -
        </Button>
      </div>
    );
  }
}

RemoveClientButton.propTypes = {
  value: PropTypes.string.isRequired,
  row: PropTypes.shape({
    id: PropTypes.string.isRequired
  })
};

export default RemoveClientButton;
