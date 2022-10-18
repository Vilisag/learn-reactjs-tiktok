import { ADD_JOB_ACTION, DEL_JOB_ACTION, SET_JOB_ACTION } from "./constants";

const initState = {
    todos: [],
    todoInput: ''
}

function reducer(state, action) {
    switch (action.type) {
        case ADD_JOB_ACTION:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DEL_JOB_ACTION:
            const newJobs = state.todos.filter((todo, index) => index !== action.payload)

            return {
                ...state,
                todos: [...newJobs]
            }
        case SET_JOB_ACTION:
            return {
                ...state,
                todoInput: action.payload
            }
    
        default:
            throw new Error('Invalid action!')
    }
}

export { initState }
export default reducer