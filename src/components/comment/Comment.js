export default function Comment({item: {id, name, body}}) {
    return (
        <div>
            {id}. {name}
            <p><i>{body}</i></p>
        </div>
    );
}