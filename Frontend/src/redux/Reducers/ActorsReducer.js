import { GETACTORS, GETONEACTOR, TOGGLEFALSE, TOGGLETRUE } from "../Types/ActorsTypes";

const initialState = {
    actors: [],
    edit: false,
    actor: null

};
const ActorsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GETACTORS:
            return { ...state, actors: payload.Actors }
        case TOGGLETRUE:
            return { ...state, edit: true }
        case TOGGLEFALSE:
            return { ...state, edit: false }
        case GETONEACTOR:
            return { ...state, actor: payload.Actors }
        default:
            return state
    }
}


export default ActorsReducer