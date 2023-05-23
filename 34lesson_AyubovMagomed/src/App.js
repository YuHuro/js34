import { useState } from "react";
import Todo from "./ToDo";
import ToDoForm from "./ToDoForm";

function App() {
  const [todos, setTodos] = useState([])
 
 const addTask = (text) =>{
  if(text){
    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      task: text,
      completed: false
    }
    setTodos([...todos,newItem])
  }
 }

 const removeTask = (id) =>{
  setTodos([...todos.filter(todo => todo.id !== id)])
 }

 const handlerToggle = (id) =>{
  setTodos([
    ...todos.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : {...todo}
    )
  ])
 }
 
  return (
    <div className="App">
      <header>
        <h1 className="header-length">Количество задач: №{todos.length}</h1>
      </header>
      {todos.map(todo =>{
        return(
          <Todo
            todo={todo}
            toggleTask={handlerToggle} 
            removeTask={removeTask}
          />
        )
      })}
      <ToDoForm addTask={addTask}/>
    </div>
  );
}

export default App;
