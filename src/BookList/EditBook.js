import React from "react";
import {Link} from "react-router-dom";

const AddBook = (prop) => {
    const param = prop.match.params.bookId
    return (
        <>
            <button>
                <Link to={`/books/${param}`}>back</Link>
            </button>
            <h1>Book</h1>
        </>
    );
}

export default AddBook;