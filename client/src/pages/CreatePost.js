import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { AuthContext } from "../helpers/AuthContext";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";


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

const FormHeader = () => {
  return <h3>Add your new message</h3>;
};

const formikInitialValues = {
  title: "",
  // username: "",
  postText: "",
  acceptedTerms: true, // added for our checkbox
};

const formikValidationSchem = Yup.object({
  title: Yup.string()
    .max(30, "Must be 30 characters or less")
    .required("Required"),
  postText: Yup.string()
    .max(255, "Must be 255 characters or less")
    .required("Required"),
  acceptedTerms: Yup.boolean()
    .required("Required")
    .oneOf([true], "You must accept the terms and conditions."),
});

const FormFields = () => {
  return (
    <Form>
      <MyTextInput
        label="Title"
        name="title"
        type="text"
        placeholder="Your post title"
      />
      <MyTextInput
        label="Your text message (max 255 chars)"
        name="postText"
        type="textbox"
        placeholder="some comment"
      />
      <div className="btn">
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                type="submit"
              >
                Save Comment
              </Button>
            </div>
      <MyCheckbox name="acceptedTerms">
        I accept the terms and conditions and follow-up <br /> emails and
        communications
      </MyCheckbox>
    </Form>
  );
};

function CreatePost() {
  // const [newPost, setNewPost] = React.useState("");
  const navigate = useNavigate();
  const { authState } = useContext(AuthContext);

  return (
    <>
      <FormHeader />
      <Formik
        initialValues={formikInitialValues}
        validationSchema={formikValidationSchem}
        ///////////////       ///////////////
        // TODO
        // replaced with the onSubmit from below
        // the reason I cannot use this outside is because
        // I cannot pass navigate to the const formikOnSubmit

        // onSubmit={formikOnSumbit}

        ///////////////        ///////////////

        onSubmit={async (values, { setSubmitting, resetForm }) => {
          values.UserId = authState.id;
          await new Promise((r) => setTimeout(r, 500));
          axios.post("http://localhost:3213/posts", values).then((response) => {
            // console.log("Data inserted");
            setSubmitting(false);
            resetForm({ values: "" });
            navigate("/");
          });
        }}
      >
        <FormFields />
      </Formik>
    </>
  );
}

export default CreatePost;
