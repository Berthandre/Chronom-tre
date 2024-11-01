

import React from "react";

const Button = ({ onClick, disabled, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "10px 20px",
        fontSize: "1em",
        margin: "5px",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
