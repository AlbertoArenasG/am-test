import React, { memo } from "react";
import "./Cards.scss";
import HorizontalCard from "../../HorizontalCard/HorizontalCard";
import { useSelector } from "react-redux";

const Cards = memo(() => {
  const students = useSelector((state) => state.hogwarts.students);
  const characters = useSelector((state) => state.hogwarts.characters);
  const staff = useSelector((state) => state.hogwarts.staff);
  const alive = useSelector((state) => state.hogwarts.alive);

  const selected_type_character = useSelector(
    (state) => state.hogwarts.selected_type_character
  );

  let selectedList = characters;
  if (selected_type_character === "students") selectedList = students;
  if (selected_type_character === "staff") selectedList = staff;
  if (selected_type_character === "alive") selectedList = alive;

  const renderStudents = selectedList.map((res, key) => {
    return <HorizontalCard key={key} characterInfo={res} id={key + 1} />;
  });

  return <div className="cards-section">{renderStudents}</div>;
});

export default Cards;
