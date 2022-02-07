import axios from "axios"
import { GETACTORS, GETONEACTOR, TOGGLEFALSE, TOGGLETRUE } from "../Types/ActorsTypes"


export const getActors = () => async (dispatch) => {
    try {
        const res = await axios.get('/actors')
        dispatch({ type: GETACTORS, payload: res.data })
    } catch (error) {
        console.log(error)
    }
}

export const addActor = (newActor) => async (dispatch) => {
    try {
        await axios.post('/actors/addActor', newActor)
        dispatch(getActors)
    } catch (error) {
        console.log(error)
    }
}

export const deleteActor = (id) => async (dispatch) => {
    try {
        axios.delete(`/actors/${id}`)
        dispatch(getActors())
    } catch (error) {
        console.log(error)
    }
}

export const editActor = (id, data) => async (dispatch) => {
    try {
        await axios.put(`/actors/${id}`, data)
        dispatch(getActors())
    } catch (error) {
        console.log(error)
    }
}

export const toggleTrue = () => {
    return {
        type: TOGGLETRUE,
    }
}

export const toggleFalse = () => {
    return {
        type: TOGGLEFALSE,
    }
}

export const getOneActor = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/actors/${id}`)
        dispatch({ type: GETONEACTOR, payload: res.data })
    } catch (error) {

    }
}