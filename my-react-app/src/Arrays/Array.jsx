import { useState } from "react";

function Array() {
  // use useState on array

  const [foods, setFoods] = useState(["Apple", "Corn", "Banana"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value; //to get the typed new food from the input
    document.getElementById("foodInput").value = ""; //empty string para ma reset pag click sa button

    setFoods((foods) => [...foods, newFood]); //array since array man bwahahaha get the old first using ...food, then set it to new newFood okay?? also apply updater function
  }
  //   _ underscore para indicate na ang gi pass na parameter kay i ignore dayon ang i kay index na pero same naman sila sa argument sa function mao gi i nalang
  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      {/* gibutngan ug id para sa function  */}
      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button onClick={handleAddFood}>Add Food</button>
      <button onClick={handleRemoveFood}>Remove</button>
    </div>
  );
}

export default Array;
