import React from "react";

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <li className="collection-item" key={todo.id}>
                    <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </li>
            )
        })
    ) : (
        <p className="center">you have no task left</p>
    )

    return (
        <ul className="todos collection">
            {todoList}
        </ul>
    )
}

export default Todos;