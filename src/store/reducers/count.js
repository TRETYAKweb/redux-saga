
import { countTypes } from '../types/count'

const initialState = {
    count: 0,
}

export const countReducer = (state = initialState, actions) => {

    switch(actions.type) {

        case countTypes.INCREMENT: {
            return {
                ...state,
                count: state.count + 1
            }
        }

        case countTypes.DECREMENT: {
            return {
                ...state,
                count: state.count - 1
            }
        }

        default: {
            return state;
        }

    }

}