import React, { useState } from "react";

function List(props) {
  const [edit, setEdit] = useState(false);
  function handleEdit() {
    setEdit(!edit);
  }

  function handleEditChange(e) {
    let arr = props.items;
    if (e.target.value === "") {

      arr.splice(props.index, 1);
      return;
    }
    arr[props.index] = e.target.value;
    props.setItems([...arr]);
  }

  function handleUpdate() {
    setEdit(!edit);
  }

  return (
    <li className="lists">
      {
        !edit ?
          <>
            <span>{props.item}</span>
            <div className="div-btns">
              <button onClick={handleEdit}>Edit Item</button>
              <button onClick={() => props.delete(props.index)}>Delete Item</button>
            </div>
          </>
          :
          <>
            <input defaultValue={props.item} onChange={handleEditChange} />
            <div className="div-btns">
              <button onClick={handleUpdate}>Update Item</button>
            </div>
          </>
      }

    </li>
  )
}

export default List;