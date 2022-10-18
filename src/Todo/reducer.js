import {ADD_JOB_ACTION, DELETE_JOB_ACTION, SET_JOB_ACTION} from "./constants"

export const initState = {
    job: '',
    jobs: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_JOB_ACTION:
            return {
                ...state,
                jobs: [
                    ...state.jobs,
                    action.payload
                ]
            }
        case DELETE_JOB_ACTION:
            const newJobs = state.jobs
            newJobs.splice(action.payload, 1)
            return {
                ...state,
                jobs: [...newJobs]
            }
        case SET_JOB_ACTION:
            return {
                ...state,
                job: action.payload
            }

        default:
            throw new Error('Invalid Action....')
    }
}

export default reducer