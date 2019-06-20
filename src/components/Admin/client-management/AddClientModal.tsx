import React from "react";
import PropTypes from "prop-types";
import { Button, Modal, Container } from "react-bootstrap";
import InputField from "../../shared/InputField";
import { connect } from "react-redux";
import { addClient } from "../../../actions/admin";
import { bindActionCreators } from "redux";

export interface AddClientModalState {
  firstName: string;
  lastName: string;
  funds: number;
}

export interface AddClientModalProps {
  onHide(): void;
  show: boolean;
  addClient(client: any): void;
}

export class _AddClientModal extends React.PureComponent<
  AddClientModalProps,
  AddClientModalState
  > {
  static propTypes = {};

  state: AddClientModalState = {
    firstName: "",
    lastName: "",
    funds: 0
  };

  handleInputChangeFactory = (inputName: keyof AddClientModalState) => (
    event: React.FormEvent<HTMLInputElement>
  ) =>
    this.setState(({
      [inputName]: (event.target as HTMLInputElement).value
    } as unknown) as Pick<AddClientModalState, keyof AddClientModalState>);

  handleSaveButtonClick = () => {
    const { firstName, lastName, funds } = this.state;
    const { onHide, addClient } = this.props;

    addClient({ firstName, lastName, funds });
    onHide();
  };

  validateNameInput = (name: string) => name.length >= 5 && name.length <= 100;

  validateFundsInput = () =>
    100 <= this.state.funds && this.state.funds <= 1000000;

  validateForm = () => {
    const { firstName, lastName } = this.state;

    return (
      this.validateNameInput(firstName) &&
      this.validateNameInput(lastName) &&
      this.validateFundsInput()
    );
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
            Add Client
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <InputField
              label="First Name"
              type="text"
              onChange={this.handleInputChangeFactory("firstName")}
            />
            <InputField
              label="Last Name"
              type="text"
              onChange={this.handleInputChangeFactory("lastName")}
            />
            <InputField
              label="Funds"
              type="number"
              onChange={this.handleInputChangeFactory("funds")}
            />
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={this.handleSaveButtonClick}
            disabled={!this.validateForm()}
          >
            Save
          </Button>
          <Button onClick={onHide} variant="secondary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

_AddClientModal.propTypes = {
  onHide: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  addClient: PropTypes.func
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ addClient }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(_AddClientModal);
