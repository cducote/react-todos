import React from 'react'

const AddTodo = (props) => {
  return (
    <form>
      <input type='text' value={props.newTodo} onChange={props.handleChange}/>
      <button type='sumbit' onClick={props.addTodo}>Add Todo</button>
    </form>
  )
}

export default AddTodo