import { usersTypes } from "../types/users"

const initialState = {
    users: [],
}

export const usersReducer = (state = initialState, action) => {

    switch(action.type) {

        case usersTypes.SER_USERS: {
            return {
                ...state,
                users: action.payload
            }
        }

        default: {
            return state
        }

    }

} 