import {Link} from "react-router-dom";

function NoMatch() {
    return (
        <>
            <div>404</div>
            <Link to="/books">Book list</Link>
        </>
    )
}

export default NoMatch