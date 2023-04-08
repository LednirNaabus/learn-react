import { Fragment, useState } from "react"; //
import { MouseEvent } from "react";

function ListGroup() {
  let items = ["test1", "test2", "test3"];
  //   items = [];
  // no for loop in tsx, use map()
  //   items.map((item) => <li>{item}</li>);
  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No items found.</p> : null;
  //   };
  // handling click events
  //   const handleClick = (e: MouseEvent) => console.log(e); // type annotation daw in TS
  // Hook -> allows to tap into built-in features in React
  const [selectedIndex, setSelectedIndex] = useState(-1); // tell react that this component can have data or state that will change over time

  return (
    // or <> </>
    <Fragment>
      <h1>List</h1>
      {items.length === 0 && <p>No items found.</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
