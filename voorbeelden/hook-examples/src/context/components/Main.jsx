import React, { useContext } from "react";
import Greeting from "./Greeting";
import { UserContext } from "../ContextApp";

const Main = () => {
  const userCtx = useContext(UserContext);

  return (
    <div>
      <Greeting user={userCtx} />
    </div>
  );
};

export default Main;
