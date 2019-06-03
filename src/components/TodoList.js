import React, { useContext} from 'react'
import TodosContext from '../context'


export default function TodoList() {
    const { state, dispatch } = useContext(TodosContext)
    
    const title = state.todos.length > 0 ? `${state.todos.length} Todos` : "Nothing To Do!"

    return (
        <div className="container mx-auto max-w-md text-center font-mono">
        <h1 className="text-bold">{title}</h1>
            <ul className="list-reset text-grey-dark p-0">
                {state.todos.map(todo => (
                    <li key={todo.id} className="flex item-center bg-blue-500 text-white my-2 py-4">
                        <span onDoubleClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo })} className={`flex-1 ml-12 cursor-pointer ${todo.complete && "line-through text-grey-darkest"}`}>{todo.text}</span>
                        <button onClick={() => dispatch({ type: "SET_CURRENT_TODO", payload: todo})}>
                            <img src="https://icon.now.sh/edit/00ff00" alt="edit icon" className="h-6 px-4" />
                        </button>
                        <button onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo })} >
                            <img src="https://icon.now.sh/delete/ff0000" alt="delete icon" className="h-6 px-4" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}