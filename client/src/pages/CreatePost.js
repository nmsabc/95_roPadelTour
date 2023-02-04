import React from "react";
import ReactDOM from "react-dom";
import { useNavigate} from 'react-router-dom'
import { Formik, Form, useField, Field } from "formik";
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
    <h3>Add your new message</h3>
  )
}

const formikInitialValues = {
  title: "",
  username: "",
  postText: "",
  acceptedTerms: false, // added for our checkbox
}

const formikValidationSchem = Yup.object({
  title: Yup.string()
    .max(30, "Must be 30 characters or less")
    .required("Required"),
  postText: Yup.string()
    .max(255, "Must be 255 characters or less")
    .required("Required"),
  username: Yup.string()
    .required("Required"),
  acceptedTerms: Yup.boolean()
    .required("Required")
    .oneOf([true], "You must accept the terms and conditions."),
})

const FormFields = () => {
  return(
    <Form>
      <MyTextInput
        label="Title"
        name="title"
        type="text"
        placeholder="Your post title"
      />
      <MyTextInput
        label="Username"
        name="username"
        type="text"
        placeholder="some form of username"
      />
      <MyTextInput
        label="Your text message (max 255 chars)"
        name="postText"
        type="textbox"
        placeholder="some comment"
      />
      {/* <br /> */}
      {/* <label for="postText">Post text message</label>
      <Field 
        label="Post text message"
        name="postText"
        as="textarea" 
        className="form-textarea" 
        placeholder="some comment"
      /> */}
      <MyCheckbox name="acceptedTerms">
        I accept the terms and conditions
      </MyCheckbox>
      <button type="submit" className="btn btn-default">Add Post</button>
    </Form>
  )
}

const formikOnSumbit = async (values, { setSubmitting, resetForm }) => {
  // console.log(values);
  await new Promise(r => setTimeout(r, 500));
  axios.post("http://localhost:3213/posts", values).then((response) => {
    // console.log("Data inserted");
    setSubmitting(false);
    resetForm({values: ''});
  });
}

function CreatePost() {
  const [newPost, setNewPost] = React.useState('');
  const navigate = useNavigate();
  return (
    <>
      <FormHeader />
      <Formik
        initialValues={formikInitialValues}
        validationSchema={formikValidationSchem}
        
        ///////////////        ///////////////
        // replaced with the onSubmit from below
        // the reason I cannot use this outside is because 
        // I cannot pass navigate to the const formikOnSubmit 

        // onSubmit={formikOnSumbit} 

        ///////////////        ///////////////

        onSubmit={async (values, { setSubmitting, resetForm }) => {
          await new Promise(r => setTimeout(r, 500));
          axios.post("http://localhost:3213/posts", values).then((response) => {
            // console.log("Data inserted");
            setSubmitting(false);
            resetForm({values: ''});
            navigate("/");
          });
        }}
      >
        <FormFields />
      </Formik>
    </>
  );
};

export default CreatePost;