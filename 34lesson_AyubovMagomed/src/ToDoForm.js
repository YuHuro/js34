import { useState } from "react"

function ToDoForm({addTask}){
    const [text, setText] = useState('')

    const hanlderChange = (e) =>{
        setText(e.target.value)
    }

    const handlerSubmit = (e) =>{
        e.preventDefault()
        addTask(text)
        setText('')
    }

    return (
        <form onClick={handlerSubmit}>
            <button>+</button>
            <input
                value={text}
                type="text"
                placeholder="Новая задача"
                onChange={hanlderChange}
            />
        </form>
    )
}

export default ToDoForm