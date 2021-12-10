import React, { memo } from "react";
import "./Button.scss";
import { useSelector } from "react-redux";

const Button = memo(({ children, onClick, id, type = "button" }) => {
  const selected_type_character = useSelector(
    (state) => state.hogwarts.selected_type_character
  );
  let active = false;
  if (selected_type_character === id) active = true;
  return (
    <div className="button-container">
      <button
        type={type}
        className={`button ${active ? "active" : ""}`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
});

export default Button;
