import {useEffect, useState} from "react";
import {getUserPosts} from "../services/API";
import UserPost from "../userPost/UserPost";

export default function UserPosts({match: {params: {id}}}) {
    let [userPosts, setUserPosts] = useState([]);
    useEffect(() => {
        getUserPosts(id).then(value => {
            setUserPosts([...value.data]);
        })
    }, [id]);
    return (
        <div>
            {userPosts.map(value => <UserPost key={value.id} item={value}/>)}
        </div>
    );
}