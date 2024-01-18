import React, { useState, useEffect } from 'react'

const TodoBar = ({ addTodo, editOn }) => {
    
    const [Value, setValue] = useState("")
    
    const handleClick = (e) => {
      
      if (Value.length != 0 && e.key === "Enter"){
        addTodo(Value)
        setValue("")
      }
    }
    
    useEffect(() => {
      
      if (!editOn){
        document.addEventListener('keydown', handleClick)
        return () => {

          document.removeEventListener('keydown', handleClick)
        }
      }
    })
    

  return (
    <div className='todo-bar-container'>
            
            <input id = "taskbox"
            placeholder='task name'
            onChange={(e) => {setValue(e.target.value)}}
            className = "input-box"
            value={Value}>
            </input>             
            <button className='add-button' onClick={() => {handleClick({key: "Enter"})}}>add</button>
    </div>
  )
  }

export default TodoBar