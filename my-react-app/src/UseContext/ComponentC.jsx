import styles from "./Component.module.css";
import ComponentD from "./ComponentD";

function ComponentC() {
  return (
    <div className={styles.box}>
      <h1>Component C</h1>
      <ComponentD></ComponentD>
    </div>
  );
}

export default ComponentC;
