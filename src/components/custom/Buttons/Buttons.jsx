import React, { memo } from "react";
import "./Buttons.scss";
import Button from "../../button/Button";
const Buttons = memo(() => {
  return (
    <div className="buttons-section">
      <div className="buttons-container-section">
        <Button>ESTUDIANTES</Button>
        <Button>STAFF</Button>
      </div>
    </div>
  );
});

export default Buttons;
