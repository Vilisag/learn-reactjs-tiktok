import { useRef } from "react"
import {useStore, actions} from "./store"

function App() {
    const [state, dispatch] = useStore()
    const {todos, todoInput} = state
    const refInput = useRef()

    const hanldeAdd = () => {
        dispatch(actions.addJob(todoInput))
        dispatch(actions.setJob(''))
        refInput.current.focus()
    }

    return (
        <div style={{padding: 20}}>
            <input
                ref={refInput}
                value={todoInput}
                placeholder="Enter todo"
                onChange={e => {
                    dispatch(actions.setJob(e.target.value))
                }}
                onKeyDown={e => {
                    if (e.code === "Enter") {
                        hanldeAdd()
                    }
                }}
            />
            <button onClick={hanldeAdd}>Add</button>
            {
                todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <span
                            onClick={e => dispatch(actions.delJob(index))}
                        >
                            &times;
                        </span>
                    </li>
                ))
            }
        </div>
    )
}

export default App