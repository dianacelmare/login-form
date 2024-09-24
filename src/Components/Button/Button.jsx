import React from "react";
import "./Button.css";

const Button = ({ label, className, onClick, disabled }) => {
  return (
    <button disabled={disabled} onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default Button;
