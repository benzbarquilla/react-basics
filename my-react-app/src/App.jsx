import Button from "./Button/Button.jsx";
import ProfilePicture from "./ProfilePicture/ProfilePicture.jsx";
import MyComponent from "./MyComponent/MyComponent.jsx";
import Counter from "./Counter/Counter.jsx";
import Student from "./Student/Student.jsx";
import UserGreeting from "./UserGreeting/UserGreeting,.jsx";
import List from "./List/List.jsx";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];

  const vegetables = [
    { id: 6, name: "potatoes", calories: 105 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "brocolli", calories: 50 },
  ];

  return (
    <>
      {/* Diff Styling methods */}
      {/* <Button></Button> */}

      {/* React Click Events */}
      {/* <ProfilePicture></ProfilePicture> */}

      {/* React Hooks useState + Click Events */}
      {/* <MyComponent></MyComponent> */}

      <Counter></Counter>

      {/* Props */}
      {/* <Student name="Spongebob" age="30" isStudent={true}></Student>
      <Student name="Jerry" age={25} isStudent={false}></Student>
      <Student name="Jordan" age={80} isStudent={false}></Student>
      <Student name="Chikoy" age={17} isStudent={true}></Student>
      <Student name="bogart" /> */}

      {/*Condition Rendering + Props */}
      {/* <UserGreeting isLoggedIn={true}></UserGreeting> */}

      {/* RENDER LISTS USING PROPS and adding conditional rendering */}
      {/* {fruits.length > 0 && <List items={fruits} category="Fruits"></List>}
      {vegetables.length > 0 && (
        <List items={vegetables} category="Vegetables"></List>
      )} */}
    </>
  );
}
export default App;
