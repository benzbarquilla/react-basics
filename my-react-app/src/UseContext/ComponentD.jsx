import styles from "./Component.module.css";
//import from the provider
import React, { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentD() {
  //use the value
  const user = useContext(UserContext);
  return (
    <div className={styles.box}>
      <h1>Component D</h1>
      <h2>{`Bye ${user}`}</h2>
    </div>
  );
}

export default ComponentD;
