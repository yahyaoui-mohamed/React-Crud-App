import React, { useState } from 'react';
import Form from './Form';
import List from "./List";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  function deleteItem(index) {
    items.splice(index, 1);
    setItems([...items]);
  }
  const listITems = items.map((item, index) =>
    <List item={item} key={index} index={index} delete={deleteItem} setInputValue={setInputValue} setItems={setItems} items={items} />
  );



  return (
    <div className="app">

      <h1>Crud App</h1>
      <Form val={inputValue} setInputValue={setInputValue} items={items} setItems={setItems} />
      <ul>
        {items.length === 0 ? <div>List items is empty.</div> : listITems}
      </ul>
    </div >
  );
}

export default App;