import React from "react";

const RadioInput = ({ input, id, label, ...rest }) => (
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      id={id}
      {...input}
      {...rest}
    />
    <label className="form-check-label" htmlFor={id}>
      {label}
    </label>
  </div>
);

export default RadioInput;
