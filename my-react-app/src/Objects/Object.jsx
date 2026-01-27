import { useState } from "react";

function Object() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  }); //useState with javascript object

  function handleYearChange(event) {
    setCar((c) => ({ ...c, year: event.target.value })); //apply arrow function updater, previous state of the car use c for more simple paramenter
  }
  function handleMakeChange(event) {
    setCar((c) => ({ ...car, make: event.target.value })); //add () outisde para sa object para mugana sa arrow function
  }
  function handleModelChange(event) {
    setCar((c) => ({ ...car, model: event.target.value }));
  }

  return (
    <div>
      <p>
        Your Favorite care is: {car.year} {car.make} {car.model}{" "}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />{" "}
      <br />
      <input type="text" value={car.make} onChange={handleMakeChange} /> <br />
      <input type="text" value={car.model} onChange={handleModelChange} />{" "}
      <br />
    </div>
  );
}

export default Object;
