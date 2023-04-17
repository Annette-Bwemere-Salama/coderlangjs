import React from "react";

export default function FormElement({ elementId, type, handleChange, label, value }) {
  return (
    <div>
      {label && <label htmlFor={elementId}>{label}</label>}
      <input
        id={elementId}
        type={type}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
