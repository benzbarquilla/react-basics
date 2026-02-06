import React, { useState, useRef, useEffect } from "react";
function Component() {
  // Demo first using useState, since useRef is very similar to it
  //   let [number, setNumber] = useState(0);

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  //   function handleClick() {
  //     setNumber((n) => n + 1);
  //   }

  function handleClick1() {
    // ref.current = ref.current++;
    // console.log(ref.current);
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }
  function handleClick2() {
    // ref.current = ref.current++;
    // console.log(ref.current);
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "yellow";
    inputRef3.current.style.backgroundColor = "";
  }
  function handleClick3() {
    // ref.current = ref.current++;
    // console.log(ref.current);
    inputRef3.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "yellow";
  }
  useEffect(() => {
    console.log("Component Rendered!!");
  });

  return (
    <div>
      <button onClick={handleClick1}>Click me 1!</button>
      <input type="text" ref={inputRef1} />
      <button onClick={handleClick2}>Click me 2!</button>
      <input type="text" ref={inputRef2} />
      <button onClick={handleClick3}>Click me 3!</button>
      <input type="text" ref={inputRef3} />
    </div>
  );
}

export default Component;
