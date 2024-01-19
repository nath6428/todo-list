import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faEdit } from '@fortawesome/free-solid-svg-icons'


const TodoItem = ({ todoObj, toggleComplete, handleDelete, handleEdit }) => {
  
  

  
  
  const renderItem = () => {
   
      
      if(todoObj.editMode){
        return <input autoFocus onChange = {(e) => {todoObj.name = e.target.value}} className = "edit-todo-item" defaultValue={todoObj.name}></input>

      }
      else {
        
        return <div className = {todoObj.completed ? "todo-item-text completed" : "todo-item-text"} onClick={() => toggleComplete(todoObj.id)}>{todoObj.name}</div>

      }
    
  }

  return (
    <div className='item-container'>
      <div className='todo-item'>
        {renderItem()}
      </div>
      <div>
        <FontAwesomeIcon className='close-icon' icon={faXmark} onClick={() => {handleDelete(todoObj.id)}} />
      </div>
      <div>
        <FontAwesomeIcon className='edit-icon' icon={faEdit} onClick={() => {handleEdit(todoObj.id)}}/>
      </div>
     </div>

  )
}

export default TodoItem