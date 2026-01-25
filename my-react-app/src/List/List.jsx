import styles from "./List.module.css";

function List(props) {
  // Array if no name gi addan ug variable names paraa ma himong array ofobjects
  //   const fruits = [
  //     { id: 1, name: "apple", calories: 95 },
  //     { id: 2, name: "orange", calories: 45 },
  //     { id: 3, name: "banana", calories: 105 },
  //     { id: 4, name: "coconut", calories: 159 },
  //     { id: 5, name: "pineapple", calories: 37 },
  //   ];
  //   //   Sort by name alphabetical
  //     fruits.sort((a, b) => a.name.localeCompare(b.name));
  //   //   Sort reverse alphabetical
  //   fruits.sort((a, b) => b.name.localeCompare(a.name));
  //   //   sort calories numeric
  //     fruits.sort((a, b) => a.calories - b.calories);
  //   //   sort calories reverse numeric
  //   fruits.sort((a, b) => b.calories - a.calories);

  // Filter by low cal fruits
  //   const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);

  //   Filter by High cal frits
  //   const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);

  //   Render using props
  const itemList = props.items;
  const category = props.category;

  // Render List of objects
  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;
      <b> {item.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className={styles.heading}>{category}</h3>
      <ol className={styles.items}>{listItems}</ol>
    </>
  );
}
// Outdated
// List.defaultProps = {
//   category: "Category",
//   items: [],
// };

export default List;
