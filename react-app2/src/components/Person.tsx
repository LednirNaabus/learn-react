const person = {
  name: "Gregorio Y. Zara",
  age: 78,
  theme: {
    backgroundColor: "black",
    color: "yellow",
  },
};

export default function List() {
  return (
    <div style={person.theme}>
      <h1>{person.name}</h1>
      <p>Age: {person.age}</p>
      <img src="https://i.imgure.com/7vQD0fPs.jpg" alt={person.name} />
      <ul>
        <li>Item1</li>
        <li>Item2</li>
        <li>Item3</li>
      </ul>
    </div>
  );
}
