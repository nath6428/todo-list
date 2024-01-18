import React,{ useState, useEffect }  from 'react'
import TodoItem from './TodoItem'
import TodoBar from './TodoBar'
import '../App.css'
import {v4 as uuidv4} from 'uuid'

const TodoContainer = () => {
    
    const [Todos, setTodos] = useState([])
    
    var editOn = Todos.some(item => item.editMode)
    
    const handleEnter = (e) => {
    
      if(e.key === "Enter"){
        Todos.map((item) => {item.editMode = false})
        setTodos([...Todos])
  
      }
    }
  
    useEffect(() => {
        
      if (editOn){
        document.addEventListener('keydown', handleEnter)
        return () => {
          
          document.removeEventListener('keydown', handleEnter)
        }
      }
    })



    const addTodo = (todo) => {
        
        setTodos([...Todos, {name: todo,
             id: uuidv4(),
             completed: false,
             editMode: false}])
    }
    
    const toggleComplete = (id) => {
      
      Todos.map(todo => todo.id === id ? todo.completed = !todo.completed : todo)
      setTodos([...Todos])
    }

    const handleDelete = (id) => {
      
      setTodos(Todos.filter(item => item.id !== id))
      
    }

    const handleEdit = (id) => {
      
      const noneInEditMode = !Todos.some(item => item.editMode)
      const passedInEditMode = Todos.find(item => id === item.id).editMode
      const otherInEditMode = Todos.filter(item => item.id !== id).some(item => item.editMode)
      
      if(noneInEditMode || passedInEditMode){
        Todos.map((item) => {id === item.id ? item.editMode = !item.editMode : item})
        console.log("1")
      }

      else if(otherInEditMode){
        Todos.map((item) => {item.id === id ? item.editMode = true : item.editMode = false})
        console.log("2")

      }
    
      setTodos([...Todos])
    }
  

  return (
    <div className = "todo-container">
          <p className='title-tag'>get things done 🤓</p>
        <TodoBar addTodo={addTodo} editOn = {editOn}/>
        <div className='items-container'>
          {Todos.toReversed().map((todo) => {
            return <TodoItem className="todo-item" todoObj = {todo} key = {todo.id} toggleComplete={toggleComplete} handleDelete = {handleDelete} handleEdit={handleEdit}/>})}

        </div>
        
        
    </div>
  )
}

export default TodoContainer