import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPosts} from "../services/API";
import Post from "../post/Post";
import {Route, Switch} from "react-router-dom";
import PostComments from "../postComments/PostComments";

export default function Posts() {
    const posts = useSelector(({posts}) => posts);
    const dispatch = useDispatch();
    useEffect(() => {
        getPosts().then(value => dispatch({type: 'ADD_POSTS', payload: value.data}))
    }, []);
    return (
        <div>
            {posts.map(value => <Post key={value.id} item={value}/>)}
            <hr/>
            <Switch>
                <Route path={'/posts/:id/comments'} component={PostComments}/>
            </Switch>
            <hr/>
        </div>
    );
}