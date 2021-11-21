import React from "react";

function Form(props) {

  function handleSubmit(e) {
    e.preventDefault();
    if (props.val.length > 0) {
      let arr = props.items;
      arr.push(props.val);
      props.setItems(arr);
      props.setInputValue("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={props.val} onChange={(e) => { props.setInputValue(e.target.value) }} />
      <button type="submit">Add</button>
    </form>
  )
}

export default Form;