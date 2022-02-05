import React from "react";

const Fruit = ({ type, onClick }) => {
  return <div className={`fruit ${type}`} onClick={onClick} />;
};

// oefening 3 (bonus)
// const Fruit = ({ fruit, onClick, index }) => {
//   const className = fruit.wasDeleted ? "fruit--invisible" : "";
//   return (
//     <div
//       className={`fruit ${fruit.type} ${className}`}
//       onClick={() => onClick(index)}
//     />
//   );
// };

export default Fruit;
