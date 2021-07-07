import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsers} from "../services/API";
import User from "../user/User";

export default function Users() {
    const users = useSelector(({users}) => users);
    const dispatch = useDispatch();
    useEffect(() => {
        getUsers().then(value => dispatch({type: 'ADD_USERS', payload: value.data}))
    }, []);
    return (
        <div>
            {users.map(value => <User key={value.id} item={value}/>)}
        </div>
    );
}