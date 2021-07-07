import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsers} from "../services/API";
import User from "../user/User";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import UserPosts from "../userPosts/UserPosts";

export default function Users() {
    const users = useSelector(({users}) => users);
    const dispatch = useDispatch();
    useEffect(() => {
        getUsers().then(value => dispatch({type: 'ADD_USERS', payload: value.data}))
    }, []);
    return (
        <div>
            {users.map(value => <User key={value.id} item={value}/>)}
            <hr/>
            <Switch>
                <Route path={'/users/:id/posts'} component={UserPosts}/>
            </Switch>
            <hr/>
        </div>
    );
}