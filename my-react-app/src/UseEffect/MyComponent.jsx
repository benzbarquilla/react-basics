import { use, useEffect, useState } from "react";

// USES OF useEffect
// 1. Event Listeners
// 2. DOM manipulation
// 3. Subscriptrions (real time data)
// 4. Fetching data from an API
// 5. cLEAN UP when a component unmounts

function MyComponent() {
  // const [count, setCount] = useState(0);
  // const [color, setColor] = useState("green");
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  // useEffect(() => {
  //   document.title = `Count: ${count} ${color}`; //do this every time the count changes
  // }, [count]); //gibutngan count para diro mag base every time mag change ang count do the code above

  // function addCount() {
  //   setCount((c) => c + 1);
  // }

  // function subtractCount() {
  //   setCount((c) => c - 1);
  // }

  // function changeColor() {
  //   setColor((c) => (c === "green" ? "red" : "green"));
  // }

  // window.addEventListener("resize", handleResize); //without useEffect but bad practice
  // console.log("EVENT LISTENER ADDED");

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENER ADDED");

    return () => {
      //use this if walay dependency meaning kung blank ang array sa ubos
      window.removeEventListener("resize", handleResize);
      console.log("Event Listener Removed");
    };
  }, []);

  useEffect(() => {
    document.title = `Size: ${width} x ${height}`;
  }, [width, height]);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <>
      {/* <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button> <br />
      <button onClick={changeColor}>Change Color</button> */}

      <p>Window width: {width}px</p>
      <p>Widnwo height: {height}px</p>
    </>
  );
}

export default MyComponent;
