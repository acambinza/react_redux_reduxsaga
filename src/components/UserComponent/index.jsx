import React, {useEffect} from 'react';

// hooks do react-redux para manipular as action do redux
import { useSelector, useDispatch } from 'react-redux';
import {getUsers} from '../../redux/actions/users';

import Card from '../CardComponent';

const User = (props) => {

    const dispacth = useDispatch();
    const users = useSelector(state => state.users.users);
    const loading = useSelector(state => state.users.loading);
    const error = useSelector(state => state.users.error);

    useEffect(() => {
        dispacth(getUsers())
    }, [])

    return (
        <>
            {loading && <p>Loading...</p>}
            {users && users.length && users.map((user) => (
                <Card user={user} key={user.id} />
            ))}
            {users && users.length === 0 && !loading && <p>No users available!</p>}
            {error && !loading && <p>{error}</p>}
        </>
    )
}

export default User;