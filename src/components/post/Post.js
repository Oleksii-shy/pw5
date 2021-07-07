import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

export default function Post({item: {id, title, body}}) {
    return (
        <div>
            {id}. {title} - <Link to={'/posts/' + id + '/comments'}>Post comments</Link>
            <p><i>{body}</i></p>
        </div>
    );
}