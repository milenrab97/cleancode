import React from "react";
import { Row, Col, Form } from "react-bootstrap";

export interface InputFieldProps {
  type: string;
  label?: string;
  onChange(event: any): void;
  value?: string | number;
  size?: "sm" | "lg";
}

const InputField = (props: InputFieldProps) => (
  <Row>
    {props.label && (
      <Col xs="4">
        <p>{props.label}</p>
      </Col>
    )}
    <Col xs="auto">
      <Form.Control
        size={props.size}
        type={props.type}
        onChange={props.onChange}
        value={props.value as string}
      />
    </Col>
  </Row>
);

InputField.defaultProps = {
  size: "sm"
};

export default InputField;
