import {Link} from "react-router-dom";

const BookIndex = ()=>{
    return (
        <div>
            <ul>
                <li>
                    <Link to="/books">Book list</Link>
                </li>
            </ul>
        </div>
    )
}

export default  BookIndex