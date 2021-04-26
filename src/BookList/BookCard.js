import React from "react";
import {Link, useParams, useRouteMatch} from "react-router-dom";

const BookCard = ({book}) => {
    // let {bookId} = useParams();
    let match = useRouteMatch();
    return (
        <>
            <Link to={`${match.url}/${book.id}`}>
                <p>{book.title}</p>
                <p>{book.author}</p>
            </Link>
        </>
    );
}

export default BookCard