import React, { memo } from "react";
import './HorizontalCard.scss'
const HorizontalCard = memo(({ characterInfo }) => {
  return (
    <div className="card-container">
      <div className="left-side">Avatar</div>

      <div className="right-side">info</div>
    </div>
  );
});

export default HorizontalCard;
