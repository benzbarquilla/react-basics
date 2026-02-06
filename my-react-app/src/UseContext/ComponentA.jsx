import { useState, createContext } from "react";
import styles from "./Component.module.css";
import ComponentB from "./ComponentB";

//  Provider Component
export const UserContext = createContext();

function ComponentA() {
  const [user, setUser] = useState("Benz");
  return (
    <div className={styles.box}>
      <h1>Component A</h1>
      <h2>{`Hello ${user}`}</h2>
      {/* Wrap the component with another, this makes the first component 
      the provider/parent. Then if any component needs the data here it becomes the consumer component/s*/}

      <UserContext.Provider value={user}>
        <ComponentB user={user}></ComponentB>
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;
