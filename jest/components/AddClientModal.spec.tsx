import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import {
    _AddClientModal as AddClientModal,
    AddClientModalProps
} from "../../src/components/Admin/client-management/AddClientModal";
import { Button } from "react-bootstrap";
import InputField from "../../src/components/shared/InputField";

Enzyme.configure({ adapter: new Adapter() });

const props: AddClientModalProps = {
    onHide: jest.fn(),
    show: true,
    addClient: jest.fn()
};

describe("<AddClientModal />", () => {
    describe("Save button", () => {
        test("should be disabled when fields are empty", () => {
            const wrapper = shallow(<AddClientModal { ...props } />);

            expect(
                wrapper
                    .find(Button)
                    .first()
                    .prop("disabled")
            ).toBe(true);
        });

        test("should be enabled when all fields contain valid data", () => {
            const wrapper = shallow(<AddClientModal { ...props } />);
            const inputFields = wrapper.find(InputField);

            inputFields.at(0).simulate("change", { target: { value: "Client" } });
            inputFields.at(1).simulate("change", { target: { value: "Client" } });
            inputFields.at(2).simulate("change", { target: { value: 500 } });

            expect(
                wrapper
                    .find(Button)
                    .first()
                    .prop("disabled")
            ).toBe(false);
        });

        test("should be disabled when funds data is invalid", () => {
            const wrapper = shallow(<AddClientModal { ...props } />);
            const inputFields = wrapper.find(InputField);

            inputFields.at(0).simulate("change", { target: { value: "Client" } });
            inputFields.at(1).simulate("change", { target: { value: "Client" } });
            inputFields.at(2).simulate("change", { target: { value: 50 } });

            expect(
                wrapper
                    .find(Button)
                    .first()
                    .prop("disabled")
            ).toBe(true);
        });
    });
});
