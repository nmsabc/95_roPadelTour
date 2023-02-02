import React from 'react'
import {Formik, Form, useField, Field,} from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";

import "../styles/formik_styles.css";
import "../styles/formik_styles-custom.css";

function AddPlayer() {
  return <AddPlayerForm />;

}

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

const  AddPlayerForm = () =>{

  const formikInitialValues ={
    firstName: "",
    lastName: "",
    ursername: "",
    email: "",
    phone: "",
    adress_city: "",
    full_address: "",
    acceptedTerms: false, // added for our checkbox
    jobType: "" // added for our select
  }
  
  return(
    <>
    <h1> Add a new Player</h1>
    <Formik
        initialValues={formikInitialValues}
        validationSchema={Yup.object({
          first_name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          fam_name: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email addresss`")
            .required("Required"),
          acceptedEmails: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
          jobType: Yup.string()
            // specify the set of valid values for job type
            // @see http://bit.ly/yup-mixed-oneOf
            .oneOf(
              ["Home", "Work", "Other"],
              "Invalid Job Type"
            )
            .required("Required")
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise(r => setTimeout(r, 500));
          console.log(values);

          setSubmitting(false);
        }}
      >
        <Form>
          <MyTextInput
            label="First Name"
            name="first_name"
            type="text"
            placeholder="Jane"
          />
          <MyTextInput
            label="Last Name"
            name="fam_name"
            type="text"
            placeholder="Doe"
          />
          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />
          <MySelect label="Address Type" name="addType">
            <option value="">Select address type</option>
            <option value="designer">Home</option>
            <option value="development">Work</option>
            <option value="other">Other</option>
          </MySelect>
          <MyCheckbox name="acceptedTerms">
            I accept emails with RoPadelTour info
          </MyCheckbox>

          <button type="submit">Create Player</button>
        </Form>
      </Formik>
    </>
  )
}

export default AddPlayer;
