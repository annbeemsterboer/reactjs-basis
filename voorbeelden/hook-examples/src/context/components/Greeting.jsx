import React, { useContext } from "react";
import { UserContext } from "../ContextApp";

const Greeting = ({ user }) => {
  return <h4>Hello {user}</h4>;
};

export default Greeting;
