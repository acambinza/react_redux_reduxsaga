import * as type from '../types';

export function getUsers(users) {
    console.log('final users')
    return {
        type: type.GET_USERS_REQUESTED,
        payload: users,
    }
}