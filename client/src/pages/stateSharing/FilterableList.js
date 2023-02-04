import { useState } from "react";
import { foods, filterItems } from "./FilterableListData.js";

function FilterableList() {
  const [query, setQuery] = useState("");
  const results = filterItems(foods, query);
  console.log(results)

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <div className="simple-panel">
      <SearchBar query={query} onChange={handleChange} />
      <hr />
      <List items={results} />
    </div>
  );
}
function SearchBar({query, onChange}) {
  // const [query, setQuery] = useState(''); // stage 1 - Remove state from the child components

  // function handleChange(e) {   // stage 1 - Remove state from the child components
  //   setQuery(e.target.value);
  // }

  return (
    <label>
      Search something: {"  "}
      <input value={query} onChange={onChange} />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map((food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FilterableList;
