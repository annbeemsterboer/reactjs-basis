import React from "react";

const Fruit = ({ type }) => {
  // afhankelijk van de prop `type` return je een soort fruit
  // dit doe je door de className te interpoleren
  // check de css in `App.css` voor de classNames
  return <div className="fruit"></div>;
};

export default Fruit;
