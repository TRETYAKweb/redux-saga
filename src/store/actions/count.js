import { countTypes } from '../types/count';

export const countActions = Object.freeze({
    increment: () => {
        return {
            type: countTypes.INCREMENT
        }
    },    
    
    asyncIncrement: () => {
        return {
            type: countTypes.ASYNC_INCREMENT
        }
    },

    decrement: () => {
        return {
            type: countTypes.DECREMENT
        }
    },
    
    asyncDecrement: () => {
        return {
            type: countTypes.ASYNC_DECREMENT
        }
    }
})