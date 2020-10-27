import React from "react";
import { useField } from "formik";

const TextInput = (props) => {
  const [fields, meta] = useField(props.name);
  return (
    <label className="form-group has-float-label mb-4">
      <input className="form-control" {...fields} {...props} />
      {meta.error && meta.touched && (
        <span style={{ color: "red" }}>{meta.error}*</span>
      )}
      <span>{props.label}</span>
    </label>
  );
};

export default TextInput;
