function Todo({todo, toggleTask, removeTask}){
    

    return (
        <div className="item-todo">
            <div className={todo.completed ? 'item-text strike' : 'item-text'}
                onClick={() => toggleTask(todo.id)}
            >
                {todo.task}
            </div>
            <div className="item-delete" onClick={() => removeTask(todo.id)}> 
                x
            </div>
        </div>
    )
}


export default Todo