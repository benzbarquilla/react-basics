import styles from "./Component.module.css";
import ComponentC from "./ComponentC";

function ComponentB() {
  return (
    <div className={styles.box}>
      <h1>Component B</h1>
      <ComponentC></ComponentC>
    </div>
  );
}

export default ComponentB;
