import {ADD_JOB_ACTION, DELETE_JOB_ACTION, SET_JOB_ACTION} from "./constants"

export const addJob = payload => {
    return {
        type: ADD_JOB_ACTION,
        payload
    }
}

export const deleteJob = payload => {
    return {
        type: DELETE_JOB_ACTION,
        payload
    }
}
export const setJob = payload => {
    return {
        type: SET_JOB_ACTION,
        payload
    }
}