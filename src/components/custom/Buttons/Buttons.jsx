import React, { memo } from "react";
import "./Buttons.scss";
import Button from "../../button/Button";
import { useHogwartsActions } from "../../../redux/actions/useHogwartsActions";
import { useSelector } from "react-redux";

const Buttons = memo(() => {
  const selected_type_character = useSelector(
    (state) => state.hogwarts.selected_type_character
  );
  const { setSelectedTypeCharacter } = useHogwartsActions();

  const onClickB = (type) => {
    if (selected_type_character === type) {
      setSelectedTypeCharacter("");
      return;
    }
    setSelectedTypeCharacter(type);
  };


  return (
    <div className="buttons-section">
      <div className="buttons-container-section">
        <Button onClick={() => onClickB("students")} id='students'>ESTUDIANTES</Button>
        <Button onClick={() => onClickB("staff")} id='staff'> STAFF</Button>
        <Button onClick={() => onClickB("alive")} id='alive'> VIVOS</Button>
      </div>
    </div>
  );
});

export default Buttons;
