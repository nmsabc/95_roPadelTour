import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, useField, Field } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";
import axios from "axios";

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

const CommentFormFields = () => {
  return (
    <div className="comments-form">
      <Form>
        <div className="commentLabel">
          <label for="comment">Place your comment below</label>
        </div>
        <Field
          name="commentBudy"
          as="textarea"
          className="form-textarea"
          placeholder="place your comment below ..."
        />
            <MyTextInput
              name="username"
              type="text"
              placeholder="your username ... "
            />
            <button type="submit">Go!</button>
      </Form>
    </div>
  );
};

const formikCommentInitialValues = {
  commentBudy: "",
  username: "",
  PostId: "",
};

const formikCommentValidationSchema = Yup.object({
  username: Yup.string().required("Please add your username"),
  commentBudy: Yup.string()
    .max(255, "Text is too long - max 255 chars please")
    .required("Please add a comment..."),
});

const formikCommentonSubmit = async (values, { setSubmitting, resetForm }) => {
  await new Promise((r) => setTimeout(r, 500));
  console.log(" we will insert this: ...", values)
  axios.post("http://localhost:3213/comments", values).then((response) => {
    console.log(values.commentBudy);
    setSubmitting(false);
    resetForm({ values: "" });

  });
};

function CreateComment(Post_no) {
  console.log(Post_no);
  const [newComment, setNewComment] = React.useState("");

  return (
    <div className="formik-form">
      <Formik
        // initialValues={formikCommentInitialValues}
        initialValues={{ commentBudy: "", username: "", PostId: Post_no }}
        validationSchema={formikCommentValidationSchema}
        onSubmit={formikCommentonSubmit}
      >
        <CommentFormFields />
      </Formik>
    </div>

  );
}

export default CreateComment;
