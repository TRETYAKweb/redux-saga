import { usersTypes } from "../types/users";

export const usersActions = Object.freeze({
    setUsers: (users) => {
        return {
            type: usersTypes.SER_USERS,
            payload: users
        }
    },

    fetchUsers: () => {
        return {
            type: usersTypes.FETCH_USERS,
        }
    }
});