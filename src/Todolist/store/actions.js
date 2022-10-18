import { ADD_JOB_ACTION, DEL_JOB_ACTION, SET_JOB_ACTION } from "./constants"

export const addJob = payload => ({
    type: ADD_JOB_ACTION,
    payload
})

export const delJob = payload => ({
    type: DEL_JOB_ACTION,
    payload
})

export const setJob = payload => ({
    type: SET_JOB_ACTION,
    payload
})