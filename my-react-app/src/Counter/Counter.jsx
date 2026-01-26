import React, { useState } from "react";
import styles from "./Counter.module.css";

function Counter() {
  // Sample useState HOOKS AND Onchange. onchange is used on forms
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  // function to handle increment and decrement
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  // function to handle name change
  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleChangeQuantity(event) {
    setQuantity(event.target.value);
  }
  function handleCommentChange(event) {
    setComment(event.target.value);
  }
  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }
  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  return (
    // <div className={styles.container}>
    //   <p className={styles.countDisplay}>{count}</p>
    //   <button className={styles.counterBtn} onClick={decrement}>
    //     Decrement
    //   </button>
    //   <button className={styles.counterBtn} onClick={reset}>
    //     Reset
    //   </button>
    //   <button className={styles.counterBtn} onClick={increment}>
    //     Increment
    //   </button>
    // </div>

    <div>
      <input value={name} onChange={handleNameChange}></input>
      <p>Name: {name}</p>
      <input
        value={quantity}
        onChange={handleChangeQuantity}
        type="number"
      ></input>
      <p>Quantity: {quantity}</p>
      <textarea
        name=""
        id=""
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter delivery instructions"
      ></textarea>
      <p>Comment: {comment}</p>
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an Option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Gift Card</option>
      </select>
      <p>Payment: {payment}</p>
      <label htmlFor="">
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={handleShippingChange}
        />
        Pick up
      </label>{" "}
      <br></br>
      <label htmlFor="">
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
}

export default Counter;
