import {Link} from "react-router-dom";

export default function User({item: {id, name}}) {
    return (
        <div>
            {id}. {name} - <Link to={'/users/' + id + '/posts'}>User posts</Link>
        </div>
    );
}