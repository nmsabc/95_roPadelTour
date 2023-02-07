import React, { useEffect } from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";
import axios from "axios";

import "../styles/formik_styles.css";
import "../styles/formik_styles-custom.css";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className="checkbox">
        <input {...field} {...props} type="checkbox" />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

// Styled components ....
const StyledSelect = styled.select`
  color: var(--blue);
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;

const MySelect = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

const FormHeader = () => {
  return(
    <h3> Add a new player</h3>
  )
}

const formikInitialValues = {
  first_name: "",
  fam_name: "",
  username: "",
  email: "",
  phone: "",
  address_city: "",
  full_address: "",
  addressType: "", // added for our select
  points: "",
  acceptedTerms: true, // added for our checkbox
}

const formikValidationSchema = Yup.object({
  first_name: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  fam_name: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  username: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email addresss`")
    .required("Required"),
  phone: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  address_city: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  full_address: Yup.string()
    .max(50, "Must be 50 characters or less")
    .required("Required"),            
  addressType: Yup.string()
    // specify the set of valid values for job type
    // @see http://bit.ly/yup-mixed-oneOf
    .oneOf(
      ["home", "work", "cityclub", "other"],
      "Invalid Address Type"
    )
    .required("Required"),
  points: Yup.number()
  .max(99, "Must be at start not above 99 points"),
  acceptedTerms: Yup.boolean()
    .required("Required")
    .oneOf([true], "You must accept emails and the terms and conditions."),
})


const PlayerFromFields = () => {
  return(
    <Form>
          <MyTextInput
            label="First Name"
            name="first_name"
            type="text"
            placeholder="First name"
          />
          <MyTextInput
            label="Last Name"
            name="fam_name"
            type="text"
            placeholder="Last name"
          />
          <MyTextInput
            label="Username"
            name="username"
            type="text"
            placeholder="Username"
          />
          <MyTextInput
            label="Email"
            name="email"
            type="text"
            placeholder="email"
          />
          <MyTextInput
            label="Mobile phone"
            name="phone"
            type="text"
            placeholder="phone"
          />
          <MyTextInput
            label="City of residence"
            name="address_city"
            type="text"
            placeholder="Address in the residence city"
          />
          <MyTextInput
            label="Full adresss"
            name="full_address"
            type="text"
            placeholder="your full address"
          />
          <MySelect label="Address type" name="addressType">
            <option value="">Select the address type</option>
            <option value="home">Home</option>
            <option value="work">Work</option>
            <option value="cityclub">City club</option>
            <option value="other">Other</option>
          </MySelect>
          <MyTextInput
            label="Inital points"
            name="points"
            type="text"
            placeholder="10"
          />
          <MyCheckbox name="acceptedTerms">
          I accept the terms and conditions and follow-up <br /> emails and communications
          </MyCheckbox>

          <button type="submit">Add Player</button>
        </Form>
  )
}
const formikOnSumbit = async (values, { setSubmitting, resetForm }) => {
  // console.log(values);
  await new Promise(r => setTimeout(r, 500));
  axios.post("http://localhost:3213/players", values).then((response) => {
    // console.log("Data inserted");
  });
  setSubmitting(false);
  resetForm({values: ''});

}

function CreatePlayer() {
  return (
    <>
      <FormHeader />
      <Formik
        initialValues={formikInitialValues}
        validationSchema={formikValidationSchema}
        onSubmit={formikOnSumbit}
      >
        <PlayerFromFields />
      </Formik>
    </>
  );
};

export default CreatePlayer;