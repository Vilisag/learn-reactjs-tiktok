import { useReducer, useRef } from "react"
import {addJob, setJob, deleteJob} from "./actions"
import reducer,  {initState} from "./reducer"
import logger from "./logger"

function Todo() {
  const [state, dispatch] = useReducer(logger(reducer), initState)
  const { job, jobs } = state
  const inputRef = useRef()

  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))
    inputRef.current.focus()
  }

  return (
    <div style={{padding: '0 20px'}}>
      <h3>TO DO</h3>
      <input 
        ref={inputRef}
        value={job}
        onChange={e => {
          dispatch(setJob(e.target.value))
        }}
        placeholder="Enter a to to...."
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
          {
            jobs.map((job, index) => (
                <li 
                  key={index}
                >
                  {job} 
                  <span onClick={() => dispatch(deleteJob(index))}> &times;</span>
                </li>
            ))
          }
      </ul>
    </div>
  );
}

export default Todo;
