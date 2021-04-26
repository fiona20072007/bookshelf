import React from "react";
import {Link, useParams, useRouteMatch} from "react-router-dom";

function BookCard() {
    let {bookId} = useParams();
    let match = useRouteMatch();
    return (
        <>
            <h3>{bookId}</h3>
            <Link to={`${match.url}/123`}>BookCard</Link>
        </>
    );
}

export default BookCard