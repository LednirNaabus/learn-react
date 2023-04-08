// import Message from './Message';
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["test1", "test2", "test3"];
  // separate event handler
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Listahan"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
