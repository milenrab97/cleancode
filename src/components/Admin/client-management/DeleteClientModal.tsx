import React from "react";
import PropTypes from "prop-types";
import { Button, Modal, ButtonGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteClient } from "../../../actions/admin";
import { bindActionCreators } from "redux";

export interface DeleteClientModalProps {
  onHide(): void;
  show: boolean;
  clientId: string;
  deleteClient(payload: any): void;
}

class DeleteClientModal extends React.PureComponent<DeleteClientModalProps> {
  static propTypes = {};

  handleDeleteButtonClick = () => {
    const { onHide, clientId, deleteClient } = this.props;

    deleteClient({ clientId });
    onHide();
  };

  render() {
    const { onHide, show } = this.props;

    return (
      <Modal
        onHide={onHide}
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Deleting Client
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete the client?</p>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex flex-column">
            <ButtonGroup size="lg">
              <Button onClick={this.handleDeleteButtonClick}>Yes</Button>
              <Button onClick={onHide}>No</Button>
            </ButtonGroup>
          </div>
        </Modal.Footer>
      </Modal>
    );
  }
}

DeleteClientModal.propTypes = {
  onHide: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  clientId: PropTypes.string.isRequired,
  deleteClient: PropTypes.func
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ deleteClient }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(DeleteClientModal);
