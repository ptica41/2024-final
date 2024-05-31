import { useState, useEffect } from "react"

const Main = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        getTodos()
    }, [])

    const getTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(response => response.json())
            .then(json => setTodos(json))
    }
    return (
        <>
            {todos.map(todo => <p key={todo.id}>{todo.id}</p>)}
        </>
    )
}
export default Main