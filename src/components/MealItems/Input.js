import "./Input.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="input">
      <label>Amount</label>
      <input type="number" ref={ref} />
    </div>
  );
});

// can use refs here
export default Input;

// so ref is not available in props se we wrap the component in forwardref
