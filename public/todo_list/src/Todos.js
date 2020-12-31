import React from 'react'

const todos = ({ todos, deleteTodo, addTodo, completeTodo, undoTodo }) => {
    let todoList = []
    let completeList = [] 
    
    todos.forEach( todo => {
        if (todo.complete){
            completeList.push(
                <div className="collection-item" key={ todo.id }>
                    <a href="#/" className="waves-effect waves-light btn-small my-list-btn grey" onClick={ () => undoTodo(todo.id) }>
                        <i className="material-icons">undo</i>
                    </a>
                    <a href="#/" className="waves-effect waves-light btn-small my-list-btn grey" onClick={ () => deleteTodo(todo.id) }>
                        <i className="material-icons">delete</i>
                    </a>
                    <span className="todo-conetnt">
                        <del>{ todo.content }</del>
                    </span>
                </div>
            )
        } else {
            todoList.push(
                <div className="collection-item" key={ todo.id }>
                    <a href="#/" className="waves-effect waves-light btn-small my-list-btn" onClick={ () => completeTodo(todo.id) }>
                        <i className="material-icons">check</i>
                    </a>
                    <span className="todo-conetnt">{ todo.content }</span>
                </div>
            )
        }
    })

    return(
        <div className="container">
            { 
                todoList.length > 0 ? (
                    <div className="collection todos">
                        { todoList }
                    </div>
                ) : (
                    <div className="collection todos">
                    <p className="center">You have no todo's left</p>
                    </div>
                    ) 
            }
            <div className="collection todos">
                { completeList }
            </div>
        </div>
    )
}

export default todos