import React, { memo } from "react";
import "./H1.scss";
const H1 = memo(({ children }) => {
  return <h1 className="H1">{children}</h1>;
});

export default H1;
