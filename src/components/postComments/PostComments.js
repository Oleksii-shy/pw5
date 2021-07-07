import {useEffect, useState} from "react";
import {getPostComments} from "../services/API";
import PostComment from "../postComment/PostComment";

export default function PostComments({match: {params: {id}}}) {
    let [postComments, setPostComments] = useState([]);
    useEffect(() => {
        getPostComments(id).then(value => {
            setPostComments([...value.data]);
        });
    }, [id]);
    return (
        <div>
            {postComments.map(value => <PostComment key={value.id} item={value}/>)}
        </div>
    );
}