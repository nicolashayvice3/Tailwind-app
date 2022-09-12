import React from "react";
import "./buttons.css";

export default function Buttons({ className, text, variant, click }) {
  return (
    <>
      <button className={className} style={variant} onClick={click}>
        {text}
      </button>
    </>
  );
}